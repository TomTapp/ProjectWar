// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////////////////////////////////////////

// Author: Jaime Cobo Nayar
// Note: This code has been written as part of an OOP JavaScript project, the idea of the project is to replicate the WAR cards game,
// using classes and its corresponding instances, everything was made for educational purposes only.

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////////////////////////////////////////

//

// Class the defines object Games, its attributes and methods, this is the main class of the program and it was designed
// to later become he super class of other new games.
class Games {
  gameName = "";
  decksNumber = 0;
  cardsDeck = deck.deck;
  oppot01_Cards = [];
  oppot02_Cards = [];

  constructor(gameName, number) {
    this.gameName = gameName;
    this.decksNumber = number;
  }

  // Here is where the amount of decks of cards required is defined.
  deckForGame = function (num) {
    let newDeck = [];
    for (let i = 0; i < num; i++) {
      newDeck = newDeck.concat(this.cardsDeck);
    }
    // console.log(newDeck);
    return newDeck;
  };

  //The method shuffle belongs to to class Games because may different games may require this function
  shuffle = function (deck2020) {
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
        deck2020[randomIndex],
        deck2020[currentDeckSize],
      ];
    }

    return deck2020;
  };

  // Function to deal the cards to players
  dealCards = function (newSetOfCards) {
    for (let i = 0; i < newSetOfCards.length; i++) {
      console.log(newSetOfCards.length);
      this.oppot01_Cards.push(newSetOfCards[i]);
      i++;
      this.oppot02_Cards.push(newSetOfCards[i]);
    }
    return [this.oppot01_Cards, this.oppot02_Cards];
  };
}

// Class the defines object War and its attributes and methods.
class War {
  name = "War";
  player01_name;
  player02_name;
  player01_cards;
  player02_cards;
  player01_score;
  player02_score;
  winner = "";
  drawCounter = 0;
  cardsOnTable = [];
  numOfCardsOnTable = 0;
  clickEnabled;

  constructor(player01, player02, booleanParam) {
    this.player01_name = player01.name;
    this.player02_name = player02.name;
    this.player01_cards = player01.playerSet;
    this.player02_cards = player02.playerSet;
    this.player01_score = player01.score;
    this.player02_score = player02.score;
    this.clickEnabled = booleanParam;
  }

  drawButton = function () {
    if (this.clickEnabled === true) {
      this.battle(this.player01_cards[0], this.player02_cards[0]);
      this.drawCounter++;
      console.log("ROUND NUMBER: \"" + this.drawCounter + "\"\n");
      console.log("____________________________________________________________________________________________________");
      document.getElementById("round").innerHTML =
        "ROUND # " + this.drawCounter;
    }
  };

