// Question 64: combine strings and numbers write a function that merges a piece of text with a number. for example if provided with "age:" and 30 , it should give back "age : 30"
console.log("\tQ64");
function textNumber(text, number) {
    return text + number;
}
console.log(textNumber("age: ", 30));
//Question: 65 Determine the remainder: make a function that gets two numbbers and shows the leftover from dividing them using the % sign for ex: remainder (5,2) should give 1.
console.log("\tQ65");
function getRemainder(num1, num2) {
    return num1 % num2;
}
console.log(getRemainder(5, 2));
// Question 66: Logical and verification : create a function that checks two boolean (true / false) values. it should only say true if both are true using the && operator  
function checkOperator(val1, val2) {
    return val1 && val2;
}
console.log(checkOperator(true, false));
export {};
