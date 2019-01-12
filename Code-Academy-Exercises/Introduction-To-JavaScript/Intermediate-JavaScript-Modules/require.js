const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

/*
To make use of the exported module and the behavior we define within it, we import the module.
A common way to do this is with the require() function.

require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.
*/
