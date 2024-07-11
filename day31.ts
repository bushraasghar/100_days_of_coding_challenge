// *Question 91:* Create an array of your three favorite fruits and add a new fruit to the end of the array.
console.log("\tQ91");

let favFruit = ["mango","banana","apple"]
console.log(favFruit);
favFruit.push("cheeku")
console.log(favFruit);



// *Question 92:* Write a function to remove the last element from an array and return the removed element
function array(text: string[]): string | undefined{
   
    return text.pop()
}
let arr = ["laptop",'mobile','tablet'];
console.log(array(arr));
console.log(arr);


// Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".

// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.