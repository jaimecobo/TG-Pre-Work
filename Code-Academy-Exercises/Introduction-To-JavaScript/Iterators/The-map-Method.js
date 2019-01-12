const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const  secretMessage = animals.map(animals =>{
  return animals[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers =>{
  return bigNumbers/100;
})

/*
When .map() is called on an array, it takes an argument of a callback function and returns a new array!
*/
