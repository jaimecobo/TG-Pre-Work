let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();

/*
When the data stored on an object is a function we call that a method.
A property is what an object has, while a method is what an object does.
We can include methods in our object literals by creating ordinary, comma-separated key-value pairs.
The key serves as our method's name, while the value is an anonymous function expression.
*/
