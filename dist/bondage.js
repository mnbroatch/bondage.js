(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jison')) :
  typeof define === 'function' && define.amd ? define(['jison'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.bondage = global.bondage || {}, global.bondage.js = factory(global.jison)));
})(this, (function (jison) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var jison__default = /*#__PURE__*/_interopDefaultLegacy(jison);

  class Text {}

  class Shortcut {}

  class Conditional {}

  class Assignment {}

  class Literal {}

  class Expression {}

  class FunctionCall {}

  var nodes = {
    types: {
      Text,
      Shortcut,
      Conditional,
      Assignment,
      Literal,
      Expression,
      FunctionCall
    },
    // /////////////// Dialog Nodes
    DialogShortcutNode: class extends Shortcut {
      constructor(text, content, lineNo, hashtags = [], conditionalExpression) {
        super();
        this.type = 'DialogShortcutNode';
        this.text = text;
        this.content = content;
        this.lineNum = lineNo.first_line;
        this.hashtags = hashtags;
        this.conditionalExpression = conditionalExpression;
      }

    },
    // /////////////// Conditional Nodes
    IfNode: class extends Conditional {
      constructor(expression, statement) {
        super();
        this.type = 'IfNode';
        this.expression = expression;
        this.statement = statement;
      }

    },
    IfElseNode: class extends Conditional {
      constructor(expression, statement, elseStatement) {
        super();
        this.type = 'IfElseNode';
        this.expression = expression;
        this.statement = statement;
        this.elseStatement = elseStatement;
      }

    },
    ElseNode: class extends Conditional {
      constructor(statement) {
        super();
        this.type = 'ElseNode';
        this.statement = statement;
      }

    },
    ElseIfNode: class extends Conditional {
      constructor(expression, statement, elseStatement) {
        super();
        this.type = 'ElseIfNode';
        this.expression = expression;
        this.statement = statement;
        this.elseStatement = elseStatement;
      }

    },
    // /////////////// Contents Nodes
    TextNode: class extends Text {
      constructor(text, lineNo, hashtags = []) {
        super();
        this.type = 'TextNode';
        this.text = text;
        this.lineNum = lineNo ? lineNo.first_line : -1;
        this.hashtags = hashtags;
      }

    },
    // /////////////// Literal Nodes
    NumericLiteralNode: class extends Literal {
      constructor(numericLiteral) {
        super();
        this.type = 'NumericLiteralNode';
        this.numericLiteral = numericLiteral;
      }

    },
    StringLiteralNode: class extends Literal {
      constructor(stringLiteral) {
        super();
        this.type = 'StringLiteralNode';
        this.stringLiteral = stringLiteral;
      }

    },
    BooleanLiteralNode: class extends Literal {
      constructor(booleanLiteral) {
        super();
        this.type = 'BooleanLiteralNode';
        this.booleanLiteral = booleanLiteral;
      }

    },
    VariableNode: class extends Literal {
      constructor(variableName) {
        super();
        this.type = 'VariableNode';
        this.variableName = variableName;
      }

    },
    // /////////////// Arithmetic Expression Nodes
    UnaryMinusExpressionNode: class extends Expression {
      constructor(expression) {
        super();
        this.type = 'UnaryMinusExpressionNode';
        this.expression = expression;
      }

    },
    ArithmeticExpressionAddNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionAddNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionMinusNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionMinusNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionMultiplyNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionMultiplyNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionExponentNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionExponentNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionDivideNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionDivideNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionModuloNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionModuloNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    // /////////////// Boolean Expression Nodes
    NegatedBooleanExpressionNode: class extends Expression {
      constructor(expression) {
        super();
        this.type = 'NegatedBooleanExpressionNode';
        this.expression = expression;
      }

    },
    BooleanOrExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'BooleanOrExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    BooleanAndExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'BooleanAndExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    BooleanXorExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'BooleanXorExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    EqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'EqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    NotEqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'NotEqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    GreaterThanExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'GreaterThanExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    GreaterThanOrEqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'GreaterThanOrEqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    LessThanExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'LessThanExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    LessThanOrEqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'LessThanOrEqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    // /////////////// Assignment Expression Nodes
    SetVariableEqualToNode: class extends Assignment {
      constructor(variableName, expression) {
        super();
        this.type = 'SetVariableEqualToNode';
        this.variableName = variableName;
        this.expression = expression;
      }

    },
    // /////////////// Function Nodes
    FunctionResultNode: class extends FunctionCall {
      constructor(functionName, args, lineNo, hashtags = []) {
        super();
        this.type = 'FunctionResultNode';
        this.functionName = functionName;
        this.args = args;
        this.lineNum = lineNo ? lineNo.first_line : -1;
        this.hashtags = hashtags;
      }

    },
    JumpNode: class extends FunctionCall {
      constructor(destination) {
        super();
        this.type = 'JumpNode';
        this.destination = destination;
      }

    },
    StopNode: class extends FunctionCall {
      constructor() {
        super();
        this.type = 'StopNode';
      }

    },
    // /////////////// Inline Expression
    InlineExpressionNode: class extends Expression {
      constructor(expression, lineNo, hashtags = []) {
        super();
        this.type = 'InlineExpressionNode';
        this.expression = expression;
        this.lineNum = lineNo.first_line;
        this.hashtags = hashtags;
      }

    }
  };
  nodes.types;
  nodes.DialogShortcutNode;
  nodes.IfNode;
  nodes.IfElseNode;
  nodes.ElseNode;
  nodes.ElseIfNode;
  nodes.TextNode;
  nodes.NumericLiteralNode;
  nodes.StringLiteralNode;
  nodes.BooleanLiteralNode;
  nodes.VariableNode;
  nodes.UnaryMinusExpressionNode;
  nodes.ArithmeticExpressionAddNode;
  nodes.ArithmeticExpressionMinusNode;
  nodes.ArithmeticExpressionMultiplyNode;
  nodes.ArithmeticExpressionExponentNode;
  nodes.ArithmeticExpressionDivideNode;
  nodes.ArithmeticExpressionModuloNode;
  nodes.NegatedBooleanExpressionNode;
  nodes.BooleanOrExpressionNode;
  nodes.BooleanAndExpressionNode;
  nodes.BooleanXorExpressionNode;
  nodes.EqualToExpressionNode;
  nodes.NotEqualToExpressionNode;
  nodes.GreaterThanExpressionNode;
  nodes.GreaterThanOrEqualToExpressionNode;
  nodes.LessThanExpressionNode;
  nodes.LessThanOrEqualToExpressionNode;
  nodes.SetVariableEqualToNode;
  nodes.FunctionResultNode;
  nodes.JumpNode;
  nodes.StopNode;
  nodes.InlineExpressionNode;

  /**
   * Token identifier -> regular expression to match the lexeme. That's a list of all the token
   * which can be emitted by the lexer. For now, we're slightly bending the style guide,
   * to make sure the debug output of the javascript lexer will (kinda) match the original C# one.
   */

  /* eslint-disable key-spacing */

  const Tokens = {
    // Special tokens
    Whitespace: null,
    // (not used currently)
    Indent: null,
    Dedent: null,
    EndOfLine: /\n/,
    EndOfInput: null,
    // Literals in ("<<commands>>")
    Number: /-?[0-9]+(\.[0-9+])?/,
    String: /"([^"\\]*(?:\\.[^"\\]*)*)"/,
    // Command syntax ("<<foo>>")
    BeginCommand: /<</,
    EndCommand: />>/,
    // Variables ("$foo")
    Variable: /\$([A-Za-z0-9_.])+/,
    // Shortcut syntax ("->")
    ShortcutOption: /->/,
    // Hashtag ("#something")
    Hashtag: /#([^(\s|#|//)]+)/,
    // seems a little hacky to explicitly consider comments here
    // Comment ("// some stuff")
    Comment: /\/\/.*/,
    // Option syntax ("[[Let's go here|Destination]]")
    OptionStart: /\[\[/,
    // [[
    OptionDelimit: /\|/,
    // |
    OptionEnd: /\]\]/,
    // ]]
    // Command types (specially recognized command word)
    If: /if(?!\w)/,
    ElseIf: /elseif(?!\w)/,
    Else: /else(?!\w)/,
    EndIf: /endif(?!\w)/,
    Jump: /jump(?!\w)/,
    Stop: /stop(?!\w)/,
    Set: /set(?!\w)/,
    Declare: /declare(?!\w)/,
    As: /as(?!\w)/,
    ExplicitType: /(String|Number|Bool)(?=>>)/,
    // Boolean values
    True: /true(?!\w)/,
    False: /false(?!\w)/,
    // The null value
    Null: /null(?!\w)/,
    // Parentheses
    LeftParen: /\(/,
    RightParen: /\)/,
    // Parameter delimiters
    Comma: /,/,
    // Operators
    UnaryMinus: /-(?!\s)/,
    EqualTo: /(==|is(?!\w)|eq(?!\w))/,
    // ==, eq, is
    GreaterThan: /(>|gt(?!\w))/,
    // >, gt
    GreaterThanOrEqualTo: /(>=|gte(?!\w))/,
    // >=, gte
    LessThan: /(<|lt(?!\w))/,
    // <, lt
    LessThanOrEqualTo: /(<=|lte(?!\w))/,
    // <=, lte
    NotEqualTo: /(!=|neq(?!\w))/,
    // !=, neq
    // Logical operators
    Or: /(\|\||or(?!\w))/,
    // ||, or
    And: /(&&|and(?!\w))/,
    // &&, and
    Xor: /(\^|xor(?!\w))/,
    // ^, xor
    Not: /(!|not(?!\w))/,
    // !, not
    // this guy's special because '=' can mean either 'equal to'
    // or 'becomes' depending on context
    EqualToOrAssign: /(=|to(?!\w))/,
    // =, to
    Add: /\+/,
    // +
    Minus: /-/,
    // -
    Exponent: /\*\*/,
    // **
    Multiply: /\*/,
    // *
    Divide: /\//,
    // /
    Modulo: /%/,
    // /
    AddAssign: /\+=/,
    // +=
    MinusAssign: /-=/,
    // -=
    MultiplyAssign: /\*=/,
    // *=
    DivideAssign: /\/=/,
    // /=
    Identifier: /[a-zA-Z0-9_:.]+/,
    // a single word (used for functions)
    EscapedCharacter: /\\./,
    // for escaping \# special characters
    Text: /[^\\]/,
    // generic until we hit other syntax
    // Braces are used for inline expressions. Ignore escaped braces
    // TODO: doesn't work ios
    BeginInlineExp: /{/,
    // {
    EndInlineExp: /}/ // }

  };
  /* eslint-enable key-spacing */

  var tokens = Tokens;

  /**
   * A LexState object represents one of the states in which the lexer can be.
   */


  class LexerState {
    constructor() {
      /** A list of transition for the given state. */
      this.transitions = [];
      /** A special, unique transition for matching spans of text in any state. */

      this.textRule = null;
      /**
       * Whether or not this state is context-bound by indentation
       * (will make the lexer emit Indent and Dedent tokens).
       */

      this.isTrackingNextIndentation = false;
      /**
       * Whether or not this state emits EndOfLine tokens
       */

      this.isEmittingEndOfLineTokens = false;
    }
    /**
     * addTransition - Define a new transition for this state.
     *
     * @param  {type} token - the token to match
     * @param  {string} [state] - the state to which transition; if not provided, will
     *                            remain in the same state.
     * @param  {boolean} [delimitsText] - `true` if the token is a text delimiter. A text delimiters
     *                                    is a token which should be considered as a token, even if it
     *                                    doesn't start the line.
     * @return {Object} - returns the LexState itself for chaining.
     */


    addTransition(token, state, delimitsText) {
      this.transitions.push({
        token: token,
        regex: tokens[token],
        state: state || null,
        delimitsText: delimitsText || false
      });
      return this; // Return this for chaining
    }
    /**
     * addTextRule - Match all the way up to any of the other transitions in this state.
     *               The text rule can only be added once.
     *
     * @param  {type} type  description
     * @param  {type} state description
     * @return {Object} - returns the LexState itself for chaining.
     */


    addTextRule(type, state) {
      if (this.textRule) {
        throw new Error('Cannot add more than one text rule to a state.');
      } // Go through the regex of the other transitions in this state, and create a regex that will
      // match all text, up to any of those transitions.


      const rules = [];
      this.transitions.forEach(transition => {
        if (transition.delimitsText) {
          // Surround the rule in parens
          rules.push(`(${transition.regex.source})`);
        }
      }); // Join the rules that we got above on a |, then put them all into a negative lookahead.

      const textPattern = `((?!${rules.join('|')}).)+`;
      this.addTransition(type, state); // Update the regex in the transition we just added to our new one.

      this.textRule = this.transitions[this.transitions.length - 1];
      this.textRule.regex = new RegExp(textPattern);
      return this;
    }
    /**
     * setTrackNextIndentation - tell this state whether to track indentation.
     *
     * @param  {boolean} track - `true` to track, `false` otherwise.
     * @return {Object} - returns the LexState itself for chaining.
     */


    setTrackNextIndentation(track) {
      this.isTrackingNextIndentation = track;
      return this;
    }

  }

  var lexerState = LexerState;

  /**
   * @return {Object}  all states in which the lexer can be with their associated transitions.
   */


  function makeStates() {
    return {
      base: new lexerState().addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'command', true).addTransition('BeginInlineExp', 'inlineExpression', true).addTransition('ShortcutOption', 'shortcutOption').addTextRule('Text'),
      shortcutOption: new lexerState().setTrackNextIndentation(true).addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'expression', true).addTransition('BeginInlineExp', 'inlineExpressionInShortcut', true).addTextRule('Text', 'base'),
      command: new lexerState().addTransition('If', 'expression').addTransition('Else').addTransition('ElseIf', 'expression').addTransition('EndIf').addTransition('Set', 'assignment').addTransition('Declare', 'declare').addTransition('Jump', 'jump').addTransition('Stop', 'stop').addTransition('EndCommand', 'base', true).addTransition('Identifier', 'commandArg', true).addTextRule('Text'),
      commandArg: new lexerState().addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'commandParenArgOrExpression').addTransition('Variable').addTransition('Number').addTransition('String').addTransition('True').addTransition('False').addTransition('Identifier').addTransition('Comma').addTransition('RightParen'),
      commandParenArgOrExpression: new lexerState().addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'expression').addTransition('Variable', 'expression').addTransition('Number', 'expression').addTransition('String').addTransition('True').addTransition('False').addTransition('Null').addTransition('RightParen'),
      assignment: new lexerState().addTransition('Variable').addTransition('EqualToOrAssign', 'expression'),
      declare: new lexerState().addTransition('Variable').addTransition('EndCommand', 'base').addTransition('EqualToOrAssign', 'expression'),
      jump: new lexerState().addTransition('Identifier').addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true),
      stop: new lexerState().addTransition('EndCommand', 'base', true),
      expression: new lexerState().addTransition('As').addTransition('ExplicitType').addTransition('EndCommand', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule(),
      inlineExpression: new lexerState().addTransition('EndInlineExp', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
      // TODO: Copied from above
      // There has to be a non-stupid way to do this, right?
      // I'm just not familiar enough yet to know how to
      // transition from inline expression back to base OR command
      // states depending on how we got there
      inlineExpressionInCommand: new lexerState().addTransition('EndInlineExp', 'commandArg').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
      inlineExpressionInShortcut: new lexerState().addTransition('EndInlineExp', 'shortcutOption').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base')
    };
  }

  var states = {
    makeStates: makeStates
  };

  // see https://github.com/thesecretlab/YarnSpinner/blob/master/YarnSpinner/Lexer.cs

   // As opposed to the original C# implemntation which, tokenize the entire input, before emiting
  // a list of tokens, this parser will emit a token each time `lex()` is called. This change
  // accomodates the Jison parser. Given the lexer is not entirely context-free
  // (Off-side rule, lookaheads), context needs to be remembered between each `lex()` calls.


  class Lexer {
    constructor() {
      /** All the possible states for the lexer. */
      this.states = states.makeStates();
      /** Current state identifier. */

      this.state = 'base';
      /** Original text to lex. */

      this.originalText = '';
      /** Text to lex, splitted into an array of lines. */

      this.lines = []; // Properties used to keep track of the context we're in, while tokenizing each line.

      /**
       * Indentation tracker. Each time we encounter an identation, we push a
       * new array which looks like: [indentationLevel, isBaseIndentation]. Basically,
       * isBaseIndentation will be true only for the first level.
       */

      this.indentation = [[0, false]];
      /**
       * Set to true when a state required indentation tracking. Will be set to false, after a
       * an indentation is found.
       */

      this.shouldTrackNextIndentation = false;
      /**
       * The previous level of identation, basically: this.indentation.last()[0].
       */

      this.previousLevelOfIndentation = 0; // Reset the locations.

      this.reset();
    }
    /**
     * reset - Reset the lexer location, text and line number. Nothing fancy.
     */


    reset() {
      // Locations, used by both the lexer and the Jison parser.
      this.yytext = '';
      this.yylloc = {
        first_column: 1,
        first_line: 1,
        last_column: 1,
        last_line: 1
      };
      this.yylineno = 1;
    }
    /**
     * lex - Lex the input and emit the next matched token.
     *
     * @return {string}  Emit the next token found.
     */


    lex() {
      if (this.isAtTheEndOfText()) {
        this.yytext = ''; // Now that we're at the end of the text, we'll emit as many
        // `Dedent` as necessary, to get back to 0-indentation.

        const indent = this.indentation.pop();

        if (indent && indent[1]) {
          return 'Dedent';
        }

        return 'EndOfInput';
      }

      if (this.isAtTheEndOfLine()) {
        // Get the next token on the current line
        this.advanceLine();
        return 'EndOfLine';
      }

      return this.lexNextTokenOnCurrentLine();
    }

    advanceLine() {
      this.yylineno += 1;
      const currentLine = this.getCurrentLine().replace(/\t/, '    ');
      this.lines[this.yylineno - 1] = currentLine;
      this.previousLevelOfIndentation = this.getLastRecordedIndentation()[0];
      this.yytext = '';
      this.yylloc = {
        first_column: 1,
        first_line: this.yylineno,
        last_column: 1,
        last_line: this.yylineno
      };
    }

    lexNextTokenOnCurrentLine() {
      const thisIndentation = this.getCurrentLineIndentation();

      if (this.shouldTrackNextIndentation && thisIndentation > this.previousLevelOfIndentation) {
        this.indentation.push([thisIndentation, true]);
        this.shouldTrackNextIndentation = false;
        this.yylloc.first_column = this.yylloc.last_column;
        this.yylloc.last_column += thisIndentation;
        this.yytext = '';
        return 'Indent';
      } else if (thisIndentation < this.getLastRecordedIndentation()[0]) {
        const indent = this.indentation.pop();

        if (indent[1]) {
          this.yytext = '';
          this.previousLevelOfIndentation = this.getLastRecordedIndentation()[0];
          return 'Dedent';
        }

        this.lexNextTokenOnCurrentLine();
      }

      if (thisIndentation === this.previousLevelOfIndentation && this.yylloc.last_column === 1) {
        this.yylloc.last_column += thisIndentation;
      }

      const rules = this.getState().transitions;

      for (let i = 0, len = rules.length; i < len; i += 1) {
        const rule = rules[i];
        const match = this.getCurrentLine().substring(this.yylloc.last_column - 1).match(rule.regex); // Only accept valid matches that are at the beginning of the text

        if (match !== null && match.index === 0) {
          // Take the matched text off the front of this.text
          const matchedText = match[0]; // Tell the parser what the text for this token is

          this.yytext = this.getCurrentLine().substr(this.yylloc.last_column - 1, matchedText.length);

          if (rule.token === 'String') {
            // If that's a String, we're removing the quotes and
            // un-escaping double-escaped characters.
            this.yytext = this.yytext.substring(1, this.yytext.length - 1).replace(/\\/g, '');
          } // Update our line and column info


          this.yylloc.first_column = this.yylloc.last_column;
          this.yylloc.last_column += matchedText.length; // If the rule points to a new state, change it now

          if (rule.state) {
            this.setState(rule.state);

            if (this.shouldTrackNextIndentation) {
              if (this.getLastRecordedIndentation()[0] < thisIndentation) {
                this.indentation.push([thisIndentation, false]);
              }
            }
          }

          const nextState = this.states[rule.state];
          const hasText = !nextState || nextState.transitions.find(transition => {
            return transition.token === 'Text';
          }); // inline expressions and escaped characters interrupt text
          // but should still preserve surrounding whitespace.

          if (rule.token !== 'EndInlineExp' && rule.token !== 'EscapedCharacter' || !hasText // we never want leading whitespace if not in text-supporting state
          ) {
            // Remove leading whitespace characters
            const spaceMatch = this.getCurrentLine().substring(this.yylloc.last_column - 1).match(/^\s*/);

            if (spaceMatch[0]) {
              this.yylloc.last_column += spaceMatch[0].length;
            }
          }

          return rule.token;
        }
      }

      throw new Error(`Invalid syntax in: ${this.getCurrentLine()}`);
    } // /////////////// Getters & Setters

    /**
     * setState - set the current state of the lexer.
     *
     * @param  {string} state name of the state
     */


    setState(state) {
      if (this.states[state] === undefined) {
        throw new Error(`Cannot set the unknown state [${state}]`);
      }

      this.state = state;

      if (this.getState().isTrackingNextIndentation) {
        this.shouldTrackNextIndentation = true;
      }
    }
    /**
     * setInput - Set the text on which perform lexical analysis.
     *
     * @param  {string} text the text to lex.
     */


    setInput(text) {
      // Delete carriage return while keeping a similar semantic.
      this.originalText = text.replace(/(\r\n)/g, '\n').replace(/\r/g, '\n').replace(/[\n\r]+$/, ''); // Transform the input into an array of lines.

      this.lines = this.originalText.split('\n');
      this.reset();
    }
    /**
     * getState - Returns the full current state object (LexerState),
     * rather than its identifier.
     *
     * @return {Object}  the state object.
     */


    getState() {
      return this.states[this.state];
    }

    getCurrentLine() {
      return this.lines[this.yylineno - 1];
    }

    getCurrentLineIndentation() {
      const match = this.getCurrentLine().match(/^(\s*)/g);
      return match[0].length;
    }

    getLastRecordedIndentation() {
      if (this.indentation.length === 0) {
        return [0, false];
      }

      return this.indentation[this.indentation.length - 1];
    } // /////////////// Booleans tests

    /**
     * @return {boolean}  `true` when yylloc indicates that the end was reached.
     */


    isAtTheEndOfText() {
      return this.isAtTheEndOfLine() && this.yylloc.first_line >= this.lines.length;
    }
    /**
     * @return {boolean}  `true` when yylloc indicates that the end of the line was reached.
     */


    isAtTheEndOfLine() {
      return this.yylloc.last_column > this.getCurrentLine().length;
    }

  }

  var lexer = Lexer;

  const grammar = {
    operators: [['left', 'Comma'], ['left', 'EqualToOrAssign', 'AddAssign', 'MinusAssign', 'MultiplyAssign', 'DivideAssign'], ['left', 'Not'], ['left', 'Or'], ['left', 'And'], ['left', 'Xor'], ['left', 'EqualTo', 'GreaterThan', 'GreaterThanOrEqualTo', 'LessThan', 'LessThanOrEqualTo', 'NotEqualTo'], ['left', 'Add', 'Minus'], ['left', 'Multiply', 'Exponent', 'Divide'], ['left', 'UnaryMinus'], ['left', 'LeftParen', 'RightParen']],
    start: ['node'],
    bnf: {
      node: [['statements EndOfInput', 'return $1.flat();']],
      statements: [['conditionalBlock', '$$ = [$1];'], ['statements conditionalBlock', '$$ = $1.concat($2);'], ['statement', '$$ = [$1];'], ['statements statement', '$$ = $1.concat([$2]);']],
      statement: [['text', '$$ = $1'], ['shortcut', '$$ = [$1];'], ['genericCommand', '$$ = [$1];'], ['assignmentCommand', '$$ = [$1];'], ['jumpCommand', '$$ = [$1];'], ['stopCommand', '$$ = [$1];'], ['statement Comment', '$$ = $1;'], ['statement hashtags', '$$ = $1.map(s => Object.assign(s, { hashtags: $2 }));'], ['statement EndOfLine', '$$ = $1;']],
      escapedTextRaw: [['Text', '$$ = $1;'], ['EscapedCharacter', '$$ = $1.substring(1);'], ['escapedTextRaw EscapedCharacter', '$$ = $1.concat($2.substring(1));'], ['EscapedCharacter escapedTextRaw', '$$ = $1.substring(1).concat($2);']],
      escapedText: [['escapedTextRaw', '$$ = new yy.TextNode($1, @$);']],
      text: [['escapedText', '$$ = [$1]'], ['inlineExpression', '$$ = [$1];'], ['text text', '$$ = $1.concat($2); ']],
      hashtags: [['Hashtag', '$$ = [$1.substring(1)];'], ['Hashtag hashtags', '$$ = [$1.substring(1)].concat($2);']],
      conditional: [['BeginCommand If expression EndCommand', '$$ = $3']],
      conditionalBlock: [['conditional EndOfLine statements BeginCommand EndIf EndCommand', '$$ = new yy.IfNode($1, $3.flat());'], ['conditional EndOfLine statements additionalConditionalBlocks', '$$ = new yy.IfElseNode($1, $3.flat(), $4);'], ['conditionalBlock EndOfLine', '$$ = $1;']],
      else: [['BeginCommand Else EndCommand', '$$ = undefined'], ['else EndOfLine', '$$ = undefined']],
      elseif: [['BeginCommand ElseIf expression EndCommand', '$$ = $3;'], ['elseif EndOfLine', '$$ = $1;']],
      additionalConditionalBlocks: [['else statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseNode($2.flat());'], ['elseif statements BeginCommand EndIf EndCommand', '$$ = new yy.ElseIfNode($1, $2.flat());'], ['elseif statements additionalConditionalBlocks', '$$ = new yy.ElseIfNode($1, $2.flat(), $3);']],
      shortcutOption: [['ShortcutOption text', '$$ = { text: $2 };'], ['ShortcutOption text conditional', '$$ = { text: $2, conditional: $3 };'], ['shortcutOption hashtags', '$$ = { ...$1, hashtags: $2 }'], ['shortcutOption Comment', '$$ = $1'], ['shortcutOption hashtags Comment', '$$ = { ...$1, hashtags: $2 }'], ['shortcutOption EndOfLine', '$$ = $1']],
      shortcut: [['shortcutOption', '$$ = new yy.DialogShortcutNode($1.text, undefined, @$, $1.hashtags, $1.conditional);'], ['shortcutOption EndOfLine Indent statements Dedent', '$$ = new yy.DialogShortcutNode($1.text, $4.flat(), @$, $1.hashtags, $1.conditional);']],
      genericCommand: [['BeginCommand Identifier EndCommand', '$$ = new yy.FunctionResultNode($2, [], @$);'], ['BeginCommand Identifier genericCommandArguments EndCommand', '$$ = new yy.FunctionResultNode($2, $3, @$);']],
      genericCommandArguments: [['genericCommandArgument', '$$ = [$1];'], ['genericCommandArguments genericCommandArgument', '$$ = $1.concat([$2]);']],
      genericCommandArgument: [['inlineExpression', '$$ = $1;'], ['literal', '$$ = $1;'], ['Identifier', '$$ = new yy.TextNode($1);']],
      jumpCommand: [['BeginCommand Jump Identifier EndCommand', '$$ = new yy.JumpNode($3);'], ['BeginCommand Jump inlineExpression EndCommand', '$$ = new yy.JumpNode($3);']],
      stopCommand: [['BeginCommand Stop EndCommand', '$$ = new yy.StopNode();']],
      assignmentCommand: [['BeginCommand setCommandInner EndCommand', '$$ = $2;'], ['BeginCommand declareCommandInner EndCommand', '$$ = null'] // do i need the assignment?
      ],
      setCommandInner: [['Set Variable EqualToOrAssign expression', '$$ = new yy.SetVariableEqualToNode($2.substring(1), $4);']],
      declareCommandInner: [['Declare Variable EqualToOrAssign expression', '$$ = null;yy.registerDeclaration($2.substring(1), $4)'], ['Declare Variable EqualToOrAssign expression As ExplicitType', '$$ = null;yy.registerDeclaration($2.substring(1), $4, $6)']],
      expression: [['functionArgument', '$$ = $1;'], ['functionCall', '$$ = $1'], ['LeftParen expression RightParen', '$$ = $2;'], ['UnaryMinus expression', '$$ = new yy.UnaryMinusExpressionNode($2);'], ['expression Add expression', '$$ = new yy.ArithmeticExpressionAddNode($1, $3);'], ['expression Minus expression', '$$ = new yy.ArithmeticExpressionMinusNode($1, $3);'], ['expression Exponent expression', '$$ = new yy.ArithmeticExpressionExponentNode($1, $3);'], ['expression Multiply expression', '$$ = new yy.ArithmeticExpressionMultiplyNode($1, $3);'], ['expression Divide expression', '$$ = new yy.ArithmeticExpressionDivideNode($1, $3);'], ['expression Modulo expression', '$$ = new yy.ArithmeticExpressionModuloNode($1, $3);'], ['Not expression', '$$ = new yy.NegatedBooleanExpressionNode($2);'], ['expression Or expression', '$$ = new yy.BooleanOrExpressionNode($1, $3);'], ['expression And expression', '$$ = new yy.BooleanAndExpressionNode($1, $3);'], ['expression Xor expression', '$$ = new yy.BooleanXorExpressionNode($1, $3);'], ['expression EqualTo expression', '$$ = new yy.EqualToExpressionNode($1, $3);'], ['expression NotEqualTo expression', '$$ = new yy.NotEqualToExpressionNode($1, $3);'], ['expression GreaterThan expression', '$$ = new yy.GreaterThanExpressionNode($1, $3);'], ['expression GreaterThanOrEqualTo expression', '$$ = new yy.GreaterThanOrEqualToExpressionNode($1, $3);'], ['expression LessThan expression', '$$ = new yy.LessThanExpressionNode($1, $3);'], ['expression LessThanOrEqualTo expression', '$$ = new yy.LessThanOrEqualToExpressionNode($1, $3);']],
      functionCall: [['Identifier LeftParen RightParen', '$$ = new yy.FunctionResultNode($1, []);'], ['Identifier LeftParen parenExpressionArgs RightParen', '$$ = new yy.FunctionResultNode($1, $3);']],
      parenExpressionArgs: [['parenExpressionArgs Comma expression', '$$ = $1.concat([$3]);'], ['expression', '$$ = [$1];']],
      functionArgument: [['inlineExpression', '$$ = $1;'], ['literal', '$$ = $1;'], ['Variable', '$$ = new yy.VariableNode($1.substring(1));']],
      literal: [['True', '$$ = new yy.BooleanLiteralNode($1);'], ['False', '$$ = new yy.BooleanLiteralNode($1);'], ['Number', '$$ = new yy.NumericLiteralNode($1);'], ['String', '$$ = new yy.StringLiteralNode($1);'], ['Null', '$$ = new yy.NullLiteralNode($1);']],
      inlineExpression: [['BeginInlineExp expression EndInlineExp', '$$ = new yy.InlineExpressionNode($2, @$);']]
    }
  }; // TODO: bad, should fix shift/reduce conflicts instead.
  // Is this really the only way to silence the warnings though?

  jison__default["default"].print = () => {};

  const parser = new jison__default["default"].Parser(grammar);
  parser.lexer = new lexer();
  parser.yy = nodes;
  parser.yy.declarations = {};

  parser.yy.registerDeclaration = function registerDeclaration(variableName, expression, explicitType) {
    if (!this.areDeclarationsHandled) {
      if (this.declarations[variableName]) {
        throw new Error(`Duplicate declaration found for variable: ${variableName}`);
      }

      this.declarations[variableName] = {
        variableName,
        expression,
        explicitType
      };
    }
  };

  var parser_1 = parser;

  class Result {}

  class TextResult extends Result {
    /**
     * Create a text display result
     * @param {string} [text] text to be displayed
     * @param {string[]} [hashtags] the hashtags for the line
     * @param {object} [metadata] the parent yarn node
     */
    constructor(text, hashtags, metadata) {
      super();
      this.text = text;
      this.hashtags = hashtags;
      this.metadata = metadata;
    }

  }

  class CommandResult extends Result {
    /**
     * Return a command string
     * @param {string} [name] the function name being called
     * @param {[]} [args] the array of arguments for the function
     * @param {string[]} [hashtags] the hashtags for the line
     * @param {object} [metadata] the parent yarn node
     */
    constructor(name, args, hashtags, metadata) {
      super();
      this.name = name;
      this.args = args;
      this.hashtags = hashtags;
      this.metadata = metadata;
    }

  }

  class OptionResult extends Result {
    /**
     * Strip down Conditional option for presentation
     * @param {string} [text] option text to display
     * @param {boolean} [isAvailable] whether option is available
     * @param {string[]} [hashtags] the hashtags for the line
     * @param {object} [metadata] the parent yarn node
     */
    constructor(text, isAvailable = true, hashtags = [], metadata) {
      super();
      this.text = text;
      this.isAvailable = isAvailable;
      this.hashtags = hashtags;
      this.metadata = metadata;
    }

  }

  class OptionsResult extends Result {
    /**
     * Create a selectable list of options from the given list of text
     * @param {OptionResult[]} [options] list of the text of options to be shown
     * @param {object} [metadata] the parent yarn node
     */
    constructor(options, metadata) {
      super();
      this.options = options.map(s => {
        return new OptionResult(s.text, s.isAvailable, s.hashtags);
      });
      this.metadata = metadata;
    }

    select(index = -1) {
      if (index < 0 || index >= this.options.length) {
        throw new Error(`Cannot select option #${index}, there are ${this.options.length} options`);
      }

      this.selected = index;
    }

  }

  var results = {
    Result,
    TextResult,
    CommandResult,
    OptionsResult
  };

  class DefaultVariableStorage {
    constructor() {
      this.data = {};
    }

    set(name, value) {
      this.data[name] = value;
    } // Called when a variable is being evaluated.


    get(name) {
      return this.data[name];
    }

  }

  var defaultVariableStorage = DefaultVariableStorage;

  /* eslint-disable */

  /*
  Yoinked from YarnEditor source and modified to limit size and scope:

  https://github.com/YarnSpinnerTool/YarnEditor/blob/master/src/js/classes/data.js

  Including as a dependency would be large and subject to breakage, so we adapt it instead.

  I guess this counts as a "substantial portion" (?), so:

  --------------


  Copyright (c) 2015 Infinite Ammo Inc. and Yarn Contributors

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

  /* eslint-enable */
  var convertYarn = function convertYarn(content) {
    const objects = [];
    const lines = content.split(/\r?\n+/).filter(line => {
      return !line.match(/^\s*$/);
    });
    let obj = null;
    let readingBody = false;
    let filetags;
    let i = 0;

    while (lines[i][0] === '#' || !lines[i].trim()) {
      if (!filetags) filetags = [];
      filetags.push(lines[i].substr(1).trim());
      i += 1;
    }

    for (; i < lines.length; i += 1) {
      if (lines[i].trim() === '===') {
        readingBody = false;
        if (filetags) obj.filetags = filetags;
        objects.push(obj);
        obj = null;
      } else if (readingBody) {
        obj.body += `${lines[i]}\n`;
      } else if (lines[i].trim() === '---') {
        readingBody = true;
        obj.body = '';
      } else if (lines[i].indexOf(':') > -1) {
        const [key, value] = lines[i].split(':');
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();

        if (trimmedKey !== 'body') {
          if (obj == null) obj = {};

          if (obj[trimmedKey]) {
            throw new Error(`Duplicate tag on node: ${trimmedKey}`);
          }

          obj[trimmedKey] = trimmedValue;
        }
      }
    }

    return objects;
  };

  const nodeTypes = nodes.types;



  class Runner {
    constructor() {
      this.yarnNodes = {};
      this.variables = new defaultVariableStorage();
      this.functions = {};
      this.visited = {}; // Which nodes have been visited

      this.registerFunction('visited', nodeTitle => {
        return !!this.visited[nodeTitle];
      });
    }
    /**
     * Loads the yarn node data into this.nodes
     * @param {any[]} yarn dialogue as string or array
     */


    load(data) {
      let nodes = data;

      if (typeof data === 'string') {
        nodes = convertYarn(data);
      }

      nodes.forEach(node => {
        if (!node.title) {
          throw new Error(`Node needs a title: ${JSON.stringify(node)}`);
        } else if (node.title.split('.').length > 1) {
          throw new Error(`Node title cannot contain a dot: ${node.title}`);
        }

        if (!node.body) {
          throw new Error(`Node needs a body: ${JSON.stringify(node)}`);
        }

        if (this.yarnNodes[node.title]) {
          throw new Error(`Duplicate node title: ${node.title}`);
        }

        this.yarnNodes[node.title] = node;
      });
      parser_1.yy.areDeclarationsHandled = false;
      parser_1.yy.declarations = {};
      this.handleDeclarations(nodes);
      parser_1.yy.areDeclarationsHandled = true;
    }
    /**
     * Set a new variable storage object
     * This must simply contain a 'get(name)' and 'set(name, value)' function
     *
     * Calling this function will clear any existing variable's values
     */


    setVariableStorage(storage) {
      if (typeof storage.set !== 'function' || typeof storage.get !== 'function') {
        throw new Error('Variable Storage object must contain both a "set" and "get" function');
      }

      this.variables = storage;
    }
    /**
     * Scans for <<declare>> commands and sets initial variable values
     * @param {any[]} yarn dialogue as string or array
     */


    handleDeclarations(nodes) {
      const exampleValues = {
        Number: 0,
        String: '',
        Boolean: false
      };
      const allLines = nodes.reduce((acc, node) => {
        const nodeLines = node.body.split(/\r?\n+/);
        return [...acc, ...nodeLines];
      }, []);
      const declareLines = allLines.reduce((acc, line) => {
        const match = line.match(/^<<declare .+>>/);
        return match ? [...acc, line] : acc;
      }, []);

      if (declareLines.length) {
        parser_1.parse(declareLines.join('\n'));
      }

      Object.entries(parser_1.yy.declarations).forEach(([variableName, {
        expression,
        explicitType
      }]) => {
        const value = this.evaluateExpressionOrLiteral(expression);

        if (explicitType && typeof value !== typeof exampleValues[explicitType]) {
          throw new Error(`Cannot declare value ${value} as type ${explicitType} for variable ${variableName}`);
        }

        if (!this.variables.get(variableName)) {
          this.variables.set(variableName, value);
        }
      });
    }

    registerFunction(name, func) {
      if (typeof func !== 'function') {
        throw new Error('Registered function must be...well...a function');
      }

      this.functions[name] = func;
    }
    /**
     * Generator to return each sequential dialog result starting from the given node
     * @param {string} [startNode] - The name of the yarn node to begin at
     */


    *run(startNode) {
      const yarnNode = this.yarnNodes[startNode];

      if (yarnNode === undefined) {
        throw new Error(`Node "${startNode}" does not exist`);
      }

      this.visited[startNode] = true; // Parse the entire node

      const parserNodes = Array.from(parser_1.parse(yarnNode.body));
      const metadata = { ...yarnNode
      };
      delete metadata.body;
      return yield* this.evalNodes(parserNodes, metadata, true);
    }
    /**
     * Evaluate a list of parser nodes, yielding the ones that need to be seen by
     * the user. Calls itself recursively if that is required by nested nodes
     * @param {Node[]} nodes
     * @param {YarnNode[]} metadata
     * @param {boolean} isRoot - did we get here from run()
     */


    *evalNodes(nodes, metadata, isRoot) {
      let shortcutNodes = [];
      let prevnode = null;
      let textRun = '';
      const filteredNodes = nodes.filter(Boolean); // Yield the individual user-visible results
      // Need to accumulate all adjacent selectables
      // into one list (hence some of the weirdness here)

      for (let nodeIdx = 0; nodeIdx < filteredNodes.length; nodeIdx += 1) {
        const node = filteredNodes[nodeIdx];
        const nextNode = filteredNodes[nodeIdx + 1];

        if (prevnode instanceof nodeTypes.Shortcut && !(node instanceof nodeTypes.Shortcut)) {
          // Last shortcut in the series, so yield the shortcuts.
          const result = yield* this.handleShortcuts(shortcutNodes, metadata);

          if (result && result.stop) {
            return result;
          }

          shortcutNodes = [];
        } // Text and the output of Inline Expressions
        // are combined to deliver a TextNode.


        if (node instanceof nodeTypes.Text || node instanceof nodeTypes.Expression) {
          textRun += this.evaluateExpressionOrLiteral(node).toString();

          if (nextNode && node.lineNum === nextNode.lineNum && (nextNode instanceof nodeTypes.Text || nextNode instanceof nodeTypes.Expression)) ; else {
            yield new results.TextResult(textRun, node.hashtags, metadata);
            textRun = '';
          } // Other nodes are more straightforward:

        } else if (node instanceof nodeTypes.Shortcut) {
          shortcutNodes.push(node);
        } else if (node instanceof nodeTypes.Assignment) {
          this.evaluateAssignment(node);
        } else if (node instanceof nodeTypes.Conditional) {
          // Get the results of the conditional
          const evalResult = this.evaluateConditional(node);

          if (evalResult) {
            // Run the remaining results
            const result = yield* this.evalNodes(evalResult, metadata);

            if (result && result.stop) {
              return result;
            }
          }
        } else {
          // FunctionCall
          if (node.type === 'JumpNode') {
            yield* this.run(node.destination); // ignore the rest of this outer loop and
            // tell parent loops to ignore following nodes

            return isRoot ? undefined : {
              stop: true
            };
          }

          if (node.type === 'StopNode') {
            // ignore the rest of this outer loop and
            // tell parent loops to ignore following nodes
            return isRoot ? undefined : {
              stop: true
            };
          }

          const funcArgs = node.args.map(this.evaluateExpressionOrLiteral, this);
          yield new results.CommandResult(node.functionName, funcArgs, node.hashtags, metadata);
        }

        prevnode = node;
      } // The last node might be a shortcut


      if (shortcutNodes.length > 0) {
        return yield* this.handleShortcuts(shortcutNodes, metadata);
      }

      return undefined;
    }
    /**
     * yield a shortcut result then handle the subsequent selection
     * @param {any[]} selections
     */


    *handleShortcuts(selections, metadata) {
      // Multiple options to choose from (or just a single shortcut)
      // Tag any conditional dialog options that result to false,
      // the consuming app does the actual filtering or whatever
      const transformedSelections = selections.map(s => {
        let isAvailable = true;
        let text = '';

        if (s.conditionalExpression && !this.evaluateExpressionOrLiteral(s.conditionalExpression)) {
          isAvailable = false;
        }

        text = s.text.reduce((acc, node) => {
          return acc + this.evaluateExpressionOrLiteral(node).toString();
        }, '');
        return Object.assign(s, {
          isAvailable,
          text
        });
      });
      const optionsResult = new results.OptionsResult(transformedSelections, metadata);
      yield optionsResult;

      if (typeof optionsResult.selected === 'number') {
        const selectedOption = transformedSelections[optionsResult.selected];

        if (selectedOption.content) {
          // Recursively go through the nodes nested within
          return yield* this.evalNodes(selectedOption.content, metadata);
        }
      } else {
        throw new Error('No option selected before resuming dialogue');
      }

      return undefined;
    }
    /**
     * Evaluates the given assignment node
     */


    evaluateAssignment(node) {
      const result = this.evaluateExpressionOrLiteral(node.expression);
      const oldValue = this.variables.get(node.variableName);

      if (oldValue && typeof oldValue !== typeof result) {
        throw new Error(`Variable ${node.variableName} is already type ${typeof oldValue}; cannot set equal to ${result} of type ${typeof result}`);
      }

      this.variables.set(node.variableName, result);
    }
    /**
     * Evaluates the given conditional node
     * Returns the statements to be run as a result of it (if any)
     */


    evaluateConditional(node) {
      if (node.type === 'IfNode') {
        if (this.evaluateExpressionOrLiteral(node.expression)) {
          return node.statement;
        }
      } else if (node.type === 'IfElseNode' || node.type === 'ElseIfNode') {
        if (this.evaluateExpressionOrLiteral(node.expression)) {
          return node.statement;
        }

        if (node.elseStatement) {
          return this.evaluateConditional(node.elseStatement);
        }
      } else {
        // ElseNode
        return node.statement;
      }

      return null;
    }

    evaluateFunctionCall(node) {
      if (this.functions[node.functionName]) {
        return this.functions[node.functionName](...node.args.map(this.evaluateExpressionOrLiteral, this));
      }

      throw new Error(`Function "${node.functionName}" not found`);
    }
    /**
     * Evaluates an expression or literal down to its final value
     */


    evaluateExpressionOrLiteral(node) {
      const nodeHandlers = {
        UnaryMinusExpressionNode: a => {
          return -a;
        },
        ArithmeticExpressionAddNode: (a, b) => {
          return a + b;
        },
        ArithmeticExpressionMinusNode: (a, b) => {
          return a - b;
        },
        ArithmeticExpressionExponentNode: (a, b) => {
          return a ** b;
        },
        ArithmeticExpressionMultiplyNode: (a, b) => {
          return a * b;
        },
        ArithmeticExpressionDivideNode: (a, b) => {
          return a / b;
        },
        ArithmeticExpressionModuloNode: (a, b) => {
          return a % b;
        },
        NegatedBooleanExpressionNode: a => {
          return !a;
        },
        BooleanOrExpressionNode: (a, b) => {
          return a || b;
        },
        BooleanAndExpressionNode: (a, b) => {
          return a && b;
        },
        BooleanXorExpressionNode: (a, b) => {
          return !!(a ^ b);
        },
        // eslint-disable-line no-bitwise
        EqualToExpressionNode: (a, b) => {
          return a === b;
        },
        NotEqualToExpressionNode: (a, b) => {
          return a !== b;
        },
        GreaterThanExpressionNode: (a, b) => {
          return a > b;
        },
        GreaterThanOrEqualToExpressionNode: (a, b) => {
          return a >= b;
        },
        LessThanExpressionNode: (a, b) => {
          return a < b;
        },
        LessThanOrEqualToExpressionNode: (a, b) => {
          return a <= b;
        },
        TextNode: a => {
          return a.text;
        },
        NumericLiteralNode: a => {
          return parseFloat(a.numericLiteral);
        },
        StringLiteralNode: a => {
          return `${a.stringLiteral}`;
        },
        BooleanLiteralNode: a => {
          return a.booleanLiteral === 'true';
        },
        VariableNode: a => {
          return this.variables.get(a.variableName);
        },
        FunctionResultNode: a => {
          return this.evaluateFunctionCall(a);
        },
        InlineExpressionNode: a => {
          return a;
        }
      };
      const handler = nodeHandlers[node.type];

      if (!handler) {
        throw new Error(`node type not recognized: ${node.type}`);
      }

      return handler(node instanceof nodeTypes.Expression ? this.evaluateExpressionOrLiteral(node.expression || node.expression1) : node, node.expression2 ? this.evaluateExpressionOrLiteral(node.expression2) : node);
    }

  }

  var runner = {
    Runner,
    TextResult: results.TextResult,
    CommandResult: results.CommandResult,
    OptionsResult: results.OptionsResult
  };
  runner.Runner;
  runner.TextResult;
  runner.CommandResult;
  runner.OptionsResult;

  var mbondage_js = runner;

  return mbondage_js;

}));
