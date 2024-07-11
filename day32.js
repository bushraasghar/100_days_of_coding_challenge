// *Question 94:* Use the .map() method to create a new array that contains the length of each word from an array of words.
let words = ['star', 'moon', 'mars', 'jupiter', 'uranus'];
const lengths = words.map(words => words.length);
console.log(lengths);
// Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.
function Usefilter(numbers) {
    return numbers.filter(number => number > 10);
}
let numbers = [4, 58, 35, 11, 6, 80, 25]; //it only return number greater 10 
console.log(Usefilter(numbers));
// *Question 96:* Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function Usereduce(digits) {
    return digits.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
}
let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //it sums all number and gives a single value
console.log(Usereduce(digits));
export {};
