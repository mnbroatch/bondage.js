'use strict';

const Jison = require('jison');
const Nodes = require('./nodes');
const Lexer = require('../lexer/lexer');

const grammar = {
  operators: [
    ['left', 'Comma'],
    ['left', 'EqualToOrAssign', 'AddAssign', 'MinusAssign', 'MultiplyAssign', 'DivideAssign'],
    ['left', 'Not'],
    ['left', 'Or'],
    ['left', 'And'],
    ['left', 'Xor'],
    ['left', 'EqualTo', 'GreaterThan', 'GreaterThanOrEqualTo', 'LessThan', 'LessThanOrEqualTo', 'NotEqualTo'],
    ['left', 'Add', 'Minus'],
    ['left', 'Multiply', 'Exponent', 'Divide'],
    ['left', 'UMINUS'],
    ['left', 'LeftParen', 'RightParen'],
  ],

  start: ['node'],

  bnf: {
    node: [
      ['statements EndOfInput', 'JSON.stringify($1, null, \'  \'); return $1;'],
    ],

    statements: [
      ['statements conditionalStatement', '$$ = $1.concat([$2]);'],
      ['statements statement', '$$ = $1.concat([$2]);'],
      ['conditionalStatement', '$$ = [$1];'],
      ['statement', '$$ = [$1];'],
    ],

    conditionalStatement: [
      ['BeginCommand If expression EndCommand statements BeginCommand EndIf EndCommand', '$$ = new yy.IfNode($3, $5);'],
      ['BeginCommand If expression EndCommand statements additionalConditionalStatements', '$$ = new yy.IfElseNode($3, $5, $6);'],
      ['BeginCommand If functionResultExpression EndCommand statements BeginCommand EndIf EndCommand', '$$ = new yy.IfNode($3, $5);'],
      ['BeginCommand If functionResultExpression EndCommand statements additionalConditionalStatements', '$$ = new yy.IfElseNode($3, $5, $6);'],
    ],

    additionalConditionalStatements: [
      ['BeginCommand Else EndCommand statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseNode($4);'],
      ['BeginCommand ElseIf expression EndCommand statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseIfNode($3, $5);'],
      ['BeginCommand ElseIf expression EndCommand statements additionalConditionalStatements', '$$ = new yy.ElseIfNode($3, $5, $6);'],
      ['BeginCommand ElseIf functionResultExpression EndCommand statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseIfNode($3, $5);'],
      ['BeginCommand ElseIf functionResultExpression EndCommand statements additionalConditionalStatements', '$$ = new yy.ElseIfNode($3, $5, $6);'],
    ],

    statement: [
      ['shortcut', '$$ = $1;'],
      ['functionCall', '$$ = $1;'],
      ['assignment', '$$ = $1;'],
      ['Text', '$$ = new yy.TextNode($1, @$);'],
      ['Text hashtags', '$$ = new yy.TextNode($1, @$, $2);'],
      ['inlineExpression', '$$ = $1;'],
      ['statement Comment', '$$ = $1;'],
      ['EscapedCharacter', '$$ = new yy.TextNode($1.substring(1), @$)'],
    ],

    hashtags: [
      ['Hashtag', '$$ = [$1.substring(1)];'],
      ['hashtags Hashtag', '$$ = $1.concat([$2.substring(1)]);'],
      ['hashtags Comment', '$$ = $1;'],
    ],

    dialogue: [
      ['Text', '$$ = new yy.TextNode($1, @$);'],
      ['inlineExpression', '$$ = $1;'],
      ['dialogue dialogue', '$$ = [$1, $2];'],
    ],

    shortcut: [
      ['ShortcutOption dialogue Indent statements Dedent', '$$ = new yy.DialogShortcutNode($2, $4, @$);'],
      ['ShortcutOption dialogue BeginCommand If expression EndCommand Indent statements Dedent', '$$ = new yy.ConditionalDialogShortcutNode($2, $8, $5, @$);'],
      ['ShortcutOption dialogue BeginCommand If expression EndCommand', '$$ = new yy.ConditionalDialogShortcutNode($2, undefined, $5, @$);'],
      ['ShortcutOption dialogue', '$$ = new yy.DialogShortcutNode($2, undefined, @$);'],
      ['ShortcutOption dialogue Comment Indent statements Dedent', '$$ = new yy.DialogShortcutNode($2, $5, @$);'],
      ['ShortcutOption dialogue BeginCommand If expression EndCommand Comment', '$$ = new yy.ConditionalDialogShortcutNode($2, undefined, $5, @$);'],
      ['ShortcutOption dialogue BeginCommand If expression EndCommand Comment Indent statements Dedent', '$$ = new yy.ConditionalDialogShortcutNode($2, $9, $5, @$);'],
      ['ShortcutOption dialogue hashtags Indent statements Dedent', '$$ = new yy.DialogShortcutNode($2, $5, @$, $3);'],
      ['ShortcutOption dialogue BeginCommand If expression EndCommand hashtags Indent statements Dedent', '$$ = new yy.ConditionalDialogShortcutNode($2, $9, $5, @$, $7);'],
      ['ShortcutOption dialogue BeginCommand If expression EndCommand hashtags', '$$ = new yy.ConditionalDialogShortcutNode($2, undefined, $5, @$, $7);'],
    ],

    functionCall: [
      ['BeginCommand Identifier EndCommand', '$$ = new yy.FunctionResultNode($2, [], @$);'],
      ['BeginCommand Identifier openArguments EndCommand', '$$ = new yy.FunctionResultNode($2, $3, @$);'],
      ['BeginCommand Identifier EndCommand hashtags', '$$ = new yy.FunctionResultNode($2, [], @$, $4);'],
      ['BeginCommand Identifier openArguments EndCommand hashtags', '$$ = new yy.FunctionResultNode($2, $3, @$, $5);'],
    ],

    assignment: [
      ['BeginCommand Set Variable EqualToOrAssign expression EndCommand', '$$ = new yy.SetVariableEqualToNode($3.substring(1), $5);'],
      ['BeginCommand Set Variable EqualToOrAssign functionResultExpression EndCommand', '$$ = new yy.SetVariableEqualToNode($3.substring(1), $5);'],
      ['BeginCommand Set Variable AddAssign expression EndCommand', '$$ = new yy.SetVariableAddNode($3.substring(1), $5);'],
      ['BeginCommand Set Variable MinusAssign expression EndCommand', '$$ = new yy.SetVariableMinusNode($3.substring(1), $5);'],
      ['BeginCommand Set Variable MultiplyAssign expression EndCommand', '$$ = new yy.SetVariableMultipyNode($3.substring(1), $5);'],
      ['BeginCommand Set Variable DivideAssign expression EndCommand', '$$ = new yy.SetVariableDivideNode($3.substring(1), $5);'],
    ],

    expression: [
      ['expression ExplicitType', '$$ = $1;'],
      ['True', '$$ = new yy.BooleanLiteralNode($1);'],
      ['False', '$$ = new yy.BooleanLiteralNode($1);'],
      ['Number', '$$ = new yy.NumericLiteralNode($1);'],
      ['String', '$$ = new yy.StringLiteralNode($1);'],
      ['Null', '$$ = new yy.NullLiteralNode($1);'],
      ['Variable', '$$ = new yy.VariableNode($1.substring(1));'],

      ['UnaryMinus Number %prec UnaryMinus', '$$ = new yy.UnaryMinusExpressionNode($2);'],
      ['UnaryMinus Variable %prec UnaryMinus', '$$ = new yy.UnaryMinusExpressionNode($2.substring(1));'],

      ['Not expression', '$$ = new yy.NegatedBooleanExpressionNode($2);'],

      ['LeftParen expression RightParen', '$$ = new yy.ArithmeticExpressionNode($2);'],

      ['expression Add expression', '$$ = new yy.ArithmeticExpressionAddNode($1, $3);'],
      ['expression Minus expression', '$$ = new yy.ArithmeticExpressionMinusNode($1, $3);'],
      ['expression Exponent expression', '$$ = new yy.ArithmeticExpressionExponentNode($1, $3);'],
      ['expression Multiply expression', '$$ = new yy.ArithmeticExpressionMultiplyNode($1, $3);'],
      ['expression Divide expression', '$$ = new yy.ArithmeticExpressionDivideNode($1, $3);'],

      ['expression Or expression', '$$ = new yy.BooleanOrExpressionNode($1, $3);'],
      ['expression And expression', '$$ = new yy.BooleanAndExpressionNode($1, $3);'],
      ['expression Xor expression', '$$ = new yy.BooleanXorExpressionNode($1, $3);'],

      ['expression EqualTo expression', '$$ = new yy.EqualToExpressionNode($1, $3);'],
      ['expression NotEqualTo expression', '$$ = new yy.NotEqualToExpressionNode($1, $3);'],
      ['expression GreaterThan expression', '$$ = new yy.GreaterThanExpressionNode($1, $3);'],
      ['expression GreaterThanOrEqualTo expression', '$$ = new yy.GreaterThanOrEqualToExpressionNode($1, $3);'],
      ['expression LessThan expression', '$$ = new yy.LessThanExpressionNode($1, $3);'],
      ['expression LessThanOrEqualTo expression', '$$ = new yy.LessThanOrEqualToExpressionNode($1, $3);'],
      ['functionResultExpression', '$$ = $1'],
    ],

    functionResultExpression: [
      ['Identifier LeftParen RightParen', '$$ = new yy.FunctionResultNode($1, []);'],
      ['Identifier LeftParen parenExpressionArgs RightParen', '$$ = new yy.FunctionResultNode($1, $3);'],
    ],

    parenExpressionArgs: [
      ['parenExpressionArgs Comma expression', '$$ = $1.concat([$3]);'],
      ['expression', '$$ = [$1];'],
    ],

    openArguments: [
      ['openArguments argument', '$$ = $1.concat([$2]);'],
      ['argument', '$$ = [$1];'],
    ],

    argument: [
      ['inlineExpression', '$$ = $1'],
      ['Identifier', '$$ = new yy.TextNode($1);'],
      ['Number', '$$ = new yy.NumericLiteralNode($1);'],
      ['String', '$$ = new yy.StringLiteralNode($1);'],
      ['Variable', '$$ = new yy.VariableNode($1.substring(1));'],
      ['True', '$$ = new yy.BooleanLiteralNode($1);'],
      ['False', '$$ = new yy.BooleanLiteralNode($1);'],
      ['Null', '$$ = new yy.NullLiteralNode($1);'],
    ],

    inlineExpression: [
      ['BeginInlineExp expression EndInlineExp', '$$ = new yy.InlineExpressionNode($2, @$);'],
      ['BeginInlineExp expression EndInlineExp hashtags', '$$ = new yy.InlineExpressionNode($2, @$, $4);'],
    ],
  },
};

// TODO: bad, should fix shift/reduce conflicts instead.
// Is this really the only way to silence the warnings though?
Jison.print = () => {};

const parser = new Jison.Parser(grammar);
parser.lexer = new Lexer();
parser.yy = Nodes;

module.exports = parser;
