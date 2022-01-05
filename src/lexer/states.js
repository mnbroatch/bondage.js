'use strict';

const LexerState = require('./lexer-state');

/**
 * @return {Object}  all states in which the lexer can be with their associated transitions.
 */
function makeStates() {
  return {
    base: new LexerState()
      .addTransition('EscapedCharacter', null, true)
      .addTransition('Comment', null, true)
      .addTransition('Hashtag', null, true)
      .addTransition('BeginCommand', 'command', true)
      .addTransition('BeginInlineExp', 'inlineExpression', true)
      .addTransition('ShortcutOption', 'shortcutOption')
      .addTextRule('Text'),

    shortcutOption: new LexerState()
      .setTrackNextIndentation(true)
      .addTransition('EscapedCharacter', null, true)
      .addTransition('Comment', null, true)
      .addTransition('Hashtag', null, true)
      .addTransition('BeginCommand', 'expression', true)
      .addTransition('BeginInlineExp', 'inlineExpressionInShortcut', true)
      .addTextRule('Text', 'base'),

    command: new LexerState()
      .addTransition('If', 'expression')
      .addTransition('Else')
      .addTransition('ElseIf', 'expression')
      .addTransition('EndIf')
      .addTransition('Set', 'assignment')
      .addTransition('Jump', 'jump')
      .addTransition('Stop', 'stop')
      .addTransition('EndCommand', 'base', true)
      .addTransition('Identifier', 'commandArg', true)
      .addTextRule('Text'),

    commandArg: new LexerState()
      .addTransition('BeginInlineExp', 'inlineExpressionInCommand', true)
      .addTransition('EndCommand', 'base', true)
      .addTransition('LeftParen', 'commandParenArgOrExpression')
      .addTransition('Variable')
      .addTransition('Number')
      .addTransition('String')
      .addTransition('True')
      .addTransition('False')
      .addTransition('Identifier')
      .addTransition('Comma')
      .addTransition('RightParen'),

    commandParenArgOrExpression: new LexerState()
      .addTransition('EndCommand', 'base', true)
      .addTransition('LeftParen', 'expression')
      .addTransition('Variable', 'expression')
      .addTransition('Number', 'expression')
      .addTransition('String')
      .addTransition('True')
      .addTransition('False')
      .addTransition('Null')
      .addTransition('RightParen'),

    assignment: new LexerState()
      .addTransition('Variable')
      .addTransition('EqualToOrAssign', 'expression')
      .addTransition('AddAssign', 'expression')
      .addTransition('MinusAssign', 'expression')
      .addTransition('MultiplyAssign', 'expression')
      .addTransition('DivideAssign', 'expression'),

    jump: new LexerState()
      .addTransition('Identifier')
      .addTransition('BeginInlineExp', 'inlineExpressionInCommand', true)
      .addTransition('EndCommand', 'base', true),

    stop: new LexerState()
      .addTransition('EndCommand', 'base', true),

    expression: new LexerState()
      .addTransition('ExplicitType')
      .addTransition('EndCommand', 'base')
      .addTransition('Number')
      .addTransition('String')
      .addTransition('LeftParen')
      .addTransition('RightParen')
      .addTransition('EqualTo')
      .addTransition('EqualToOrAssign')
      .addTransition('NotEqualTo')
      .addTransition('GreaterThanOrEqualTo')
      .addTransition('GreaterThan')
      .addTransition('LessThanOrEqualTo')
      .addTransition('LessThan')
      .addTransition('Add')
      .addTransition('UnaryMinus')
      .addTransition('Minus')
      .addTransition('Exponent')
      .addTransition('Multiply')
      .addTransition('Divide')
      .addTransition('Modulo')
      .addTransition('And')
      .addTransition('Or')
      .addTransition('Xor')
      .addTransition('Not')
      .addTransition('Variable')
      .addTransition('Comma')
      .addTransition('True')
      .addTransition('False')
      .addTransition('Null')
      .addTransition('Identifier')
      .addTextRule(),

    inlineExpression: new LexerState()
      .addTransition('EndInlineExp', 'base')
      .addTransition('Number')
      .addTransition('String')
      .addTransition('LeftParen')
      .addTransition('RightParen')
      .addTransition('EqualTo')
      .addTransition('EqualToOrAssign')
      .addTransition('NotEqualTo')
      .addTransition('GreaterThanOrEqualTo')
      .addTransition('GreaterThan')
      .addTransition('LessThanOrEqualTo')
      .addTransition('LessThan')
      .addTransition('Add')
      .addTransition('UnaryMinus')
      .addTransition('Minus')
      .addTransition('Exponent')
      .addTransition('Multiply')
      .addTransition('Divide')
      .addTransition('Modulo')
      .addTransition('And')
      .addTransition('Or')
      .addTransition('Xor')
      .addTransition('Not')
      .addTransition('Variable')
      .addTransition('Comma')
      .addTransition('True')
      .addTransition('False')
      .addTransition('Null')
      .addTransition('Identifier')
      .addTextRule('Text', 'base'),

    // TODO: Copied from above
    // There has to be a non-stupid way to do this, right?
    // I'm just not familiar enough yet to know how to
    // transition from inline expression back to base OR command
    // states depending on how we got there
    inlineExpressionInCommand: new LexerState()
      .addTransition('EndInlineExp', 'commandArg')
      .addTransition('Number')
      .addTransition('String')
      .addTransition('LeftParen')
      .addTransition('RightParen')
      .addTransition('EqualTo')
      .addTransition('EqualToOrAssign')
      .addTransition('NotEqualTo')
      .addTransition('GreaterThanOrEqualTo')
      .addTransition('GreaterThan')
      .addTransition('LessThanOrEqualTo')
      .addTransition('LessThan')
      .addTransition('Add')
      .addTransition('UnaryMinus')
      .addTransition('Minus')
      .addTransition('Exponent')
      .addTransition('Multiply')
      .addTransition('Divide')
      .addTransition('Modulo')
      .addTransition('And')
      .addTransition('Or')
      .addTransition('Xor')
      .addTransition('Not')
      .addTransition('Variable')
      .addTransition('Comma')
      .addTransition('True')
      .addTransition('False')
      .addTransition('Null')
      .addTransition('Identifier')
      .addTextRule('Text', 'base'),

    inlineExpressionInShortcut: new LexerState()
      .addTransition('EndInlineExp', 'shortcutOption')
      .addTransition('Number')
      .addTransition('String')
      .addTransition('LeftParen')
      .addTransition('RightParen')
      .addTransition('EqualTo')
      .addTransition('EqualToOrAssign')
      .addTransition('NotEqualTo')
      .addTransition('GreaterThanOrEqualTo')
      .addTransition('GreaterThan')
      .addTransition('LessThanOrEqualTo')
      .addTransition('LessThan')
      .addTransition('Add')
      .addTransition('UnaryMinus')
      .addTransition('Minus')
      .addTransition('Exponent')
      .addTransition('Multiply')
      .addTransition('Divide')
      .addTransition('Modulo')
      .addTransition('And')
      .addTransition('Or')
      .addTransition('Xor')
      .addTransition('Not')
      .addTransition('Variable')
      .addTransition('Comma')
      .addTransition('True')
      .addTransition('False')
      .addTransition('Null')
      .addTransition('Identifier')
      .addTextRule('Text', 'base'),
  };
}

module.exports = {
  makeStates: makeStates,
};
