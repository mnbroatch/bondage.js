(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bondage"] = factory();
	else
		root["bondage"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9722:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(2526);

__webpack_require__(1817);

__webpack_require__(2165);

__webpack_require__(6992);

__webpack_require__(8783);

__webpack_require__(3948);

__webpack_require__(7042);

__webpack_require__(8309);

__webpack_require__(1038);

__webpack_require__(7327);

__webpack_require__(1539);

__webpack_require__(4916);

__webpack_require__(3123);

__webpack_require__(4723);

__webpack_require__(3210);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
module.exports = function convertYarn(content) {
  var objects = [];
  var lines = content.split(/\r?\n+/).filter(function (line) {
    return !line.match(/^\s*$/);
  });
  var obj = null;
  var readingBody = false;
  var filetags;
  var i = 0;

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
      obj.body += "".concat(lines[i], "\n");
    } else if (lines[i].trim() === '---') {
      readingBody = true;
      obj.body = '';
    } else if (lines[i].indexOf(':') > -1) {
      var _lines$i$split = lines[i].split(':'),
          _lines$i$split2 = _slicedToArray(_lines$i$split, 2),
          key = _lines$i$split2[0],
          value = _lines$i$split2[1];

      var trimmedKey = key.trim();
      var trimmedValue = value.trim();

      if (trimmedKey !== 'body') {
        if (obj == null) obj = {};

        if (obj[trimmedKey]) {
          throw new Error("Duplicate tag on node: ".concat(trimmedKey));
        }

        obj[trimmedKey] = trimmedValue;
      }
    }
  }

  return objects;
};

/***/ }),

/***/ 1826:
/***/ (function(module) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DefaultVariableStorage = /*#__PURE__*/function () {
  function DefaultVariableStorage() {
    _classCallCheck(this, DefaultVariableStorage);

    this.data = {};
  }

  _createClass(DefaultVariableStorage, [{
    key: "set",
    value: function set(name, value) {
      this.data[name] = value;
    } // Called when a variable is being evaluated.

  }, {
    key: "get",
    value: function get(name) {
      return this.data[name];
    }
  }]);

  return DefaultVariableStorage;
}();

module.exports = DefaultVariableStorage;

/***/ }),

/***/ 2352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _runner = _interopRequireDefault(__webpack_require__(5359));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _runner.default;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 5271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__webpack_require__(1539);

__webpack_require__(4747);

__webpack_require__(9600);

__webpack_require__(4603);

__webpack_require__(4916);

__webpack_require__(9714);

var _tokens = _interopRequireDefault(__webpack_require__(4902));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * A LexState object represents one of the states in which the lexer can be.
 */
