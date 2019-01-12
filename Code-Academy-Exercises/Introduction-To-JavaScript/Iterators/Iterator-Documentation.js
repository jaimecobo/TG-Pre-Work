const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));

/*
There are many additional built-in array methods, a complete list of which is on the MDN's Array iteration methods page.
The documentation for each method contains several sections:
A short definition.
A block with the correct syntax for using the method.
A list of parameters the method accepts or requires.
The return value of the function.
An extended description.
Examples of the method's use.
Other additional information.
*/
