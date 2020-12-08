const calculateUserInput = require('../calculator').calculateUserInput;

describe('calculateUserInput', () => {
  let standardOutput = null;

  // Before each test replace standard output (console.log)
  // with a "mock" function so we can see that console.log
  // was called with the proper parameters.
  beforeEach(() => {
    standardOutput = console.log;
    console.log = jest.fn(str => str);
  });

  // After each test restore console.log
  afterEach(() => {
    console.log = standardOutput;
  })
  test('3 + 4 = 7', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: '+',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + 4 = 7']);
  });

  test('3 + 4 = 7 with "add"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: 'add',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + 4 = 7']);
  });
  test('3 + -4 = -1', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: '+',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + -4 = -1']);
  });

  test('3 + -4 = -1 with "add"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: 'add',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + -4 = -1']);
  });

  test('3 * 4 = 12', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 4 = 12']);
  });

  test('3 * 4 = 12 with "multiply"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: 'multiply',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 4 = 12']);
  });

  test('3 * -4 = -12', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * -4 = -12']);
  });

  test('3 * -4 = -12, with "multiply', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * -4 = -12']);
  });

  test('3 * 0 = 0', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '0',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 0 = 0']);
  });

  test('15 / 3 = 5', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '3',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['15 / 3 = 5']);
  });

  test('15 / 3 = 5 with "divide"', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '3',
      operation: 'divide',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['15 / 3 = 5']);
  });

  test('-15 / 3 = 5', () => {

    calculateUserInput({}, {
      num1: '-15',
      num2: '3',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['-15 / 3 = -5']);
  });

  test('Can catch divideByZero errors', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '0',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['You cannot divide by zero']);
  });

  test('it prints "clown is not a number." when given "clown" instead of a number for num1', () => {
    calculateUserInput({}, {
      num1: 'clown',
      num2: '0',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['clown is not a number.']);
  });

  test('it prints "pasta is not a number." when given "pasta" instead of a number for num2', () => {
    calculateUserInput({}, {
      num1: '3',
      num2: 'pasta',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['pasta is not a number.']);
  });

  test('it prints "unsupported operator" for the operation "don\'t panic"', () => {
    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: 'don\'t panic',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['unsupported operator']);
  });
});

