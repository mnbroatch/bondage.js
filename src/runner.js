import core from './core/index.js'
import parseLine from './line-parser'

export default class Runner {
  constructor ({
    dialogue,
    variableStorage,
    functions,
    handleCommand,
    combineTextAndOptionsResults,
    locale,
    startAt = 'Start'
  }) {
    this.handleCommand = handleCommand
    this.combineTextAndOptionsResults = combineTextAndOptionsResults
    this.core = core
    this.bufferedNode = null
    this.currentResult = null
    this.history = []
    this.locale = locale
    const runner = new core.Runner()
    runner.noEscape = true

    runner.load(dialogue)

    if (variableStorage) {
      runner.setVariableStorage(variableStorage)
    }
    if (functions) {
      Object.entries(functions).forEach((entry) => {
        runner.registerFunction(...entry)
      })
    }

    this.generator = runner.run(startAt)
    this.advance()
  }

  advance (optionIndex) {
    if (
      typeof optionIndex !== 'undefined' &&
        this.currentResult &&
        this.currentResult.select
    ) {
      this.currentResult.select(optionIndex)
    }

    let next = this.bufferedNode || this.generator.next().value
    let buffered = null

    // We either return the command as normal or, if a handler
    // is supplied, use that and don't bother the consuming app
    if (this.handleCommand) {
      while (next instanceof core.CommandResult) {
        this.handleCommand(next)
        next = this.generator.next().value
      }
    }

    // Lookahead for combining text + options, and for end of dialogue.
    // Can't look ahead of option nodes (what would you look ahead at?)
    if (!(next instanceof core.OptionsResult)) {
      const upcoming = this.generator.next()
      buffered = upcoming.value
      if (
        next instanceof core.TextResult &&
        this.combineTextAndOptionsResults &&
          buffered instanceof core.OptionsResult
      ) {
        next = Object.assign(buffered, next)
        buffered = null
      } else if (next && upcoming.done) {
        next = Object.assign(next, { isDialogueEnd: true })
      }
    }

    if (this.currentResult) {
      this.history.push(this.currentResult)
    }

    if (next instanceof core.TextResult) {
      parseLine(next, this.locale)
    } else if (next instanceof core.OptionsResult) {
      if (next.text) {
        parseLine(next, this.locale)
      }
      next.options.forEach((option) => {
        parseLine(option, this.locale)
      })
    }

    this.currentResult = next
    this.bufferedNode = buffered
  }
}
