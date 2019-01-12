let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments =['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

/*
Elements in an array declared with const remain mutable.
Meaning that we can change the contents of a const array,
but cannot reassign a new array or a different value.
*/