  battle = function (player_one_card, player_two_card) {
    let cardsDeckSize = this.player01_cards.length + this.player02_cards.length;
    console.log(
      "THE SIZE OF THE DECK OF CARDS IS: " + cardsDeckSize + " CARDS"
    );

    console.log(
      "\nCards of ".toLocaleUpperCase() + "\"" +
        this.player01_name.toLocaleUpperCase() + "\"" +
        " before putting a card on the table: \n ".toLocaleUpperCase() 
        );
        printCardsValuesSuits(this.player01_cards)

    let cardOnTable_01 = this.player01_cards.shift();
    console.log(
    "$$$$$$$$$$$$$$$$$$$$ " + "\"" + this.player01_name.toLocaleUpperCase() + "\"" + " just put this card on the table: ".toLocaleUpperCase() + 
    "\"" + cardOnTable_01.card_value + " of " + cardOnTable_01.card_suit + "\"" 
    );
    document.getElementById("player01_card").src =
      "JPEG/" + player_one_card.imgFileName;
    console.log(
      "Cards of ".toLocaleUpperCase() + "\"" +
        this.player01_name.toLocaleUpperCase() + "\"" +
        " after putting the card on the table: \n ".toLocaleUpperCase() 
    );
    printCardsValuesSuits(this.player01_cards)

    console.log(
      "\nCards of ".toLocaleUpperCase() + "\"" +
        this.player02_name.toLocaleUpperCase() + "\"" +
        " before putting a card on the table: \n".toLocaleUpperCase() 
    );
    printCardsValuesSuits(this.player02_cards)

    let cardOnTable_02 = this.player02_cards.shift();
    console.log(
    "$$$$$$$$$$$$$$$$$$$$ " + "\"" + this.player02_name.toLocaleUpperCase() + "\"" + " just put this card on the table: ".toLocaleUpperCase() + 
      "\"" + cardOnTable_02.card_value + " of " + cardOnTable_02.card_suit + "\""
    );
    document.getElementById("player02_card").src =
      "JPEG/" + player_two_card.imgFileName;
    console.log(
      "Cards of ".toLocaleUpperCase() + "\"" +
        this.player02_name + "\"" +
        " after putting the card on the table: \n".toLocaleUpperCase()
    );
    printCardsValuesSuits(this.player02_cards)

    if (player_one_card.card_power === player_two_card.card_power) {
      this.numOfCardsOnTable += 2;
      this.cardsOnTable.push(player_one_card, player_two_card);
      console.log(
        "########## These are the cards on the table right now: ".toLocaleUpperCase() +
        "\"" + cardOnTable_01.card_value + " of " + cardOnTable_01.card_suit + " & " +
        cardOnTable_02.card_value + " of " + cardOnTable_02.card_suit + "\"" +
        " ##########"
      );
      console.group(
        "The number of cards on the table is: ".toLocaleUpperCase() + this.numOfCardsOnTable
      );
      console.log(
        "These are the cards on the table right now: ".toLocaleUpperCase() + 
        "\"" + cardOnTable_01.card_value + " of " + cardOnTable_01.card_suit + "\" & \"" +
        cardOnTable_02.card_value + " of " + cardOnTable_02.card_suit + "\""
      );
      console.log("TIE");
      document.getElementById("winner").innerHTML = "It's a tie!";
      // document.getElementById('result').innerHTML = "TIE";
    } else if (player_one_card.card_power > player_two_card.card_power) {
      this.numOfCardsOnTable += 2;
      this.player01_score++;
      document.getElementById("player01_points").innerHTML =
        "Points = " + this.player01_score;
      this.cardsOnTable.push(player_one_card, player_two_card);
      console.log(
        "########## These are the cards on the table right now: ".toLocaleUpperCase() +
        "\"" + cardOnTable_01.card_value + " of " + cardOnTable_01.card_suit + "\" & \"" +
        cardOnTable_02.card_value + " of " + cardOnTable_02.card_suit + "\"" +
        " ##########"
        // this.cardsOnTable.card_value + " of " + this.cardsOnTable.card_suit
      );
      this.player01_cards = this.player01_cards.concat(this.cardsOnTable);
      console.log(
        "\nThese are the cards that \"".toLocaleUpperCase() +
          this.player01_name.toLocaleUpperCase() + "\"" +
          " now has: \n".toLocaleUpperCase()
      );
      printCardsValuesSuits(this.player01_cards)
      this.cardsOnTable = [];
      this.numOfCardsOnTable = 0;
      document.getElementById("playerscore").innerHTML =
        "Cards remaining = " + this.player01_cards.length;
      document.getElementById("npcscore").innerHTML =
        "Cards remaining = " + this.player02_cards.length;
      console.log(
        "\n\"" + this.player01_name.toLocaleUpperCase() + "\"" +
          " wins this round! ".toLocaleUpperCase() +
          "now has " +
          this.player01_cards.length +
          " cards".toLocaleUpperCase()
      );
      // document.getElementById('winner').innerHTML = this.player01_name;
      document.getElementById("winner").innerHTML =
        this.player01_name + "\n" + "wins!";
    } else if (player_one_card.card_power < player_two_card.card_power) {
      this.numOfCardsOnTable += 2;
      this.player02_score++;
      document.getElementById("player02_points").innerHTML =
        "Points = " + this.player02_score;
      this.cardsOnTable.push(player_one_card, player_two_card);
      console.log(
        "########## These are the cards on the table right now: ".toLocaleUpperCase() +
        "\"" + cardOnTable_01.card_value + " of " + cardOnTable_01.card_suit + "\" & \"" +
        cardOnTable_02.card_value + " of " + cardOnTable_02.card_suit + "\"" +
        " ##########"
      );
      this.player02_cards = this.player02_cards.concat(this.cardsOnTable);
      console.log(
        "\nThese are the cards that \"".toLocaleUpperCase() +
          this.player02_name.toLocaleUpperCase() + "\"" +
          " now has: \n".toLocaleUpperCase()
      );
      printCardsValuesSuits(this.player02_cards)

      this.cardsOnTable = [];
      this.numOfCardsOnTable = 0;
      document.getElementById("playerscore").innerHTML =
        "Cards remaining = " + this.player01_cards.length;
      document.getElementById("npcscore").innerHTML =
        "Cards remaining = " + this.player02_cards.length;
      console.log(
        "\n\"" + this.player02_name.toLocaleUpperCase() + "\"" +
          " wins this round ".toLocaleUpperCase() +
          "now has ".toLocaleUpperCase() +
          this.player02_cards.length +
          " cards".toLocaleUpperCase()
      );
      // document.getElementById('winner').innerHTML = this.player02_name;
      document.getElementById("winner").innerHTML =
        this.player02_name + "\n" + "wins!";
    }

    if (this.player01_cards.length === 0 && this.player02_cards.length === 0) {
      console.log(
        "THERE WAS A TIE, NO ONE WINS, BOTH PLAYERS RUN OUT OF CARDS!"
      );
      this.clickEnabled = false;
    }

    if (this.player01_cards.length === 0) {
      console.log(this.player01_name + " RUN OUT OF CARDS!");
      this.clickEnabled = false;
    }

    if (this.player02_cards.length === 0) {
      console.log(this.player02_name + " RUN OUT OF CARDS!");
      this.clickEnabled = false;
    }

    if (this.player01_cards.length === cardsDeckSize) {
      this.player01_score += 1;
      this.winner = this.player01_name;
      console.log(
        "THE WINNER OF THIS BATTLE IS: " + '""" ' + this.winner.toLocaleUpperCase() + ' """'
      );
    } else if (this.player02_cards.length === cardsDeckSize) {
      this.player02_score += 1;
      this.winner = this.player02_name;
      console.log(
        "THE WINNER OF THIS BATTLE IS: " + '""" ' + this.winner.toLocaleUpperCase() + ' """'
      );
    }

    console.log(
      "#################### " +
        this.player01_name +
        "'s CURRENT SCORE IS " +
        this.player01_score +
        " ####################"
    );
    console.log(
      "####################   " +
        this.player02_name +
        "'s CURRENT SCORE IS " +
        this.player02_score +
        " ####################"
    );
  };
}

