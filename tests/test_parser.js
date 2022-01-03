/* eslint no-unused-expressions: "off" */
/* eslint-env mocha */

'use strict';

const chai = require('chai');
const parser = require('../src/parser/parser');
const nodes = require('../src/parser/nodes');

const expect = chai.expect;

describe('Parser', () => {
  it('can parse simple text', () => {
    const results = parser.parse('some text');

    const expected = [
      new nodes.TextNode('some text', { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a simple function call', () => {
    const results = parser.parse('<<commandtext>>');

    const expected = [
      new nodes.FunctionResultNode('commandtext', [], { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function call with one open arg', () => {
    const results = parser.parse('<<commandtext 1>>');

    const expected = [
      new nodes.FunctionResultNode('commandtext', [new nodes.NumericLiteralNode('1')], { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function call with one variable open arg', () => {
    const results = parser.parse('<<commandtext $somevar>>');

    const expected = [
      new nodes.FunctionResultNode('commandtext', [new nodes.VariableNode('somevar')], { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function call with two open args', () => {
    const results = parser.parse('<<commandtext 2 "face">>');

    const expected = [
      new nodes.FunctionResultNode(
        'commandtext',
        [
          new nodes.NumericLiteralNode('2'),
          new nodes.StringLiteralNode('face'),
        ],
        { first_line: results[0].lineNum },
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function call with three open args', () => {
    const results = parser.parse('<<commandtext 2 "face" true>>');

    const expected = [
      new nodes.FunctionResultNode(
        'commandtext',
        [
          new nodes.NumericLiteralNode('2'),
          new nodes.StringLiteralNode('face'),
          new nodes.BooleanLiteralNode('true'),
        ],
        { first_line: results[0].lineNum },
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function call with multiple identifiers', () => {
    const results = parser.parse('<<commandtext ident1 ident2 true>>');

    const expected = [
      new nodes.FunctionResultNode('commandtext', [new nodes.TextNode('ident1'), new nodes.TextNode('ident2'), new nodes.BooleanLiteralNode('true')], { first_line: results[0].lineNum },
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse some text followed by a newline and a command', () => {
    const results = parser.parse('some text\n<<commandtext>>');

    const expected = [
      new nodes.TextNode('some text', { first_line: results[0].lineNum }),
      new nodes.FunctionResultNode('commandtext', [], { first_line: results[0].lineNum + 1 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a simple assignment', () => {
    const results = parser.parse('<<set $testvar = 5>>');

    const expected = [
      new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('5')),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a simple assignment using "declare", ignoring explicit types', () => {
    const results = parser.parse('<<declare $testvar = 5 as String>>');

    const expected = [
      new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('5')),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an assignment with function call', () => {
    const results = parser.parse('<<set $testvar = visited(1)>>');

    const expected = [
      new nodes.SetVariableEqualToNode('testvar',
        new nodes.FunctionResultNode('visited', [new nodes.NumericLiteralNode('1')])),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an assignment with function call containing expression', () => {
    const results = parser.parse('<<set $testvar = visited(1 + 2)>>');

    const expected = [
      new nodes.SetVariableEqualToNode('testvar',
        new nodes.FunctionResultNode('visited', [new nodes.ArithmeticExpressionAddNode(
          new nodes.NumericLiteralNode('1'),
          new nodes.NumericLiteralNode('2'))])),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an assignment with function call containing expression 2', () => {
    const results = parser.parse('<<set $testvar = visited((1 + 2))>>');

    const expected = [
      new nodes.SetVariableEqualToNode('testvar',
        new nodes.FunctionResultNode('visited', [
          new nodes.ArithmeticExpressionAddNode(
            new nodes.NumericLiteralNode('1'),
            new nodes.NumericLiteralNode('2'),
          ),
        ])),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an assignment involving arithmetic', () => {
    const results = parser.parse('<<set $testvar = -4.3 - (1 + 2) * 3.1 / 5>>');

    const expected = [
      new nodes.SetVariableEqualToNode(
        'testvar',
        new nodes.ArithmeticExpressionMinusNode(
          new nodes.NumericLiteralNode('-4.3'),
          new nodes.ArithmeticExpressionDivideNode(
            new nodes.ArithmeticExpressionMultiplyNode(
              new nodes.ArithmeticExpressionAddNode(
                new nodes.NumericLiteralNode('1'),
                new nodes.NumericLiteralNode('2'),
              ),
              new nodes.NumericLiteralNode('3.1'),
            ),
            new nodes.NumericLiteralNode('5'),
          ),
        ),
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a shortcut command', () => {
    const results = parser.parse('text\n-> shortcut1\n\tText1\n-> shortcut2\n\tText2\nmore text');

    const expected = [
      new nodes.TextNode('text', { first_line: 1 }),
      new nodes.DialogShortcutNode('shortcut1', [new nodes.TextNode('Text1', { first_line: 3 })], { first_line: 2 }),
      new nodes.DialogShortcutNode('shortcut2', [new nodes.TextNode('Text2', { first_line: 5 })], { first_line: 4 }),
      new nodes.TextNode('more text', { first_line: 6 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse nested shortcut commands', () => {
    const results = parser.parse('text\n-> shortcut1\n\tText1\n\t-> nestedshortcut1\n\t\tNestedText1\n\t-> nestedshortcut2\n\t\tNestedText2\n-> shortcut2\n\tText2\nmore text');

    const expected = [
      new nodes.TextNode('text', { first_line: 1 }),
      new nodes.DialogShortcutNode('shortcut1', [
        new nodes.TextNode('Text1', { first_line: 3 }),
        new nodes.DialogShortcutNode('nestedshortcut1', [
          new nodes.TextNode('NestedText1', { first_line: 5 }),
        ], { first_line: 4 }),
        new nodes.DialogShortcutNode('nestedshortcut2', [
          new nodes.TextNode('NestedText2', { first_line: 7 }),
        ], { first_line: 6 }),
      ], { first_line: 2 }),
      new nodes.DialogShortcutNode('shortcut2', [new nodes.TextNode('Text2', { first_line: 9 })], { first_line: 8 }),
      new nodes.TextNode('more text', { first_line: 10 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a shortcut option containing an assignment', () => {
    const results = parser.parse('text\n-> shortcut1\n\tshortcut text1\n-> shortcut2\n\tshortcut text2\n<<set $testvar to 6>>\nmore text');

    const expected = [
      new nodes.TextNode('text', { first_line: 1 }),
      new nodes.DialogShortcutNode('shortcut1', [new nodes.TextNode('shortcut text1', { first_line: 3 })], { first_line: 2 }),
      new nodes.DialogShortcutNode('shortcut2', [new nodes.TextNode('shortcut text2', { first_line: 5 })], { first_line: 4 }),
      new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('6')),
      new nodes.TextNode('more text', { first_line: 7 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('correctly ignores a double newline', () => {
    const results = parser.parse('some text\n\n<<commandtext>>');

    const expected = [
      new nodes.TextNode('some text', { first_line: results[0].lineNum }),
      new nodes.FunctionResultNode('commandtext', [], { first_line: results[0].lineNum + 2 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('correctly ignores a bunch of newlines', () => {
    const results = parser.parse('some text\n\n\n\n\n\n<<commandtext>>\n');

    const expected = [
      new nodes.TextNode('some text', { first_line: results[0].lineNum }),
      new nodes.FunctionResultNode('commandtext', [], { first_line: results[0].lineNum + 6 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a simple inline expression', () => {
    const results = parser.parse('{$testvar}');

    const expected = [
      new nodes.InlineExpressionNode(new nodes.VariableNode('testvar'), { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an escaped curly brace', () => {
    const results = parser.parse('\\{testtext\\}');

    const expected = [
      new nodes.TextNode('{', { first_line: 1 }),
      new nodes.TextNode('testtext', { first_line: 1 }),
      new nodes.TextNode('}', { first_line: 1 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an escaped command', () => {
    const results = parser.parse('\\<<testtext>>');

    const expected = [
      new nodes.TextNode('<', { first_line: 1 }),
      new nodes.TextNode('<testtext>>', { first_line: 1 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an escaped comment', () => {
    const results = parser.parse('\\//testtext');

    const expected = [
      new nodes.TextNode('/', { first_line: 1 }),
      new nodes.TextNode('/testtext', { first_line: 1 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an escaped hashtag', () => {
    const results = parser.parse('\\#testtext');

    const expected = [
      new nodes.TextNode('#', { first_line: 1 }),
      new nodes.TextNode('testtext', { first_line: 1 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an escaped regular character', () => {
    const results = parser.parse('\\testtext');

    const expected = [
      new nodes.TextNode('t', { first_line: 1 }),
      new nodes.TextNode('esttext', { first_line: 1 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a simple inline expression within a sentence', () => {
    const results = parser.parse('Hello there {$testvar}.');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.TextNode('Hello there ', { first_line: results[0].lineNum }),
      new nodes.InlineExpressionNode(new nodes.VariableNode('testvar'), { first_line: results[0].lineNum }),
      new nodes.TextNode('.', { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an inline expression within a command', () => {
    const results = parser.parse('<<commandtext {$testvar}>>');

    const expected = [
      new nodes.FunctionResultNode(
        'commandtext',
        [
          new nodes.InlineExpressionNode(
            new nodes.VariableNode('testvar'),
            { first_line: results[0].lineNum },
          ),
        ],
        { first_line: results[0].lineNum },
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse inline expression with function call', () => {
    const results = parser.parse('Hello there {testfunc(1,2)}.');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.TextNode('Hello there ', { first_line: results[0].lineNum }),
      new nodes.InlineExpressionNode(new nodes.FunctionResultNode('testfunc', [
        new nodes.NumericLiteralNode('1'),
        new nodes.NumericLiteralNode('2'),
      ]), { first_line: results[0].lineNum }),
      new nodes.TextNode('.', { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse inline expression with addition within a sentence', () => {
    const results = parser.parse('Hello there {$testvar + 1} test.');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.TextNode('Hello there ', { first_line: results[0].lineNum }),
      new nodes.InlineExpressionNode(new nodes.ArithmeticExpressionAddNode(
        new nodes.VariableNode('testvar'),
        new nodes.NumericLiteralNode('1'))
        , { first_line: results[0].lineNum }),
      new nodes.TextNode(' test.', { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a simple If expression', () => {
    const results = parser.parse('<<if $testvar == true>>Hi<<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(
        new nodes.EqualToExpressionNode(
          new nodes.VariableNode('testvar'),
          new nodes.BooleanLiteralNode('true')),
        [new nodes.TextNode('Hi', { first_line: 1 })]),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a nested If expression', () => {
    const results = parser.parse('<<if $testvar == true>><<if $testvar2 == false>>Hi<<endif>><<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(new nodes.EqualToExpressionNode(new nodes.VariableNode('testvar')
        , new nodes.BooleanLiteralNode('true'))
        , [new nodes.IfNode(new nodes.EqualToExpressionNode(new nodes.VariableNode('testvar2')
          , new nodes.BooleanLiteralNode('false'))
          , [new nodes.TextNode('Hi', { first_line: 1 })]),
        ]),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an assignment within an If expression', () => {
    const results = parser.parse('<<if $testvar == true>>Hi\n<<set $testvar to 5>><<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(
        new nodes.EqualToExpressionNode(
          new nodes.VariableNode('testvar'),
          new nodes.BooleanLiteralNode('true')),
        [new nodes.TextNode('Hi', { first_line: 1 }),
          new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('5'))]),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse am assignment within nested If expression', () => {
    const results = parser.parse('<<if $testvar == true>><<if $testvar2 == false>>Hi\n<<set $testvar to 5>><<endif>><<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(new nodes.EqualToExpressionNode(new nodes.VariableNode('testvar')
        , new nodes.BooleanLiteralNode('true'))
        , [new nodes.IfNode(new nodes.EqualToExpressionNode(new nodes.VariableNode('testvar2')
          , new nodes.BooleanLiteralNode('false'))
          , [new nodes.TextNode('Hi', { first_line: 1 }),
            new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('5'))]),
        ]),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an AND OR If expression', () => {
    const results = parser.parse('<<if ($testvar == true) || $override == true>>Hi<<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(
        new nodes.BooleanOrExpressionNode(
          new nodes.EqualToExpressionNode(
            new nodes.VariableNode('testvar'),
            new nodes.BooleanLiteralNode('true'),
          ),
          new nodes.EqualToExpressionNode(
            new nodes.VariableNode('override'),
            new nodes.BooleanLiteralNode('true'),
          ),
        ),
        [new nodes.TextNode('Hi', { first_line: 1 })],
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an AND OR If expression2', () => {
    const results = parser.parse('<<if ($testvar == true && $testvar2 > 1) || $override == true>>Hi<<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(
        new nodes.BooleanOrExpressionNode(
            new nodes.BooleanAndExpressionNode(
              new nodes.EqualToExpressionNode(
                new nodes.VariableNode('testvar'),
                new nodes.BooleanLiteralNode('true'),
              ),
              new nodes.GreaterThanExpressionNode(
                new nodes.VariableNode('testvar2'),
                new nodes.NumericLiteralNode('1'),
              ),
            ),
          new nodes.EqualToExpressionNode(
            new nodes.VariableNode('override'),
            new nodes.BooleanLiteralNode('true'),
          ),
        ),
        [new nodes.TextNode('Hi', { first_line: 1 })],
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function call within an If expression', () => {
    const results = parser.parse('<<if visited("testnode")>>\nHi\n<<set $testvar to 5>>\n<<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(
        new nodes.FunctionResultNode('visited', [
          new nodes.StringLiteralNode('testnode'),
        ]),
        [
          new nodes.TextNode('Hi', { first_line: 2 }),
          new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('5')),
        ]),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function call within an If not expression', () => {
    const results = parser.parse('<<if not visited("testnode")>>\nHi\n<<set $testvar to 5>>\n<<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(
        new nodes.NegatedBooleanExpressionNode(
          new nodes.FunctionResultNode('visited', [
            new nodes.StringLiteralNode('testnode'),
          ]),
        ),
        [
          new nodes.TextNode('Hi', { first_line: 2 }),
          new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('5')),
        ]),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a function negated boolean expression', () => {
    const results = parser.parse('<<if not true>>\nHi\n<<set $testvar to 5>>\n<<endif>>');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.IfNode(
        new nodes.NegatedBooleanExpressionNode(new nodes.BooleanLiteralNode('true')),
        [
          new nodes.TextNode('Hi', { first_line: 2 }),
          new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('5')),
        ]),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an assignment involving exponent', () => {
    const results = parser.parse('<<set $testvar = 2 ** 2>>');

    const expected = [
      new nodes.SetVariableEqualToNode(
        'testvar',
        new nodes.ArithmeticExpressionExponentNode(
          new nodes.NumericLiteralNode('2'),
          new nodes.NumericLiteralNode('2'))),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an assignment involving exponent 2', () => {
    const results = parser.parse('<<set $testvar = (2 ** 2)>>');

    const expected = [
      new nodes.SetVariableEqualToNode(
        'testvar',
        new nodes.ArithmeticExpressionExponentNode(
          new nodes.NumericLiteralNode('2'),
          new nodes.NumericLiteralNode('2'),
        ),
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse an inline expression with exponent within a sentence', () => {
    const results = parser.parse('Hello there {2 ** 2} test.');

    // They should all be on the same line.
    // Runner aggregates text and expression value for same line.
    const expected = [
      new nodes.TextNode('Hello there ', { first_line: results[0].lineNum }),
      new nodes.InlineExpressionNode(new nodes.ArithmeticExpressionExponentNode(
        new nodes.NumericLiteralNode('2'),
        new nodes.NumericLiteralNode('2'))
        , { first_line: results[0].lineNum }),
      new nodes.TextNode(' test.', { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a comment on a text node', () => {
    const results = parser.parse('some text// blah #ignore');

    const expected = [
      new nodes.TextNode('some text', { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse hashtags on a text node', () => {
    const results = parser.parse('some text#someHashtag#anotherHashtag #lastHashtag // #ignore');

    const expected = [
      new nodes.TextNode(
        'some text',
        { first_line: results[0].lineNum },
        ['someHashtag', 'anotherHashtag', 'lastHashtag'],
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse comments on a simple function call', () => {
    const results = parser.parse('<<commandtext>>// blah #ignore');

    const expected = [
      new nodes.FunctionResultNode('commandtext', [], { first_line: results[0].lineNum }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse hashtags on a simple function call', () => {
    const results = parser.parse('<<commandtext>>#someHashtag#anotherHashtag #lastHashtag // #ignore');

    const expected = [
      new nodes.FunctionResultNode(
        'commandtext',
        [],
        { first_line: results[0].lineNum },
        ['someHashtag', 'anotherHashtag', 'lastHashtag'],
      ),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse a shortcut option containing an assignment', () => {
    const results = parser.parse('text//alaksjdakj\n-> shortcut1//alaksjdakj\n\tshortcut text1//alaksjdakj\n-> shortcut2//alaksjdakj\n\tshortcut text2//alaksjdakj\n<<set $testvar to 6>>//alaksjdakj\nmore text//alaksjdakj');

    const expected = [
      new nodes.TextNode('text', { first_line: 1 }),
      new nodes.DialogShortcutNode('shortcut1', [new nodes.TextNode('shortcut text1', { first_line: 3 })], { first_line: 2 }),
      new nodes.DialogShortcutNode('shortcut2', [new nodes.TextNode('shortcut text2', { first_line: 5 })], { first_line: 4 }),
      new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('6')),
      new nodes.TextNode('more text', { first_line: 7 }),
    ];

    expect(results).to.deep.equal(expected);
  });

  it('can parse hashtags on shortcut options', () => {
    const results = parser.parse('text\n-> shortcut1#hashtag1\n\tshortcut text1\n-> shortcut2<<if true == true>>#hashtag2\n\tshortcut text2\n<<set $testvar to 6>>\nmore text');

    const expected = [
      new nodes.TextNode('text', { first_line: 1 }),
      new nodes.DialogShortcutNode('shortcut1', [new nodes.TextNode('shortcut text1', { first_line: 3 })], { first_line: 2 }, ['hashtag1']),
      new nodes.ConditionalDialogShortcutNode(
        'shortcut2',
        [new nodes.TextNode('shortcut text2', { first_line: 5 })],
        new nodes.EqualToExpressionNode(
          new nodes.BooleanLiteralNode('true'),
          new nodes.BooleanLiteralNode('true'),
        ),
        { first_line: 4 },
        ['hashtag2'],
      ),
      new nodes.SetVariableEqualToNode('testvar', new nodes.NumericLiteralNode('6')),
      new nodes.TextNode('more text', { first_line: 7 }),
    ];

    expect(results).to.deep.equal(expected);
  });
});
