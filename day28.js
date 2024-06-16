// Question 82:* Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
console.log("\tQ82");
function countLenght(tense) {
    return tense.length;
}
console.log(countLenght("bushra"));
// Question 83:* Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
console.log("\tQ83");
function Converting(str) {
    let lowerCase = str.toLowerCase();
    let upperCase = str.toUpperCase();
    console.log(`uppercase ${upperCase} lowercase ${lowerCase}`);
}
Converting("HELLO world");
// *Question 84:* Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
console.log("\tQ84");
function Replacing(text) {
    return text.replace("javascript", "typescript");
}
console.log(Replacing(" i am learning javascript"));
export {};