var LexerState = /*#__PURE__*/function () {
  function LexerState() {
    _classCallCheck(this, LexerState);

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


  _createClass(LexerState, [{
    key: "addTransition",
    value: function addTransition(token, state, delimitsText) {
      this.transitions.push({
        token: token,
        regex: _tokens.default[token],
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

  }, {
    key: "addTextRule",
    value: function addTextRule(type, state) {
      if (this.textRule) {
        throw new Error('Cannot add more than one text rule to a state.');
      } // Go through the regex of the other transitions in this state, and create a regex that will
      // match all text, up to any of those transitions.


      var rules = [];
      this.transitions.forEach(function (transition) {
        if (transition.delimitsText) {
          // Surround the rule in parens
          rules.push("(".concat(transition.regex.source, ")"));
        }
      }); // Join the rules that we got above on a |, then put them all into a negative lookahead.

      var textPattern = "((?!".concat(rules.join('|'), ").)+");
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

  }, {
    key: "setTrackNextIndentation",
    value: function setTrackNextIndentation(track) {
      this.isTrackingNextIndentation = track;
      return this;
    }
  }]);

  return LexerState;
}();

var _default = LexerState;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 3271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Syncs with YarnSpinner@e0f6807,
// see https://github.com/thesecretlab/YarnSpinner/blob/master/YarnSpinner/Lexer.cs

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__webpack_require__(4916);

__webpack_require__(5306);

__webpack_require__(4723);

__webpack_require__(9826);

__webpack_require__(1539);

__webpack_require__(3123);

var _states = _interopRequireDefault(__webpack_require__(9304));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// As opposed to the original C# implemntation which, tokenize the entire input, before emiting
// a list of tokens, this parser will emit a token each time `lex()` is called. This change
// accomodates the Jison parser. Given the lexer is not entirely context-free
// (Off-side rule, lookaheads), context needs to be remembered between each `lex()` calls.
var Lexer = /*#__PURE__*/function () {
  function Lexer() {
    _classCallCheck(this, Lexer);

    /** All the possible states for the lexer. */
    this.states = _states.default.makeStates();
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


  _createClass(Lexer, [{
    key: "reset",
    value: function reset() {
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

  }, {
    key: "lex",
    value: function lex() {
      if (this.isAtTheEndOfText()) {
        this.yytext = ''; // Now that we're at the end of the text, we'll emit as many
        // `Dedent` as necessary, to get back to 0-indentation.

        var indent = this.indentation.pop();

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
  }, {
    key: "advanceLine",
    value: function advanceLine() {
      this.yylineno += 1;
      var currentLine = this.getCurrentLine().replace(/\t/, '    ');
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
  }, {
    key: "lexNextTokenOnCurrentLine",
    value: function lexNextTokenOnCurrentLine() {
      var thisIndentation = this.getCurrentLineIndentation();

      if (this.shouldTrackNextIndentation && thisIndentation > this.previousLevelOfIndentation) {
        this.indentation.push([thisIndentation, true]);
        this.shouldTrackNextIndentation = false;
        this.yylloc.first_column = this.yylloc.last_column;
        this.yylloc.last_column += thisIndentation;
        this.yytext = '';
        return 'Indent';
      } else if (thisIndentation < this.getLastRecordedIndentation()[0]) {
        var indent = this.indentation.pop();

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

      var rules = this.getState().transitions;

      for (var i = 0, len = rules.length; i < len; i += 1) {
        var rule = rules[i];
        var match = this.getCurrentLine().substring(this.yylloc.last_column - 1).match(rule.regex); // Only accept valid matches that are at the beginning of the text

        if (match !== null && match.index === 0) {
          // Take the matched text off the front of this.text
          var matchedText = match[0]; // Tell the parser what the text for this token is

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

          var nextState = this.states[rule.state];
          var hasText = !nextState || nextState.transitions.find(function (transition) {
            return transition.token === 'Text';
          }); // inline expressions and escaped characters interrupt text
          // but should still preserve surrounding whitespace.

          if (rule.token !== 'EndInlineExp' && rule.token !== 'EscapedCharacter' || !hasText // we never want leading whitespace if not in text-supporting state
          ) {
            // Remove leading whitespace characters
            var spaceMatch = this.getCurrentLine().substring(this.yylloc.last_column - 1).match(/^\s*/);

            if (spaceMatch[0]) {
              this.yylloc.last_column += spaceMatch[0].length;
            }
          }

          return rule.token;
        }
      }

      throw new Error("Invalid syntax in: ".concat(this.getCurrentLine()));
    } // /////////////// Getters & Setters

    /**
     * setState - set the current state of the lexer.
     *
     * @param  {string} state name of the state
     */

  }, {
    key: "setState",
    value: function setState(state) {
      if (this.states[state] === undefined) {
        throw new Error("Cannot set the unknown state [".concat(state, "]"));
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

  }, {
    key: "setInput",
    value: function setInput(text) {
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

  }, {
    key: "getState",
    value: function getState() {
      return this.states[this.state];
    }
  }, {
    key: "getCurrentLine",
    value: function getCurrentLine() {
      return this.lines[this.yylineno - 1];
    }
  }, {
    key: "getCurrentLineIndentation",
    value: function getCurrentLineIndentation() {
      var match = this.getCurrentLine().match(/^(\s*)/g);
      return match[0].length;
    }
  }, {
    key: "getLastRecordedIndentation",
    value: function getLastRecordedIndentation() {
      if (this.indentation.length === 0) {
        return [0, false];
      }

      return this.indentation[this.indentation.length - 1];
    } // /////////////// Booleans tests

    /**
     * @return {boolean}  `true` when yylloc indicates that the end was reached.
     */

  }, {
    key: "isAtTheEndOfText",
    value: function isAtTheEndOfText() {
      return this.isAtTheEndOfLine() && this.yylloc.first_line >= this.lines.length;
    }
    /**
     * @return {boolean}  `true` when yylloc indicates that the end of the line was reached.
     */

  }, {
    key: "isAtTheEndOfLine",
    value: function isAtTheEndOfLine() {
      return this.yylloc.last_column > this.getCurrentLine().length;
    }
  }]);

  return Lexer;
}();

var _default = Lexer;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 9304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _lexerState = _interopRequireDefault(__webpack_require__(5271));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @return {Object}  all states in which the lexer can be with their associated transitions.
 */
function makeStates() {
  return {
    base: new _lexerState.default().addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'command', true).addTransition('BeginInlineExp', 'inlineExpression', true).addTransition('ShortcutOption', 'shortcutOption').addTextRule('Text'),
    shortcutOption: new _lexerState.default().setTrackNextIndentation(true).addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'expression', true).addTransition('BeginInlineExp', 'inlineExpressionInShortcut', true).addTextRule('Text', 'base'),
    command: new _lexerState.default().addTransition('If', 'expression').addTransition('Else').addTransition('ElseIf', 'expression').addTransition('EndIf').addTransition('Set', 'assignment').addTransition('Declare', 'declare').addTransition('Jump', 'jump').addTransition('Stop', 'stop').addTransition('EndCommand', 'base', true).addTransition('Identifier', 'commandArg', true).addTextRule('Text'),
    commandArg: new _lexerState.default().addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'commandParenArgOrExpression').addTransition('Variable').addTransition('Number').addTransition('String').addTransition('True').addTransition('False').addTransition('Identifier').addTransition('Comma').addTransition('RightParen'),
    commandParenArgOrExpression: new _lexerState.default().addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'expression').addTransition('Variable', 'expression').addTransition('Number', 'expression').addTransition('String').addTransition('True').addTransition('False').addTransition('Null').addTransition('RightParen'),
    assignment: new _lexerState.default().addTransition('Variable').addTransition('EqualToOrAssign', 'expression'),
    declare: new _lexerState.default().addTransition('Variable').addTransition('EndCommand', 'base').addTransition('EqualToOrAssign', 'expression'),
    jump: new _lexerState.default().addTransition('Identifier').addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true),
    stop: new _lexerState.default().addTransition('EndCommand', 'base', true),
    expression: new _lexerState.default().addTransition('As').addTransition('ExplicitType').addTransition('EndCommand', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule(),
    inlineExpression: new _lexerState.default().addTransition('EndInlineExp', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
    // TODO: Copied from above
    // There has to be a non-stupid way to do this, right?
    // I'm just not familiar enough yet to know how to
    // transition from inline expression back to base OR command
    // states depending on how we got there
    inlineExpressionInCommand: new _lexerState.default().addTransition('EndInlineExp', 'commandArg').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
    inlineExpressionInShortcut: new _lexerState.default().addTransition('EndInlineExp', 'shortcutOption').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base')
  };
}

var _default = {
  makeStates: makeStates
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 4902:
/***/ (function(module, exports) {

"use strict";

/**
 * Token identifier -> regular expression to match the lexeme. That's a list of all the token
 * which can be emitted by the lexer. For now, we're slightly bending the style guide,
 * to make sure the debug output of the javascript lexer will (kinda) match the original C# one.
 */

/* eslint-disable key-spacing */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var Tokens = {
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

var _default = Tokens;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 5087:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7941);

__webpack_require__(2526);

__webpack_require__(7327);

__webpack_require__(1539);

__webpack_require__(5003);

__webpack_require__(4747);

__webpack_require__(9337);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Parser = Parser;
exports.parser = void 0;

__webpack_require__(4944);

__webpack_require__(3792);

__webpack_require__(2222);

__webpack_require__(1249);

__webpack_require__(9601);

__webpack_require__(7042);

__webpack_require__(489);

__webpack_require__(9600);

__webpack_require__(4916);

__webpack_require__(4723);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var o = function o(k, v, _o, l) {
  for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {
    ;
  }

  return _o;
},
    $V0 = [1, 19],
    $V1 = [1, 20],
    $V2 = [1, 12],
    $V3 = [1, 18],
    $V4 = [1, 17],
    $V5 = [5, 18, 19, 24, 35, 37, 80],
    $V6 = [1, 24],
    $V7 = [1, 25],
    $V8 = [1, 27],
    $V9 = [1, 28],
    $Va = [5, 14, 16, 22, 24, 35, 37],
    $Vb = [5, 14, 16, 18, 19, 22, 24, 35, 37, 80],
    $Vc = [1, 31],
    $Vd = [1, 32],
    $Ve = [1, 35],
    $Vf = [1, 36],
    $Vg = [1, 37],
    $Vh = [1, 38],
    $Vi = [5, 14, 16, 18, 22, 24, 35, 37, 80],
    $Vj = [1, 42],
    $Vk = [1, 52],
    $Vl = [1, 51],
    $Vm = [1, 46],
    $Vn = [1, 47],
    $Vo = [1, 48],
    $Vp = [1, 53],
    $Vq = [1, 54],
    $Vr = [1, 55],
    $Vs = [1, 56],
    $Vt = [1, 57],
    $Vu = [5, 16, 18, 19, 24, 35, 37, 80],
    $Vv = [1, 68],
    $Vw = [1, 79],
    $Vx = [1, 80],
    $Vy = [1, 81],
    $Vz = [1, 82],
    $VA = [1, 83],
    $VB = [1, 84],
    $VC = [1, 85],
    $VD = [1, 86],
    $VE = [1, 87],
    $VF = [1, 88],
    $VG = [1, 89],
    $VH = [1, 90],
    $VI = [1, 91],
    $VJ = [1, 92],
    $VK = [1, 93],
    $VL = [27, 50, 55, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
    $VM = [27, 38, 50, 55, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81],
    $VN = [27, 38, 75, 76, 77, 78, 79, 80],
    $VO = [27, 50, 55, 57, 58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
    $VP = [27, 50, 55, 74, 81],
    $VQ = [1, 132],
    $VR = [1, 133],
    $VS = [27, 50, 55, 57, 58, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
    $VT = [27, 50, 55, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
    $VU = [55, 74],
    $VV = [16, 18, 19, 24, 35, 80];

var parser = {
  trace: function trace() {},
  yy: {},
  symbols_: {
    "error": 2,
    "node": 3,
    "statements": 4,
    "EndOfInput": 5,
    "conditionalBlock": 6,
    "statement": 7,
    "text": 8,
    "shortcut": 9,
    "genericCommand": 10,
    "assignmentCommand": 11,
    "jumpCommand": 12,
    "stopCommand": 13,
    "Comment": 14,
    "hashtags": 15,
    "EndOfLine": 16,
    "escapedTextRaw": 17,
    "Text": 18,
    "EscapedCharacter": 19,
    "escapedText": 20,
    "inlineExpression": 21,
    "Hashtag": 22,
    "conditional": 23,
    "BeginCommand": 24,
    "If": 25,
    "expression": 26,
    "EndCommand": 27,
    "EndIf": 28,
    "additionalConditionalBlocks": 29,
    "else": 30,
    "Else": 31,
    "elseif": 32,
    "ElseIf": 33,
    "shortcutOption": 34,
    "ShortcutOption": 35,
    "Indent": 36,
    "Dedent": 37,
    "Identifier": 38,
    "genericCommandArguments": 39,
    "genericCommandArgument": 40,
    "literal": 41,
    "Jump": 42,
    "Stop": 43,
    "setCommandInner": 44,
    "declareCommandInner": 45,
    "Set": 46,
    "Variable": 47,
    "EqualToOrAssign": 48,
    "Declare": 49,
    "As": 50,
    "ExplicitType": 51,
    "functionArgument": 52,
    "functionCall": 53,
    "LeftParen": 54,
    "RightParen": 55,
    "UnaryMinus": 56,
    "Add": 57,
    "Minus": 58,
    "Exponent": 59,
    "Multiply": 60,
    "Divide": 61,
    "Modulo": 62,
    "Not": 63,
    "Or": 64,
    "And": 65,
    "Xor": 66,
    "EqualTo": 67,
    "NotEqualTo": 68,
    "GreaterThan": 69,
    "GreaterThanOrEqualTo": 70,
    "LessThan": 71,
    "LessThanOrEqualTo": 72,
    "parenExpressionArgs": 73,
    "Comma": 74,
    "True": 75,
    "False": 76,
    "Number": 77,
    "String": 78,
    "Null": 79,
    "BeginInlineExp": 80,
    "EndInlineExp": 81,
    "$accept": 0,
    "$end": 1
  },
  terminals_: {
    2: "error",
    5: "EndOfInput",
    14: "Comment",
    16: "EndOfLine",
    18: "Text",
    19: "EscapedCharacter",
    22: "Hashtag",
    24: "BeginCommand",
    25: "If",
    27: "EndCommand",
    28: "EndIf",
    31: "Else",
    33: "ElseIf",
    35: "ShortcutOption",
    36: "Indent",
    37: "Dedent",
    38: "Identifier",
    42: "Jump",
    43: "Stop",
    46: "Set",
    47: "Variable",
    48: "EqualToOrAssign",
    49: "Declare",
    50: "As",
    51: "ExplicitType",
    54: "LeftParen",
    55: "RightParen",
    56: "UnaryMinus",
    57: "Add",
    58: "Minus",
    59: "Exponent",
    60: "Multiply",
    61: "Divide",
    62: "Modulo",
    63: "Not",
    64: "Or",
    65: "And",
    66: "Xor",
    67: "EqualTo",
    68: "NotEqualTo",
    69: "GreaterThan",
    70: "GreaterThanOrEqualTo",
    71: "LessThan",
    72: "LessThanOrEqualTo",
    74: "Comma",
    75: "True",
    76: "False",
    77: "Number",
    78: "String",
    79: "Null",
    80: "BeginInlineExp",
    81: "EndInlineExp"
  },
  productions_: [0, [3, 2], [4, 1], [4, 2], [4, 1], [4, 2], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 2], [7, 2], [7, 2], [17, 1], [17, 1], [17, 2], [17, 2], [20, 1], [8, 1], [8, 1], [8, 2], [15, 1], [15, 2], [23, 4], [6, 6], [6, 4], [6, 2], [30, 3], [30, 2], [32, 4], [32, 2], [29, 5], [29, 5], [29, 3], [34, 2], [34, 3], [34, 2], [34, 2], [34, 3], [34, 2], [9, 1], [9, 5], [10, 3], [10, 4], [39, 1], [39, 2], [40, 1], [40, 1], [40, 1], [12, 4], [12, 4], [13, 3], [11, 3], [11, 3], [44, 4], [45, 4], [45, 6], [26, 1], [26, 1], [26, 3], [26, 2], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 2], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [53, 3], [53, 4], [73, 3], [73, 1], [52, 1], [52, 1], [52, 1], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1], [21, 3]],
  performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate
  /* action[1] */
  , $$
  /* vstack */
  , _$
  /* lstack */
  ) {
    /* this == yyval */
    var $0 = $$.length - 1;

    switch (yystate) {
      case 1:
        return $$[$0 - 1].flat();
        break;

      case 2:
      case 4:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 21:
      case 46:
      case 82:
        this.$ = [$$[$0]];
        break;

      case 3:
        this.$ = $$[$0 - 1].concat($$[$0]);
        break;

      case 5:
      case 47:
        this.$ = $$[$0 - 1].concat([$$[$0]]);
        break;

      case 6:
      case 60:
        this.$ = $$[$0];
        break;

      case 12:
      case 14:
      case 28:
      case 31:
      case 32:
      case 54:
      case 61:
        this.$ = $$[$0 - 1];
        break;

      case 13:
        this.$ = $$[$0 - 1].map(function (s) {
          return Object.assign(s, {
            hashtags: $$[$0]
          });
        });
        break;

      case 15:
      case 48:
      case 49:
      case 59:
      case 83:
      case 84:
        this.$ = $$[$0];
        break;

      case 16:
        this.$ = $$[$0].substring(1);
        break;

      case 17:
        this.$ = $$[$0 - 1].concat($$[$0].substring(1));
        break;

      case 18:
        this.$ = $$[$0 - 1].substring(1).concat($$[$0]);
        break;

      case 19:
        this.$ = new yy.TextNode($$[$0], this._$);
        break;

      case 20:
        this.$ = [$$[$0]];
        break;

      case 22:
        this.$ = $$[$0 - 1].concat($$[$0]);
        break;

      case 23:
        this.$ = [$$[$0].substring(1)];
        break;

      case 24:
        this.$ = [$$[$0 - 1].substring(1)].concat($$[$0]);
        break;

      case 25:
      case 39:
      case 41:
        this.$ = $$[$0 - 1];
        break;

      case 26:
        this.$ = new yy.IfNode($$[$0 - 5], $$[$0 - 3].flat());
        break;

      case 27:
        this.$ = new yy.IfElseNode($$[$0 - 3], $$[$0 - 1].flat(), $$[$0]);
        break;

      case 29:
      case 30:
        this.$ = undefined;
        break;

      case 33:
        this.$ = new yy.ElseNode($$[$0 - 3].flat());
        break;

      case 34:
        this.$ = new yy.ElseIfNode($$[$0 - 4], $$[$0 - 3].flat());
        break;

      case 35:
        this.$ = new yy.ElseIfNode($$[$0 - 2], $$[$0 - 1].flat(), $$[$0]);
        break;

      case 36:
        this.$ = {
          text: $$[$0]
        };
        break;

      case 37:
        this.$ = {
          text: $$[$0 - 1],
          conditional: $$[$0]
        };
        break;

      case 38:
        this.$ = _objectSpread(_objectSpread({}, $$[$0 - 1]), {}, {
          hashtags: $$[$0]
        });
        break;

      case 40:
        this.$ = _objectSpread(_objectSpread({}, $$[$0 - 2]), {}, {
          hashtags: $$[$0 - 1]
        });
        break;

      case 42:
        this.$ = new yy.DialogShortcutNode($$[$0].text, undefined, this._$, $$[$0].hashtags, $$[$0].conditional);
        break;

      case 43:
        this.$ = new yy.DialogShortcutNode($$[$0 - 4].text, $$[$0 - 1].flat(), this._$, $$[$0 - 4].hashtags, $$[$0 - 4].conditional);
        break;

      case 44:
        this.$ = new yy.FunctionResultNode($$[$0 - 1], [], this._$);
        break;

      case 45:
        this.$ = new yy.FunctionResultNode($$[$0 - 2], $$[$0 - 1], this._$);
        break;

      case 50:
        this.$ = new yy.TextNode($$[$0]);
        break;

      case 51:
      case 52:
        this.$ = new yy.JumpNode($$[$0 - 1]);
        break;

      case 53:
        this.$ = new yy.StopNode();
        break;

      case 55:
        this.$ = null;
        break;

      case 56:
        this.$ = new yy.SetVariableEqualToNode($$[$0 - 2].substring(1), $$[$0]);
        break;

      case 57:
        this.$ = null;
        yy.registerDeclaration($$[$0 - 2].substring(1), $$[$0]);
        break;

      case 58:
        this.$ = null;
        yy.registerDeclaration($$[$0 - 4].substring(1), $$[$0 - 2], $$[$0]);
        break;

      case 62:
        this.$ = new yy.UnaryMinusExpressionNode($$[$0]);
        break;

      case 63:
        this.$ = new yy.ArithmeticExpressionAddNode($$[$0 - 2], $$[$0]);
        break;

      case 64:
        this.$ = new yy.ArithmeticExpressionMinusNode($$[$0 - 2], $$[$0]);
        break;

      case 65:
        this.$ = new yy.ArithmeticExpressionExponentNode($$[$0 - 2], $$[$0]);
        break;

      case 66:
        this.$ = new yy.ArithmeticExpressionMultiplyNode($$[$0 - 2], $$[$0]);
        break;

      case 67:
        this.$ = new yy.ArithmeticExpressionDivideNode($$[$0 - 2], $$[$0]);
        break;

      case 68:
        this.$ = new yy.ArithmeticExpressionModuloNode($$[$0 - 2], $$[$0]);
        break;

      case 69:
        this.$ = new yy.NegatedBooleanExpressionNode($$[$0]);
        break;

      case 70:
        this.$ = new yy.BooleanOrExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 71:
        this.$ = new yy.BooleanAndExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 72:
        this.$ = new yy.BooleanXorExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 73:
        this.$ = new yy.EqualToExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 74:
        this.$ = new yy.NotEqualToExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 75:
        this.$ = new yy.GreaterThanExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 76:
        this.$ = new yy.GreaterThanOrEqualToExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 77:
        this.$ = new yy.LessThanExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 78:
        this.$ = new yy.LessThanOrEqualToExpressionNode($$[$0 - 2], $$[$0]);
        break;

      case 79:
        this.$ = new yy.FunctionResultNode($$[$0 - 2], []);
        break;

      case 80:
        this.$ = new yy.FunctionResultNode($$[$0 - 3], $$[$0 - 1]);
        break;

      case 81:
        this.$ = $$[$0 - 2].concat([$$[$0]]);
        break;

      case 85:
        this.$ = new yy.VariableNode($$[$0].substring(1));
        break;

      case 86:
      case 87:
        this.$ = new yy.BooleanLiteralNode($$[$0]);
        break;

      case 88:
        this.$ = new yy.NumericLiteralNode($$[$0]);
        break;

      case 89:
        this.$ = new yy.StringLiteralNode($$[$0]);
        break;

      case 90:
        this.$ = new yy.NullLiteralNode($$[$0]);
        break;

      case 91:
        this.$ = new yy.InlineExpressionNode($$[$0 - 1], this._$);
        break;
    }
  },
  table: [{
    3: 1,
    4: 2,
    6: 3,
    7: 4,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: $V2,
    34: 15,
    35: $V3,
    80: $V4
  }, {
    1: [3]
  }, {
    5: [1, 21],
    6: 22,
    7: 23,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: $V2,
    34: 15,
    35: $V3,
    80: $V4
  }, o($V5, [2, 2], {
    16: $V6
  }), o($V5, [2, 4], {
    15: 26,
    14: $V7,
    16: $V8,
    22: $V9
  }), {
    16: [1, 29]
  }, o($Va, [2, 6], {
    20: 13,
    21: 14,
    17: 16,
    8: 30,
    18: $V0,
    19: $V1,
    80: $V4
  }), o($Vb, [2, 7]), o($Vb, [2, 8]), o($Vb, [2, 9]), o($Vb, [2, 10]), o($Vb, [2, 11]), {
    25: $Vc,
    38: $Vd,
    42: $Ve,
    43: $Vf,
    44: 33,
    45: 34,
    46: $Vg,
    49: $Vh
  }, o($Vb, [2, 20]), o($Vb, [2, 21]), o($V5, [2, 42], {
    15: 40,
    14: [1, 41],
    16: [1, 39],
    22: $V9
  }), o($Vi, [2, 19], {
    19: $Vj
  }), {
    21: 49,
    26: 43,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    8: 58,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    80: $V4
  }, o($Vb, [2, 15]), o([5, 14, 16, 22, 24, 35, 37, 80], [2, 16], {
    17: 59,
    18: $V0,
    19: $V1
  }), {
    1: [2, 1]
  }, o($V5, [2, 3], {
    16: $V6
  }), o($V5, [2, 5], {
    15: 26,
    14: $V7,
    16: $V8,
    22: $V9
  }), o($Vu, [2, 28]), o($Vb, [2, 12]), o($Vb, [2, 13]), o($Vb, [2, 14]), o([5, 14, 16, 18, 19, 24, 35, 37, 80], [2, 23], {
    15: 60,
    22: $V9
  }), {
    4: 61,
    6: 3,
    7: 4,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: $V2,
    34: 15,
    35: $V3,
    80: $V4
  }, o($Va, [2, 22], {
    20: 13,
    21: 14,
    17: 16,
    8: 30,
    18: $V0,
    19: $V1,
    80: $V4
  }), {
    21: 49,
    26: 62,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 66,
    27: [1, 63],
    38: $Vv,
    39: 64,
    40: 65,
    41: 67,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    27: [1, 69]
  }, {
    27: [1, 70]
  }, {
    21: 72,
    38: [1, 71],
    80: $V4
  }, {
    27: [1, 73]
  }, {
    47: [1, 74]
  }, {
    47: [1, 75]
  }, o($Vb, [2, 41], {
    36: [1, 76]
  }), o([5, 16, 18, 19, 22, 24, 35, 37, 80], [2, 38], {
    14: [1, 77]
  }), o($Vb, [2, 39]), o($Vb, [2, 17]), {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK,
    81: [1, 78]
  }, o($VL, [2, 59]), o($VL, [2, 60]), {
    21: 49,
    26: 94,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 95,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 96,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, o($VL, [2, 83]), o($VL, [2, 84]), o($VL, [2, 85]), {
    54: [1, 97]
  }, o($VM, [2, 86]), o($VM, [2, 87]), o($VM, [2, 88]), o($VM, [2, 89]), o($VM, [2, 90]), o([5, 14, 16, 22, 35, 37], [2, 36], {
    20: 13,
    21: 14,
    17: 16,
    8: 30,
    23: 98,
    18: $V0,
    19: $V1,
    24: [1, 99],
    80: $V4
  }), o($Vi, [2, 18], {
    19: $Vj
  }), o($Vb, [2, 24]), {
    6: 22,
    7: 23,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: [1, 100],
    29: 101,
    30: 102,
    32: 103,
    34: 15,
    35: $V3,
    80: $V4
  }, {
    27: [1, 104],
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }, o($Vb, [2, 44]), {
    21: 66,
    27: [1, 105],
    38: $Vv,
    40: 106,
    41: 67,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, o($VN, [2, 46]), o($VN, [2, 48]), o($VN, [2, 49]), o($VN, [2, 50]), o($Vb, [2, 54]), o($Vb, [2, 55]), {
    27: [1, 107]
  }, {
    27: [1, 108]
  }, o($Vb, [2, 53]), {
    48: [1, 109]
  }, {
    48: [1, 110]
  }, {
    4: 111,
    6: 3,
    7: 4,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: $V2,
    34: 15,
    35: $V3,
    80: $V4
  }, o($Vb, [2, 40]), o([5, 14, 16, 18, 19, 22, 24, 27, 35, 37, 38, 50, 55, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81], [2, 91]), {
    21: 49,
    26: 112,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 113,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 114,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 115,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 116,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 117,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 118,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 119,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 120,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 121,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 122,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 123,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 124,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 125,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 126,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    55: [1, 127],
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }, o($VO, [2, 62], {
    62: $VB
  }), o($VP, [2, 69], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }), {
    21: 49,
    26: 130,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    55: [1, 128],
    56: $Vn,
    63: $Vo,
    73: 129,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, o($Vb, [2, 37]), {
    25: $Vc
  }, {
    25: $Vc,
    28: [1, 131],
    31: $VQ,
    33: $VR,
    38: $Vd,
    42: $Ve,
    43: $Vf,
    44: 33,
    45: 34,
    46: $Vg,
    49: $Vh
  }, o($Vu, [2, 27]), {
    4: 134,
    6: 3,
    7: 4,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    16: [1, 135],
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: $V2,
    34: 15,
    35: $V3,
    80: $V4
  }, {
    4: 136,
    6: 3,
    7: 4,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    16: [1, 137],
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: $V2,
    34: 15,
    35: $V3,
    80: $V4
  }, o($Vb, [2, 25]), o($Vb, [2, 45]), o($VN, [2, 47]), o($Vb, [2, 51]), o($Vb, [2, 52]), {
    21: 49,
    26: 138,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    21: 49,
    26: 139,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    6: 22,
    7: 23,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: $V2,
    34: 15,
    35: $V3,
    37: [1, 140],
    80: $V4
  }, o($VS, [2, 63], {
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VS, [2, 64], {
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VO, [2, 65], {
    62: $VB
  }), o($VO, [2, 66], {
    62: $VB
  }), o($VO, [2, 67], {
    62: $VB
  }), o($VP, [2, 68], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }), o([27, 50, 55, 64, 74, 81], [2, 70], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }), o([27, 50, 55, 64, 65, 74, 81], [2, 71], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }), o([27, 50, 55, 64, 65, 66, 74, 81], [2, 72], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }), o($VT, [2, 73], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VT, [2, 74], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VT, [2, 75], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VT, [2, 76], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VT, [2, 77], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VT, [2, 78], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB
  }), o($VL, [2, 61]), o($VL, [2, 79]), {
    55: [1, 141],
    74: [1, 142]
  }, o($VU, [2, 82], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }), {
    27: [1, 143]
  }, {
    27: [1, 144]
  }, {
    21: 49,
    26: 145,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, {
    6: 22,
    7: 23,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: [1, 146],
    34: 15,
    35: $V3,
    80: $V4
  }, o($VV, [2, 30]), {
    6: 22,
    7: 23,
    8: 6,
    9: 7,
    10: 8,
    11: 9,
    12: 10,
    13: 11,
    17: 16,
    18: $V0,
    19: $V1,
    20: 13,
    21: 14,
    23: 5,
    24: [1, 147],
    29: 148,
    30: 102,
    32: 103,
    34: 15,
    35: $V3,
    80: $V4
  }, o($VV, [2, 32]), {
    27: [2, 56],
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }, {
    27: [2, 57],
    50: [1, 149],
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }, o($Vb, [2, 43]), o($VL, [2, 80]), {
    21: 49,
    26: 150,
    38: $Vk,
    41: 50,
    47: $Vl,
    52: 44,
    53: 45,
    54: $Vm,
    56: $Vn,
    63: $Vo,
    75: $Vp,
    76: $Vq,
    77: $Vr,
    78: $Vs,
    79: $Vt,
    80: $V4
  }, o($Vu, [2, 26]), o($VV, [2, 29]), {
    27: [1, 151],
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }, {
    25: $Vc,
    28: [1, 152],
    38: $Vd,
    42: $Ve,
    43: $Vf,
    44: 33,
    45: 34,
    46: $Vg,
    49: $Vh
  }, {
    25: $Vc,
    28: [1, 153],
    31: $VQ,
    33: $VR,
    38: $Vd,
    42: $Ve,
    43: $Vf,
    44: 33,
    45: 34,
    46: $Vg,
    49: $Vh
  }, o($Vu, [2, 35]), {
    51: [1, 154]
  }, o($VU, [2, 81], {
    57: $Vw,
    58: $Vx,
    59: $Vy,
    60: $Vz,
    61: $VA,
    62: $VB,
    64: $VC,
    65: $VD,
    66: $VE,
    67: $VF,
    68: $VG,
    69: $VH,
    70: $VI,
    71: $VJ,
    72: $VK
  }), o($VV, [2, 31]), {
    27: [1, 155]
  }, {
    27: [1, 156]
  }, {
    27: [2, 58]
  }, o($Vu, [2, 33]), o($Vu, [2, 34])],
  defaultActions: {
    21: [2, 1],
    154: [2, 58]
  },
  parseError: function parseError(str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      var error = new Error(str);
      error.hash = hash;
      throw error;
    }
  },
  parse: function parse(input) {
    var self = this,
        stack = [0],
        tstack = [],
        vstack = [null],
        lstack = [],
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = {
      yy: {}
    };

    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;

    if (typeof lexer.yylloc == 'undefined') {
      lexer.yylloc = {};
    }

    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
      this.parseError = sharedState.yy.parseError;
    } else {
      this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack(n) {
      stack.length = stack.length - 2 * n;
      vstack.length = vstack.length - n;
      lstack.length = lstack.length - n;
    }

    _token_stack: var lex = function lex() {
      var token;
      token = lexer.lex() || EOF;

      if (typeof token !== 'number') {
        token = self.symbols_[token] || token;
      }

      return token;
    };

    var symbol,
        preErrorSymbol,
        state,
        action,
        a,
        r,
        yyval = {},
        p,
        len,
        newState,
        expected;

    while (true) {
      state = stack[stack.length - 1];

      if (this.defaultActions[state]) {
        action = this.defaultActions[state];
      } else {
        if (symbol === null || typeof symbol == 'undefined') {
          symbol = lex();
        }

        action = table[state] && table[state][symbol];
      }

      if (typeof action === 'undefined' || !action.length || !action[0]) {
        var errStr = '';
        expected = [];

        for (p in table[state]) {
          if (this.terminals_[p] && p > TERROR) {
            expected.push('\'' + this.terminals_[p] + '\'');
          }
        }

        if (lexer.showPosition) {
          errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
        } else {
          errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
        }

        this.parseError(errStr, {
          text: lexer.match,
          token: this.terminals_[symbol] || symbol,
          line: lexer.yylineno,
          loc: yyloc,
          expected: expected
        });
      }

      if (action[0] instanceof Array && action.length > 1) {
        throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
      }

      switch (action[0]) {
        case 1:
          stack.push(symbol);
          vstack.push(lexer.yytext);
          lstack.push(lexer.yylloc);
          stack.push(action[1]);
          symbol = null;

          if (!preErrorSymbol) {
            yyleng = lexer.yyleng;
            yytext = lexer.yytext;
            yylineno = lexer.yylineno;
            yyloc = lexer.yylloc;

            if (recovering > 0) {
              recovering--;
            }
          } else {
            symbol = preErrorSymbol;
            preErrorSymbol = null;
          }

          break;

        case 2:
          len = this.productions_[action[1]][1];
          yyval.$ = vstack[vstack.length - len];
          yyval._$ = {
            first_line: lstack[lstack.length - (len || 1)].first_line,
            last_line: lstack[lstack.length - 1].last_line,
            first_column: lstack[lstack.length - (len || 1)].first_column,
            last_column: lstack[lstack.length - 1].last_column
          };

          if (ranges) {
            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
          }

          r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

          if (typeof r !== 'undefined') {
            return r;
          }

          if (len) {
            stack = stack.slice(0, -1 * len * 2);
            vstack = vstack.slice(0, -1 * len);
            lstack = lstack.slice(0, -1 * len);
          }

          stack.push(this.productions_[action[1]][0]);
          vstack.push(yyval.$);
          lstack.push(yyval._$);
          newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
          stack.push(newState);
          break;

        case 3:
          return true;
      }
    }

    return true;
  }
};
exports.parser = parser;

function Parser() {
  this.yy = {};
}

;
Parser.prototype = parser;
parser.Parser = Parser;

/***/ }),

/***/ 9987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(489);

__webpack_require__(1539);

__webpack_require__(2419);

__webpack_require__(2526);

__webpack_require__(1817);

__webpack_require__(2165);

__webpack_require__(6992);

__webpack_require__(8783);

__webpack_require__(3948);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text = /*#__PURE__*/_createClass(function Text() {
  _classCallCheck(this, Text);
});

var Shortcut = /*#__PURE__*/_createClass(function Shortcut() {
  _classCallCheck(this, Shortcut);
});

var Conditional = /*#__PURE__*/_createClass(function Conditional() {
  _classCallCheck(this, Conditional);
});

var Assignment = /*#__PURE__*/_createClass(function Assignment() {
  _classCallCheck(this, Assignment);
});

var Literal = /*#__PURE__*/_createClass(function Literal() {
  _classCallCheck(this, Literal);
});

var Expression = /*#__PURE__*/_createClass(function Expression() {
  _classCallCheck(this, Expression);
});

var FunctionCall = /*#__PURE__*/_createClass(function FunctionCall() {
  _classCallCheck(this, FunctionCall);
});

var _default = {
  types: {
    Text: Text,
    Shortcut: Shortcut,
    Conditional: Conditional,
    Assignment: Assignment,
    Literal: Literal,
    Expression: Expression,
    FunctionCall: FunctionCall
  },
  // /////////////// Dialog Nodes
  DialogShortcutNode: /*#__PURE__*/function (_Shortcut) {
    _inherits(DialogShortcutNode, _Shortcut);

    var _super = _createSuper(DialogShortcutNode);

    function DialogShortcutNode(text, content, lineNo) {
      var _this;

      var hashtags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var conditionalExpression = arguments.length > 4 ? arguments[4] : undefined;

      _classCallCheck(this, DialogShortcutNode);

      _this = _super.call(this);
      _this.type = 'DialogShortcutNode';
      _this.text = text;
      _this.content = content;
      _this.lineNum = lineNo.first_line;
      _this.hashtags = hashtags;
      _this.conditionalExpression = conditionalExpression;
      return _this;
    }

    return _createClass(DialogShortcutNode);
  }(Shortcut),
  // /////////////// Conditional Nodes
  IfNode: /*#__PURE__*/function (_Conditional) {
    _inherits(IfNode, _Conditional);

    var _super2 = _createSuper(IfNode);

    function IfNode(expression, statement) {
      var _this2;

      _classCallCheck(this, IfNode);

      _this2 = _super2.call(this);
      _this2.type = 'IfNode';
      _this2.expression = expression;
      _this2.statement = statement;
      return _this2;
    }

    return _createClass(IfNode);
  }(Conditional),
  IfElseNode: /*#__PURE__*/function (_Conditional2) {
    _inherits(IfElseNode, _Conditional2);

    var _super3 = _createSuper(IfElseNode);

    function IfElseNode(expression, statement, elseStatement) {
      var _this3;

      _classCallCheck(this, IfElseNode);

      _this3 = _super3.call(this);
      _this3.type = 'IfElseNode';
      _this3.expression = expression;
      _this3.statement = statement;
      _this3.elseStatement = elseStatement;
      return _this3;
    }

    return _createClass(IfElseNode);
  }(Conditional),
  ElseNode: /*#__PURE__*/function (_Conditional3) {
    _inherits(ElseNode, _Conditional3);

    var _super4 = _createSuper(ElseNode);

    function ElseNode(statement) {
      var _this4;

      _classCallCheck(this, ElseNode);

      _this4 = _super4.call(this);
      _this4.type = 'ElseNode';
      _this4.statement = statement;
      return _this4;
    }

    return _createClass(ElseNode);
  }(Conditional),
  ElseIfNode: /*#__PURE__*/function (_Conditional4) {
    _inherits(ElseIfNode, _Conditional4);

    var _super5 = _createSuper(ElseIfNode);

    function ElseIfNode(expression, statement, elseStatement) {
      var _this5;

      _classCallCheck(this, ElseIfNode);

      _this5 = _super5.call(this);
      _this5.type = 'ElseIfNode';
      _this5.expression = expression;
      _this5.statement = statement;
      _this5.elseStatement = elseStatement;
      return _this5;
    }

    return _createClass(ElseIfNode);
  }(Conditional),
  // /////////////// Contents Nodes
  TextNode: /*#__PURE__*/function (_Text) {
    _inherits(TextNode, _Text);

    var _super6 = _createSuper(TextNode);

    function TextNode(text, lineNo) {
      var _this6;

      var hashtags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      _classCallCheck(this, TextNode);

      _this6 = _super6.call(this);
      _this6.type = 'TextNode';
      _this6.text = text;
      _this6.lineNum = lineNo ? lineNo.first_line : -1;
      _this6.hashtags = hashtags;
      return _this6;
    }

    return _createClass(TextNode);
  }(Text),
  // /////////////// Literal Nodes
  NumericLiteralNode: /*#__PURE__*/function (_Literal) {
    _inherits(NumericLiteralNode, _Literal);

    var _super7 = _createSuper(NumericLiteralNode);

    function NumericLiteralNode(numericLiteral) {
      var _this7;

      _classCallCheck(this, NumericLiteralNode);

      _this7 = _super7.call(this);
      _this7.type = 'NumericLiteralNode';
      _this7.numericLiteral = numericLiteral;
      return _this7;
    }

    return _createClass(NumericLiteralNode);
  }(Literal),
  StringLiteralNode: /*#__PURE__*/function (_Literal2) {
    _inherits(StringLiteralNode, _Literal2);

    var _super8 = _createSuper(StringLiteralNode);

    function StringLiteralNode(stringLiteral) {
      var _this8;

      _classCallCheck(this, StringLiteralNode);

      _this8 = _super8.call(this);
      _this8.type = 'StringLiteralNode';
      _this8.stringLiteral = stringLiteral;
      return _this8;
    }

    return _createClass(StringLiteralNode);
  }(Literal),
  BooleanLiteralNode: /*#__PURE__*/function (_Literal3) {
    _inherits(BooleanLiteralNode, _Literal3);

    var _super9 = _createSuper(BooleanLiteralNode);

    function BooleanLiteralNode(booleanLiteral) {
      var _this9;

      _classCallCheck(this, BooleanLiteralNode);

      _this9 = _super9.call(this);
      _this9.type = 'BooleanLiteralNode';
      _this9.booleanLiteral = booleanLiteral;
      return _this9;
    }

    return _createClass(BooleanLiteralNode);
  }(Literal),
  VariableNode: /*#__PURE__*/function (_Literal4) {
    _inherits(VariableNode, _Literal4);

    var _super10 = _createSuper(VariableNode);

    function VariableNode(variableName) {
      var _this10;

      _classCallCheck(this, VariableNode);

      _this10 = _super10.call(this);
      _this10.type = 'VariableNode';
      _this10.variableName = variableName;
      return _this10;
    }

    return _createClass(VariableNode);
  }(Literal),
  // /////////////// Arithmetic Expression Nodes
  UnaryMinusExpressionNode: /*#__PURE__*/function (_Expression) {
    _inherits(UnaryMinusExpressionNode, _Expression);

    var _super11 = _createSuper(UnaryMinusExpressionNode);

    function UnaryMinusExpressionNode(expression) {
      var _this11;

      _classCallCheck(this, UnaryMinusExpressionNode);

      _this11 = _super11.call(this);
      _this11.type = 'UnaryMinusExpressionNode';
      _this11.expression = expression;
      return _this11;
    }

    return _createClass(UnaryMinusExpressionNode);
  }(Expression),
  ArithmeticExpressionAddNode: /*#__PURE__*/function (_Expression2) {
    _inherits(ArithmeticExpressionAddNode, _Expression2);

    var _super12 = _createSuper(ArithmeticExpressionAddNode);

    function ArithmeticExpressionAddNode(expression1, expression2) {
      var _this12;

      _classCallCheck(this, ArithmeticExpressionAddNode);

      _this12 = _super12.call(this);
      _this12.type = 'ArithmeticExpressionAddNode';
      _this12.expression1 = expression1;
      _this12.expression2 = expression2;
      return _this12;
    }

    return _createClass(ArithmeticExpressionAddNode);
  }(Expression),
  ArithmeticExpressionMinusNode: /*#__PURE__*/function (_Expression3) {
    _inherits(ArithmeticExpressionMinusNode, _Expression3);

    var _super13 = _createSuper(ArithmeticExpressionMinusNode);

    function ArithmeticExpressionMinusNode(expression1, expression2) {
      var _this13;

      _classCallCheck(this, ArithmeticExpressionMinusNode);

      _this13 = _super13.call(this);
      _this13.type = 'ArithmeticExpressionMinusNode';
      _this13.expression1 = expression1;
      _this13.expression2 = expression2;
      return _this13;
    }

    return _createClass(ArithmeticExpressionMinusNode);
  }(Expression),
  ArithmeticExpressionMultiplyNode: /*#__PURE__*/function (_Expression4) {
    _inherits(ArithmeticExpressionMultiplyNode, _Expression4);

    var _super14 = _createSuper(ArithmeticExpressionMultiplyNode);

    function ArithmeticExpressionMultiplyNode(expression1, expression2) {
      var _this14;

      _classCallCheck(this, ArithmeticExpressionMultiplyNode);

      _this14 = _super14.call(this);
      _this14.type = 'ArithmeticExpressionMultiplyNode';
      _this14.expression1 = expression1;
      _this14.expression2 = expression2;
      return _this14;
    }

    return _createClass(ArithmeticExpressionMultiplyNode);
  }(Expression),
  ArithmeticExpressionExponentNode: /*#__PURE__*/function (_Expression5) {
    _inherits(ArithmeticExpressionExponentNode, _Expression5);

    var _super15 = _createSuper(ArithmeticExpressionExponentNode);

    function ArithmeticExpressionExponentNode(expression1, expression2) {
      var _this15;

      _classCallCheck(this, ArithmeticExpressionExponentNode);

      _this15 = _super15.call(this);
      _this15.type = 'ArithmeticExpressionExponentNode';
      _this15.expression1 = expression1;
      _this15.expression2 = expression2;
      return _this15;
    }

    return _createClass(ArithmeticExpressionExponentNode);
  }(Expression),
  ArithmeticExpressionDivideNode: /*#__PURE__*/function (_Expression6) {
    _inherits(ArithmeticExpressionDivideNode, _Expression6);

    var _super16 = _createSuper(ArithmeticExpressionDivideNode);

    function ArithmeticExpressionDivideNode(expression1, expression2) {
      var _this16;

      _classCallCheck(this, ArithmeticExpressionDivideNode);

      _this16 = _super16.call(this);
      _this16.type = 'ArithmeticExpressionDivideNode';
      _this16.expression1 = expression1;
      _this16.expression2 = expression2;
      return _this16;
    }

    return _createClass(ArithmeticExpressionDivideNode);
  }(Expression),
  ArithmeticExpressionModuloNode: /*#__PURE__*/function (_Expression7) {
    _inherits(ArithmeticExpressionModuloNode, _Expression7);

    var _super17 = _createSuper(ArithmeticExpressionModuloNode);

    function ArithmeticExpressionModuloNode(expression1, expression2) {
      var _this17;

      _classCallCheck(this, ArithmeticExpressionModuloNode);

      _this17 = _super17.call(this);
      _this17.type = 'ArithmeticExpressionModuloNode';
      _this17.expression1 = expression1;
      _this17.expression2 = expression2;
      return _this17;
    }

    return _createClass(ArithmeticExpressionModuloNode);
  }(Expression),
  // /////////////// Boolean Expression Nodes
  NegatedBooleanExpressionNode: /*#__PURE__*/function (_Expression8) {
    _inherits(NegatedBooleanExpressionNode, _Expression8);

    var _super18 = _createSuper(NegatedBooleanExpressionNode);

    function NegatedBooleanExpressionNode(expression) {
      var _this18;

      _classCallCheck(this, NegatedBooleanExpressionNode);

      _this18 = _super18.call(this);
      _this18.type = 'NegatedBooleanExpressionNode';
      _this18.expression = expression;
      return _this18;
    }

    return _createClass(NegatedBooleanExpressionNode);
  }(Expression),
  BooleanOrExpressionNode: /*#__PURE__*/function (_Expression9) {
    _inherits(BooleanOrExpressionNode, _Expression9);

    var _super19 = _createSuper(BooleanOrExpressionNode);

    function BooleanOrExpressionNode(expression1, expression2) {
      var _this19;

      _classCallCheck(this, BooleanOrExpressionNode);

      _this19 = _super19.call(this);
      _this19.type = 'BooleanOrExpressionNode';
      _this19.expression1 = expression1;
      _this19.expression2 = expression2;
      return _this19;
    }

    return _createClass(BooleanOrExpressionNode);
  }(Expression),
  BooleanAndExpressionNode: /*#__PURE__*/function (_Expression10) {
    _inherits(BooleanAndExpressionNode, _Expression10);

    var _super20 = _createSuper(BooleanAndExpressionNode);

    function BooleanAndExpressionNode(expression1, expression2) {
      var _this20;

      _classCallCheck(this, BooleanAndExpressionNode);

      _this20 = _super20.call(this);
      _this20.type = 'BooleanAndExpressionNode';
      _this20.expression1 = expression1;
      _this20.expression2 = expression2;
      return _this20;
    }

    return _createClass(BooleanAndExpressionNode);
  }(Expression),
  BooleanXorExpressionNode: /*#__PURE__*/function (_Expression11) {
    _inherits(BooleanXorExpressionNode, _Expression11);

    var _super21 = _createSuper(BooleanXorExpressionNode);

    function BooleanXorExpressionNode(expression1, expression2) {
      var _this21;

      _classCallCheck(this, BooleanXorExpressionNode);

      _this21 = _super21.call(this);
      _this21.type = 'BooleanXorExpressionNode';
      _this21.expression1 = expression1;
      _this21.expression2 = expression2;
      return _this21;
    }

    return _createClass(BooleanXorExpressionNode);
  }(Expression),
  EqualToExpressionNode: /*#__PURE__*/function (_Expression12) {
    _inherits(EqualToExpressionNode, _Expression12);

    var _super22 = _createSuper(EqualToExpressionNode);

    function EqualToExpressionNode(expression1, expression2) {
      var _this22;

      _classCallCheck(this, EqualToExpressionNode);

      _this22 = _super22.call(this);
      _this22.type = 'EqualToExpressionNode';
      _this22.expression1 = expression1;
      _this22.expression2 = expression2;
      return _this22;
    }

    return _createClass(EqualToExpressionNode);
  }(Expression),
  NotEqualToExpressionNode: /*#__PURE__*/function (_Expression13) {
    _inherits(NotEqualToExpressionNode, _Expression13);

    var _super23 = _createSuper(NotEqualToExpressionNode);

    function NotEqualToExpressionNode(expression1, expression2) {
      var _this23;

      _classCallCheck(this, NotEqualToExpressionNode);

      _this23 = _super23.call(this);
      _this23.type = 'NotEqualToExpressionNode';
      _this23.expression1 = expression1;
      _this23.expression2 = expression2;
      return _this23;
    }

    return _createClass(NotEqualToExpressionNode);
  }(Expression),
  GreaterThanExpressionNode: /*#__PURE__*/function (_Expression14) {
    _inherits(GreaterThanExpressionNode, _Expression14);

    var _super24 = _createSuper(GreaterThanExpressionNode);

    function GreaterThanExpressionNode(expression1, expression2) {
      var _this24;

      _classCallCheck(this, GreaterThanExpressionNode);

      _this24 = _super24.call(this);
      _this24.type = 'GreaterThanExpressionNode';
      _this24.expression1 = expression1;
      _this24.expression2 = expression2;
      return _this24;
    }

    return _createClass(GreaterThanExpressionNode);
  }(Expression),
  GreaterThanOrEqualToExpressionNode: /*#__PURE__*/function (_Expression15) {
    _inherits(GreaterThanOrEqualToExpressionNode, _Expression15);

    var _super25 = _createSuper(GreaterThanOrEqualToExpressionNode);

    function GreaterThanOrEqualToExpressionNode(expression1, expression2) {
      var _this25;

      _classCallCheck(this, GreaterThanOrEqualToExpressionNode);

      _this25 = _super25.call(this);
      _this25.type = 'GreaterThanOrEqualToExpressionNode';
      _this25.expression1 = expression1;
      _this25.expression2 = expression2;
      return _this25;
    }

    return _createClass(GreaterThanOrEqualToExpressionNode);
  }(Expression),
  LessThanExpressionNode: /*#__PURE__*/function (_Expression16) {
    _inherits(LessThanExpressionNode, _Expression16);

    var _super26 = _createSuper(LessThanExpressionNode);

    function LessThanExpressionNode(expression1, expression2) {
      var _this26;

      _classCallCheck(this, LessThanExpressionNode);

      _this26 = _super26.call(this);
      _this26.type = 'LessThanExpressionNode';
      _this26.expression1 = expression1;
      _this26.expression2 = expression2;
      return _this26;
    }

    return _createClass(LessThanExpressionNode);
  }(Expression),
  LessThanOrEqualToExpressionNode: /*#__PURE__*/function (_Expression17) {
    _inherits(LessThanOrEqualToExpressionNode, _Expression17);

    var _super27 = _createSuper(LessThanOrEqualToExpressionNode);

    function LessThanOrEqualToExpressionNode(expression1, expression2) {
      var _this27;

      _classCallCheck(this, LessThanOrEqualToExpressionNode);

      _this27 = _super27.call(this);
      _this27.type = 'LessThanOrEqualToExpressionNode';
      _this27.expression1 = expression1;
      _this27.expression2 = expression2;
      return _this27;
    }

    return _createClass(LessThanOrEqualToExpressionNode);
  }(Expression),
  // /////////////// Assignment Expression Nodes
  SetVariableEqualToNode: /*#__PURE__*/function (_Assignment) {
    _inherits(SetVariableEqualToNode, _Assignment);

    var _super28 = _createSuper(SetVariableEqualToNode);

    function SetVariableEqualToNode(variableName, expression) {
      var _this28;

      _classCallCheck(this, SetVariableEqualToNode);

      _this28 = _super28.call(this);
      _this28.type = 'SetVariableEqualToNode';
      _this28.variableName = variableName;
      _this28.expression = expression;
      return _this28;
    }

    return _createClass(SetVariableEqualToNode);
  }(Assignment),
  // /////////////// Function Nodes
  FunctionResultNode: /*#__PURE__*/function (_FunctionCall) {
    _inherits(FunctionResultNode, _FunctionCall);

    var _super29 = _createSuper(FunctionResultNode);

    function FunctionResultNode(functionName, args, lineNo) {
      var _this29;

      var hashtags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      _classCallCheck(this, FunctionResultNode);

      _this29 = _super29.call(this);
      _this29.type = 'FunctionResultNode';
      _this29.functionName = functionName;
      _this29.args = args;
      _this29.lineNum = lineNo ? lineNo.first_line : -1;
      _this29.hashtags = hashtags;
      return _this29;
    }

    return _createClass(FunctionResultNode);
  }(FunctionCall),
  JumpNode: /*#__PURE__*/function (_FunctionCall2) {
    _inherits(JumpNode, _FunctionCall2);

    var _super30 = _createSuper(JumpNode);

    function JumpNode(destination) {
      var _this30;

      _classCallCheck(this, JumpNode);

      _this30 = _super30.call(this);
      _this30.type = 'JumpNode';
      _this30.destination = destination;
      return _this30;
    }

    return _createClass(JumpNode);
  }(FunctionCall),
  StopNode: /*#__PURE__*/function (_FunctionCall3) {
    _inherits(StopNode, _FunctionCall3);

    var _super31 = _createSuper(StopNode);

    function StopNode() {
      var _this31;

      _classCallCheck(this, StopNode);

      _this31 = _super31.call(this);
      _this31.type = 'StopNode';
      return _this31;
    }

    return _createClass(StopNode);
  }(FunctionCall),
  // /////////////// Inline Expression
  InlineExpressionNode: /*#__PURE__*/function (_Expression18) {
    _inherits(InlineExpressionNode, _Expression18);

    var _super32 = _createSuper(InlineExpressionNode);

    function InlineExpressionNode(expression, lineNo) {
      var _this32;

      var hashtags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      _classCallCheck(this, InlineExpressionNode);

      _this32 = _super32.call(this);
      _this32.type = 'InlineExpressionNode';
      _this32.expression = expression;
      _this32.lineNum = lineNo.first_line;
      _this32.hashtags = hashtags;
      return _this32;
    }

    return _createClass(InlineExpressionNode);
  }(Expression)
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 1625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _nodes = _interopRequireDefault(__webpack_require__(9987));

var _lexer = _interopRequireDefault(__webpack_require__(3271));

var _compiledParser = __webpack_require__(5087);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_compiledParser.parser.lexer = new _lexer.default();
_compiledParser.parser.yy = _nodes.default;
_compiledParser.parser.yy.declarations = {};

_compiledParser.parser.yy.registerDeclaration = function registerDeclaration(variableName, expression, explicitType) {
  if (!this.areDeclarationsHandled) {
    if (this.declarations[variableName]) {
      throw new Error("Duplicate declaration found for variable: ".concat(variableName));
    }

    this.declarations[variableName] = {
      variableName: variableName,
      expression: expression,
      explicitType: explicitType
    };
  }
};

var _default = _compiledParser.parser;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 2457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(489);

__webpack_require__(1539);

__webpack_require__(2419);

__webpack_require__(2526);

__webpack_require__(1817);

__webpack_require__(2165);

__webpack_require__(6992);

__webpack_require__(8783);

__webpack_require__(3948);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__webpack_require__(8309);

__webpack_require__(1249);

__webpack_require__(2222);

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = /*#__PURE__*/_createClass(function Result() {
  _classCallCheck(this, Result);
});

var TextResult = /*#__PURE__*/function (_Result) {
  _inherits(TextResult, _Result);

  var _super = _createSuper(TextResult);

  /**
   * Create a text display result
   * @param {string} [text] text to be displayed
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  function TextResult(text, hashtags, metadata) {
    var _this;

    _classCallCheck(this, TextResult);

    _this = _super.call(this);
    _this.text = text;
    _this.hashtags = hashtags;
    _this.metadata = metadata;
    return _this;
  }

  return _createClass(TextResult);
}(Result);

var CommandResult = /*#__PURE__*/function (_Result2) {
  _inherits(CommandResult, _Result2);

  var _super2 = _createSuper(CommandResult);

  /**
   * Return a command string
   * @param {string} [name] the function name being called
   * @param {[]} [args] the array of arguments for the function
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  function CommandResult(name, args, hashtags, metadata) {
    var _this2;

    _classCallCheck(this, CommandResult);

    _this2 = _super2.call(this);
    _this2.name = name;
    _this2.args = args;
    _this2.hashtags = hashtags;
    _this2.metadata = metadata;
    return _this2;
  }

  return _createClass(CommandResult);
}(Result);

var OptionResult = /*#__PURE__*/function (_Result3) {
  _inherits(OptionResult, _Result3);

  var _super3 = _createSuper(OptionResult);

  /**
   * Strip down Conditional option for presentation
   * @param {string} [text] option text to display
   * @param {boolean} [isAvailable] whether option is available
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  function OptionResult(text) {
    var _this3;

    var isAvailable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var hashtags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var metadata = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, OptionResult);

    _this3 = _super3.call(this);
    _this3.text = text;
    _this3.isAvailable = isAvailable;
    _this3.hashtags = hashtags;
    _this3.metadata = metadata;
    return _this3;
  }

  return _createClass(OptionResult);
}(Result);

var OptionsResult = /*#__PURE__*/function (_Result4) {
  _inherits(OptionsResult, _Result4);

  var _super4 = _createSuper(OptionsResult);

  /**
   * Create a selectable list of options from the given list of text
   * @param {OptionResult[]} [options] list of the text of options to be shown
   * @param {object} [metadata] the parent yarn node
   */
  function OptionsResult(options, metadata) {
    var _this4;

    _classCallCheck(this, OptionsResult);

    _this4 = _super4.call(this);
    _this4.options = options.map(function (s) {
      return new OptionResult(s.text, s.isAvailable, s.hashtags);
    });
    _this4.metadata = metadata;
    return _this4;
  }

  _createClass(OptionsResult, [{
    key: "select",
    value: function select() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

      if (index < 0 || index >= this.options.length) {
        throw new Error("Cannot select option #".concat(index, ", there are ").concat(this.options.length, " options"));
      }

      this.selected = index;
    }
  }]);

  return OptionsResult;
}(Result);

var _default = {
  Result: Result,
  TextResult: TextResult,
  CommandResult: CommandResult,
  OptionsResult: OptionsResult
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 5359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2526);

__webpack_require__(1817);

__webpack_require__(2165);

__webpack_require__(7042);

__webpack_require__(8309);

__webpack_require__(7941);

__webpack_require__(5003);

__webpack_require__(9337);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__webpack_require__(5666);

__webpack_require__(1539);

__webpack_require__(4747);

__webpack_require__(4916);

__webpack_require__(3123);

__webpack_require__(2222);

__webpack_require__(4723);

__webpack_require__(9600);

__webpack_require__(9720);

__webpack_require__(1038);

__webpack_require__(8783);

__webpack_require__(6992);

__webpack_require__(3948);

__webpack_require__(7327);

__webpack_require__(9714);

__webpack_require__(1249);

__webpack_require__(9601);

var _parser = _interopRequireDefault(__webpack_require__(1625));

var _results = _interopRequireDefault(__webpack_require__(2457));

var _defaultVariableStorage = _interopRequireDefault(__webpack_require__(1826));

var _convertYarn = _interopRequireDefault(__webpack_require__(9722));

var _nodes = _interopRequireDefault(__webpack_require__(9987));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var nodeTypes = _nodes.default.types;

var Runner = /*#__PURE__*/function () {
  function Runner() {
    var _this = this;

    _classCallCheck(this, Runner);

    this.yarnNodes = {};
    this.variables = new _defaultVariableStorage.default();
    this.functions = {};
    this.visited = {}; // Which nodes have been visited

    this.registerFunction('visited', function (nodeTitle) {
      return !!_this.visited[nodeTitle];
    });
  }
  /**
   * Loads the yarn node data into this.nodes
   * @param {any[]} yarn dialogue as string or array
   */


  _createClass(Runner, [{
    key: "load",
    value: function load(data) {
      var _this2 = this;

      var nodes = data;

      if (typeof data === 'string') {
        nodes = (0, _convertYarn.default)(data);
      }

      nodes.forEach(function (node) {
        if (!node.title) {
          throw new Error("Node needs a title: ".concat(JSON.stringify(node)));
        } else if (node.title.split('.').length > 1) {
          throw new Error("Node title cannot contain a dot: ".concat(node.title));
        }

        if (!node.body) {
          throw new Error("Node needs a body: ".concat(JSON.stringify(node)));
        }

        if (_this2.yarnNodes[node.title]) {
          throw new Error("Duplicate node title: ".concat(node.title));
        }

        _this2.yarnNodes[node.title] = node;
      });
      _parser.default.yy.areDeclarationsHandled = false;
      _parser.default.yy.declarations = {};
      this.handleDeclarations(nodes);
      _parser.default.yy.areDeclarationsHandled = true;
    }
    /**
     * Set a new variable storage object
     * This must simply contain a 'get(name)' and 'set(name, value)' function
     *
     * Calling this function will clear any existing variable's values
     */

  }, {
    key: "setVariableStorage",
    value: function setVariableStorage(storage) {
      if (typeof storage.set !== 'function' || typeof storage.get !== 'function') {
        throw new Error('Variable Storage object must contain both a "set" and "get" function');
      }

      this.variables = storage;
    }
    /**
     * Scans for <<declare>> commands and sets initial variable values
     * @param {any[]} yarn dialogue as string or array
     */

  }, {
    key: "handleDeclarations",
    value: function handleDeclarations(nodes) {
      var _this3 = this;

      var exampleValues = {
        Number: 0,
        String: '',
        Boolean: false
      };
      var allLines = nodes.reduce(function (acc, node) {
        var nodeLines = node.body.split(/\r?\n+/);
        return [].concat(_toConsumableArray(acc), _toConsumableArray(nodeLines));
      }, []);
      var declareLines = allLines.reduce(function (acc, line) {
        var match = line.match(/^<<declare .+>>/);
        return match ? [].concat(_toConsumableArray(acc), [line]) : acc;
      }, []);

      if (declareLines.length) {
        _parser.default.parse(declareLines.join('\n'));
      }

      Object.entries(_parser.default.yy.declarations).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            variableName = _ref2[0],
            _ref2$ = _ref2[1],
            expression = _ref2$.expression,
            explicitType = _ref2$.explicitType;

        var value = _this3.evaluateExpressionOrLiteral(expression);

        if (explicitType && _typeof(value) !== _typeof(exampleValues[explicitType])) {
          throw new Error("Cannot declare value ".concat(value, " as type ").concat(explicitType, " for variable ").concat(variableName));
        }

        if (!_this3.variables.get(variableName)) {
          _this3.variables.set(variableName, value);
        }
      });
    }
  }, {
    key: "registerFunction",
    value: function registerFunction(name, func) {
      if (typeof func !== 'function') {
        throw new Error('Registered function must be...well...a function');
      }

      this.functions[name] = func;
    }
    /**
     * Generator to return each sequential dialog result starting from the given node
     * @param {string} [startNode] - The name of the yarn node to begin at
     */

  }, {
    key: "run",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function run(startNode) {
      var yarnNode, parserNodes, metadata;
      return regeneratorRuntime.wrap(function run$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              yarnNode = this.yarnNodes[startNode];

              if (!(yarnNode === undefined)) {
                _context.next = 3;
                break;
              }

              throw new Error("Node \"".concat(startNode, "\" does not exist"));

            case 3:
              this.visited[startNode] = true; // Parse the entire node

              parserNodes = Array.from(_parser.default.parse(yarnNode.body));
              metadata = _objectSpread({}, yarnNode);
              delete metadata.body;
              return _context.delegateYield(this.evalNodes(parserNodes, metadata, true), "t0", 8);

            case 8:
              return _context.abrupt("return", _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, run, this);
    })
    /**
     * Evaluate a list of parser nodes, yielding the ones that need to be seen by
     * the user. Calls itself recursively if that is required by nested nodes
     * @param {Node[]} nodes
     * @param {YarnNode[]} metadata
     * @param {boolean} isRoot - did we get here from run()
     */

  }, {
    key: "evalNodes",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function evalNodes(nodes, metadata, isRoot) {
      var shortcutNodes, prevnode, textRun, filteredNodes, nodeIdx, node, nextNode, result, evalResult, _result, funcArgs;

      return regeneratorRuntime.wrap(function evalNodes$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              shortcutNodes = [];
              prevnode = null;
              textRun = '';
              filteredNodes = nodes.filter(Boolean); // Yield the individual user-visible results
              // Need to accumulate all adjacent selectables
              // into one list (hence some of the weirdness here)

              nodeIdx = 0;

            case 5:
              if (!(nodeIdx < filteredNodes.length)) {
                _context2.next = 53;
                break;
              }

              node = filteredNodes[nodeIdx];
              nextNode = filteredNodes[nodeIdx + 1];

              if (!(prevnode instanceof nodeTypes.Shortcut && !(node instanceof nodeTypes.Shortcut))) {
                _context2.next = 14;
                break;
              }

              return _context2.delegateYield(this.handleShortcuts(shortcutNodes, metadata), "t0", 10);

            case 10:
              result = _context2.t0;

              if (!(result && result.stop)) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt("return", result);

            case 13:
              shortcutNodes = [];

            case 14:
              if (!(node instanceof nodeTypes.Text || node instanceof nodeTypes.Expression)) {
                _context2.next = 24;
                break;
              }

              textRun += this.evaluateExpressionOrLiteral(node).toString();

              if (!(nextNode && node.lineNum === nextNode.lineNum && (nextNode instanceof nodeTypes.Text || nextNode instanceof nodeTypes.Expression))) {
                _context2.next = 19;
                break;
              }

              _context2.next = 22;
              break;

            case 19:
              _context2.next = 21;
              return new _results.default.TextResult(textRun, node.hashtags, metadata);

            case 21:
              textRun = '';

            case 22:
              _context2.next = 49;
              break;

            case 24:
              if (!(node instanceof nodeTypes.Shortcut)) {
                _context2.next = 28;
                break;
              }

              shortcutNodes.push(node);
              _context2.next = 49;
              break;

            case 28:
              if (!(node instanceof nodeTypes.Assignment)) {
                _context2.next = 32;
                break;
              }

              this.evaluateAssignment(node);
              _context2.next = 49;
              break;

            case 32:
              if (!(node instanceof nodeTypes.Conditional)) {
                _context2.next = 41;
                break;
              }

              // Get the results of the conditional
              evalResult = this.evaluateConditional(node);

              if (!evalResult) {
                _context2.next = 39;
                break;
              }

              return _context2.delegateYield(this.evalNodes(evalResult, metadata), "t1", 36);

            case 36:
              _result = _context2.t1;

              if (!(_result && _result.stop)) {
                _context2.next = 39;
                break;
              }

              return _context2.abrupt("return", _result);

            case 39:
              _context2.next = 49;
              break;

            case 41:
              if (!(node.type === 'JumpNode')) {
                _context2.next = 44;
                break;
              }

              return _context2.delegateYield(this.run(node.destination), "t2", 43);

            case 43:
              return _context2.abrupt("return", isRoot ? undefined : {
                stop: true
              });

            case 44:
              if (!(node.type === 'StopNode')) {
                _context2.next = 46;
                break;
              }

              return _context2.abrupt("return", isRoot ? undefined : {
                stop: true
              });

            case 46:
              funcArgs = node.args.map(this.evaluateExpressionOrLiteral, this);
              _context2.next = 49;
              return new _results.default.CommandResult(node.functionName, funcArgs, node.hashtags, metadata);

            case 49:
              prevnode = node;

            case 50:
              nodeIdx += 1;
              _context2.next = 5;
              break;

            case 53:
              if (!(shortcutNodes.length > 0)) {
                _context2.next = 56;
                break;
              }

              return _context2.delegateYield(this.handleShortcuts(shortcutNodes, metadata), "t3", 55);

            case 55:
              return _context2.abrupt("return", _context2.t3);

            case 56:
              return _context2.abrupt("return", undefined);

            case 57:
            case "end":
              return _context2.stop();
          }
        }
      }, evalNodes, this);
    })
    /**
     * yield a shortcut result then handle the subsequent selection
     * @param {any[]} selections
     */

  }, {
    key: "handleShortcuts",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function handleShortcuts(selections, metadata) {
      var _this4 = this;

      var transformedSelections, optionsResult, selectedOption;
      return regeneratorRuntime.wrap(function handleShortcuts$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // Multiple options to choose from (or just a single shortcut)
              // Tag any conditional dialog options that result to false,
              // the consuming app does the actual filtering or whatever
              transformedSelections = selections.map(function (s) {
                var isAvailable = true;
                var text = '';

                if (s.conditionalExpression && !_this4.evaluateExpressionOrLiteral(s.conditionalExpression)) {
                  isAvailable = false;
                }

                text = s.text.reduce(function (acc, node) {
                  return acc + _this4.evaluateExpressionOrLiteral(node).toString();
                }, '');
                return Object.assign(s, {
                  isAvailable: isAvailable,
                  text: text
                });
              });
              optionsResult = new _results.default.OptionsResult(transformedSelections, metadata);
              _context3.next = 4;
              return optionsResult;

            case 4:
              if (!(typeof optionsResult.selected === 'number')) {
                _context3.next = 11;
                break;
              }

              selectedOption = transformedSelections[optionsResult.selected];

              if (!selectedOption.content) {
                _context3.next = 9;
                break;
              }

              return _context3.delegateYield(this.evalNodes(selectedOption.content, metadata), "t0", 8);

            case 8:
              return _context3.abrupt("return", _context3.t0);

            case 9:
              _context3.next = 12;
              break;

            case 11:
              throw new Error('No option selected before resuming dialogue');

            case 12:
              return _context3.abrupt("return", undefined);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, handleShortcuts, this);
    })
    /**
     * Evaluates the given assignment node
     */

  }, {
    key: "evaluateAssignment",
    value: function evaluateAssignment(node) {
      var result = this.evaluateExpressionOrLiteral(node.expression);
      var oldValue = this.variables.get(node.variableName);

      if (oldValue && _typeof(oldValue) !== _typeof(result)) {
        throw new Error("Variable ".concat(node.variableName, " is already type ").concat(_typeof(oldValue), "; cannot set equal to ").concat(result, " of type ").concat(_typeof(result)));
      }

      this.variables.set(node.variableName, result);
    }
    /**
     * Evaluates the given conditional node
     * Returns the statements to be run as a result of it (if any)
     */

  }, {
    key: "evaluateConditional",
    value: function evaluateConditional(node) {
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
  }, {
    key: "evaluateFunctionCall",
    value: function evaluateFunctionCall(node) {
      if (this.functions[node.functionName]) {
        var _this$functions;

        return (_this$functions = this.functions)[node.functionName].apply(_this$functions, _toConsumableArray(node.args.map(this.evaluateExpressionOrLiteral, this)));
      }

      throw new Error("Function \"".concat(node.functionName, "\" not found"));
    }
    /**
     * Evaluates an expression or literal down to its final value
     */

  }, {
    key: "evaluateExpressionOrLiteral",
    value: function evaluateExpressionOrLiteral(node) {
      var _this5 = this;

      var nodeHandlers = {
        UnaryMinusExpressionNode: function UnaryMinusExpressionNode(a) {
          return -a;
        },
        ArithmeticExpressionAddNode: function ArithmeticExpressionAddNode(a, b) {
          return a + b;
        },
        ArithmeticExpressionMinusNode: function ArithmeticExpressionMinusNode(a, b) {
          return a - b;
        },
        ArithmeticExpressionExponentNode: function ArithmeticExpressionExponentNode(a, b) {
          return Math.pow(a, b);
        },
        ArithmeticExpressionMultiplyNode: function ArithmeticExpressionMultiplyNode(a, b) {
          return a * b;
        },
        ArithmeticExpressionDivideNode: function ArithmeticExpressionDivideNode(a, b) {
          return a / b;
        },
        ArithmeticExpressionModuloNode: function ArithmeticExpressionModuloNode(a, b) {
          return a % b;
        },
        NegatedBooleanExpressionNode: function NegatedBooleanExpressionNode(a) {
          return !a;
        },
        BooleanOrExpressionNode: function BooleanOrExpressionNode(a, b) {
          return a || b;
        },
        BooleanAndExpressionNode: function BooleanAndExpressionNode(a, b) {
          return a && b;
        },
        BooleanXorExpressionNode: function BooleanXorExpressionNode(a, b) {
          return !!(a ^ b);
        },
        // eslint-disable-line no-bitwise
        EqualToExpressionNode: function EqualToExpressionNode(a, b) {
          return a === b;
        },
        NotEqualToExpressionNode: function NotEqualToExpressionNode(a, b) {
          return a !== b;
        },
        GreaterThanExpressionNode: function GreaterThanExpressionNode(a, b) {
          return a > b;
        },
        GreaterThanOrEqualToExpressionNode: function GreaterThanOrEqualToExpressionNode(a, b) {
          return a >= b;
        },
        LessThanExpressionNode: function LessThanExpressionNode(a, b) {
          return a < b;
        },
        LessThanOrEqualToExpressionNode: function LessThanOrEqualToExpressionNode(a, b) {
          return a <= b;
        },
        TextNode: function TextNode(a) {
          return a.text;
        },
        NumericLiteralNode: function NumericLiteralNode(a) {
          return parseFloat(a.numericLiteral);
        },
        StringLiteralNode: function StringLiteralNode(a) {
          return "".concat(a.stringLiteral);
        },
        BooleanLiteralNode: function BooleanLiteralNode(a) {
          return a.booleanLiteral === 'true';
        },
        VariableNode: function VariableNode(a) {
          return _this5.variables.get(a.variableName);
        },
        FunctionResultNode: function FunctionResultNode(a) {
          return _this5.evaluateFunctionCall(a);
        },
        InlineExpressionNode: function InlineExpressionNode(a) {
          return a;
        }
      };
      var handler = nodeHandlers[node.type];

      if (!handler) {
        throw new Error("node type not recognized: ".concat(node.type));
      }

      return handler(node instanceof nodeTypes.Expression ? this.evaluateExpressionOrLiteral(node.expression || node.expression1) : node, node.expression2 ? this.evaluateExpressionOrLiteral(node.expression2) : node);
    }
  }]);

  return Runner;
}();

var _default = {
  Runner: Runner,
  TextResult: _results.default.TextResult,
  CommandResult: _results.default.CommandResult,
  OptionsResult: _results.default.OptionsResult
};
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 9483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isConstructor = __webpack_require__(4411);
var tryToString = __webpack_require__(6330);

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ 1223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 1530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(8710).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ 8533:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(2092).forEach);
var arrayMethodIsStrict = __webpack_require__(9341);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 8457:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var bind = __webpack_require__(9974);
var call = __webpack_require__(6916);
var toObject = __webpack_require__(7908);
var callWithSafeIterationClosing = __webpack_require__(3411);
var isArrayIteratorMethod = __webpack_require__(7659);
var isConstructor = __webpack_require__(4411);
var lengthOfArrayLike = __webpack_require__(6244);
var createProperty = __webpack_require__(6135);
var getIterator = __webpack_require__(8554);
var getIteratorMethod = __webpack_require__(1246);

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 2092:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(9974);
var uncurryThis = __webpack_require__(1702);
var IndexedObject = __webpack_require__(8361);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var arraySpeciesCreate = __webpack_require__(5417);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 1194:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var V8_VERSION = __webpack_require__(7392);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 9341:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7293);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 1589:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);
var createProperty = __webpack_require__(6135);

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ 206:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 7475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isArray = __webpack_require__(3157);
var isConstructor = __webpack_require__(4411);
var isObject = __webpack_require__(111);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 5417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(7475);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 3411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var iteratorClose = __webpack_require__(9212);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 7072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 4994:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(3383).IteratorPrototype);
var create = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(9114);
var setToStringTag = __webpack_require__(8003);
var Iterators = __webpack_require__(7497);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 6135:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(4948);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 654:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var call = __webpack_require__(6916);
var IS_PURE = __webpack_require__(1913);
var FunctionName = __webpack_require__(6530);
var isCallable = __webpack_require__(614);
var createIteratorConstructor = __webpack_require__(4994);
var getPrototypeOf = __webpack_require__(9518);
var setPrototypeOf = __webpack_require__(7674);
var setToStringTag = __webpack_require__(8003);
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var wellKnownSymbol = __webpack_require__(5112);
var Iterators = __webpack_require__(7497);
var IteratorsCore = __webpack_require__(3383);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 7235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(857);
var hasOwn = __webpack_require__(2597);
var wrappedWellKnownSymbolModule = __webpack_require__(6061);
var defineProperty = (__webpack_require__(3070).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 8324:
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 8509:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(317);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var setGlobal = __webpack_require__(3505);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 7007:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(4916);
var uncurryThis = __webpack_require__(1702);
var redefine = __webpack_require__(1320);
var regexpExec = __webpack_require__(2261);
var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var createNonEnumerableProperty = __webpack_require__(8880);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var isArray = __webpack_require__(3157);
var lengthOfArrayLike = __webpack_require__(6244);
var bind = __webpack_require__(9974);

var TypeError = global.TypeError;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 2104:
/***/ (function(module) {

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 9974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(9662);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 7065:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(9662);
var isObject = __webpack_require__(111);
var hasOwn = __webpack_require__(2597);
var arraySlice = __webpack_require__(206);

var Function = global.Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ 6916:
/***/ (function(module) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = bind && bind.bind(call, call);

module.exports = bind ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 1246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(648);
var getMethod = __webpack_require__(8173);
var Iterators = __webpack_require__(7497);
var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 8554:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var aCallable = __webpack_require__(9662);
var anObject = __webpack_require__(9670);
var tryToString = __webpack_require__(6330);
var getIteratorMethod = __webpack_require__(1246);

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 7659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var Iterators = __webpack_require__(7497);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 614:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var classof = __webpack_require__(648);
var getBuiltIn = __webpack_require__(5005);
var inspectSource = __webpack_require__(2788);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 7850:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);
var classof = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ 9212:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var anObject = __webpack_require__(9670);
var getMethod = __webpack_require__(8173);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 3383:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var create = __webpack_require__(30);
var getPrototypeOf = __webpack_require__(9518);
var redefine = __webpack_require__(1320);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 7497:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 1574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var uncurryThis = __webpack_require__(1702);
var call = __webpack_require__(6916);
var fails = __webpack_require__(7293);
var objectKeys = __webpack_require__(1956);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var propertyIsEnumerableModule = __webpack_require__(5296);
var toObject = __webpack_require__(7908);
var IndexedObject = __webpack_require__(8361);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 30:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(9670);
var definePropertiesModule = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var toIndexedObject = __webpack_require__(5656);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(7854);
var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 1156:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(4326);
var toIndexedObject = __webpack_require__(5656);
var $getOwnPropertyNames = (__webpack_require__(8006).f);
var arraySlice = __webpack_require__(1589);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 9518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var hasOwn = __webpack_require__(2597);
var isCallable = __webpack_require__(614);
var toObject = __webpack_require__(7908);
var sharedKey = __webpack_require__(6200);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 1956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(1702);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 4699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var uncurryThis = __webpack_require__(1702);
var objectKeys = __webpack_require__(1956);
var toIndexedObject = __webpack_require__(5656);
var $propertyIsEnumerable = (__webpack_require__(5296).f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ 288:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var classof = __webpack_require__(648);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 857:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

module.exports = global;


/***/ }),

/***/ 1320:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var createNonEnumerableProperty = __webpack_require__(8880);
var setGlobal = __webpack_require__(3505);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 7651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var anObject = __webpack_require__(9670);
var isCallable = __webpack_require__(614);
var classof = __webpack_require__(4326);
var regexpExec = __webpack_require__(2261);

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ 2261:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var toString = __webpack_require__(1340);
var regexpFlags = __webpack_require__(7066);
var stickyHelpers = __webpack_require__(2999);
var shared = __webpack_require__(2309);
var create = __webpack_require__(30);
var getInternalState = (__webpack_require__(9909).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(9441);
var UNSUPPORTED_NCG = __webpack_require__(7168);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 7066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9670);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 2999:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ 9441:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ 7168:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3505:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(5005);
var definePropertyModule = __webpack_require__(3070);
var wellKnownSymbol = __webpack_require__(5112);
var DESCRIPTORS = __webpack_require__(9781);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 8003:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__(3070).f);
var hasOwn = __webpack_require__(2597);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var setGlobal = __webpack_require__(3505);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2022 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 6707:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var aConstructor = __webpack_require__(9483);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 8710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toIntegerOrInfinity = __webpack_require__(9303);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 6091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__(6530).PROPER);
var fails = __webpack_require__(7293);
var whitespaces = __webpack_require__(1361);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ 3111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var requireObjectCoercible = __webpack_require__(4488);
var toString = __webpack_require__(1340);
var whitespaces = __webpack_require__(1361);

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var requireObjectCoercible = __webpack_require__(4488);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var classof = __webpack_require__(648);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 6061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 1361:
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 2222:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var fails = __webpack_require__(7293);
var isArray = __webpack_require__(3157);
var isObject = __webpack_require__(111);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var createProperty = __webpack_require__(6135);
var arraySpeciesCreate = __webpack_require__(5417);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
var wellKnownSymbol = __webpack_require__(5112);
var V8_VERSION = __webpack_require__(7392);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 7327:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $filter = (__webpack_require__(2092).filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 9826:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $find = (__webpack_require__(2092).find);
var addToUnscopables = __webpack_require__(1223);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 4944:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var toIntegerOrInfinity = __webpack_require__(9303);
var arraySpeciesCreate = __webpack_require__(5417);

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});


/***/ }),

