const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
},10)
console.log(newSum);

/*
The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
*/
/*
The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!).
*/
