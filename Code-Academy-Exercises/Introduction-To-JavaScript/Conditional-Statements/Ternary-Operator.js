let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

// Ternary refactor of previous if/else statemant
isLocked ? console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.');



let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// Ternary refactor of previous if/else statemant
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// Ternary refactor of previous if/else statemant
favoritePhrase === 'Love That!' ? console.log('I love that!') :
console.log("I don't love that!");

/*
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
In the example above:
The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
*/
