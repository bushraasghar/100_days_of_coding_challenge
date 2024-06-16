// *Question 73:* Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

console.log("\tQ73");

function value(){
    let val = "arisu";
console.log(val);
    val = "ukashi"
    console.log(val);
}
value();

// *Question 74:* Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
console.log("\tQ74");

let a = 5;
let b = 10;
console.log(a , b);
let swap = a; //stores val of a
a = b  //a store val of b
b = swap // b store val of swap have val of a
console.log(a , b);

// Question 75:* Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
console.log("\tQ75");
function operators(){
let x = 4;
console.log("initial ", x);
x += 2 ;
console.log("addition of 2",x);
x -= 1;
console.log("subtract of 1 " , x);
x *= 2;
console.log("multiply by 2" , x);
x /= 2;
console.log("divide by 2", x);
}
operators();


