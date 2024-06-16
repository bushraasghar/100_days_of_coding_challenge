// *Question 55:* Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value
console.log("\tQ55\t");

let arrayOfNumber : number[] =[6,8,9,1,2]

let doubleNumber = arrayOfNumber.map(arrayOfNumber=>
    arrayOfNumber * 2)

console.log(doubleNumber);

// *Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
console.log("\tQ56\t");

let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "boolean");

// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.


// Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.
console.log('\tQ57');

// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.

