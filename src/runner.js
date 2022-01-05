'use strict';

const parser = require('./parser/parser');
const results = require('./results');
const DefaultVariableStorage = require('./default-variable-storage');
const nodeTypes = require('./parser/nodes').types;
const convertYarn = require('./convert-yarn');

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
    let nodes = data;
    if (typeof data === 'string') {
      nodes = convertYarn(data);
    }
    console.log('nodes', nodes)
    nodes.forEach((node) => {
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
  * evalNodes(nodes, yarnNode) {
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
        || node instanceof nodeTypes.Expression
      ) {
        textRun += this.evaluateExpressionOrLiteral(node).toString();

        if (
          nextNode
          && node.lineNum === nextNode.lineNum
          && (
            nextNode instanceof nodeTypes.Text
            || nextNode instanceof nodeTypes.Expression
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
      } else {
        // FunctionCall
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
        const funcArgs = node.args.map(this.evaluateExpressionOrLiteral, this);
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
    const transformedSelections = selections.map((s) => {
      let isAvailable = true;
      let text = '';

      if (
        s.conditionalExpression
        && !this.evaluateExpressionOrLiteral(s.conditionalExpression)
      ) {
        isAvailable = false;
      }

      text = s.text.reduce((acc, node) => {
        return acc + this.evaluateExpressionOrLiteral(node).toString();
      }, '');

      return Object.assign(s, { isAvailable, text });
    });

    const optionsResult = new results.OptionsResult(transformedSelections, yarnNode);
    yield optionsResult;
    if (optionsResult.selected !== -1) {
      const selectedOption = transformedSelections[optionsResult.selected];
      if (selectedOption.content) {
        // Recursively go through the nodes nested within
        return yield* this.evalNodes(selectedOption.content, yarnNode);
      }
    } else {
      throw new Error('No option selected before resuming dialogue');
    }

    return { stop: false };
  }

  /**
   * Evaluates the given assignment node
   */
  evaluateAssignment(node) {
    const result = this.evaluateExpressionOrLiteral(node.expression);
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
      return this.functions[node.functionName](
        node.args.map(this.evaluateExpressionOrLiteral, this),
      );
    }
    throw new Error(`Function "${node.functionName}" not found`);
  }

  /**
   * Evaluates an expression or literal down to its final value
   */
  evaluateExpressionOrLiteral(node) {
    const nodeHandlers = {
      UnaryMinusExpressionNode: (a) => { return -a; },
      ArithmeticExpressionAddNode: (a, b) => { return a + b; },
      ArithmeticExpressionMinusNode: (a, b) => { return a - b; },
      ArithmeticExpressionExponentNode: (a, b) => { return a ** b; },
      ArithmeticExpressionMultiplyNode: (a, b) => { return a * b; },
      ArithmeticExpressionDivideNode: (a, b) => { return a / b; },
      ArithmeticExpressionModuloNode: (a, b) => { return a % b; },
      NegatedBooleanExpressionNode: (a) => { return !a; },
      BooleanOrExpressionNode: (a, b) => { return a || b; },
      BooleanAndExpressionNode: (a, b) => { return a && b; },
      BooleanXorExpressionNode: (a, b) => { return !!(a ^ b); }, // eslint-disable-line no-bitwise
      EqualToExpressionNode: (a, b) => { return a === b; },
      NotEqualToExpressionNode: (a, b) => { return a !== b; },
      GreaterThanExpressionNode: (a, b) => { return a > b; },
      GreaterThanOrEqualToExpressionNode: (a, b) => { return a >= b; },
      LessThanExpressionNode: (a, b) => { return a < b; },
      LessThanOrEqualToExpressionNode: (a, b) => { return a <= b; },
      TextNode: (a) => { return a.text; },
      NumericLiteralNode: (a) => { return parseFloat(a.numericLiteral); },
      StringLiteralNode: (a) => { return `${a.stringLiteral}`; },
      BooleanLiteralNode: (a) => { return a.booleanLiteral === 'true'; },
      VariableNode: (a) => { return this.variables.get(a.variableName); },
      FunctionResultNode: (a) => { return this.evaluateFunctionCall(a); },
      InlineExpressionNode: (a) => { return a; },
    };

    const handler = nodeHandlers[node.type];
    if (!handler) {
      throw new Error(`node type not recognized: ${node.type}`);
    }

    return handler(
      node instanceof nodeTypes.Expression
        ? this.evaluateExpressionOrLiteral(node.expression || node.expression1)
        : node,
      node.expression2
        ? this.evaluateExpressionOrLiteral(node.expression2)
        : node,
    );
  }
}

module.exports = {
  Runner,
  TextResult: results.TextResult,
  CommandResult: results.CommandResult,
  OptionsResult: results.OptionsResult,
};
