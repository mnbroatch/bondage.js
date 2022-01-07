'use strict';

const Nodes = require('./nodes');
const Lexer = require('../lexer/lexer');
const parser = require('./compiledParser').parser;

parser.lexer = new Lexer();
parser.yy = Nodes;
parser.yy.declarations = {};
parser.yy.registerDeclaration = function registerDeclaration(
  variableName,
  expression,
  explicitType,
) {
  if (!this.areDeclarationsHandled) {
    if (this.declarations[variableName]) {
      throw new Error(`Duplicate declaration found for variable: ${variableName}`);
    }
    this.declarations[variableName] = {
      variableName,
      expression,
      explicitType,
    };
  }
};


module.exports = parser;
