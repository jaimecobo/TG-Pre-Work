const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

console.log();

groceryList.unshift('popcorn');
console.log(groceryList);

console.log();

console.log(groceryList.slice(1, 4));

console.log();

console.log(groceryList);

console.log();

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

/*
Some arrays methods that are available to JavaScript developers include:
.join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.
Using these built-in methods make it easier to do some common tasks when working with arrays.
*/
