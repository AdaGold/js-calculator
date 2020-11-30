// This line "loads" the prompt package and puts it into a variable we can use called prompt
// Lines like this (that use require()) typically go on the top of the file
const prompt = require('prompt');
const calculateUserInput = require('./calculator').calculateUserInput;

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(['num1', 'num2', 'operation'], calculateUserInput);

