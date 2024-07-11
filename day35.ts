// *Question 103:* Write a function that returns a random boolean value, true or false.
function returnsRandomboolean():boolean{
    return Math.random() > 0.5;
}
console.log(returnsRandomboolean());


// *Question 104:* Create a function that generates a random hexadecimal color code.
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(5, '0');
    return color; // Returns the random color code
}

console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.


// *Question 105:* Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function dice():number{
    return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

