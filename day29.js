// *Question 85:* Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
console.log("\tQ85");
function Findingtheposition(text) {
    return text.indexOf("coding");
}
console.log(Findingtheposition('i love coding , and what about you.'));
console.log(Findingtheposition('coding'));
// *Question 86:* Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
console.log("\tQ86");
function Checking(str) {
    return str.includes("javascript");
}
console.log(Checking("i love java.")); // false
console.log(Checking("i love javascript.")); // true
// Question 87:* Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function Extracting(string) {
    return string.substring(0, 15);
}
console.log(Extracting("typescript is a superset of javascript"));
export {};
