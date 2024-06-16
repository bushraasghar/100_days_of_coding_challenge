// *Question 52:* Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let smartphone = {
    brand: 'Tecno spark 6 go',
    model: 2023,
    battery: '6000mah',
    Storage: '150gb',
    color: 'blue',
    screen: '6.5 inches'
};
console.log(smartphone);
// *Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
console.log('\tQ53\t');
let programmer = {
    languages: ['pythone', 'typescript', 'javascript'],
    software: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
let { languages, software, tools } = programmer;
console.log(`Language: ${languages[0]}, Framework: ${software[0]}, Tool: ${tools[0]}`);
console.log(`Language: ${languages[1]}, Framework: ${software[1]}, Tool: ${tools[1]}`);
console.log(`Language: ${languages[2]}, Framework: ${software[2]}, Tool: ${tools[2]}`);
// Question 54:* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
console.log('\tQ 54');
function createObjectWithDynamicKey(key, value) {
    return { key, value };
}
// let dynamicObject = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(createObjectWithDynamicKey('theme', 'dark'));
export {};
