// Question 70:* Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
console.log("\tQ70");
function loop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
loop();
// Question 71:* Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
console.log("\tQ71");
let myName = "bushra";
myName = "ibad"; //let can be reassign
console.log(myName);
// const age = 20;
// try{ age = 25 // const cannot be reassign
// }catch (error){
//     console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown);
// }
// Question 72:* Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
console.log("\tQ72");
let blockLet = "Hello coders";
let blockConst = "Hello World";
console.log(blockLet); //ok
console.log(blockConst); // ok
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst); // This will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
export {};
