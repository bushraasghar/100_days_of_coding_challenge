// *Question 28:* Stages of Life: Determine a person’s life stage with an if-else chain.
console.log("\n\tquest 28\n\t");
let person_age = 24;
if (person_age > 18) {
    console.log("you are adult");
}
else if (person_age < 20) {
    console.log("you are in teen age");
}
else if (person_age > 25) {
    console.log("you are mature");
}
// *Question 29:* Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
console.log("\n\t q29\n\t");
let favorite_fruit = ['mango', 'lichi', 'banana', 'grapes', 'apple'];
if (favorite_fruit.includes('mango')) {
    console.log("mango is all my favourite fruit");
}
if (favorite_fruit.includes('lichi')) {
    console.log("lichi is sweet and sour fruit.");
}
if (favorite_fruit.includes('banana')) {
    console.log("banana is soft and sweet fruit");
}
if (favorite_fruit.includes('grapes')) {
    console.log("grapes is like little sweet juicy balls");
}
else {
    console.log("this friut is not imcluded ");
}
// *Question 30:* Hello Admin: Greet users differently, especially 'admin'.
console.log("\n\t\ q30n\t\n");
let users = ['admin', 'user1', 'user2', 'user3'];
users.forEach(users => {
    if (users === 'admin') {
        console.log("Hello admin hope you are fine");
    }
    else {
        console.log(`hello ${users} thank you for logging`);
    }
});
// *Question 39:* City Names: Formatting city-country pairs.
console.log("\n\tQ39\n\t");
function city_name(city, country) {
    console.log(`city ${city} country ${country}`);
}
city_name('karachi', 'pakistan');
city_name('delhi', 'india');
city_name('tokoyo', 'japan');
city_name('paris', 'france');
city_name('seoul', 'korea');
// *Question 40:* Album: Create objects for music albums.
console.log("\n\tQ40\n\t");
// function albums(artist:string,title:string,tracks? : number) {
//     let albums = {artist,title}
//     if (tracks){
//         albums['tracks'] = tracks;
//     }
//     return albums
// }
// console.log(albums("artist one","the first album"));
function make_album(artist, title, tracks) {
    let album = { artist, title, tracks };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
// *Question 41:* Magicians: Display magician names from an array.
console.log("\n\tQ41\n\t");
let magician = ['Alice', 'harry potter', 'weasly'];
function show_magician(magician) {
    magician.forEach(magician => {
        console.log('magicians ' + magician);
    });
}
show_magician(magician);
// *Question 42:* Great Magicians: Add "the Great" to magician names.
console.log("\n\tQ42\n\t");
let magicians = ['Alice', 'harry potter', 'weasly'];
function great_magician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " great magician";
    }
}
great_magician(magicians);
show_magician(magician);
export {};
