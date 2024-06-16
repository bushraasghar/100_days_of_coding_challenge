
// Question 79:* Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
console.log("\tQ79");

    let Car: any = {
        make: "toyota",
        model: "corolla",
        year: 2023
    }
 console.log(Car.model);
 
   

//    Question 80:* Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
console.log("\tQ80");

Car.colour = "blue";
Car.year = 2022

// *Question 81:* Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
let info = {
    name: "arisu",
    gender: "male",
    age: 25
}
function makeObject (){
    console.log(`my name is ${info.name} gander ${info.gender} and my age is ${info.age}`);
    
}
makeObject();
