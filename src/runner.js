'use strict';

const parser = require('./parser/parser');
const results = require('./results');
const DefaultVariableStorage = require('./default-variable-storage');
const nodeTypes = require('./parser/nodes').types;

class Runner {
  constructor() {
    this.yarnNodes = {};
    this.variables = new DefaultVariableStorage();
    this.functions = {};
    this.visited = {}; // Which nodes have been visited

    this.registerFunction('visited', (args) => {
      return !!this.visited[args[0]];
    });
  }

  /**
   * Loads the yarn node data into this.nodes
   * @param {any[]} data Object of exported yarn JSON data
   */
  load(data) {
    data.forEach((node) => {
      this.yarnNodes[node.title] = node;
    });
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
  * run(startNode) {
    const yarnNode = this.yarnNodes[startNode];

    if (yarnNode === undefined) {
      throw new Error(`Node "${startNode}" does not exist`);
    }

    this.visited[startNode] = true;

    // Parse the entire node
    const parserNodes = Array.from(parser.parse(yarnNode.body));
    if (yarnNode.tags && typeof yarnNode.tags === 'string') {
      yarnNode.tags = yarnNode.tags.split(' ');
    }
    return yield* this.evalNodes(parserNodes, yarnNode);
  }

  /**
   * Evaluate a list of parser nodes, yielding the ones that need to be seen by
   * the user. Calls itself recursively if that is required by nested nodes
   * @param {any[]} nodes
   */
  * evalNodes(nodeGroup, yarnNode) {
    if (!nodeGroup) return { stop: false };
    const nodes = nodeGroup.flat();

    let shortcutNodes = [];
    let prevnode = null;
    let textRun = '';

    // Yield the individual user-visible results
    // Need to accumulate all adjacent selectables
    // into one list (hence some of the weirdness here)
    for (let nodeIdx = 0; nodeIdx < nodes.length; nodeIdx += 1) {
      const node = nodes[nodeIdx];
      const nextNode = nodes[nodeIdx + 1];

      if (prevnode instanceof nodeTypes.Shortcut && !(node instanceof nodeTypes.Shortcut)) {
        // Last shortcut in the series, so yield the shortcuts.
        const result = yield* this.handleShortcuts(shortcutNodes, yarnNode);
        if (result && result.stop) {
          return result;
        }
        shortcutNodes = [];
      }

      // Text and the output of Inline Expressions
      // are combined to deliver a TextNode.
      if (
        node instanceof nodeTypes.Text
        || node instanceof nodeTypes.InlineExpression
      ) {
        textRun += this.evaluateExpressionOrLiteral(node).toString();

        if (
          nextNode
          && node.lineNum === nextNode.lineNum
          && (
            nextNode instanceof nodeTypes.Text
            || nextNode instanceof nodeTypes.InlineExpression
          )
        ) {
          // Same line, with another text equivalent to add to the
          // text run further on in the loop, so don't yield.
        } else {
          yield new results.TextResult(textRun, node.hashtags, yarnNode);
          textRun = '';
        }

        // Other nodes are more straightforward:
      } else if (node instanceof nodeTypes.Shortcut) {
        shortcutNodes.push(node);
      } else if (node instanceof nodeTypes.Assignment) {
        this.evaluateAssignment(node);
      } else if (node instanceof nodeTypes.Conditional) {
        // Get the results of the conditional
        const evalResult = this.evaluateConditional(node);
        if (evalResult) {
          // Run the remaining results
          const result = yield* this.evalNodes(evalResult, yarnNode);
          if (result && result.stop) {
            return result;
          }
        }
      } else if (node instanceof nodeTypes.FunctionCall) {
        if (node.type === 'JumpNode') {
          yield* this.run(node.destination);
          // ignore the rest of this outer loop and
          // tell parent loops to ignore following nodes
          return { stop: true };
        }
        if (node.type === 'StopNode') {
          // ignore the rest of this outer loop and
          // tell parent loops to ignore following nodes
          return { stop: true };
        }
        const funcArgs = node.args ? node.args.map(this.evaluateExpressionOrLiteral, this) : [];
        yield new results.CommandResult(node.functionName, funcArgs, node.hashtags, yarnNode);
      }

      prevnode = node;
    }

    // The last node might be a shortcut
    if (shortcutNodes.length > 0) {
      return yield* this.handleShortcuts(shortcutNodes, yarnNode);
    }

    return { stop: false };
  }

  /**
   * yield a shortcut result then handle the subsequent selection
   * @param {any[]} selections
   */
  * handleShortcuts(selections, yarnNode) {
    // Multiple options to choose from (or just a single shortcut)
    // Tag any conditional dialog options that result to false,
    // the consuming app does the actual filtering or whatever
    const filteredSelections = selections.map((s) => {
      let isAvailable = true;
      let text = '';

      if (
        s.conditionalExpression
        && !this.evaluateExpressionOrLiteral(s.conditionalExpression)
      ) {
        isAvailable = false;
      }

      text = s.text.reduce((acc, node) => {
        return this.evaluateExpressionOrLiteral(node).toString();
      }, '');

      return Object.assign(s, { isAvailable, text });
    });

    if (filteredSelections.length === 0) {
      // No options to choose anymore
      return { stop: false };
    }
    const optionsResult = new results.OptionsResult(filteredSelections, yarnNode);
    yield optionsResult;
    if (optionsResult.selected !== -1) {
      const selectedOption = filteredSelections[optionsResult.selected];
      if (selectedOption.content) {
        // Recursively go through the nodes nested within
        return yield* this.evalNodes(selectedOption.content, yarnNode);
      }
    }

    return { stop: false };
  }

  /**
   * Evaluates the given assignment node
   */
  evaluateAssignment(node) {
    let result = this.evaluateExpressionOrLiteral(node.expression);
    const currentVal = this.variables.get(node.variableName);

    if (node.type === 'SetVariableAddNode') {
      result += currentVal;
    } else if (node.type === 'SetVariableMinusNode') {
      result -= currentVal;
    } else if (node.type === 'SetVariableMultiplyNode') {
      result *= currentVal;
    } else if (node.type === 'SetVariableDivideNode') {
      result /= currentVal;
    } else if (node.type === 'SetVariableEqualToNode') {
      // Nothing to be done
    } else {
      throw new Error(`I don't recognize assignment type ${node.type}`);
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
    } else if (node.type === 'ElseNode') {
      return node.statement;
    }

    return null;
  }

  /**
   * Evaluates an expression or literal down to its final value
   */
  evaluateExpressionOrLiteral(node) {
    if (node instanceof nodeTypes.Expression) {
      if (node.type === 'UnaryMinusExpressionNode') {
        return -1 * this.evaluateExpressionOrLiteral(node.expression);
      } else if (node.type === 'ArithmeticExpressionAddNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) +
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'ArithmeticExpressionMinusNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) -
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'ArithmeticExpressionExponentNode') {
        return this.evaluateExpressionOrLiteral(node.expression1)
          ** this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'ArithmeticExpressionMultiplyNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) *
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'ArithmeticExpressionDivideNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) /
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'BooleanExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.booleanExpression);
      } else if (node.type === 'NegatedBooleanExpressionNode') {
        return !this.evaluateExpressionOrLiteral(node.booleanExpression);
      } else if (node.type === 'BooleanOrExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) ||
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'BooleanAndExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) &&
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'BooleanXorExpressionNode') {
        return !this.evaluateExpressionOrLiteral(node.expression1) !== // Cheating
          !this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'EqualToExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) ===
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'NotEqualToExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) !==
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'GreaterThanExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) >
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'GreaterThanOrEqualToExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) >=
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'LessThanExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) <
          this.evaluateExpressionOrLiteral(node.expression2);
      } else if (node.type === 'LessThanOrEqualToExpressionNode') {
        return this.evaluateExpressionOrLiteral(node.expression1) <=
          this.evaluateExpressionOrLiteral(node.expression2);
      }

      throw new Error(`I don't recognize expression type ${node.type}`);
    } else if (node instanceof nodeTypes.Text) {
      return node.text;
    } else if (node instanceof nodeTypes.Literal) {
      if (node.type === 'NumericLiteralNode') {
        return parseFloat(node.numericLiteral);
      } else if (node.type === 'StringLiteralNode') {
        return node.stringLiteral;
      } else if (node.type === 'BooleanLiteralNode') {
        return node.booleanLiteral === 'true';
      } else if (node.type === 'VariableNode') {
        return this.variables.get(node.variableName);
      }

      throw new Error(`I don't recognize literal type ${node.type}`);
    } else if (node.type === 'FunctionResultNode') {
      if (this.functions[node.functionName]) {
        return this.functions[node.functionName](
          node.args.map(this.evaluateExpressionOrLiteral, this),
        );
      }
      throw new Error(`Function "${node.functionName}" not found`);
    } else if (node.type === 'NegatedFunctionResultNode') {
      if (this.functions[node.functionName]) {
        return !this.functions[node.functionName](
          node.args.map(this.evaluateExpressionOrLiteral, this),
        );
      }
      throw new Error(`Function "${node.functionName}" not found`);
    } else if (node.type === 'InlineExpressionNode') {
      return this.evaluateExpressionOrLiteral(node.expression);
    } else {
      throw new Error(`I don't recognize expression/literal type ${node.type}`);
    }
  }
}

module.exports = {
  Runner,
  TextResult: results.TextResult,
  CommandResult: results.CommandResult,
  OptionsResult: results.OptionsResult,
};
