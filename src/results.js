'use strict';

class Result {}

class TextResult extends Result {
  /**
   * Create a text display result
   * @param {string} [text] text to be displayed
   * @param {int} [lineNum] line number of the result in the node
   */
  constructor(text, yarnNodeData, lineNum) {
    super();
    this.text = text;
    this.data = yarnNodeData;
    this.lineNum = lineNum;
  }
}

class CommandResult extends Result {
  /**
   * Return a command string
   * @param {string[]} [name] the function name being called
   * @param {[]} [args] the array of arguments for the function
   * @param {int} [lineNum] line number of the result in the node
   */
  constructor(name, args, lineNum) {
    super();
    this.name = name;
    this.args = args;
    this.lineNum = lineNum;
  }
}

class OptionResult extends Result {
  /**
   * Strip down Conditional option for presentation
   * @param {ConditionalDialogShortcutNode[]} [selection] relevant option
   */
  constructor({
    text,
    lineNum,
    isAvailable = true,
  }) {
    super();
    this.text = text;
    this.lineNum = lineNum;
    this.isAvailable = isAvailable;
  }
}

class OptionsResult extends Result {
  /**
   * Create a selectable list of options from the given list of text
   * @param {string[]} [selections] list of the text of options to be shown
   * @param {int[]} [lineNum] list of the line numbers of options to be shown
   */
  constructor(options) {
    super();
    this.options = options.map((s) => { return new OptionResult(s); });
    this.selected = -1;
  }

  select(index) {
    if (index < 0 || index >= this.options.length) {
      throw new Error(`Cannot select option #${index}, there are only ${this.options.length} options`);
    }
    this.selected = index;
  }
}

module.exports = { Result, TextResult, CommandResult, OptionsResult };
