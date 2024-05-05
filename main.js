// *Question 19:* Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating
//  the number of people you are inviting to dinner.
let peoples = ['vincenzo', 'beak', 'haein', 'goblin', 'lee min ho'];
console.log("i am inviting " + peoples.length + " peoples to dinner.");
// Question 20:* Think of something you could store in an array. For example, you could make a list of mountains,
//  rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\n\tquestiom 20\n\t");
let languages = ['urdu', 'english', 'hindi', 'korean', 'thai', 'chinese', 'arabic'];
// languages.forEach(languages =>{
//     console.log(`I want to learn more languages like ${languages}`);
// })
console.log('I want to learn ', languages);
// *Question 21:* Think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
console.log("\n\tquest 21\t\n");
let book = {
    title: "Harry potter",
    published: 2000,
    author: "J.K Rowling",
};
console.log(`I read an amazing book ${book.title} of ${book.author} published in ${book.published}`);
export {};
