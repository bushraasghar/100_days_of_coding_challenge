// *Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\n\tquestion 13\t\n");
let transportation = ['toyota corola', 'Honda city', 'BMW', 'Audi'];
transportation.forEach(transportation => {
    console.log(`“I would like to own a ${transportation}`);
});
console.log("\n\tquestion 14\t\n");
// *Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner
let guests = ['vicenzo', 'beak', 'goblin'];
for (let guest of guests) {
    console.log('its our pleasure for inviting for dear ' + guest);
}
// *Question 15:* Changing Guest List: 
// One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
console.log("\n\tquestion 15\t\n");
// let events:string[] = ['vicenzo','beak','goblin'];
// for( let event of events){
//     console.log('its our pleasure for inviting for dear ' + event);
// }
let nocoming = "goblin";
console.log(`sorry ${nocoming} can't make it to the dinner.`);
let newguest = 'haein';
guests[guests.indexOf(nocoming)] = newguest;
guests.forEach(guests => {
    console.log(`Hello ${guests} would you like to join me for dinner?`);
});
export {};
