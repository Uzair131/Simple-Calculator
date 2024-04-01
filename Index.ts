#! /usr/bin/env node

// For Welcome Message:
console.log("\n\tWelcome To\ 'M.Uzair\' - CLI Simple Calculator\n");

import inquirer from "inquirer";

//Asking Question from Users through Inquirer

const answer = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter your second number", type: "number", name: "secondNumber"},
    {
    message: "Select any one of the operator to perform any action", 
    type: "list", 
    name:"operator", 
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
},
]);

// Conditional Statement If / Else
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} 
else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} 
else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
} 
else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} 

else {"Please select the correct operator"};