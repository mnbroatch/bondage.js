WIP

bondage.js for Yarn 2.0

This repo is a fork of a [fork](https://github.com/alforno/bondage.js) of [the original](https://github.com/hylyh/bondage.js).

# Known Deviations from Yarn 2.0 spec
- Type safety is not enforced.
- "declare" commands are ignored.
  - You should set initial values on variableStorage manually instead.
- Reading from a .yarn file is left to the user; dialogues should be supplied as a text string or array of node objects.

# Usage
TODO

explain how functions and commands work

explain hashtags and node data
  - mention that options hashtags go on the individual option and node data goes on the options node
