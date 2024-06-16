// *Question 31:* No Users: Ensure your user list isn’t empty
console.log("\n\tQ31\n\t");
let noUser: string[] = [];
if (noUser.length === 0) {
    console.log("We need to find out some users");
    
} else {
    console.log("greeting user");
    
}
// *Question 32:* Checking Usernames: Ensure uniqueness in usernames.
console.log("\n\tQ32\n\t");

let current_user: string [] = ['admin','user1','user2','user4','user5'];
let new_user: string [] = ['User6','User7','User8','admin'];
new_user.forEach(new_user =>{
    if(current_user.some(current_user =>current_user.toLowerCase()===new_user.toLowerCase())){
        console.log(`${new_user} will need to enter a new user name.` );
        
    }else{
        console.log(`${new_user} is available`);
        
}
})

// *Question 33:* Ordinal Numbers: Display numbers with their ordinal suffixes.
console.log("\n\tQ33\n\t");

let ordinal_numbers: number[] = [1,2,3,4,5,6,7,8];
ordinal_numbers.forEach(ordinal_numbers =>{
    let suffixes = 'th';
    if(ordinal_numbers == 1){
        suffixes ='st'
     } else if(ordinal_numbers == 2){
        suffixes = 'nd'
     }else if(ordinal_numbers == 3){
        suffixes = 'rd';
     }
        console.log(`${ordinal_numbers}${suffixes}`);
        
    
})

// *Question 34:* Pizzas: Share your favorite pizzas and express your love for them.
console.log("\n\tQ34\n\t");
let pizzas :string[] = ['fajita','tikka','barbq','cheese']
pizzas.forEach(pizzas =>{
console.log(`I like ${pizzas} pizza flavour`);


})

// *Question 35:* Animals: Highlight animals with a common trait.
let pet_animals: string [] = ['cat','dog','goat','rabbit'];
pet_animals.forEach(pet_animals => {
    console.log(`${pet_animals} would be great pet animals`);
    
})
console.log("any of these animals would be great pet animals");


// *Question 36:* T-Shirt: Create a function for customizing t-shirt
console.log("\n\tQ36\n\t");
function make_tshirt(size: string,message: string){
    console.log(`bring t.shirt size ${size} and should be written a massege ${message} on it.`);
    
}
make_tshirt('meduim','Hey coder!!')

// *Question 37:* Large Shirts: Default values in make_shirt().
console.log("\n\tQ37\n\t");
function make_shirt(size: string = 'large', message: string = 'I love tsc'){
console.log(`Bring shirt size ${size} and should be written a message ${message} print on it. `);
}

make_shirt()
make_shirt('small')

// *Question 38:* Cities: Describing cities with a function.
console.log("\n\tQ38\n\t");
function cities(city:string, country:string){
    console.log(`${city} is the city of ${country} have beautiful weather.`);
    
}
cities('Islamabad','pakistan')


