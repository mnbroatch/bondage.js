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
      ['statements EndOfInput', 'return $1.flat();'],
    ],

    statements: [
      ['conditionalBlock', '$$ = [$1];'],
      ['statements conditionalBlock', '$$ = $1.concat($2);'],
      ['statement', '$$ = [$1];'],
      ['statements statement', '$$ = $1.concat([$2]);'],
    ],

    statement: [
      ['text', '$$ = $1'],
      ['shortcut', '$$ = [$1];'],
      ['genericCommand', '$$ = [$1];'],
      ['assignmentCommand', '$$ = [$1];'],
      ['jumpCommand', '$$ = [$1];'],
      ['stopCommand', '$$ = [$1];'],
      ['statement Comment', '$$ = $1;'],
      ['statement hashtags', '$$ = $1.map(s => Object.assign(s, { hashtags: $2 }));'],
      ['statement EndOfLine', '$$ = $1;'],
    ],

    escapedTextRaw: [
      ['Text', '$$ = $1;'],
      ['EscapedCharacter', '$$ = $1.substring(1);'],
      ['escapedTextRaw EscapedCharacter', '$$ = $1.concat($2.substring(1));'],
      ['EscapedCharacter escapedTextRaw', '$$ = $1.substring(1).concat($2);'],
    ],
    escapedText: [
      ['escapedTextRaw', '$$ = new yy.TextNode($1, @$);'],
    ],

    text: [
      ['escapedText', '$$ = [$1]'],
      ['inlineExpression', '$$ = [$1];'],
      ['text text', '$$ = $1.concat($2); '],
    ],

    hashtags: [
      ['Hashtag', '$$ = [$1.substring(1)];'],
      ['Hashtag hashtags', '$$ = [$1.substring(1)].concat($2);'],
    ],

    conditional: [
      ['BeginCommand If expression EndCommand', '$$ = $3'],
    ],

    conditionalBlock: [
      ['conditional EndOfLine statements BeginCommand EndIf EndCommand', '$$ = new yy.IfNode($1, $3.flat());'],
      ['conditional EndOfLine statements additionalConditionalBlocks', '$$ = new yy.IfElseNode($1, $3.flat(), $4);'],
      ['conditionalBlock EndOfLine', '$$ = $1;'],
    ],

    else: [
      ['BeginCommand Else EndCommand', '$$ = undefined'],
      ['else EndOfLine', '$$ = undefined'],
    ],

    elseif: [
      ['BeginCommand ElseIf expression EndCommand', '$$ = $3;'],
      ['elseif EndOfLine', '$$ = $1;'],
    ],

    additionalConditionalBlocks: [
      ['else statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseNode($2.flat());'],
      ['elseif statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseIfNode($1, $2.flat());'],
      ['elseif statements additionalConditionalBlocks', '$$ = new yy.ElseIfNode($1, $2.flat(), $3);'],
    ],

    shortcutOption: [
      ['ShortcutOption text', '$$ = { text: $2 };'],
      ['ShortcutOption text conditional', '$$ = { text: $2, conditional: $3 };'],
      ['shortcutOption hashtags', '$$ = { ...$1, hashtags: $2 }'],
      ['shortcutOption Comment', '$$ = $1'],
      ['shortcutOption hashtags Comment', '$$ = { ...$1, hashtags: $2 }'],
      ['shortcutOption EndOfLine', '$$ = $1'],
    ],

    shortcut: [
      ['shortcutOption', '$$ = new yy.DialogShortcutNode($1.text, undefined, @$, $1.hashtags, $1.conditional);'],
      ['shortcutOption EndOfLine Indent statements Dedent', '$$ = new yy.DialogShortcutNode($1.text, $4.flat(), @$, $1.hashtags, $1.conditional);'],
    ],

    genericCommand: [
      ['BeginCommand Identifier EndCommand', '$$ = new yy.FunctionResultNode($2, [], @$);'],
      ['BeginCommand Identifier genericCommandArguments EndCommand', '$$ = new yy.FunctionResultNode($2, $3, @$);'],
    ],

    genericCommandArguments: [
      ['genericCommandArgument', '$$ = [$1];'],
      ['genericCommandArguments genericCommandArgument', '$$ = $1.concat([$2]);'],
    ],

    genericCommandArgument: [
      ['inlineExpression', '$$ = $1;'],
      ['literal', '$$ = $1;'],
      ['Identifier', '$$ = new yy.TextNode($1);'],
    ],

    jumpCommand: [
      ['BeginCommand Jump Identifier EndCommand', '$$ = new yy.JumpNode($3);'],
      ['BeginCommand Jump inlineExpression EndCommand', '$$ = new yy.JumpNode($3);'],
    ],

    stopCommand: [
      ['BeginCommand Stop EndCommand', '$$ = new yy.StopNode();'],
    ],

    assignmentCommand: [
      ['BeginCommand assignmentCommandInner EndCommand', '$$ = $2;'],
      ['BeginCommand assignmentCommandInner ExplicitType EndCommand', '$$ = $2;'],
    ],
    assignmentCommandInner: [
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

      ['UnaryMinus expression', '$$ = new yy.UnaryMinusExpressionNode($2);'],

      ['expression Add expression', '$$ = new yy.ArithmeticExpressionAddNode($1, $3);'],
      ['expression Minus expression', '$$ = new yy.ArithmeticExpressionMinusNode($1, $3);'],
      ['expression Exponent expression', '$$ = new yy.ArithmeticExpressionExponentNode($1, $3);'],
      ['expression Multiply expression', '$$ = new yy.ArithmeticExpressionMultiplyNode($1, $3);'],
      ['expression Divide expression', '$$ = new yy.ArithmeticExpressionDivideNode($1, $3);'],
      ['expression Modulo expression', '$$ = new yy.ArithmeticExpressionModuloNode($1, $3);'],

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

    functionArgument: [
      ['inlineExpression', '$$ = $1;'],
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
      ['BeginInlineExp expression EndInlineExp', '$$ = new yy.InlineExpressionNode($2, @$);'],
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
