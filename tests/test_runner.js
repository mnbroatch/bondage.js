/* eslint no-unused-expressions: "off" */
/* eslint-env mocha */

'use strict';

const fs = require('fs');
const chai = require('chai');
const bondage = require('../src/bondage');

const expect = chai.expect;

describe('Dialogue', () => {
  let linksYarnData;
  let shortcutsYarnData;
  let assignmentYarnData;
  let conditionalYarnData;
  let commandAndFunctionYarnData;
  let inlineExpressionYarnData;

  let runner;

  before(() => {
    linksYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/links.json'));
    shortcutsYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/shortcuts.json'));
    assignmentYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/assignment.json'));
    conditionalYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/conditions.json'));
    commandAndFunctionYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/commandsandfunctions.json'));
    inlineExpressionYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/inlineexpression.json'));
  });

  beforeEach(() => {
    runner = new bondage.Runner();
  });

  it('Can run through a single line', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNode');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNode'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can run through two lines', () => {
    runner.load(linksYarnData);
    const run = runner.run('TwoLines');
    const yarnData = linksYarnData.find((n) => { return n.title === 'TwoLines'; });
    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is another test line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can start at a different node', () => {
    runner.load(linksYarnData);
    const run = runner.run('Option2');
    const yarnData = linksYarnData.find((n) => { return n.title === 'Option2'; });

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option2\'s test line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can run through a first option to another node', () => {
    runner.load(linksYarnData);
    const run = runner.run('ThreeNodes');
    const yarnData = linksYarnData.find((n) => { return n.title === 'ThreeNodes'; });
    const yarnData2 = linksYarnData.find((n) => { return n.title === 'Option1'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is another test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ], yarnData));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test line', [], yarnData2));

    expect(run.next().done).to.be.true;
  });

  it('Can run through a second option to another node', () => {
    runner.load(linksYarnData);
    const run = runner.run('ThreeNodes');
    const yarnData = linksYarnData.find((n) => { return n.title === 'ThreeNodes'; });
    const yarnData2 = linksYarnData.find((n) => { return n.title === 'Option2'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is another test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ], yarnData));

    value.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option2\'s test line', [], yarnData2));

    expect(run.next().done).to.be.true;
  });

  it('Includes node metadata with result', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNodeMetadata');
    const value = run.next().value;
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNodeMetadata'; });
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    expect(value.yarnNode.someProp).to.equal('Hello');
    expect(run.next().done).to.be.true;
  });

  it('Includes hashtags with text results', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNodeHashtag');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNodeHashtag'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult(
      'This is a test line',
      ['someHashtag', 'someOtherHashtag', 'lastHashtag'],
      yarnData,
    ));
    expect(run.next().done).to.be.true;
  });

  it('Ignores comments on option lines', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('NonNestedHashtag');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'NonNestedHashtag'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1', hashtags: ['someHashtag', 'someOtherHashtag', 'lastHashtag'] },
      { text: 'Option 2' },
    ], yarnData));
    value.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the second option', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('includes hashtags on conditional option lines', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('ConditionalHashtag');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'ConditionalHashtag'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2', isAvailable: false, hashtags: ['someHashtag', 'someOtherHashtag'] },
      { text: 'Option 3' },
    ], yarnData));

    value.select(2);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the third option', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('includes hashtags on command lines', () => {
  // it.only('includes hashtags on command lines', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('BasicCommandsHashtag');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'BasicCommandsHashtag'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('text in between commands', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', ['with', 'space'], ['someHashtag'], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('includes hashtags on lines only containing inline expression', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('SimpleInlineExpHashtag');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'SimpleInlineExpHashtag'; });

    runner.variables.set('firstvar', 1);

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('1', ['someHashtag'], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Ignores comments on text lines', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNodeComment');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNodeComment'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Ignores comments on their own line', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNodeWholeLineComment');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNodeWholeLineComment'; });
    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Hello', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Ignores comments on option lines', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('NonNestedComment');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'NonNestedComment'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], yarnData));
    value.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the second option', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('ignores comments on conditional option lines', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('ConditionalComment');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'ConditionalComment'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2', isAvailable: false },
      { text: 'Option 3' },
    ], yarnData));

    value.select(2);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the third option', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('ignores comments on command lines', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('BasicCommandsComment');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'BasicCommandsComment'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('text in between commands', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', ['with', 'space'], [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('ignores comments on lines only containing inline expression', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('SimpleInlineExpComment');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'SimpleInlineExpComment'; });

    runner.variables.set('firstvar', 1);

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('1', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Automatically goes to the jump node', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneJumpPassthrough');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneJumpPassthrough'; });
    const yarnData2 = linksYarnData.find((n) => { return n.title === 'Option1'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test line', [], yarnData2));
    expect(run.next().done).to.be.true;
  });

  it('Automatically goes through two jumps', () => {
    runner.load(linksYarnData);
    const run = runner.run('TwoJumpPassthrough');
    const yarnData = linksYarnData.find((n) => { return n.title === 'TwoJumpPassthrough'; });
    const yarnData2 = linksYarnData.find((n) => { return n.title === 'OneJumpPassthrough'; });
    const yarnData3 = linksYarnData.find((n) => { return n.title === 'Option1'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Real First test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First test line', [], yarnData2));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test line', [], yarnData3));
    expect(run.next().done).to.be.true;
  });

  it('Can run through shortcuts', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('NonNested');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'NonNested'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], yarnData));

    value.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the second option', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can run through nested shortcuts', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('Nested');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'Nested'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('text', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'shortcut1a' },
      { text: 'shortcut2a' },
    ], yarnData));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text1', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'nestedshortcut1' },
      { text: 'nestedshortcut2' },
    ], yarnData));

    value.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('NestedText2', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('more text', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can exclude a conditional shortcut', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('Conditional');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'Conditional'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2', isAvailable: false },
      { text: 'Option 3' },
    ], yarnData));

    value.select(2);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the third option', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('Numeric');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'Numeric'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal(-123.4);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment with an expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('NumericExpression');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'NumericExpression'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal(((1 + 2) * -3) + 4.3);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment with division expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('AssignmentWithDivision');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'AssignmentWithDivision'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line2', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal(100 / 5);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an string assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('String');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'String'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal('Variable String');

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a string assignment with an expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('StringExpression');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'StringExpression'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal('Variable String Appended');

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a boolean assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('Boolean');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'Boolean'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal(true);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a function boolean assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('AssignmentWithFunction');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'AssignmentWithFunction'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));
    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line2', [], yarnData));
    expect(runner.variables.get('testvar')).to.equal(false);

    value = run.next().value;
    expect(runner.variables.get('testvar')).to.equal(true);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a boolean assignment with expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('BooleanExpression');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'BooleanExpression'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal(true);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an assignment from one variable to another', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('Variable');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'Variable'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('firstvar')).to.be.undefined;
    expect(runner.variables.get('secondvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('secondvar')).to.equal('First variable string');

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an assignment from one variable to another via an expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('VariableExpression');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'VariableExpression'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('firstvar')).to.be.undefined;
    expect(runner.variables.get('secondvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('secondvar')).to.equal(-4.3 + 100);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an assignment from one variable to another via an expression with self reference', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('VariableExpression2');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'VariableExpression2'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('firstvar')).to.be.undefined;
    expect(runner.variables.get('secondvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('firstvar')).to.equal(300);

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIf');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'BasicIf'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if2', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if else conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIfElse');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'BasicIfElse'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside else', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if elseif conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIfElseIf');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'BasicIfElseIf'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside elseif', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if elseif else conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIfElseIfElse');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'BasicIfElseIfElse'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside else', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Halts when given the <<stop>> command', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('StopCommand');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'StopCommand'; });

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Ignores content after jumps when going through multiple options', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('Option1');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'Option1'; });
    const yarnData2 = commandAndFunctionYarnData.find((n) => { return n.title === 'Option2'; });
    const yarnData3 = commandAndFunctionYarnData.find((n) => { return n.title === 'StopCommand'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Prompt1', [], yarnData));
    value = run.next().value;
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Prompt2', [], yarnData2));
    value = run.next().value;
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First line', [], yarnData3));
    expect(run.next().done).to.be.true;
  });

  it('Returns commands to the user', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('BasicCommands');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'BasicCommands'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('text in between commands', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', ['with', 'space'], [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Returns commands to the user with an inline expression argument', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('ExpressionArgumentCommand');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'ExpressionArgumentCommand'; });
    runner.variables.set('testvar', 1);
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [2], [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Does not execute commands as functions', () => {
    runner.registerFunction('command', () => {
      throw new Error('function was called when it should not be');
    });

    runner.load(commandAndFunctionYarnData);
    const run = runner.run('BasicCommands');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'BasicCommands'; });

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], [], yarnData));
  });


  it('Returns complex commands to the user', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('ComplexCommands');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'ComplexCommands'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('text in between commands', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', ['with', 'space'], [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Call command with variable argument', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('CommandWithVariable');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'CommandWithVariable'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [1, 100], [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after command', [], yarnData));
  });

  it('Evaluates a function and uses it in a conditional', () => {
    runner.registerFunction('testfunc', (args) => {
      if (args[0] === 'firstarg') {
        if (args[1] === 'secondarg') {
          // Test returning true
          return true;
        }
        // Test returning false
        return false;
      }

      throw new Error(`Args ${args} were not expected in testfunc`);
    });

    runner.load(commandAndFunctionYarnData);
    const run = runner.run('FunctionConditional');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'FunctionConditional'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This should show', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('After both', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Correctly defines the built-in visited() function', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('VisitedFunctionStart');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'VisitedFunctionStart'; });
    const yarnData2 = commandAndFunctionYarnData.find((n) => { return n.title === 'VisitedFunction'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Hello', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('you have visited VisitedFunctionStart!', [], yarnData2));

    expect(run.next().done).to.be.true;
  });

  it('Correctly handles not visited()', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('NotVisitedFunction');
    const yarnData = commandAndFunctionYarnData.find((n) => { return n.title === 'NotVisitedFunction'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Hello', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('you have not visited VisitedFunctionStart!', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Should ignore text after a jump after an option', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('TextAfterJumpAfterOption');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'TextAfterJumpAfterOption'; });
    const yarnData2 = conditionalYarnData.find((n) => { return n.title === 'give.key'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Give key' },
    ], yarnData));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('You give the key to the troll.', [], yarnData2));

    expect(run.next().done).to.be.true;
  });

  it('Should ignore text after a jump after a conditional option', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('ConditionalOption');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'ConditionalOption'; });
    const yarnData2 = conditionalYarnData.find((n) => { return n.title === 'Objective'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Cond Option' },
    ], yarnData));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('You reach the objective.', [], yarnData2));

    expect(run.next().done).to.be.true;
  });

  it('Should ignore text after a jump after an option in a conditional block', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('OptionAfterOptionWithinConditional');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'OptionAfterOptionWithinConditional'; });
    const yarnData2 = conditionalYarnData.find((n) => { return n.title === 'give.key'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Give key' },
      { text: 'You keep the key.' },
    ], yarnData));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('You give the key to the troll.', [], yarnData2));
    value = run.next().value;

    expect(run.next().done).to.be.true;
  });

  it('Should move on after a first option with no follow-up is selected', () => {
  // it.only('Should move on after a first option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('EmptyFirstOption');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'EmptyFirstOption'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], yarnData));
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  // it.only('Should move on after a second option with no follow-up is selected', () => {
  it('Should move on after a second option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('EmptySecondOption');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'EmptySecondOption'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], yarnData));
    value.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Should move on after a conditional option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('EmptyConditional');
    const yarnData = shortcutsYarnData.find((n) => { return n.title === 'EmptyConditional'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], yarnData));
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can handle a simple inline expression', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('SimpleInlineExp');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'SimpleInlineExp'; });

    runner.variables.set('firstvar', 1);

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('1', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle sequential inline expressions', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('SequentialInlineExpressions');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'SequentialInlineExpressions'; });

    runner.variables.set('firstvar', 1);
    runner.variables.set('secondvar', 2);

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('12', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle non-sequential inline expressions', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('NonSequentialInlineExpressions');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'NonSequentialInlineExpressions'; });

    runner.variables.set('firstvar', 1);
    runner.variables.set('secondvar', 2);

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('1textbetween2', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle a simple inline expression in a sentence', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpSentence');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpSentence'; });

    runner.variables.set('firstvar', 'test');

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test.', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  // it.only('Can handle an inline expression in an option', () => {
  it('Can handle an inline expression in an option', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('OptionInlineExpression');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'OptionInlineExpression'; });
    runner.variables.set('firstvar', 'test');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'First test choice' },
      { text: 'Second choice' },
    ], yarnData));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test text', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  // it.only('Can handle an inline expression in a conditional option', () => {
  it('Can handle an inline expression in a conditional option', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('ConditionalOptionInlineExpression');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'ConditionalOptionInlineExpression'; });
    runner.variables.set('firstvar', 'test');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'First test choice' },
      { text: 'Second choice' },
    ], yarnData));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test text', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle a simple inline expression whitespace in a sentence', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpAddSentence');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpAddSentence'; });

    runner.variables.set('firstvar', 1);

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a 2 sentence.', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('treats "declare" like "set", ignoring explicit typing', () => {
  // it.only('treats "declare" like "set", ignoring explicit typing', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('SimpleInlineExpDeclare');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'SimpleInlineExpDeclare'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('1', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if arithmetic expression elseif conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('ArithmeticExpressionConditional');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'ArithmeticExpressionConditional'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Final text', [], yarnData));

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment with exponent expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('ExponentExpression');
    const yarnData = assignmentYarnData.find((n) => { return n.title === 'ExponentExpression'; });

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', [], yarnData));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', [], yarnData));

    expect(runner.variables.get('testvar')).to.equal(2 ** 2);

    expect(run.next().done).to.be.true;
  });

  it('can handle a negated function call in a conditional', () => {
    runner.registerFunction('returnFalse', () => { return false; });

    runner.load(conditionalYarnData);
    const run = runner.run('IfNotFunction');
    const yarnData = conditionalYarnData.find((n) => { return n.title === 'IfNotFunction'; });
    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can handle inline expression containing function call', () => {
    runner.registerFunction('testfunc', (args) => {
      if (args[0] === 'frank') {
        if (args[1] === 2) {
          // Test returning true
          return true;
        }
        // Test returning false
        return false;
      }

      throw new Error(`Args ${args} were not expected in testfunc`);
    });

    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpFunctionResult');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpFunctionResult'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('The results are true.', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can handle inline expression containing equality', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpEquality');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpEquality'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a true sentence.', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  // it.only('Can handle inline expression containing function call and expression', () => {
  it('Can handle inline expression containing function call and expression', () => {
    runner.registerFunction('testfunc', () => { return 1; });

    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpFunctionResultExp');
    const yarnData = inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpFunctionResultExp'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('The results are 2.', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can run through a single line with an escaped curly brace', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNodeEscapeCurlyBrace');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNodeEscapeCurlyBrace'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a {test} line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can run through a single line with two consecutive escaped curly braces', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNodeEscapeTwoCurlyBraces');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNodeEscapeTwoCurlyBraces'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a {{test} line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can run through a single line with an escaped hashtag', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNodeEscapeHashtag');
    const yarnData = linksYarnData.find((n) => { return n.title === 'OneNodeEscapeHashtag'; });
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a #test line', [], yarnData));
    expect(run.next().done).to.be.true;
  });

  it('Can run through three lines when the first ends on an escaped character', () => {
    runner.load(linksYarnData);
    const run = runner.run('ThreeLineEscape');
    const yarnData = linksYarnData.find((n) => { return n.title === 'ThreeLineEscape'; });
    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is another test line', [], yarnData));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Yet another test line', [], yarnData));
    expect(run.next().done).to.be.true;
  });
});
