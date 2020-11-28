# JS Calculator

## Introduction

One of the best ways to learn JavaScript syntax is to revisit familiar problems and concepts with our new language. We will be re-writing our calculator project in JavaScript!

Feel free to reference your Ruby calculator project.

## At a Glance

- Individual, [stage 1](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/classroom/rule-of-three.md#stage-1) project
- Due before class, **DATE HERE**
- Submit this project with a PR

## Learning Goals

- Write JS code with statements that practice conditional logic, using `if`, `else if`, or `else`  when appropriate
- Write JS code with statements that practice loops when appropriate
- Write JS code that reads an object
- Practice creating, storing, and modifying variables
- Practice creating and using functions

## Objective

We will build a calculator command line interface (CLI) to perform simple arithmetic. The program should use an input variable that contains two numbers and an operation to provide the result of applying the operation to the two numbers.

Our JavaScript projects, **our projects will NOT take user input,** and instead **we will use a variable to hold and represent user input.**

## Setup Requirements

1. Fork this project repo
1. Clone this repo onto your computer
1. Run `npm install` to install dependencies
1. Work on this project, mostly within `calculator.js`

## Getting Started

You should write your program as a series of statements within the file `calculator.js`. Anyone with this file you should be able to run the command `node calculator.js` to execute the program.

Look at the existing `calculator.js` file. There is a variable to represent example user input. Instead of using `gets.chomp` in this project (or the JavaScript equivalent to start), we will simply use variables like this one.

```javascript
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
```

We're starting the project with a variable (instead of a `gets.chomp` equivalent) because:

1. Practicing reading from objects is important, as they are *the most important data structure in JavaScript*
1. It's a little bit of work to get a JavaScript-`gets.chomp` going, and right now our focus is on learning syntax of conditional logic, calling and defining functions, and woring with data.

Feel free to alter or create the variables to your needs.

## Implementation Requirements

When a user runs this program, the program should **read a variable within the program to represent user input.** That "user input" lives in an object with a structure like this:

1. a number for the calculation
1. a second number for the calculation
1. a math operation

The program should use this input operation and two numbers to provide the result of applying the operation to the two numbers.

- The program should have support for these four operations: addition, subtraction, multiplication, and division.
- The program should accept both the name and the symbol for each possible operation. The expected names and symbols for each operation are the following:
  - `add` and `+`
  - `subtract` and `-`
  - `multiply` and `*`
  - `divide` and `/`
- You may add other names or symbols to the above operations
- There is no requirement to consider handling uppercase versions to the command above: you are required only to handle the lowercase versions of the operations above
- The program should gracefully handle unexpected user input by doing the following things:
  - check if the input is invalid. What happens if the user input is `nil` (i.e., the user just pressed enter)? What happens if the user tries to `add` `hotdog` to `elephant`? What if the user input is `hotdog` for an operator?
  - if the input is invalid, output a message to the command line that informs the user that the input was invalid

## Hints

<details>

  <summary>
    If you'd like some hints about structure or common syntax reminders, click to expand this.
  </summary>

  Consider structuring your file like this:

  1. At the top of your file, define a `const` variable that represents user input. Feel free to use the example variable we gave you, and rename the variable or values as appropriate.
  2. In the middle of your file, define a function named `calculate`. This function should take in one parameter named `input`.
  3. At the end of your file, call the function named `calculate`, and pass in the example user input variable you created at the top of your file. This line of code probably looks like `calculate(exampleAdditionInput)`

  Other things to consider:

  - The `if... else if... else` syntax is very different and a lot more strict in JS than in Ruby
  - There *is* a `switch` statement in JavaScript
  - Testing equality on strings in JS usually uses `===`, not `==` like in Ruby
  - Reading values from key-value pairs in objects (the thing that looks like a Ruby hash) can use either dot-notation or bracket-notation
  - Make plenty of helper functions! This will help you organize your code

</details>

## Testing and Verification Requirement

We haven't dived into unit tests in JavaScript yet, so we need to test and verify our project with tedious, non-automated input.

Before project submission, test and verify that your program works as expected with the following testing/verification requirements.

To make sure your program works you will need to run your program and check against the following criteria:
*  The program adds numbers accurately with both `add` and `+`
*  The program subtracts numbers accurately with both `subtract` and `-`
*  The program adds numbers accurately with both `multiply` and `*`
*  The program adds numbers accurately with both `divide` and `/`
*  The program handles divide when attempting to divide by zero
*  The program handles erroneous input.  For example the user might enter `clown` when asked to enter a number
    *  The program also needs to handle erroneous operators

## Optional Enhancements

The following is a list of optionals. Should you be ambitious to continue working on this project beyond the requirements, here is a list of features that are interesting. These enhancements are not listed in any particular order; feel free to pick an enhancement from anywhere in the list!

### Refactor to Accept User Input with `prompt`

- Inside your project root directory, install `prompt` with npm. This package allows for gathering input from a user.
  + `$ npm install prompt`
  + When it's done, you should now have a directory called `node_modules`
- Inside `calculator.js` in your editor and paste this code at the top of your file:
  ```javascript
  // This line "loads" the prompt package and puts it into a variable we can use called prompt
  // Lines like this (that use require()) typically go on the top of the file
  const prompt = require('prompt');
  
  const calculateUserInput = function(error, promptInput) {
    console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

    // Questions to ask and answer:
    // What is promptInput?
    // What data type? What does it hold? What does it represent?
    // How do we read values from it? What syntax?
    // How can we use it?
    // Can we call our existing functions now, inside of this function?
  }  
  

  //start the prompt
  prompt.start();

  //collect two numbers (num1 and num2) and an operation
  //then call the function `calculator` with the user input
  prompt.get(['num1','num2','operation'], calculateUserInput);
  ```
- Run your program with `$ node calculator.js`. What happens? What do you see? How do you interact with the program?
- Use these clues, experimentation, [the prompt package documentation](https://github.com/flatiron/prompt) and individual/collaborative research.
- Rename and alter the `calculateUserInput` function, and the rest of your project, to use `prompt` to collect user input.

### Other Enhancements

- Gracefully handle unexpected/erroneous user input with the following method:
  - output a message to the command line that informs the user that the input was invalid
  - asks the user to re-enter the input for the same prompt
  - does this until the input is valid
  - uses the newer, valid input
- Print out the formula in addition to the result, i.e. `2 + 2 = 4`
- Add support for computing exponents (`2^4 = 2 * 2 * 2 * 2 = 16`)
- Add support for the modulo operator (`10 % 3 = 1`).
- Make your program know when it needs to return an _integer_ versus a _float_.
- Add support for parentheticals, i.e. `10 / (5 + 5) = 1`.
- Add support for handling all cases (uppercase, capitals) for the operations, so that `ADD` and `add` and `Add` (and other combinations) are handled in the same way

Please note that you will only be graded on the requirements, and not on the optional enhancements.

## What Instructors Are Looking For

Check out the [feedback template](feedback.md) which lists the items instructors will be looking for as they evaluate your project.