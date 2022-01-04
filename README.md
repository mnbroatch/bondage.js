WIP

bondage.js for Yarn 2.0

This repo is a fork of a [fork](https://github.com/alforno/bondage.js) of [the original](https://github.com/hylyh/bondage.js).

# Known Deviations from Yarn 2.0 spec
- There is no type system. So,
  - Explicit typing is ignored.
  - Type safety is not enforced.

- Unary minus does not work in front of parens: (-2) works but -(2 + 2) does not.
  - use (0 - (2 + 2)) instead

todo: 
disallow dots in titles
set initial values with declare



# Usage
TODO

explain how functions and commands work

explain hashtags and node data
  - mention that options hashtags go on the individual option and node data goes on the options node
