// Question 106:* Determine if a given year is a leap year using comparison operators.
function leapyear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapyear(2000));
console.log(leapyear(1999));
// Question 107:* Write a condition using logical operators that checks if a number is divisible by both 2 and 3
function logicalOperator(val) {
    return (val % 2 === 0 && val % 3 === 0);
}
console.log(logicalOperator(5));
console.log(logicalOperator(18));
// Question 108:* Compare two strings to check if they are identical, ignoring case sensitivity.
function compareTwoString(msg1, msg2) {
    return (msg1.toLowerCase() === msg2.toLowerCase());
}
console.log(compareTwoString('hello', 'Hello'));
console.log(compareTwoString('typescript', 'javascript'));
export {};
