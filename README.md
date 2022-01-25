# What is Bondage.js?

[Yarn](https://yarnspinner.dev/) is a language for writing dialogue trees.

Bondage.js attempts to be the simplest way to use the Yarn language in the context of a javascript application. Effort has been made to comply with the [Yarn 2.0 spec](https://github.com/YarnSpinnerTool/YarnSpinner/blob/9275277f50a6acbe8438b29596acc8527cf5581a/Documentation/Yarn-Spec.md) and include all additional features found in the "Writing in Yarn" (non-unity-specific, that is) section of the [official documentation](https://docs.yarnspinner.dev/).

Additional quality-of-life features on top of that include:
  - History of previous Results
  - Option to return text and a subsequent options block together as one result
  - Option to run a custom command handler function instead of returning a CommandResult
  - include an `isDialogueEnd` property with the last Result in a dialogue

The only thing I know to be missing from the spec and non-unity-specific docs is the built-in `wait` command (because what would it do?)


# Usage

Install with `npm i -S @mnbroatch/bondage` or grab `bondage.js` from the `/dist/` folder.

For information on how to write Yarn, visit the [official documentation](https://docs.yarnspinner.dev/). Start there! Bondage is useful after you have a yarn dialogue written and in string format. It's worth skimming the [Yarn language spec](https://github.com/YarnSpinnerTool/YarnSpinner/blob/9275277f50a6acbe8438b29596acc8527cf5581a/Documentation/Yarn-Spec.md) as well.

To get started with Bondage, import and create a new instance.

```javascript
import Bondage from '@mnbroatch/bondage'
// or node:
// const bondage = require('@mnbroatch/bondage')
// or in a script tag:
// <script src="path-to-file/bondage.min.js"></script>

const runner = new Bondage(options)
```

You can then access the first Result with:

```javascript
runner.currentResult
```

To continue the dialogue, call `advance()`.

```javascript
runner.advance()
runner.currentResult // is now the next Result
```

If you were on an Options Result, you would call `advance()` with the index of the desired option.

```javascript
runner.advance(2)
runner.currentResult // is now the Result after the selected option
```

That's all there is to the basic operation!


### Available Options

**dialogue (required)**: *string* - The Yarn dialogue to run. A .yarn file in string form.

**startAt**: *string*: - The title of the node to start the dialogue on.
  - default: "Start"

**functions**: *object* - An object containing custom functions to run when they are called in a yarn expression.
  - As the Yarn docs mention, these should not have side effects. They may execute at unexpected times.

**variableStorage**: *object* - A custom storage object with `get()` and `set()` functions (a `new Map()`, for instance.)
  - Unless you have a specific need you can omit this and use the built-in default.
  - One use is supplying variables with initial values, though you could also do that in the dialogue.

**handleCommand**: *function* - If you provide this, Bondage will `advance()` right past Command Results, instead calling `handleCommand()` with the Command Result as the single argument (see below for the data structure).

**combineTextAndOptionsResults**: *boolean* - If this is true, a Text Result followed by an Options Result will be combined into one Options Result with a `text` property.
  - This is convenient if you want to show prompts and responses at the same time.

**locale**: *string* - Used for pluralization markdown attributes.


# Results Data

Results, found on `runner.currentResult`, come in three flavors:
  - TextResult
  - OptionsResult
  - CommandResult

You can tell which kind it is by using instanceof

`runner.currentResult instanceof Bondage.TextResult`

`runner.currentResult instanceof Bondage.OptionsResult`

`runner.currentResult instanceof Bondage.CommandResult`

A TextResult looks like this:

```javascript
{
  "text": "This is a line of text.",
  "hashtags": ['someHashtag'],
  "metadata": {/* see below */}
}
```

If it is the last Result in the dialogue, there will also be a `isDialogueEnd` property with the value of `true`.

An Options Result looks like this:

```javascript
{
  "options": [
    {
      "text": "Red",
      "isAvailable": true,
      "hashtags": []
    },
    {
      "text": "Blue",
      "isAvailable": true,
      "hashtags": []
    }
  ],
  "metadata": {/* see below */}
}
```

If `combineTextAndOptionsResults` is enabled, there could be a `text` property on the Options Result. `advance()` from it with an option's index as usual.

A Command Result looks like this:

```javascript
{
  "command": "someCommand",
  "hashtags": [],
  "metadata": {/* see below */}
}
```

It could also have a `isDialogueEnd` property on it (though that may not be useful if you're using a command handler!)

Every Result contains `metadata` which includes node header tags including `title`, and also any file tags.

```javascript
  {
    "title": "StartingNode",
    "someTag": "someTag",
    "filetags": [
      "someFiletag"
    ]
  }
```


### Full example

Let's start with this code:

```javascript
import Bondage from '@mnbroatch/bondage';
 
// empty lines and uniform leading whitespace is trimmed
// so you can write your nodes in template strings neatly.
const dialogue = ` 
  title: WhereAreYou
  ---
  Where are you?
    -> Home
      Nice.
      <<doSomething home>>
    -> Work
      Rough.
      <<doSomething work>>
  That's it!
  ===
`

const runner = new Bondage({
  dialogue,
  startAt: 'WhereAreYou'
})
```

When we log out `runner.currentResult` above, we will get a TextResult with the `text` "Where are you?"

to continue, we call

```javascript
runner.advance()
```

and `runner.currentResult` will be an OptionsResult with an options array with two objects in it. One object's `text` property is "Nice" and one's is "Rough". We will choose "Nice" by calling:

```javascript
runner.advance(0)
```

Now, `runner.currentNode` is a CommandResult where `command` is "doSomething home".

```javascript
runner.advance()
```

One final TextResult, but this time `isDialogueEnd` is `true`.

If `combineTextAndOptionsResults` was true, the first value for `runner.currentResult` would be the same OptionsResult as above, but with a `text` property that says "Where are you?".

If a `handleCommand` function was supplied, it would be called and we would skip straight from the OptionsResult to the last TextResult.


# Functions

If you are supplying a `functions` object, it would look like this:

```javascript
const runner = new Bondage({
  dialogue,
  functions: {
    someFunction: (arg) => {/* do stuff */},
    someOtherFunction: (arg1, arg2) => {/* do other stuff */},
  }
})
```


# History

An array containing Results already visited is located at `runner.history`.


# React Component

A simple react component can be found at: [react-dialogue-tree](https://github.com/mnbroatch/react-dialogue-tree)


# Caveats

The `isDialogueEnd` feature assumes your dialogue will terminate on a TextResult, rather than a CommandResult or OptionsResult. The property will be absent if:
  - The dialogue terminates on an OptionsResult, or
  - The dialogue terminates on a CommandResult and a `handleCommand` callback is supplied.
    - Terminating on the `<<stop>>` command is fine


# Other included versions

A minified version exists at `@mnbroatch/bondage/dist/bondage.min.js`.

If you want to transpile for yourself, use `import Bondage from '@mnbroatch/bondage/src/index'` and make sure your transpiler isn't ignoring it. You will also need to transpile `@mnbroatch/bondage`, and include both in your bundle, if necessary.

A version compatibile with internet explorer is at `@mnbroatch/bondage/dist/bondage.ie.js`.


# Development

The code in `src/core/` aims for 100% compliance with the Yarn 2.0 spec, and nothing else. This is intended to provide an extra-stable layer for other non-language yarn features (like markup) to build upon.

The core parser is compiled ahead of time, so after making changes to the grammar you will need to run `node src/core/parser/make-parser`. This is done automatically during `npm run build`.

