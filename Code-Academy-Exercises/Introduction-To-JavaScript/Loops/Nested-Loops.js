// Write your code below
let bobsFollowers = ['Ronald', 'Donald', 'Robert', 'Todd'];
let tinasFollowers  = ['Mary', 'Todd', 'Donald'];

let mutualFollowers = [];
let x = 0;

for(let i=0; i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers[x] = tinasFollowers[j];
      console.log(mutualFollowers[x]);
      x++;
    }
  }
}
console.log(mutualFollowers);

/*
When we have a loop running inside another loop, we call that a nested loop.
One use for a nested for loop is to compare the elements in two arrays.
For each round of the outer for loop, the inner for loop will run completely.
*/