/***/ 1038:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var from = __webpack_require__(8457);
var checkCorrectnessOfIteration = __webpack_require__(7072);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 6992:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5656);
var addToUnscopables = __webpack_require__(1223);
var Iterators = __webpack_require__(7497);
var InternalStateModule = __webpack_require__(9909);
var defineProperty = (__webpack_require__(3070).f);
var defineIterator = __webpack_require__(654);
var IS_PURE = __webpack_require__(1913);
var DESCRIPTORS = __webpack_require__(9781);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 9600:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var uncurryThis = __webpack_require__(1702);
var IndexedObject = __webpack_require__(8361);
var toIndexedObject = __webpack_require__(5656);
var arrayMethodIsStrict = __webpack_require__(9341);

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 1249:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $map = (__webpack_require__(2092).map);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 7042:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var isArray = __webpack_require__(3157);
var isConstructor = __webpack_require__(4411);
var isObject = __webpack_require__(111);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);
var toIndexedObject = __webpack_require__(5656);
var createProperty = __webpack_require__(6135);
var wellKnownSymbol = __webpack_require__(5112);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
var un$Slice = __webpack_require__(206);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 3792:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(1223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');


/***/ }),

/***/ 8309:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var FUNCTION_NAME_EXISTS = (__webpack_require__(6530).EXISTS);
var uncurryThis = __webpack_require__(1702);
var defineProperty = (__webpack_require__(3070).f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ 9601:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var assign = __webpack_require__(1574);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 9720:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var $entries = (__webpack_require__(4699).entries);

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ 5003:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var toIndexedObject = __webpack_require__(5656);
var nativeGetOwnPropertyDescriptor = (__webpack_require__(1236).f);
var DESCRIPTORS = __webpack_require__(9781);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ 9337:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var ownKeys = __webpack_require__(3887);
var toIndexedObject = __webpack_require__(5656);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var createProperty = __webpack_require__(6135);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ 489:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var toObject = __webpack_require__(7908);
var nativeGetPrototypeOf = __webpack_require__(9518);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ 7941:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var nativeKeys = __webpack_require__(1956);
var fails = __webpack_require__(7293);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 1539:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var redefine = __webpack_require__(1320);
var toString = __webpack_require__(288);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 2419:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var getBuiltIn = __webpack_require__(5005);
var apply = __webpack_require__(2104);
var bind = __webpack_require__(7065);
var aConstructor = __webpack_require__(9483);
var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var create = __webpack_require__(30);
var fails = __webpack_require__(7293);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 4603:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isForced = __webpack_require__(4705);
var inheritIfRequired = __webpack_require__(9587);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineProperty = (__webpack_require__(3070).f);
var getOwnPropertyNames = (__webpack_require__(8006).f);
var isPrototypeOf = __webpack_require__(7976);
var isRegExp = __webpack_require__(7850);
var toString = __webpack_require__(1340);
var regExpFlags = __webpack_require__(7066);
var stickyHelpers = __webpack_require__(2999);
var redefine = __webpack_require__(1320);
var fails = __webpack_require__(7293);
var hasOwn = __webpack_require__(2597);
var enforceInternalState = (__webpack_require__(9909).enforce);
var setSpecies = __webpack_require__(6340);
var wellKnownSymbol = __webpack_require__(5112);
var UNSUPPORTED_DOT_ALL = __webpack_require__(9441);
var UNSUPPORTED_NCG = __webpack_require__(7168);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var getFlags = uncurryThis(regExpFlags);
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ 4916:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var exec = __webpack_require__(2261);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 9714:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(1702);
var PROPER_FUNCTION_NAME = (__webpack_require__(6530).PROPER);
var redefine = __webpack_require__(1320);
var anObject = __webpack_require__(9670);
var isPrototypeOf = __webpack_require__(7976);
var $toString = __webpack_require__(1340);
var fails = __webpack_require__(7293);
var regExpFlags = __webpack_require__(7066);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ 8783:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(8710).charAt);
var toString = __webpack_require__(1340);
var InternalStateModule = __webpack_require__(9909);
var defineIterator = __webpack_require__(654);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 4723:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6916);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var anObject = __webpack_require__(9670);
var toLength = __webpack_require__(7466);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);
var getMethod = __webpack_require__(8173);
var advanceStringIndex = __webpack_require__(1530);
var regExpExec = __webpack_require__(7651);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var fails = __webpack_require__(7293);
var anObject = __webpack_require__(9670);
var isCallable = __webpack_require__(614);
var toIntegerOrInfinity = __webpack_require__(9303);
var toLength = __webpack_require__(7466);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);
var advanceStringIndex = __webpack_require__(1530);
var getMethod = __webpack_require__(8173);
var getSubstitution = __webpack_require__(647);
var regExpExec = __webpack_require__(7651);
var wellKnownSymbol = __webpack_require__(5112);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 3123:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var isRegExp = __webpack_require__(7850);
var anObject = __webpack_require__(9670);
var requireObjectCoercible = __webpack_require__(4488);
var speciesConstructor = __webpack_require__(6707);
var advanceStringIndex = __webpack_require__(1530);
var toLength = __webpack_require__(7466);
var toString = __webpack_require__(1340);
var getMethod = __webpack_require__(8173);
var arraySlice = __webpack_require__(1589);
var callRegExpExec = __webpack_require__(7651);
var regexpExec = __webpack_require__(2261);
var stickyHelpers = __webpack_require__(2999);
var fails = __webpack_require__(7293);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ 3210:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $trim = (__webpack_require__(3111).trim);
var forcedStringTrimMethod = __webpack_require__(6091);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 1817:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var toString = __webpack_require__(1340);
var defineProperty = (__webpack_require__(3070).f);
var copyConstructorProperties = __webpack_require__(9920);

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 2165:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7235);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 2526:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var IS_PURE = __webpack_require__(1913);
var DESCRIPTORS = __webpack_require__(9781);
var NATIVE_SYMBOL = __webpack_require__(133);
var fails = __webpack_require__(7293);
var hasOwn = __webpack_require__(2597);
var isArray = __webpack_require__(3157);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var isPrototypeOf = __webpack_require__(7976);
var isSymbol = __webpack_require__(2190);
var anObject = __webpack_require__(9670);
var toObject = __webpack_require__(7908);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var $toString = __webpack_require__(1340);
var createPropertyDescriptor = __webpack_require__(9114);
var nativeObjectCreate = __webpack_require__(30);
var objectKeys = __webpack_require__(1956);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertyNamesExternal = __webpack_require__(1156);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);
var definePropertiesModule = __webpack_require__(6048);
var propertyIsEnumerableModule = __webpack_require__(5296);
var arraySlice = __webpack_require__(206);
var redefine = __webpack_require__(1320);
var shared = __webpack_require__(2309);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);
var uid = __webpack_require__(9711);
var wellKnownSymbol = __webpack_require__(5112);
var wrappedWellKnownSymbolModule = __webpack_require__(6061);
var defineWellKnownSymbol = __webpack_require__(7235);
var setToStringTag = __webpack_require__(8003);
var InternalStateModule = __webpack_require__(9909);
var $forEach = (__webpack_require__(2092).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 4747:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var DOMIterables = __webpack_require__(8324);
var DOMTokenListPrototype = __webpack_require__(8509);
var forEach = __webpack_require__(8533);
var createNonEnumerableProperty = __webpack_require__(8880);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ 3948:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var DOMIterables = __webpack_require__(8324);
var DOMTokenListPrototype = __webpack_require__(8509);
var ArrayIteratorMethods = __webpack_require__(6992);
var createNonEnumerableProperty = __webpack_require__(8880);
var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ 5666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(2352);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});