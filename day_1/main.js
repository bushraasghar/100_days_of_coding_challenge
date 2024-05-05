// *Question 2:* Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let persone_name = "Bushra";
console.log(" 'Hello " + persone_name + ", would you like to learn some typescript today?' ");
// *Question 3:* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "bushra asghar";
console.log("uppercase " + personName.toUpperCase()); //name store in uppercase
console.log("lowercase " + personName.toLowerCase()); //name store in lowercase
console.log("titlecase " + personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
export {};
