
class Card{
    constructor(value, suit, power){
      this.card_value = value;
      this.card_suit = suit;
      this.card_power = power;
    };
}
  
class Deck{
    constructor(deck){
        this.deck = deck;
    };
}  

let card;
let deck;



//Anonymous function to creates the object deck with a full set of objects cards
(function() {

    let arrayCards = [];
    const SUITS = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const VALUES = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in SUITS) {
        for (let value in VALUES) {
            let power = 0;
            if(VALUES[value] === 'Ace'){
                power = 14;
            }else if(VALUES[value] === 'Jack'){
                power = 11;
            }else if(VALUES[value] === 'Queen'){
                power = 12;
            }else if(VALUES[value] === 'King'){
                power = 13;
            }else{
                power = VALUES[value];
            }
            card = new Card(VALUES[value], SUITS[suit], power);
            // console.log(card);
            // console.log(arrayCards);
            arrayCards.push(card);
        };
    }
    deck = new Deck(arrayCards);
    console.log(deck);
      
})();

let card01 = deck.deck[0];
let card02 = deck.deck[1];
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("card01 is: " + card01)
console.log("card02 i: " + card02)