// Class the defines object Player, its attributes and methods
class Player {
  name = "";
  playerSet = [];
  score = 0;
  constructor(name, pl_set) {
    this.name = name;
    this.playerSet = pl_set; //pl_set === player's set of cards
  }
}

// Class the defines object Card, its attributes and methods
class Card {
  constructor(value, suit, power, imgFileName) {
    this.card_value = value;
    this.card_suit = suit;
    this.card_power = power;
    this.imgFileName = imgFileName;
  }
}
// Class the defines object Deck, its attributes and methods
class Deck {
  constructor(deck) {
    this.deck = deck;
  }
}
// Declares two new variables, to them make them instances of their respective classes
let card;
let deck;

// Array to then add filenames to objects Card
let arrayFileNames = [];

// Creates array with images_file_names to later add them to object card
(function () {
  let fileName = "";
  // let arrayFileNames = [];

  const SUITS = ["H", "S", "C", "D"];
  const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  for (let suit in SUITS) {
    for (let value in VALUES) {
      fileName = "" + VALUES[value];
      fileName = fileName + SUITS[suit];
      fileName = fileName + ".jpg";
      console.log(fileName);
      arrayFileNames.push(fileName);

      fileName = "";
    }
  }
  // console.log(arrayFileNames);
})();

//Anonymous function to create the object deck with a full set of objects cards
(function () {
  let i = 0;
  let arrayCards = [];
  const SUITS = ["Hearts", "Spades", "Clubs", "Diamonds"];
  const VALUES = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

  for (let suit in SUITS) {
    for (let value in VALUES) {
      let power = 0;
      let fileName = "";
      if (VALUES[value] === "Ace") {
        power = 14;
      } else if (VALUES[value] === "Jack") {
        power = 11;
      } else if (VALUES[value] === "Queen") {
        power = 12;
      } else if (VALUES[value] === "King") {
        power = 13;
      } else {
        power = VALUES[value];
      }
      fileName = arrayFileNames[i];
      i++;
      card = new Card(VALUES[value], SUITS[suit], power, fileName);
      // console.log(card);
      // console.log(arrayCards);
      arrayCards.push(card);
    }
  }
  deck = new Deck(arrayCards);
  console.log(deck);
})();

