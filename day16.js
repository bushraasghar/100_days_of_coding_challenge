// *Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: 'Dell',
    model: 'XPS',
    year: 2024,
    describe: function () {
        console.log(`I have a laptop of ${this.make} and model ${this.model} of year ${this.year}`);
    }
};
laptop.describe();
// *Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
console.log("\n\tQ47\n\t");
let laptops = [
    { make: 'Dell', model: 'XPS 15', year: 2024 },
    { make: 'Apple', model: 'Make book pro', year: 2023 },
    { make: 'HP', model: 'Spectre', year: 2020 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
// *Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
console.log("\n\tQ48\n\t");
let priceSet1 = [20000, 25000, 22000];
let priceSet2 = [32000, 19000, 10000];
let combinePrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinePrices);
export {};
