'use strict';

class Result {}

class TextResult extends Result {
  /**
   * Create a text display result
   * @param {string} [text] text to be displayed
   */
  constructor(text, hashtags) {
    super();
    this.text = text;
    this.hashtags = hashtags;
  }
}

class CommandResult extends Result {
  /**
   * Return a command string
   * @param {string[]} [name] the function name being called
   * @param {[]} [args] the array of arguments for the function
   */
  constructor(name, args, hashtags) {
    super();
    this.name = name;
    this.args = args;
    this.hashtags = hashtags;
  }
}

class OptionResult extends Result {
  /**
   * Strip down Conditional option for presentation
   * @param {ConditionalDialogShortcutNode[]} [selection] relevant option
   */
  constructor(text, isAvailable = true, hashtags) {
    super();
    this.text = text;
    this.isAvailable = isAvailable;
    this.hashtags = hashtags;
  }
}

class OptionsResult extends Result {
  /**
   * Create a selectable list of options from the given list of text
   * @param {string[]} [selections] list of the text of options to be shown
   */
  constructor(options) {
    super();
    this.options = options.map((s) => {
      return new OptionResult(s.text, s.isAvailable, s.hashtags);
    });
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
