// //////////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 

// Author: Jaime Cobo Nayar 
// Note: This code has been written as part of an OOP JavaScript project, the idea of the project is to replicate the WAR cards game,
// using classes and its corresponding instances, everything was made for educational purposes only. 

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////////////////////////////////////////////////////////////////////// 


class Game{
    gameName = "";
    decksNumber = 0;
    cardsDeck = [1, 2];
    oppot01_Cards = [];
    oppot02_Cards = [];

    constructor(gameName, number){
        this.gameName = gameName;
        this.decksNumber = number;
        // this.oppot01_Cards = oppot01_Cards;
        // this.oppot02_Cards = oppot02_Cards;
    }



    deckForGame = function(num){
        let newDeck = [];
        for(let i = 0; i < num; i++) {
            newDeck = newDeck.concat(this.cardsDeck);
        }
        // console.log(newDeck);
        return newDeck;
    }


        //The method shuffle belongs to to class Game because may different games may require this function
        shuffle =  function(deck2020) {
            // Creates  a collection of cards conformed of the amount of decks based on the amount of players
            let currentDeckSize = deck2020.length;
            let randomIndex;
          
            // While there are remaining items (cards) to shuffle
            while (0 !== currentDeckSize) {
          
              // Assings the item to [randomIndex] from randomnized selection in currentDeckSize
              randomIndex = Math.floor(Math.random() * currentDeckSize);
              currentDeckSize--;
          
              // Swap elements
              [deck2020[currentDeckSize], deck2020[randomIndex]] = [
                deck2020[randomIndex], deck2020[currentDeckSize]];
            }
          
            return deck2020;
          }


          dealCards = function(newSetOfCards){
              for (let i = 0; i<newSetOfCards.length; i++){
                  console.log(newSetOfCards.length);
                this.oppot01_Cards.push(newSetOfCards[i]);
                i++;
                this.oppot02_Cards.push(newSetOfCards[i]);
              }
              return [this.oppot01_Cards, this.oppot02_Cards];
          }

}




class War{
    name = "War";
    player01_name;
    player02_name;
    player01_cards;
    player02_cards;
    player01_score;
    player02_score;
    winner = "";
    constructor(player01, player02){
        this.player01_name = player01.name;
        this.player02_name = player02.name;
        this.player01_cards = player01.playerSet;
        this.player02_cards = player02.playerSet;
        this.player01_score = player01.score;
        this.player02_score = player02.score;
        }
     
    // Function sleep to pause the execution of the code and make the game visual
    sleep = function(time){
        return new Promise((resolve) => setTimeout(resolve, time));
    }


