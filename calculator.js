
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
// '3 + 5 = 8'

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;