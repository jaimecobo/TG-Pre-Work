const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below

for(let rapperArrayIndex=0; rapperArrayIndex < rapperArray.length; rapperArrayIndex++){

  console.log(rapperArray[rapperArrayIndex]);
  if(rapperArray[rapperArrayIndex] === "Notorious B.I.G."){
    break;
  }
}
console.log("And if you don't know, now you know.");

/*
When we want to stop a loop from continuing to execute even though the original stopping
condition we wrote for our loop hasn't been met, we can use the keyword break.
The break keyword allows programs to “break” out of the loop from within the loop's block.
*/
