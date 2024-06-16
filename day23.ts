// Question 67:* Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
console.log("\tQ67");

function Arithmetic(val1: number, val2: string): number{
    return val1 + Number(val2)
}
console.log(Arithmetic(4,"6"));

// *Question 68:* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
console.log("\tQ68");
function Multiplying( num1: number,num2: number): number{
    return Math.round((num1 * num2) * 100) /100;
}
console.log(Multiplying(0.1,0.5));

// Question 69:* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
console.log("\tQ69");

function Dividing( dividend: number , divisor: number): {quotient: number , remainder: number}{
    let quotient = Math.floor(dividend/divisor)
    let remainder = dividend % divisor
    return {quotient , remainder}
}
console.log(Dividing(10,6));
