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
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 722:
/***/ ((module) => {

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

/***/ 826:
/***/ ((module) => {

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/parser/nodes.js


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

/* harmony default export */ const nodes = ({
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
});
;// CONCATENATED MODULE: ./src/lexer/tokens.js

/**
 * Token identifier -> regular expression to match the lexeme. That's a list of all the token
 * which can be emitted by the lexer. For now, we're slightly bending the style guide,
 * to make sure the debug output of the javascript lexer will (kinda) match the original C# one.
 */

/* eslint-disable key-spacing */

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

/* harmony default export */ const tokens = (Tokens);
;// CONCATENATED MODULE: ./src/lexer/lexer-state.js


function lexer_state_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lexer_state_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lexer_state_createClass(Constructor, protoProps, staticProps) { if (protoProps) lexer_state_defineProperties(Constructor.prototype, protoProps); if (staticProps) lexer_state_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * A LexState object represents one of the states in which the lexer can be.
 */

var LexerState = /*#__PURE__*/function () {
  function LexerState() {
    lexer_state_classCallCheck(this, LexerState);

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


  lexer_state_createClass(LexerState, [{
    key: "addTransition",
    value: function addTransition(token, state, delimitsText) {
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

/* harmony default export */ const lexer_state = (LexerState);
;// CONCATENATED MODULE: ./src/lexer/states.js



/**
 * @return {Object}  all states in which the lexer can be with their associated transitions.
 */

function makeStates() {
  return {
    base: new lexer_state().addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'command', true).addTransition('BeginInlineExp', 'inlineExpression', true).addTransition('ShortcutOption', 'shortcutOption').addTextRule('Text'),
    shortcutOption: new lexer_state().setTrackNextIndentation(true).addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'expression', true).addTransition('BeginInlineExp', 'inlineExpressionInShortcut', true).addTextRule('Text', 'base'),
    command: new lexer_state().addTransition('If', 'expression').addTransition('Else').addTransition('ElseIf', 'expression').addTransition('EndIf').addTransition('Set', 'assignment').addTransition('Declare', 'declare').addTransition('Jump', 'jump').addTransition('Stop', 'stop').addTransition('EndCommand', 'base', true).addTransition('Identifier', 'commandArg', true).addTextRule('Text'),
    commandArg: new lexer_state().addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'commandParenArgOrExpression').addTransition('Variable').addTransition('Number').addTransition('String').addTransition('True').addTransition('False').addTransition('Identifier').addTransition('Comma').addTransition('RightParen'),
    commandParenArgOrExpression: new lexer_state().addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'expression').addTransition('Variable', 'expression').addTransition('Number', 'expression').addTransition('String').addTransition('True').addTransition('False').addTransition('Null').addTransition('RightParen'),
    assignment: new lexer_state().addTransition('Variable').addTransition('EqualToOrAssign', 'expression'),
    declare: new lexer_state().addTransition('Variable').addTransition('EndCommand', 'base').addTransition('EqualToOrAssign', 'expression'),
    jump: new lexer_state().addTransition('Identifier').addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true),
    stop: new lexer_state().addTransition('EndCommand', 'base', true),
    expression: new lexer_state().addTransition('As').addTransition('ExplicitType').addTransition('EndCommand', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule(),
    inlineExpression: new lexer_state().addTransition('EndInlineExp', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
    // TODO: Copied from above
    // There has to be a non-stupid way to do this, right?
    // I'm just not familiar enough yet to know how to
    // transition from inline expression back to base OR command
    // states depending on how we got there
    inlineExpressionInCommand: new lexer_state().addTransition('EndInlineExp', 'commandArg').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
    inlineExpressionInShortcut: new lexer_state().addTransition('EndInlineExp', 'shortcutOption').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base')
  };
}

/* harmony default export */ const states = ({
  makeStates: makeStates
});
;// CONCATENATED MODULE: ./src/lexer/lexer.js
 // Syncs with YarnSpinner@e0f6807,
// see https://github.com/thesecretlab/YarnSpinner/blob/master/YarnSpinner/Lexer.cs

function lexer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lexer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lexer_createClass(Constructor, protoProps, staticProps) { if (protoProps) lexer_defineProperties(Constructor.prototype, protoProps); if (staticProps) lexer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

 // As opposed to the original C# implemntation which, tokenize the entire input, before emiting
// a list of tokens, this parser will emit a token each time `lex()` is called. This change
// accomodates the Jison parser. Given the lexer is not entirely context-free
// (Off-side rule, lookaheads), context needs to be remembered between each `lex()` calls.

var Lexer = /*#__PURE__*/function () {
  function Lexer() {
    lexer_classCallCheck(this, Lexer);

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


  lexer_createClass(Lexer, [{
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

/* harmony default export */ const lexer = (Lexer);
;// CONCATENATED MODULE: ./src/parser/compiledParser.js
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

function Parser() {
  this.yy = {};
}

;
Parser.prototype = parser;
parser.Parser = Parser;

;// CONCATENATED MODULE: ./src/parser/parser.js





parser.lexer = new lexer();
parser.yy = nodes;
parser.yy.declarations = {};

parser.yy.registerDeclaration = function registerDeclaration(variableName, expression, explicitType) {
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

/* harmony default export */ const parser_parser = (parser);
;// CONCATENATED MODULE: ./src/results.js


function results_typeof(obj) { "@babel/helpers - typeof"; return results_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, results_typeof(obj); }

function results_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) results_setPrototypeOf(subClass, superClass); }

function results_setPrototypeOf(o, p) { results_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return results_setPrototypeOf(o, p); }

function results_createSuper(Derived) { var hasNativeReflectConstruct = results_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = results_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = results_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return results_possibleConstructorReturn(this, result); }; }

function results_possibleConstructorReturn(self, call) { if (call && (results_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return results_assertThisInitialized(self); }

function results_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function results_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function results_getPrototypeOf(o) { results_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return results_getPrototypeOf(o); }

function results_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function results_createClass(Constructor, protoProps, staticProps) { if (protoProps) results_defineProperties(Constructor.prototype, protoProps); if (staticProps) results_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function results_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = /*#__PURE__*/results_createClass(function Result() {
  results_classCallCheck(this, Result);
});

var TextResult = /*#__PURE__*/function (_Result) {
  results_inherits(TextResult, _Result);

  var _super = results_createSuper(TextResult);

  /**
   * Create a text display result
   * @param {string} [text] text to be displayed
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  function TextResult(text, hashtags, metadata) {
    var _this;

    results_classCallCheck(this, TextResult);

    _this = _super.call(this);
    _this.text = text;
    _this.hashtags = hashtags;
    _this.metadata = metadata;
    return _this;
  }

  return results_createClass(TextResult);
}(Result);

var CommandResult = /*#__PURE__*/function (_Result2) {
  results_inherits(CommandResult, _Result2);

  var _super2 = results_createSuper(CommandResult);

  /**
   * Return a command string
   * @param {string} [name] the function name being called
   * @param {[]} [args] the array of arguments for the function
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  function CommandResult(name, args, hashtags, metadata) {
    var _this2;

    results_classCallCheck(this, CommandResult);

    _this2 = _super2.call(this);
    _this2.name = name;
    _this2.args = args;
    _this2.hashtags = hashtags;
    _this2.metadata = metadata;
    return _this2;
  }

  return results_createClass(CommandResult);
}(Result);

var OptionResult = /*#__PURE__*/function (_Result3) {
  results_inherits(OptionResult, _Result3);

  var _super3 = results_createSuper(OptionResult);

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

    results_classCallCheck(this, OptionResult);

    _this3 = _super3.call(this);
    _this3.text = text;
    _this3.isAvailable = isAvailable;
    _this3.hashtags = hashtags;
    _this3.metadata = metadata;
    return _this3;
  }

  return results_createClass(OptionResult);
}(Result);

var OptionsResult = /*#__PURE__*/function (_Result4) {
  results_inherits(OptionsResult, _Result4);

  var _super4 = results_createSuper(OptionsResult);

  /**
   * Create a selectable list of options from the given list of text
   * @param {OptionResult[]} [options] list of the text of options to be shown
   * @param {object} [metadata] the parent yarn node
   */
  function OptionsResult(options, metadata) {
    var _this4;

    results_classCallCheck(this, OptionsResult);

    _this4 = _super4.call(this);
    _this4.options = options.map(function (s) {
      return new OptionResult(s.text, s.isAvailable, s.hashtags);
    });
    _this4.metadata = metadata;
    return _this4;
  }

  results_createClass(OptionsResult, [{
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

/* harmony default export */ const results = ({
  Result: Result,
  TextResult: TextResult,
  CommandResult: CommandResult,
  OptionsResult: OptionsResult
});
// EXTERNAL MODULE: ./src/default-variable-storage.js
var default_variable_storage = __webpack_require__(826);
var default_variable_storage_default = /*#__PURE__*/__webpack_require__.n(default_variable_storage);
// EXTERNAL MODULE: ./src/convert-yarn.js
var convert_yarn = __webpack_require__(722);
var convert_yarn_default = /*#__PURE__*/__webpack_require__.n(convert_yarn);
;// CONCATENATED MODULE: ./src/runner.js
function runner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function runner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? runner_ownKeys(Object(source), !0).forEach(function (key) { runner_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : runner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function runner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function runner_typeof(obj) { "@babel/helpers - typeof"; return runner_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, runner_typeof(obj); }

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

function runner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function runner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function runner_createClass(Constructor, protoProps, staticProps) { if (protoProps) runner_defineProperties(Constructor.prototype, protoProps); if (staticProps) runner_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var nodeTypes = nodes.types;

var Runner = /*#__PURE__*/function () {
  function Runner() {
    var _this = this;

    runner_classCallCheck(this, Runner);

    this.yarnNodes = {};
    this.variables = new (default_variable_storage_default())();
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


  runner_createClass(Runner, [{
    key: "load",
    value: function load(data) {
      var _this2 = this;

      var nodes = data;

      if (typeof data === 'string') {
        nodes = convert_yarn_default()(data);
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
      parser_parser.yy.areDeclarationsHandled = false;
      parser_parser.yy.declarations = {};
      this.handleDeclarations(nodes);
      parser_parser.yy.areDeclarationsHandled = true;
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
        parser_parser.parse(declareLines.join('\n'));
      }

      Object.entries(parser_parser.yy.declarations).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            variableName = _ref2[0],
            _ref2$ = _ref2[1],
            expression = _ref2$.expression,
            explicitType = _ref2$.explicitType;

        var value = _this3.evaluateExpressionOrLiteral(expression);

        if (explicitType && runner_typeof(value) !== runner_typeof(exampleValues[explicitType])) {
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

              parserNodes = Array.from(parser_parser.parse(yarnNode.body));
              metadata = runner_objectSpread({}, yarnNode);
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
              return new results.TextResult(textRun, node.hashtags, metadata);

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
              return new results.CommandResult(node.functionName, funcArgs, node.hashtags, metadata);

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
              optionsResult = new results.OptionsResult(transformedSelections, metadata);
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

      if (oldValue && runner_typeof(oldValue) !== runner_typeof(result)) {
        throw new Error("Variable ".concat(node.variableName, " is already type ").concat(runner_typeof(oldValue), "; cannot set equal to ").concat(result, " of type ").concat(runner_typeof(result)));
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

/* harmony default export */ const runner = ({
  Runner: Runner,
  TextResult: results.TextResult,
  CommandResult: results.CommandResult,
  OptionsResult: results.OptionsResult
});
;// CONCATENATED MODULE: ./src/index.js



/* harmony default export */ const src = (runner);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});