let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines  = 8;
delete spaceship['Secret Mission'];

/*
Objects are mutable meaning we can update them after we create them!
We can use either dot notation, ., or bracket notation, [],
and the assignment operator, = to add new key-value pairs to an object or change an existing property.
One of two things can happen with property assignment:
If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
If there was no property with that name, a new property will be added to the object.
It's important to know that although we can't reassign an object declared with const,
we can still mutate it, meaning we can add new properties and change the properties that are there.
*/
