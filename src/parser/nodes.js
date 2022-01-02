'use strict';

class Text { }
class Shortcut { }
class Conditional { }
class Assignment { }
class Literal { }
class Expression { }
class FunctionCall { }
class InlineExpression { }

module.exports = {
  types: {
    Text,
    Shortcut,
    Conditional,
    Assignment,
    Literal,
    Expression,
    FunctionCall,
    InlineExpression,
  },

  RootNode: class {
    constructor(dialogNodes) {
      this.name = 'RootNode';
      this.dialogNodes = dialogNodes || [];
    }
  },

  // /////////////// Dialog Nodes

  DialogNode: class {
    constructor(content, name) {
      this.type = 'DialogNode';
      this.name = name || null;
      this.content = content;
    }
  },

  DialogShortcutNode: class extends Shortcut {
    constructor(text, content, lineNo, hashtags) {
      super();
      this.type = 'DialogShortcutNode';
      this.text = text;
      this.content = content;
      this.lineNum = lineNo ? lineNo.first_line : -1;
      this.hashtags = hashtags;
    }
  },

  ConditionalDialogShortcutNode: class extends Shortcut {
    constructor(text, content, conditionalExpression, lineNo, hashtags) {
      super();
      this.type = 'ConditionalDialogShortcutNode';
      this.text = text;
      this.content = content;
      this.conditionalExpression = conditionalExpression;
      this.lineNum = lineNo ? lineNo.first_line : -1;
      this.hashtags = hashtags;
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
    constructor(text, lineNo, hashtags) {
      super();
      this.type = 'TextNode';
      this.text = text
      this.lineNum = lineNo ? lineNo.first_line : -1;
      this.hashtags = hashtags;
    }
  },

  EscapedCharacterNode: class extends Text {
    constructor(text, lineNo) {
      super();
      this.type = 'EscapedCharacterNode';
      this.text = text
      this.lineNum = lineNo ? lineNo.first_line : -1;
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

  ArithmeticExpressionNode: class extends Expression {
    constructor(expression) {
      super();
      this.type = 'ArithmeticExpressionNode';
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

  // /////////////// Boolean Expression Nodes

  BooleanExpressionNode: class extends Expression {
    constructor(booleanExpression) {
      super();
      this.type = 'BooleanExpressionNode';
      this.booleanExpression = booleanExpression;
    }
  },

  NegatedBooleanExpressionNode: class extends Expression {
    constructor(booleanExpression) {
      super();
      this.type = 'NegatedBooleanExpressionNode';
      this.booleanExpression = booleanExpression;
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
      this.type = 'EqualToExpressionNode';
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

  SetVariableAddNode: class extends Assignment {
    constructor(variableName, expression) {
      super();
      this.type = 'SetVariableAddNode';
      this.variableName = variableName;
      this.expression = expression;
    }
  },

  SetVariableMinusNode: class extends Assignment {
    constructor(variableName, expression) {
      super();
      this.type = 'SetVariableMinusNode';
      this.variableName = variableName;
      this.expression = expression;
    }
  },

  SetVariableMultipyNode: class extends Assignment {
    constructor(variableName, expression) {
      super();
      this.type = 'SetVariableMultipyNode';
      this.variableName = variableName;
      this.expression = expression;
    }
  },

  SetVariableDivideNode: class extends Assignment {
    constructor(variableName, expression) {
      super();
      this.type = 'SetVariableDivideNode';
      this.variableName = variableName;
      this.expression = expression;
    }
  },

  // /////////////// Function Nodes

  FunctionResultNode: class extends FunctionCall {
    constructor(functionName, args, lineNo, hashtags) {
      super();
      this.type = 'FunctionResultNode';
      this.functionName = functionName;
      this.args = args;
      this.lineNum = lineNo ? lineNo.first_line : -1;
      this.hashtags = hashtags;
    }
  },

  // /////////////// Inline Expression
  InlineExpressionNode: class extends InlineExpression {
    constructor(expression, lineNo, hashtags) {
      super();
      this.type = 'InlineExpressionNode';
      this.expression = expression;
      this.lineNum = lineNo ? lineNo.first_line : -1;
      // usually there is a text node to supply hashtags but not always
      this.hashtags = hashtags;
    }
  },
};
