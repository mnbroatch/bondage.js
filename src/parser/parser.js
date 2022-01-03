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
    ['left', 'UnaryMinus'],
    ['left', 'LeftParen', 'RightParen'],
  ],

  start: ['node'],

  bnf: {
    node: [
      ['statements EndOfInput', 'return $1;console.log($2)'],
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
    ],

    additionalConditionalStatements: [
      ['BeginCommand Else EndCommand statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseNode($4);'],
      ['BeginCommand ElseIf expression EndCommand statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseIfNode($3, $5);'],
      ['BeginCommand ElseIf expression EndCommand statements additionalConditionalStatements', '$$ = new yy.ElseIfNode($3, $5, $6);'],
    ],

    statement: [
      ['Text', '$$ = new yy.TextNode($1, @$);'],
      ['EscapedCharacter', '$$ = new yy.TextNode($1.substring(1), @$)'],
      ['shortcut', '$$ = $1;'],
      ['genericCommand', '$$ = $1;'],
      ['assignmentCommand', '$$ = $1;'],
      ['jumpCommand', '$$ = $1;'],
      ['stopCommand', '$$ = $1;'],
      ['inlineExpression', '$$ = new yy.InlineExpressionNode($1, @$);'],
      ['Text hashtags', '$$ = new yy.TextNode($1, @$, $2);'],
      ['inlineExpression hashtags', '$$ = new yy.InlineExpressionNode($1, @$, $2);'],
      ['statement Comment', '$$ = $1;'],
    ],

    hashtags: [
      ['Hashtag', '$$ = [$1.substring(1)];'],
      ['hashtags Hashtag', '$$ = $1.concat([$2.substring(1)]);'],
      ['hashtags Comment', '$$ = $1;'],
    ],

    shortcut: [
      ['ShortcutOption Text Indent statements Dedent', '$$ = new yy.DialogShortcutNode($2, $4, @$);'],
      ['ShortcutOption Text BeginCommand If expression EndCommand Indent statements Dedent', '$$ = new yy.ConditionalDialogShortcutNode($2, $8, $5, @$);'],
      ['ShortcutOption Text BeginCommand If expression EndCommand', '$$ = new yy.ConditionalDialogShortcutNode($2, undefined, $5, @$);'],
      ['ShortcutOption Text', '$$ = new yy.DialogShortcutNode($2, undefined, @$);'],
      ['ShortcutOption Text Comment Indent statements Dedent', '$$ = new yy.DialogShortcutNode($2, $5, @$);'],
      ['ShortcutOption Text BeginCommand If expression EndCommand Comment', '$$ = new yy.ConditionalDialogShortcutNode($2, undefined, $5, @$);'],
      ['ShortcutOption Text BeginCommand If expression EndCommand Comment Indent statements Dedent', '$$ = new yy.ConditionalDialogShortcutNode($2, $9, $5, @$);'],
      ['ShortcutOption Text hashtags Indent statements Dedent', '$$ = new yy.DialogShortcutNode($2, $5, @$, $3);'],
      ['ShortcutOption Text BeginCommand If expression EndCommand hashtags Indent statements Dedent', '$$ = new yy.ConditionalDialogShortcutNode($2, $9, $5, @$, $7);'],
      ['ShortcutOption Text BeginCommand If expression EndCommand hashtags', '$$ = new yy.ConditionalDialogShortcutNode($2, undefined, $5, @$, $7);'],
    ],

    genericCommand: [
      ['BeginCommand Identifier EndCommand', '$$ = new yy.FunctionResultNode($2, [], @$);'],
      ['BeginCommand Identifier commandArguments EndCommand', '$$ = new yy.FunctionResultNode($2, $3, @$);'],
      ['BeginCommand Identifier EndCommand hashtags', '$$ = new yy.FunctionResultNode($2, [], @$, $4);'],
      ['BeginCommand Identifier commandArguments EndCommand hashtags', '$$ = new yy.FunctionResultNode($2, $3, @$, $5);'],
    ],

    jumpCommand: [
      ['BeginCommand Jump Identifier EndCommand', '$$ = new yy.JumpNode($3);'],
      ['BeginCommand Jump inlineExpression EndCommand', '$$ = new yy.JumpNode($3);'],
    ],

    stopCommand: [
      ['BeginCommand Stop EndCommand', '$$ = new yy.StopNode();'],
    ],

    assignmentCommand: [
      ['BeginCommand assignment EndCommand', '$$ = $2;'],
      ['BeginCommand assignment ExplicitType EndCommand', '$$ = $2;'],
    ],

    assignment: [
      ['Set Variable EqualToOrAssign expression', '$$ = new yy.SetVariableEqualToNode($2.substring(1), $4);'],
      ['Set Variable AddAssign expression', '$$ = new yy.SetVariableAddNode($2.substring(1), $4);'],
      ['Set Variable MinusAssign expression', '$$ = new yy.SetVariableMinusNode($2.substring(1), $4);'],
      ['Set Variable MultiplyAssign expression', '$$ = new yy.SetVariableMultipyNode($2.substring(1), $4);'],
      ['Set Variable DivideAssign expression', '$$ = new yy.SetVariableDivideNode($2.substring(1), $4);'],
    ],

    expression: [
      ['functionArgument', '$$ = $1;'],
      ['functionCall', '$$ = $1'],
      ['LeftParen expression RightParen', '$$ = $2;'],

      ['UnaryMinus Number', '$$ = new yy.UnaryMinusExpressionNode($2);'],
      ['UnaryMinus Variable', '$$ = new yy.UnaryMinusExpressionNode($2.substring(1));'],

      ['expression Add expression', '$$ = new yy.ArithmeticExpressionAddNode($1, $3);'],
      ['expression Minus expression', '$$ = new yy.ArithmeticExpressionMinusNode($1, $3);'],
      ['expression Exponent expression', '$$ = new yy.ArithmeticExpressionExponentNode($1, $3);'],
      ['expression Multiply expression', '$$ = new yy.ArithmeticExpressionMultiplyNode($1, $3);'],
      ['expression Divide expression', '$$ = new yy.ArithmeticExpressionDivideNode($1, $3);'],

      ['Not expression', '$$ = new yy.NegatedBooleanExpressionNode($2);'],
      ['expression Or expression', '$$ = new yy.BooleanOrExpressionNode($1, $3);'],
      ['expression And expression', '$$ = new yy.BooleanAndExpressionNode($1, $3);'],
      ['expression Xor expression', '$$ = new yy.BooleanXorExpressionNode($1, $3);'],

      ['expression EqualTo expression', '$$ = new yy.EqualToExpressionNode($1, $3);'],
      ['expression NotEqualTo expression', '$$ = new yy.NotEqualToExpressionNode($1, $3);'],
      ['expression GreaterThan expression', '$$ = new yy.GreaterThanExpressionNode($1, $3);'],
      ['expression GreaterThanOrEqualTo expression', '$$ = new yy.GreaterThanOrEqualToExpressionNode($1, $3);'],
      ['expression LessThan expression', '$$ = new yy.LessThanExpressionNode($1, $3);'],
      ['expression LessThanOrEqualTo expression', '$$ = new yy.LessThanOrEqualToExpressionNode($1, $3);'],
    ],

    functionCall: [
      ['Identifier LeftParen RightParen', '$$ = new yy.FunctionResultNode($1, []);'],
      ['Identifier LeftParen parenExpressionArgs RightParen', '$$ = new yy.FunctionResultNode($1, $3);'],
    ],

    parenExpressionArgs: [
      ['parenExpressionArgs Comma expression', '$$ = $1.concat([$3]);'],
      ['expression', '$$ = [$1];'],
    ],

    commandArguments: [
      ['commandArguments commandArgument', '$$ = $1.concat([$2]);'],
      ['commandArgument', '$$ = [$1];'],
    ],

    commandArgument: [
      ['inlineExpression', '$$ = new yy.InlineExpressionNode($1, @$);'],
      ['literal', '$$ = $1;'],
      ['Identifier', '$$ = new yy.TextNode($1);'],
    ],

    functionArgument: [
      ['inlineExpression', '$$ = new yy.InlineExpressionNode($1, @$);'],
      ['literal', '$$ = $1;'],
      ['Variable', '$$ = new yy.VariableNode($1.substring(1));'],
    ],

    literal: [
      ['True', '$$ = new yy.BooleanLiteralNode($1);'],
      ['False', '$$ = new yy.BooleanLiteralNode($1);'],
      ['Number', '$$ = new yy.NumericLiteralNode($1);'],
      ['String', '$$ = new yy.StringLiteralNode($1);'],
      ['Null', '$$ = new yy.NullLiteralNode($1);'],
    ],

    inlineExpression: [
      ['BeginInlineExp expression EndInlineExp', '$$ = $2;'],
    ],
  },
};

// TODO: bad, should fix shift/reduce conflicts instead.
// Is this really the only way to silence the warnings though?
// Jison.print = () => {};

const parser = new Jison.Parser(grammar);
parser.lexer = new Lexer();
parser.yy = Nodes;

module.exports = parser;
