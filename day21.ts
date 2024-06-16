// *Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
console.log("\tQ61");

enum vehicles{
    cars,
    trucks,
    motorcycles
}
console.log(vehicles.cars);
console.log(vehicles[2]);


// Question 62:* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
console.log("\tQ62");
interface Student {
    name: string,
    age: number,
    class: number
}
let student : Student = {
    name:'bushra',
    age: 23,
    class: 12
}
console.log(student);

// *Question 63:* Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
console.log("\tQ63");

type Shape = {
    kind : "circle" | "rectangle",
    radius? : number,
    height? : number,
    width? : number
}
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.

