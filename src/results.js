'use strict';

class Result {}

class TextResult extends Result {
  /**
   * Create a text display result
   * @param {string} [text] text to be displayed
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [yarnNode] the parent yarn node
   */
  constructor(text, hashtags = [], yarnNode) {
    super();
    this.text = text;
    this.hashtags = hashtags;
    this.yarnNode = yarnNode;
  }
}

class CommandResult extends Result {
  /**
   * Return a command string
   * @param {string} [name] the function name being called
   * @param {[]} [args] the array of arguments for the function
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [yarnNode] the parent yarn node
   */
  constructor(name, args, hashtags = [], yarnNode) {
    super();
    this.name = name;
    this.args = args;
    this.hashtags = hashtags;
    this.yarnNode = yarnNode;
  }
}

class OptionResult extends Result {
  /**
   * Strip down Conditional option for presentation
   * @param {string} [text] option text to display
   * @param {boolean} [isAvailable] whether option is available
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [yarnNode] the parent yarn node
   */
  constructor(text, isAvailable = true, hashtags = [], yarnNode) {
    super();
    this.text = text;
    this.isAvailable = isAvailable;
    this.hashtags = hashtags;
    this.yarnNode = yarnNode;
  }
}

class OptionsResult extends Result {
  /**
   * Create a selectable list of options from the given list of text
   * @param {OptionResult[]} [options] list of the text of options to be shown
   * @param {object} [yarnNode] the parent yarn node
   */
  constructor(options, yarnNode) {
    super();
    this.options = options.map((s) => {
      return new OptionResult(s.text, s.isAvailable, s.hashtags);
    });
    this.selected = -1;
    this.yarnNode = yarnNode;
  }

  select(index) {
    if (index < 0 || index >= this.options.length) {
      throw new Error(`Cannot select option #${index}, there are only ${this.options.length} options`);
    }
    this.selected = index;
  }
}

module.exports = { Result, TextResult, CommandResult, OptionsResult };
