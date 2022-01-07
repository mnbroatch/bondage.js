'use strict';

class Result {}

class TextResult extends Result {
  /**
   * Create a text display result
   * @param {string} [text] text to be displayed
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  constructor(text, hashtags, metadata) {
    super();
    this.text = text;
    this.hashtags = hashtags;
    this.metadata = metadata;
  }
}

class CommandResult extends Result {
  /**
   * Return a command string
   * @param {string} [name] the function name being called
   * @param {[]} [args] the array of arguments for the function
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  constructor(name, args, hashtags, metadata) {
    super();
    this.name = name;
    this.args = args;
    this.hashtags = hashtags;
    this.metadata = metadata;
  }
}

class OptionResult extends Result {
  /**
   * Strip down Conditional option for presentation
   * @param {string} [text] option text to display
   * @param {boolean} [isAvailable] whether option is available
   * @param {string[]} [hashtags] the hashtags for the line
   * @param {object} [metadata] the parent yarn node
   */
  constructor(text, isAvailable = true, hashtags = [], metadata) {
    super();
    this.text = text;
    this.isAvailable = isAvailable;
    this.hashtags = hashtags;
    this.metadata = metadata;
  }
}

class OptionsResult extends Result {
  /**
   * Create a selectable list of options from the given list of text
   * @param {OptionResult[]} [options] list of the text of options to be shown
   * @param {object} [metadata] the parent yarn node
   */
  constructor(options, metadata) {
    super();
    this.options = options.map((s) => {
      return new OptionResult(s.text, s.isAvailable, s.hashtags);
    });
    this.metadata = metadata;
  }

  select(index = -1) {
    if (index < 0 || index >= this.options.length) {
      throw new Error(`Cannot select option #${index}, there are ${this.options.length} options`);
    }
    this.selected = index;
  }
}

export default { Result, TextResult, CommandResult, OptionsResult };
