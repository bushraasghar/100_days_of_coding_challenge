// Question 88:* Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function sum( num1 : number): number{
    return  Math.round(num1)
}
console.log(sum(56.5));



// *Question 89:* Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function Convertingtonumbers(text: string): number{
    return parseInt(text)
}
console.log(Convertingtonumbers("123455"));


// Question 90:* Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function checkNaN( val: any): boolean{
    return isNaN(val)
}
console.log(checkNaN("334anyy"));

