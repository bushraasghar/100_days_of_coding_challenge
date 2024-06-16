// Question 76:* Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
console.log("\tQ76");
function Values(num1, num2) {
    return num1 + num2;
}
console.log(Values(5, 5));
// Question 77:* Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
console.log("\tQ77");
function greet(name = "friend") {
    console.log(`Hello ${name}`);
}
greet();
// Question 78:* Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
console.log("\tQ78");
// function declaration  (function with name)
function declarations(num) {
    return num * 2;
}
console.log(declarations(3));
// function expression  (function without name)
let expression = function (num4) {
    return num4 * 2;
};
console.log(expression(3));
export {};
