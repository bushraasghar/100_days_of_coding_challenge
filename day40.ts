// *Question 118:* Write a loop that logs numbers from 1 to 10 to the console.
for (let i = 0; i < 11; i++) {
console.log(i);
}

// *Question 119:* Create a while loop that logs "Hello, World!" 5 times.
let count : number = 0
while (count < 5) {
    console.log('Hello world');
    count++;
}


// *Question 120:* Use a for...of loop to iterate through an array of your favorite movies and log each one.
// Defines an array of favorite movies
const favoriteMovies: string[] = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
  ];
  // Uses a for...of loop to iterate through favoriteMovies
  for (const movie of favoriteMovies) {
    console.log(movie); // Logs each movie name
  }
  // Each movie in the array is logged to the console, one at a time.