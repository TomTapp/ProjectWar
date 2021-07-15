

var suits = ["H", "C", "D", "S"];
var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

var deck = [];


for (var suitCounter = 0; suitCounter < 4; suitcounter = suitCounter++) {
  for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
    console.log(ranks[rankCounter] + suits[suitCounter]);
deck.push(ranks[rankCounter] + suits[suitCounter])
  }
}

console.log(deck)

