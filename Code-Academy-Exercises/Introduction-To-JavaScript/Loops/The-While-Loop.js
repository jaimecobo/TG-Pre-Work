const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;

while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/*
When we want a loop to execute an undetermined number of times, while loops are the best choice.
*/