    battle = function(){  

        let roundsCounter = 0;
        let cardsDeckSize = this.player01_cards.length + this.player02_cards.length;
        console.log("THE SIZE OF THE DECK OF CARDS IS: " + cardsDeckSize + " CARDS");

        
        while( (this.player01_cards.length !== cardsDeckSize) || (this.player02_cards.length !== cardsDeckSize) ){
            
            if((this.player01_cards.length === 0) && (this.player02_cards.length === 0)){
                console.log("THERE WAS A TIE, NO ONE WINS, BOTH PLAYERS RUN OUT OF CARDS!");
                break;
                
            }            if(this.player01_cards.length === 0){
                console.log(this.player01_name + " RUN OUT OF CARDS!");
                break;
            }
            if(this.player02_cards.length === 0){
                console.log(this.player02_name + " RUN OUT OF CARDS!")
                break;
            }

            let cardsOnTable = [];
            let numOfCardsOnTable = 0;

            console.log("Cards of " + this.player01_name + " before putting a card on the table " + this.player01_cards);
            let cardOnTable_01 = this.player01_cards.shift();
            console.log(this.player01_name + " just put this card on the table: " + cardOnTable_01);
            console.log("Cards of " + this.player01_name + " after putting the card on the table " + this.player01_cards);

            console.log("Cards of " + this.player02_name + " before putting a card on the table " + this.player02_cards);
            let cardOnTable_02 = this.player02_cards.shift();
            console.log(this.player02_name +" just put this card on the table: " + cardOnTable_02);
            console.log("Cards of " + this.player02_name + " after putting the card on the table " + this.player02_cards);
        
            // sleep(1000).then(() => {


                if(cardOnTable_01 === cardOnTable_02){
                    // this.sleep(2000);
                    numOfCardsOnTable += 2;
                    cardsOnTable.push(cardOnTable_01, cardOnTable_02);
                    console.log(" ################################### This are the cards on the table right now: " + cardsOnTable);
                    console.group("The number of cards on the table is: " + numOfCardsOnTable);
                    console.log("This are the cards on the table right now: " + cardsOnTable);
                    console.log("TIE");
                
                }else if(cardOnTable_01 > cardOnTable_02){
                    // this.sleep(2000);
                    numOfCardsOnTable += 2;
                    cardsOnTable.push(cardOnTable_01, cardOnTable_02);
                    console.log(" ################################### This are the cards on the table right now: " + cardsOnTable);
                    this.player01_cards = this.player01_cards.concat(cardsOnTable);
                    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ This are the cards that " + this.player01_name + " now has " + this.player01_cards);
                    cardsOnTable = [];
                    numOfCardsOnTable = 0;
                    console.log(this.player01_name + " wins! " +  "now has "  + this.player01_cards.length + " cards");
                
                }else if(cardOnTable_01 < cardOnTable_02){
                    // this.sleep(2000);
                    numOfCardsOnTable += 2;
                    cardsOnTable.push(cardOnTable_01, cardOnTable_02);
                    console.log(" ################################### This are the cards on the table right now: " + cardsOnTable);
                    this.player02_cards = this.player02_cards.concat(cardsOnTable);
                    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ This are the cards that " + this.player02_name + " now has " + this.player02_cards);
                    cardsOnTable = [];
                    numOfCardsOnTable = 0;
                    console.log(this.player02_name + " wins! " +  "now has "  + this.player02_cards.length + " cards");
            
            if(cardOnTable_01 === cardOnTable_02){
                numOfCardsOnTable += 2;
                cardsOnTable.push(cardOnTable_01, cardOnTable_02);
                console.log(" ################################### This are the cards on the table right now: " + cardsOnTable);
                console.group("The number of cards on the table is: " + numOfCardsOnTable);
                console.log("This are the cards on the table right now: " + cardsOnTable);
                console.log("TIE");
            
            }else if(cardOnTable_01 > cardOnTable_02){
                numOfCardsOnTable += 2;
                cardsOnTable.push(cardOnTable_01, cardOnTable_02);
                console.log(" ################################### This are the cards on the table right now: " + cardsOnTable);
                this.player01_cards = this.player01_cards.concat(cardsOnTable);
                console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ This are the cards that " + this.player01_name + " now has " + this.player01_cards);
                cardsOnTable = [];
                numOfCardsOnTable = 0;
                // console.log("");
                // console.log(": " + );
                console.log(this.player01_name + " wins! " +  "now has "  + this.player01_cards.length + " cards");
            
            }else if(cardOnTable_01 < cardOnTable_02){
                numOfCardsOnTable += 2;
                cardsOnTable.push(cardOnTable_01, cardOnTable_02);
                console.log(" ################################### This are the cards on the table right now: " + cardsOnTable);
                this.player02_cards = this.player02_cards.concat(cardsOnTable);
                console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ This are the cards that " + this.player02_name + " now has " + this.player02_cards);
                cardsOnTable = [];
                numOfCardsOnTable = 0;
                console.log(this.player02_name + " wins! " +  "now has "  + this.player02_cards.length + " cards");
                // console.log("Player 2 wins! - Opponet 2 has = " + player02_cards.length + " cards");
            }
        }
        if(this.player01_cards.length === 0){
            this.player02_score += 1;
            this.winner = this.player02_name;
            console.log("THE WINNER IS: " + "\"\"\" " + this.winner + " \"\"\"" );
        }else{
            this.player01_score += 1;
            this.winner = this.player01_name;
            console.log("THE WINNER IS: " + "\"\"\" " + this.winner + " \"\"\"" );
        }
                }else if((this.player01_cards.length !== cardsDeckSize) || (this.player02_cards.length !== cardsDeckSize)){
                    break;
                }

                roundsCounter++;
                if(roundsCounter === 100){
                    console.log("UNDEFINED, NO ONE WINS");
                    break;
                }

            // });
            



            
        
        
        if(this.player01_cards.length === cardsDeckSize){
            this.player01_score += 1;
            this.winner = this.player01_name;
            console.log("THE WINNER IS: " + "\"\"\" " + this.winner + " \"\"\"" );
        }else if (this.player02_cards.length === cardsDeckSize){
            this.player02_score += 1;
            this.winner = this.player02_name;
            console.log("THE WINNER IS: " + "\"\"\" " + this.winner + " \"\"\"" );
        }

    }

}

class Player {
    name = "";
    playerSet = []
    score = 0;
    constructor(name, pl_set) {
      this.name = name;
      this.playerSet = pl_set;
    };

}



function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


let newGame = new Game("war1", 2);
console.log("newGame values are:");
console.log(newGame);


let toShuffle = newGame.deckForGame(2);
console.log("The decks to shuffle are:");
console.log(toShuffle);
let shuffled = newGame.shuffle(toShuffle);
console.log("The new deck of cards for the game completely shuffled looks like:");
console.log(shuffled);


console.log("######################################################################");

let indiviualSets =  newGame.dealCards(shuffled);
console.log(indiviualSets);

//Creates new player named Luke
let player01 = new Player("Luke", indiviualSets[0]);
console.log("The name of player 1 is:");
console.log(player01.name);
console.log(player01.playerSet);
console.log(player01.score);


//Creates new player named Joda
let player02 = new Player("Joda", indiviualSets[1]);
console.log("The name of player 2 is:");
console.log(player02.name);
console.log(player02.playerSet);
console.log(player02.score);

console.log("##########################################################");
console.log("############ This are the values for the war #############");
console.log("##########################################################");
console.log("");
let newWar01 = new War(player01, player02);
console.log(newWar01);
console.log(newWar01.battle());







class War extends Game{
    constructor(){

    }


}

class Payer {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }


function players(numOfPlayers){
    // Creates a new player

}
main
