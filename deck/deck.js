deck = function () {
  let suits = ['H', 'C', 'D', 'S'];
 let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let deck = [];
  for (let suitCounter = 0; suitCounter < 4; suitcounter = suitCounter++) {
    for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
      // console.log(ranks[rankCounter] + suits[suitCounter]);
      deck.push(ranks[rankCounter] + suits[suitCounter]);
    }
  }
  return deck;
};

// console.log(deck());
