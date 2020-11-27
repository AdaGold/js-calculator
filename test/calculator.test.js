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
      operator: '+',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + 4 = 7']);
  });
  test('3 + -4 = -1', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operator: '+',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + -4 = -1']);
  });

  test('3 * 4 = 12', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operator: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 4 = 12']);
  });

  test('3 * -4 = -12', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operator: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * -4 = -12']);
  });

  test('3 * 0 = 0', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '0',
      operator: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 0 = 0']);
  });

  test('15 / 3 = 5', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '3',
      operator: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['15 / 3 = 5']);
  });

  test('-15 / 3 = 5', () => {

    calculateUserInput({}, {
      num1: '-15',
      num2: '3',
      operator: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['-15 / 3 = -5']);
  });

  test('Can catch divideByZero errors', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '0',
      operator: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['You cannot divide by zero']);
  });


});

