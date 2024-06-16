// *Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function avgScore(...scores:number[]):number{
    let total = scores.reduce ((sum , score) => sum + score , 0);
    return total / scores.length
}
console.log(avgScore(50,60,10,20));


// *Question 59:* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later

// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number:number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function(number: number): number {
        return number + valueToAdd;
    };
}

// Making a magic box that adds 5
let addFive = makeAdder(40);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.


// *Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

// let userProfile = (function(){
//     let name : 'tom';
//     let age : 20;

//     return{
//         displayInfo: function(){
//             console.log(`name ${name} and age ${age}`);
            
//         }
//     }
// })();
// userProfile.displayInfo();





// // This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "John";
    let age = 30;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
