'use strict';

class Result {}

class TextResult extends Result {
  /**
   * Create a text display result
   * @param {string} [text] text to be displayed
   */
  constructor(text, yarnNodeData) {
    super();
    this.text = text;
    this.data = yarnNodeData;
  }
}

class CommandResult extends Result {
  /**
   * Return a command string
   * @param {string[]} [name] the function name being called
   * @param {[]} [args] the array of arguments for the function
   */
  constructor(name, args) {
    super();
    this.name = name;
    this.args = args;
  }
}

class OptionResult extends Result {
  /**
   * Strip down Conditional option for presentation
   * @param {ConditionalDialogShortcutNode[]} [selection] relevant option
   */
  constructor({ text, isAvailable = true }) {
    super();
    this.text = text;
    this.isAvailable = isAvailable;
  }
}

class OptionsResult extends Result {
  /**
   * Create a selectable list of options from the given list of text
   * @param {string[]} [selections] list of the text of options to be shown
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
