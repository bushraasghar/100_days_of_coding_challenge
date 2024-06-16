//*Question 44:* Sandwiches: Summarize sandwich orders with varying ingredients.
// *Explain & TIP:* Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
function make_sandwish(...item) {
    console.log(`Make a sandwish with ${item.join(', ')}.`);
}
make_sandwish('bread', 'cocumber', 'mayoneese', 'salid');
make_sandwish('turkey', 'italian', 'pakistan');
// *Question 45:* Cars: Create detailed car objects with flexible properties.
// *Explain & TIP:* Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.
console.log('\n\tQ45\n\t');
function make_car(manufacturer, colour, model) {
    console.log(`make a ${manufacturer} car in ${colour} and i want model number of ${model} `);
}
make_car('corolla', 'red', 2018);
make_car('toyota', 'blue', 2020);
export {};
