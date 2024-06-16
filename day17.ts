import { log } from "node:console";

// *Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
console.log('\tQ49\t');

function hobbies(...hobby:string[]){
    let myHobbies = ['Reading','Netflix','imagination'];
    // console.log(`My hobby is ${myHobbies[0]} novels`);
    // console.log(`My hobby is watching ${myHobbies[1]} `);
    // console.log(`My hobby is doing ${myHobbies[2]} all time`);
    myHobbies.forEach(myHobbies => {
        console.log(`i enjoy ${myHobbies}`);
        
    })
    
    return hobby
}

hobbies();
// Question 50:* Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
console.log('\tQ50\t');
// Using template literals to define a multiline string

let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;

// Logging the multiline string to the console
console.log(myIdealDay);


// *Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
console.log('\tQ51\t');
// original functions.
function calculateArea ( width: number, height: number):number{
    return width * height;
    
}

// refactorize in arrow functions.
let calculateAreaarrow = (width : number , height: number): number => width * height

console.log(calculateArea(5 , 6));
console.log(calculateAreaarrow(4,5));