// console.log(
//   "######################################################################"
// );

console.log("##########################################################");
console.log("############ These are the values for the war #############");
console.log("##########################################################");
console.log("");
let newWar00;
// console.log(newWar00);
// console.log(newWar00.battle());
let newGame01;

// This is the function called with PLAY! button, here is where the game gets started, main objects are created like Games, War, Players
// and then objects Card are dealt to the players.
function letsPlay() {
  document.getElementById("player01_card").src = "JPEG/blue_back.jpg";
  document.getElementById("player02_card").src = "JPEG/blue_back.jpg";
  // newGame01 = undefined;
  newGame01 = new Games("war1", 1);
  console.log("newGame01 values are:".toLocaleUpperCase());
  console.log(newGame01);

  // when Start is clicked, gives baseline to the round number and player scores
  document.getElementById("round").innerHTML = "ROUND # ";

  document.getElementById("player01_points").innerHTML = "Points = ";

  document.getElementById("player02_points").innerHTML = "Points = ";

  document.getElementById("winner").innerHTML = "Who will win?";
  // when Start is clicked, gives baseline to the round number and player scores

  let toShuffle = newGame01.deckForGame(1);
  // console.log("\nThe decks to shuffle are:".toLocaleUpperCase());
  // console.log(toShuffle);
  let shuffled = newGame01.shuffle(toShuffle);
  console.log(
    "\nThe new deck of cards for the game completely shuffled looks like:".toLocaleUpperCase()
  );
  console.log(shuffled);

  let indiviualSets = newGame01.dealCards(shuffled);
  console.log(indiviualSets);

  //Creates new player named Player One
  let player01 = new Player("Player_One", indiviualSets[0]);
  console.log("The name of player 1 is:".toLocaleUpperCase());
  console.log(player01.name.toLocaleUpperCase());
  console.log(player01.playerSet);
  console.log(player01.score);
  document.getElementById("player01").innerHTML = player01.name;
  document.getElementById("player01").innerHTML = player01.name;

  //Creates new player named Computer
  let player02 = new Player("Computer", indiviualSets[1]);
  console.log("The name of player 2 is:".toLocaleUpperCase());
  console.log(player02.name.toLocaleUpperCase());
  console.log(player02.playerSet);
  console.log(player02.score);
  document.getElementById("player02").innerHTML = player02.name;
  document.getElementById("player02").innerHTML = player02.name;

  newWar00 = new War(player01, player02, true);
  console.log("This is war1:".toLocaleUpperCase());
  console.log(newWar00);
  console.log("____________________________________________________________________________________________________")

  let playerScore1 = document.getElementById("playerscore");
  playerScore1.innerText = "Cards remaining = " + player01.score;

  let playerScore2 = document.getElementById("npcscore");
  playerScore2.innerText = "Cards remaining = " + player02.score;
}

//Function that calls method drawButton of class War
function drawButtonOutFunct() {
  newWar00.drawButton();
  var x = document.getElementById("animation01");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";

    setTimeout(function () {
      x.style.display = "block";
    }, 1);
  }
}

//Function to print value and suit of the cards.
function printCardsValuesSuits(cards){
  let longString = "";
  for(let i = 0; i < cards.length; i++){
    let carrierOne = cards[i];
    longString += "\"" + cards[i].card_value + " of " + carrierOne.card_suit + "\", ";
    if(i ===0){
      continue
    }else if(i%5 === 0){
      longString += "\n";
    }
  }
  console.log(longString);
}

// Function to hide initial animation
function hideHTML(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// //////////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
