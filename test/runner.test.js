/* eslint no-unused-expressions: "off" */
/* eslint-env jest */

'use strict';

// TODO: Make less painful to look at

import fs from 'fs';
import bondage from '../src/index';

const getNormalGenerator = (runner, nodeName) => runner.run(nodeName)
const getGetGeneratorHereGenerator = (runner, nodeName) => runner.run(nodeName).next().value.getGeneratorHere()

// describe.each([[getGetGeneratorHereGenerator]])('Dialogue', (getGenerator) => {
// describe.each([[getNormalGenerator]])('Dialogue', (getGenerator) => {
describe.each([[getNormalGenerator], [getGetGeneratorHereGenerator]])('Dialogue', (getGenerator) => {
  let linksYarnData;
  let shortcutsYarnData;
  let assignmentYarnData;
  let conditionalYarnData;
  let commandAndFunctionYarnData;
  let inlineExpressionYarnData;

  let runner;

  beforeAll(() => {
    linksYarnData = JSON.parse(fs.readFileSync('./test/yarn_files/links.json'));
    shortcutsYarnData = JSON.parse(fs.readFileSync('./test/yarn_files/shortcuts.json'));
    assignmentYarnData = JSON.parse(fs.readFileSync('./test/yarn_files/assignment.json'));
    conditionalYarnData = JSON.parse(fs.readFileSync('./test/yarn_files/conditions.json'));
    commandAndFunctionYarnData = JSON.parse(fs.readFileSync('./test/yarn_files/commandsandfunctions.json'));
    inlineExpressionYarnData = JSON.parse(fs.readFileSync('./test/yarn_files/inlineexpression.json'));
  });

  beforeEach(() => {
    runner = new bondage.Runner();
  });

  it('Can run through a single line', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNode');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNode'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can run through two lines', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'TwoLines');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'TwoLines'; }) } };
    delete metadata.body;
    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is another test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can start at a different node', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'Option2');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'Option2'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is Option2\'s test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can run through a first option to another node', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'ThreeNodes');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'ThreeNodes'; }) } };
    delete metadata.body;
    const metadata2 = { ...{ ...linksYarnData.find((n) => { return n.title === 'Option1'; }) } };
    delete metadata2.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is another test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is Option1\'s test line', [], metadata2), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can run through a second option to another node', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'ThreeNodes');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'ThreeNodes'; }) } };
    delete metadata.body;
    const metadata2 = { ...{ ...linksYarnData.find((n) => { return n.title === 'Option2'; }) } };
    delete metadata2.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is another test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(1);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is Option2\'s test line', [], metadata2), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Includes node metadata with result', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeMetadata');
    const value = run.next().value;
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeMetadata'; }) } };
    delete metadata.body;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(value.metadata.someProp).toEqual('Hello');
    expect(run.next().done).toBe(true);
  });

  it('Includes hashtags with text results', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeHashtag');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeHashtag'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult(
      'This is a test line',
      ['someHashtag', 'someOtherHashtag', 'lastHashtag'],
      metadata,
    ), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Ignores hashtags in comments on option lines', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'NonNestedHashtag');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'NonNestedHashtag'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1', hashtags: ['someHashtag', 'someOtherHashtag', 'lastHashtag'] },
      { text: 'Option 2' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });
    value.select(1);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is the second option', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('includes hashtags on conditional option lines', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'ConditionalHashtag');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'ConditionalHashtag'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2', isAvailable: false, hashtags: ['someHashtag', 'someOtherHashtag'] },
      { text: 'Option 3' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(2);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is the third option', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is after both options', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('includes hashtags on command lines', () => {
    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'BasicCommandsHashtag');
    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'BasicCommandsHashtag'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.CommandResult('command', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('text in between commands', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.CommandResult('command with "space"', ['someHashtag'], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('includes hashtags on lines only containing inline expression', () => {
    runner.load(inlineExpressionYarnData);
    runner.variables.set('firstvar', 1);
    let run = getGenerator(runner, 'SimpleInlineExpHashtag');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'SimpleInlineExpHashtag'; }) } };
    delete metadata.body;

    run = run.next().value.getGeneratorHere();
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('1', ['someHashtag'], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Ignores comments on text lines', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeComment');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeComment'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Ignores comments on their own line', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeWholeLineComment');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeWholeLineComment'; }) } };
    delete metadata.body;
    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Hello', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Ignores inline expressions in comments on option lines', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'NonNestedComment');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'NonNestedComment'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });
    value.select(1);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is the second option', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('ignores comments on conditional option lines', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'ConditionalComment');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'ConditionalComment'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2', isAvailable: false },
      { text: 'Option 3' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(2);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is the third option', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is after both options', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('ignores comments on command lines', () => {
    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'BasicCommandsComment');
    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'BasicCommandsComment'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.CommandResult('command', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('text in between commands', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.CommandResult('command with "space"', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('ignores comments on lines only containing inline expression', () => {
    runner.load(inlineExpressionYarnData);
    runner.variables.set('firstvar', 1);
    let run = getGenerator(runner, 'SimpleInlineExpComment');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'SimpleInlineExpComment'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('1', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Automatically goes to the jump node', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneJumpPassthrough');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneJumpPassthrough'; }) } };
    delete metadata.body;
    const metadata2 = { ...linksYarnData.find((n) => { return n.title === 'Option1'; }) };
    delete metadata2.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('First test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is Option1\'s test line', [], metadata2), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Automatically goes through two jumps', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'TwoJumpPassthrough');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'TwoJumpPassthrough'; }) } };
    delete metadata.body;
    const metadata2 = { ...linksYarnData.find((n) => { return n.title === 'OneJumpPassthrough'; }) };
    delete metadata2.body;
    const metadata3 = { ...linksYarnData.find((n) => { return n.title === 'Option1'; }) };
    delete metadata3.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Real First test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('First test line', [], metadata2), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is Option1\'s test line', [], metadata3), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can run through shortcuts', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'NonNested');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'NonNested'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(1);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is the second option', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is after both options', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can run through nested shortcuts', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'Nested');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'Nested'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('text', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'shortcut1a' },
      { text: 'shortcut2a' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text1', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'nestedshortcut1' },
      { text: 'nestedshortcut2' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(1);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('NestedText2', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('more text', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can exclude a conditional shortcut', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'Conditional');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'Conditional'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2', isAvailable: false },
      { text: 'Option 3' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(2);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is the third option', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is after both options', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can set a custom variable storage', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'Numeric');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'Numeric'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    runner.setVariableStorage(new Map());
    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual(-123.4);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a numeric assignment', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'Numeric');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'Numeric'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual(-123.4);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a numeric assignment with an expression', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'NumericExpression');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'NumericExpression'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual(((1 + 2) * -3) + 4.3);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a numeric assignment with division expression', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'AssignmentWithDivision');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'AssignmentWithDivision'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line2', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual(100 / 5);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate an string assignment', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'String');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'String'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual('Variable String');

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a string assignment with an expression', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'StringExpression');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'StringExpression'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual('Variable String Appended');

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a boolean assignment', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'Boolean');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'Boolean'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual(true);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a function boolean assignment', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'AssignmentWithFunction');
    runner.registerFunction('identity', (x) => { return x; });
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'AssignmentWithFunction'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line2', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(runner.variables.get('testvar')).toEqual(false);

    value = run.next().value;
    expect(runner.variables.get('testvar')).toEqual(true);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a boolean assignment with expression', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'BooleanExpression');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'BooleanExpression'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual(true);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate an assignment from one variable to another', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'Variable');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'Variable'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('firstvar')).toBe(undefined);
    expect(runner.variables.get('secondvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('secondvar')).toEqual('First variable string');

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate an assignment from one variable to another via an expression', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'VariableExpression');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'VariableExpression'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('firstvar')).toBe(undefined);
    expect(runner.variables.get('secondvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('secondvar')).toEqual(-4.3 + 100);

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate an assignment from one variable to another via an expression with self reference', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'VariableExpression2');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'VariableExpression2'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('firstvar')).toBe(undefined);
    expect(runner.variables.get('secondvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('firstvar')).toEqual(300);

    expect(run.next().done).toBe(true);
  });

  it('Can handle an if conditional', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'BasicIf');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'BasicIf'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text before', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside if', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside if2', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text after', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an if else conditional', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'BasicIfElse');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'BasicIfElse'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text before', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside else', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text after', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an if elseif conditional', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'BasicIfElseIf');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'BasicIfElseIf'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text before', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside elseif', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text after', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an if elseif else conditional', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'BasicIfElseIfElse');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'BasicIfElseIfElse'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text before', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside else', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text after', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Halts when given the <<stop>> command', () => {
    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'StopCommand');
    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'StopCommand'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('First line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Ignores content after jumps when going through multiple options', () => {
    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'Option1');
    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'Option1'; }) } };
    delete metadata.body;
    const metadata2 = { ...commandAndFunctionYarnData.find((n) => { return n.title === 'Option2'; }) };
    delete metadata2.body;
    const metadata3 = { ...commandAndFunctionYarnData.find((n) => { return n.title === 'StopCommand'; }) };
    delete metadata3.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Prompt1', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Prompt2', [], metadata2), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('First line', [], metadata3), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Returns commands to the user', () => {
    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'BasicCommands');
    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'BasicCommands'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.CommandResult('command', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('text in between commands', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.CommandResult('command with "space"', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Returns commands with inline expressions to the user', () => {
    runner.load(commandAndFunctionYarnData);
    runner.variables.set('testvar1', 1);
    runner.variables.set('testvar2', 5);
    runner.variables.set('testvar3', 10);
    let run = getGenerator(runner, 'ExpressionArgumentCommand');
    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'ExpressionArgumentCommand'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.CommandResult('command 1 5 apple 10', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('handles a simple function call with numbers', () => {
    runner.registerFunction('addOne', (num) => { return num + 1; });
    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'NumberFunction');

    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'NumberFunction'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('4', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('5', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Evaluates a function and uses it in a conditional', () => {
    runner.registerFunction('testfunc', (arg1, arg2) => {
      if (arg1 === 'firstarg') {
        if (arg2 === 'secondarg') {
          // Test returning true
          return true;
        }
        // Test returning false
        return false;
      }

      throw new Error(`Args ${[arg1, arg2]} were not expected in testfunc`);
    });

    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'FunctionConditional');
    const metadata = { ...{ ...commandAndFunctionYarnData.find((n) => { return n.title === 'FunctionConditional'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('First line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This should show', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('After both', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Should ignore text after a jump after an option', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'TextAfterJumpAfterOption');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'TextAfterJumpAfterOption'; }) } };
    delete metadata.body;
    const metadata2 = { ...conditionalYarnData.find((n) => { return n.title === 'give_key'; }) };
    delete metadata2.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text before', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Give key' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(0);
    const next = run.next()
    value = next.value;
    expect(value).toEqual({ ...new bondage.TextResult('You give the key to the troll.', [], metadata2), getGeneratorHere: value.getGeneratorHere });
    expect(next.done).toBe(true);
  });

  it('Should ignore text after a jump after a conditional option', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'ConditionalOption');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'ConditionalOption'; }) } };
    delete metadata.body;
    const metadata2 = { ...conditionalYarnData.find((n) => { return n.title === 'Objective'; }) };
    delete metadata2.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text before', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Cond Option' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('You reach the objective.', [], metadata2), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Should ignore text after a jump after an option in a conditional block', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'OptionAfterOptionWithinConditional');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'OptionAfterOptionWithinConditional'; }) } };
    delete metadata.body;
    const metadata2 = { ...conditionalYarnData.find((n) => { return n.title === 'give_key'; }) };
    delete metadata2.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text before', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside if', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Give key' },
      { text: 'You keep the key.' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('You give the key to the troll.', [], metadata2), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Should move on after a first option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'EmptyFirstOption');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'EmptyFirstOption'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });
    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is after both options', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Should move on after a second option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'EmptySecondOption');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'EmptySecondOption'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });
    value.select(1);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is after both options', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Should move on after a conditional option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    let run = getGenerator(runner, 'EmptyConditional');
    const metadata = { ...{ ...shortcutsYarnData.find((n) => { return n.title === 'EmptyConditional'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });
    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is after both options', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can handle a simple inline expression', () => {
    runner.load(inlineExpressionYarnData);
    runner.variables.set('firstvar', 1);
    let run = getGenerator(runner, 'SimpleInlineExp');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'SimpleInlineExp'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('1', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle sequential inline expressions', () => {
    runner.load(inlineExpressionYarnData);
    runner.variables.set('firstvar', 1);
    runner.variables.set('secondvar', 2);
    let run = getGenerator(runner, 'SequentialInlineExpressions');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'SequentialInlineExpressions'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('12', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle non-sequential inline expressions', () => {
    runner.load(inlineExpressionYarnData);
    runner.variables.set('firstvar', 1);
    runner.variables.set('secondvar', 2);
    let run = getGenerator(runner, 'NonSequentialInlineExpressions');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'NonSequentialInlineExpressions'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('1textbetween2', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle a simple inline expression in a sentence', () => {
    runner.load(inlineExpressionYarnData);
    runner.variables.set('firstvar', 'test');
    let run = getGenerator(runner, 'InlineExpSentence');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpSentence'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test.', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an arithmetic inline expression', () => {
    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'InlineExpArithmetic');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpArithmetic'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('The results are 10 and 12 and 1.', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an inline expression with a variable', () => {
    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'InlineExpVariable');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpVariable'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('The results are -1 and true and true and true and true and true.', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an inline expression in an option', () => {
    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'OptionInlineExpression');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'OptionInlineExpression'; }) } };
    delete metadata.body;
    runner.variables.set('firstvar', 'test');

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'First test choice' },
      { text: 'Second choice' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is Option1\'s test text', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an inline expression in a conditional option', () => {
    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'ConditionalOptionInlineExpression');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'ConditionalOptionInlineExpression'; }) } };
    delete metadata.body;
    runner.variables.set('firstvar', 'test');

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'First test choice' },
      { text: 'Second choice' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    value.select(0);
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is Option1\'s test text', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle a simple inline expression whitespace in a sentence', () => {
    runner.variables.set('firstvar', 1);
    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'InlineExpAddSentence');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpAddSentence'; }) } };
    delete metadata.body;

    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a 2 sentence.', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can handle an if arithmetic expression elseif conditional', () => {
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'ArithmeticExpressionConditional');
    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'ArithmeticExpressionConditional'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside if', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text after', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Final text', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(run.next().done).toBe(true);
  });

  it('Can evaluate a numeric assignment with exponent expression', () => {
    runner.load(assignmentYarnData);
    let run = getGenerator(runner, 'ExponentExpression');
    const metadata = { ...{ ...assignmentYarnData.find((n) => { return n.title === 'ExponentExpression'; }) } };
    delete metadata.body;

    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toBe(undefined);

    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Test Line After', [], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(runner.variables.get('testvar')).toEqual(2 ** 2);

    expect(run.next().done).toBe(true);
  });

  it('can handle a negated function call in a conditional', () => {
    runner.registerFunction('returnFalse', () => { return false; });
    runner.load(conditionalYarnData);
    let run = getGenerator(runner, 'IfNotFunction');

    const metadata = { ...{ ...conditionalYarnData.find((n) => { return n.title === 'IfNotFunction'; }) } };
    delete metadata.body;
    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Inside if', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Text after', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can handle inline expression containing function call', () => {
    runner.registerFunction('testfunc', (arg1, arg2) => {
      if (arg1 === 'frank') {
        if (arg2 === 2) {
          // Test returning true
          return true;
        }
        // Test returning false
        return false;
      }

      throw new Error(`Args ${[arg1, arg2]} were not expected in testfunc`);
    });

    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'InlineExpFunctionResult');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpFunctionResult'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('The results are true.', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can handle inline expression containing equality', () => {
    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'InlineExpEquality');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpEquality'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a true sentence.', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can handle inline expression containing function call and expression', () => {
    runner.registerFunction('testfunc', () => { return 1; });

    runner.load(inlineExpressionYarnData);
    let run = getGenerator(runner, 'InlineExpFunctionResultExp');
    const metadata = { ...{ ...inlineExpressionYarnData.find((n) => { return n.title === 'InlineExpFunctionResultExp'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('The results are 2.', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can run through a single line with an escaped curly brace', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeEscapeCurlyBrace');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeEscapeCurlyBrace'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a {test} line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Does not remove backslashes if noEscape is on', () => {
    runner.load(linksYarnData);
    runner.noEscape = true;
    let run = getGenerator(runner, 'OneNodeEscapeCurlyBrace');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeEscapeCurlyBrace'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a \\{test\\} line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
    runner.noEscape = false;
  });

  it('Can run through a single line with two consecutive escaped curly braces', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeEscapeTwoCurlyBraces');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeEscapeTwoCurlyBraces'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a {{test} line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can run through a single line with an escaped hashtag', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeEscapeHashtag');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeEscapeHashtag'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a #test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can escape hashtags and comments together', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'OneNodeEscapeHashtagComment');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'OneNodeEscapeHashtagComment'; }) } };
    delete metadata.body;
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult(
      'This is a test line#escaped//',
      ['lastHashtag'],
      metadata,
    ), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Can run through three lines when the first ends on an escaped character', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'ThreeLineEscape');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'ThreeLineEscape'; }) } };
    delete metadata.body;
    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is a test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('This is another test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult('Yet another test line', [], metadata), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('Throws an error if an out-of-range option is selected', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'ThreeNodes');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'ThreeNodes'; }) } };
    delete metadata.body;

    let value = run.next().value;
    value = run.next().value;
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(() => { value.select(100); }).toThrow();
    expect(() => { value.select(); }).toThrow();
  });

  it('Throws an error if no option is selected before next() is called', () => {
    runner.load(linksYarnData);
    let run = getGenerator(runner, 'ThreeNodes');
    const metadata = { ...{ ...linksYarnData.find((n) => { return n.title === 'ThreeNodes'; }) } };
    delete metadata.body;

    let value = run.next().value;
    value = run.next().value;
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ], metadata), getGeneratorHere: value.getGeneratorHere });

    expect(() => { run.next(); }).toThrow();
  });

  it('Throws an error if a function is called but not registered', () => {
    runner.load(commandAndFunctionYarnData);
    let run = getGenerator(runner, 'FunctionConditional');
    run.next();
    expect(() => { run.next(); }).toThrow();
  });

  it('Throws an error if evaluateExpressionOrLiteral is called with an unknown node type', () => {
    expect(
      runner.evaluateExpressionOrLiteral({ type: 'TextNode', text: 'hello' }),
    ).toEqual('hello');
    expect(() => { runner.evaluateExpressionOrLiteral({ type: 'Blah', text: 'hello' }); }).toThrow();
  });

  it('Throws an error if starting node does not exist', () => {
    runner.load(commandAndFunctionYarnData);
    expect(() => { runner.run('BlahDoesNotExistBlah').next(); }).toThrow();
  });

  it('Throws an error if a node does not have a title', () => {
    expect(() => { runner.load([{ body: 'Hello' }]); }).toThrow();
  });

  it('Throws an error if a node has a dot in the title', () => {
    expect(() => { runner.load([{ title: 'Cool.Node', body: 'Hello' }]); }).toThrow();
  });

  it('Throws an error if two nodes have the same title', () => {
    expect(() => {
      runner.load([
        { title: 'CoolNode', body: 'Hello' },
        { title: 'CoolNode', body: 'Goodbye' },
      ]);
    }).toThrow();
  });

  it('Throws an error if a node does not have a body', () => {
    expect(() => { runner.load([{ title: 'CoolNode', body: '' }]); }).toThrow();
  });

  it('Throws an error if a non-function is registed as a function', () => {
    expect(() => { runner.registerFunction('testfunc', {}); }).toThrow();
  });

  it('Throws an error if custom variableStorage does not have a get or set', () => {
    expect(() => { runner.setVariableStorage({ set: () => {} }); }).toThrow();
    expect(() => { runner.setVariableStorage({ get: () => {} }); }).toThrow();
    expect(() => { runner.setVariableStorage({ get: () => {}, set: () => {} }); }).not.toThrow();
  });

  it('Throws an error if a node has a duplicate tag', () => {
    const dialogue = `
      title: Start
      title: Start
      ---
      This is a test line.
      ===
    `;
    expect(() => { runner.load(dialogue); }).toThrow();
  });

  it('handles a string yarn dialogue', () => {
    const dialogue = `
      #someFiletag

      #someOtherFiletag

      title: Start
      otherkey: someValue
      body: should be ignored
      ---
      This is a test line.
      <<jump End>>
      ===

      title: End

      ---

      This is another test line.
      ===
    `;
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    let value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult(
      'This is a test line.',
      [],
      {
        title: 'Start',
        otherkey: 'someValue',
        filetags: ['someFiletag', 'someOtherFiletag'],
      },
    ), getGeneratorHere: value.getGeneratorHere });
    value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult(
      'This is another test line.',
      [],
      {
        title: 'End',
        filetags: ['someFiletag', 'someOtherFiletag'],
      },
    ), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('handles a string yarn with no tags', () => {
    const dialogue = `
      title: Start
      ignoreme
      ---
      This is a test line.
      ===
    `;
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    const value = run.next().value;
    expect(value).toEqual({ ...new bondage.TextResult(
      'This is a test line.',
      [],
      { title: 'Start' },
    ), getGeneratorHere: value.getGeneratorHere });
    expect(run.next().done).toBe(true);
  });

  it('handles declaration', () => {
    const dialogue = `
      title: Start
      ---
      <<declare $testvar1 = 1>>
      <<set $testvar2 to 2>>
      <<declare $testvar2 = 023984029384>>
      var1 { $testvar1 }
      var2 { $testvar2 }
      var3 { $testvar3 }
      <<declare $testvar3 = 3>>
      ===
    `;
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    let value = run.next().value;
    expect(value.text).toEqual('var1 1');
    value = run.next().value;
    expect(value.text).toEqual('var2 2');
    value = run.next().value;
    expect(value.text).toEqual('var3 3');
    expect(run.next().done).toBe(true);
  });

  it('does not overwrite existing value with declaration', () => {
    const dialogue = `
      title: Start
      ---
      <<declare $testvar1 = 1>>
      { $testvar1 }
      ===
    `;
    runner.variables.set('testvar1', 99);
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    const value = run.next().value;
    expect(value.text).toEqual('99');
    expect(run.next().done).toBe(true);
  });

  it('throws an error on duplicate declaration', () => {
    const dialogue = `
      title: Start
      ---
      <<declare $testvar1 = 1>>
      <<declare $testvar1 = 2>>
      ===
    `;
    expect(() => { runner.load(dialogue); }).toThrow();
  });

  it('throws an error if declaration value and explicit type do not match', () => {
    const dialogue = `
      title: Start
      ---
      <<declare $testvar1 = 1 as Bool>>
      ===
    `;
    expect(() => { runner.load(dialogue); }).toThrow();
  });

  it('throws an error if a variable value overwrites a different type', () => {
    const dialogue = `
      title: Start
      ---
      <<set $testvar1 = 1>>
      <<set $testvar1 = "bad">>
      ===
    `;
    runner.load(dialogue);
    expect(() => {
      let run = getGenerator(runner, 'Start');
      run.next();
    }).toThrow();
  });

  it('handles an indented command in a conditional block', () => {
    const dialogue = `
      title: Start
      ---
      <<declare $testvar1 = 1>>
      <<if $testvar1 == 1>>
        { $testvar1 }
        <<jump Two>>
      <<endif>>
      ===

      title: Two
      ---
      Hello
      ===
    `;
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    let value = run.next().value;
    expect(value.text).toEqual('1');
    value = run.next().value;
    expect(value.text).toEqual('Hello');
    value = run.next().value;
    expect(run.next().done).toBe(true);
  });

  it('handles an option inside a conditional block', () => {
    const dialogue = `
      title: Start
      ---
      <<declare $testvar1 = 1>>
      { $testvar1 }
      <<if $testvar1 == 1>>
        -> option
          hello
      <<endif>>
      ===
    `;
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    let value = run.next().value;
    expect(value.text).toEqual('1');
    value = run.next().value;
    value.select(0)
    value = run.next().value;
    expect(value.text).toEqual('hello');
    expect(run.next().done).toBe(true);
  });

  it('handles a jump to the result of an inline expression', () => {
    const dialogue = `
      title: Start
      ---
      hello
      <<jump {"Two"}>>
      ===

      title: Two
      ---
      world
      ===
    `;
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    let value = run.next().value;
    expect(value.text).toEqual('hello');
    value = run.next().value;
    expect(value.text).toEqual('world');
    expect(run.next().done).toBe(true);
  });

  it('handles a recursive jump', () => {
    const dialogue = `
      title: Start
      ---
      hello
      <<jump Start>>
      ===
    `;
    runner.load(dialogue);
    let run = getGenerator(runner, 'Start');
    let value = run.next().value;
    expect(value.text).toEqual('hello');
    value = run.next().value;
    expect(value.text).toEqual('hello');
  });
});
