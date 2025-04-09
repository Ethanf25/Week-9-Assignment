// The completed project should, when executed, do the following:
// 1) Deal 26 Cards to each Player from a Deck of 52 cards.
// 2) Iterate through the turns where each Player plays a Card.
// 3) The Player who played the higher card is awarded a point.
//      -Ties result in zero points for both Players.
// 4) After all cards have been played, display the score and declare the winner.





 class Deck { //This is the opening for the deck class array, this will be used to create the deck of cards.
    constructor() { //here is my constructor for the class, inside of this constructor it is going to create the deck of cards.
        this.deck = []; //this is the empty array to store the deck of cards.
        this.ranks = [ //this is the array to store the ranks of the cards with the values of the cards following as such:
          "Ace", 
          "2", 
          "3", 
          "4",
          "5",   
          "7",
          "8",
          "9",
          "10",
          "Jack",
          "Queen", 
          "King", 
        ];
        this.suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"]; //This is the array to store the suits of the cards along with the given icons
    }

    //A methods to create a deck... iterate over our ranks/suits
    //push a new card... (as an objcet) into our constructors this.deck
    //Method1
    createDeck () { //This my method to create the deck of cards, this will be called when I want to create the deck.
        for (let i = 0; i < this.suits.length; i++) { //the first iteration will go over spades, and then...
            for (let j = 0; j < this.ranks.length; j++) { //...hit the inner loop Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King. Then it will go to the next suit and repeat.
                let card = { //here is the card object that is going to be created for each card in the deck based off the rank and suit.
                    name: `${this.ranks[j]} of ${this.suits[i]}`, //This is the name of the card, Ace of Spades, 2 of Hearts, and so on.
                    value: j + 1, //This is the value of the card, Ace is 1, 2 is 2, 3 is 3, etc, Jack is 11, Queen is 12, King is 13.
                }    
                this.deck.push(card); //This is going to start pushing the card into the deck array.
            }
        }
    }
    //Method2
    shuffleDeck() { //This is the method that will shuffle the deck of cards and will repeat every time the deck is created.
       for (let i = this.deck.length - 1; i > 0; i--) { //This is the Fisher-Yates shuffle algorithm to shuffle the deck of cards, it will iterate over the deck array from the last index to the first index and is similar to a "for loop.""
            let j = Math.floor(Math.random() * (i + 1)); //This is used to get a random index in the deck array using the Math.random() method, which will return a random number between 0 and 1 and the Math.floor() method is used to round down the number to the nearest whole number.
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; //this is swapping the cards in the deck array, this is showing how to shuffle the deck using a destructuring assignment.
        }
    }
}

//Class for a Game (Specifically our WAR game)
/** Needs:
 * - A deck... instantiate a new Deck inside of our Game class
*
* - Create the deck, shuffle the deck, and pass the deck...
*
* - Logic to play the game
*
*   - Turn based game, how many turns?
*   - Do our players have a hand yet?
*   - control flow statement logic to decide who wins the round
*
* - 2 Players
*      - Hand
*      - Score
*      - Name
*/

class Game { //This is the game class, this will be used to play the game. It will be called when I want to start the game.
    constructor() { //my constructor for the game class, this will be used to create the game.
        this.player1 = { //This is player 1, this will be an object that will hold the player's information.
            name: "Player 1", //This shows the name of player 1
            score: 0, //This is the score of player 1
            hand: [] //This is the hand of the player, this will be an array of cards which will eventually be passed to the player.
        }
        this.player2 = { //This is player 2, this will be an object that will hold the player's information.
            name: "Player 2", //This shows the name of player 2
            score: 0, //This is the score of player 2
            hand: [] //This is the hand of the player, this will be an array of cards which will eventually be passed to the player.
    }
}

//Method to play the game
/**
 * Pass out cards to the players
 * Take x amount of turns...
 * As long as players have cards (or th number of cards they have)
 * Award points based on card.value
 * Log the winner
 */

//Method3
    playGame() { //This is the method to play the game, this will be called when we want to start the game (at the end of the code all the way at the bottom).    
        const deck = new Deck(); //this will create a new deck for the game to use
        deck.createDeck(); //this function will create the deck of cards
        deck.shuffleDeck(); //this function is going to shuffle the deck of cards

    while(deck.deck.length !== 0) { //while 52 is not equal to 0, keep "doing stuff"

        this.player1.hand.push(deck.deck.shift()); //this is then going to return the first item/card in the array and remove it.
        this.player2.hand.push(deck.deck.shift()); //same as above, but for player 2
    }
   
    //Actually play the game... how many turns do i need?

    for (let i = 0; i < this.player1.hand.length; i++) { //this for loop is going to iterate over the length of player 1's hand, which is the same as player 2's hand.


    //Conditional logic to award points based on comparing the card values
        if (this.player1.hand[i].value > this.player2.hand[i].value) { //this "if" statement is for, if player 1's card is greater than player 2's card.
            this.player1.score++; //this will add a point to player 1's score
            console.log(`
                P1 Card: ${this.player1.hand[i].name} 
                P2 Card: ${this.player2.hand[i].name} 
                Player 1 Wins a point!
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score} 
                `) //this will log player 1's score after winning the round
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) { //this else if statement is for if player 2's card is greater than player 1's card.
                this.player2.score++; //this will add a point to player 2's score
                console.log(`
                P1 Card: ${this.player1.hand[i].name} 
                P2 Card: ${this.player2.hand[i].name} 
                Player 2 Wins a point!
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score} 
                `) //this will log player 2's score after winning the round
            } else { //this is the else statement for if both players have the same card value.
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name} 
                Tie! No points awarded.
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score} 
                `) //this will log as a tie if both players have the same card value.
            }
        }

        if (this.player1.score > this.player2.score) { //this function tells me if player 1's score greater than player 2's score.
            console.log(`Player 1 Wins the Game!

                Final Score: Player 1: ${this.player1.score}
                             Player 2: ${this.player2.score}`); //this will log if player 1 or 2 wins the game based off the final score.

        } else if (this.player2.score > this.player1.score) { //this function tells me if player 2's score greater than player 1's score.
            console.log(`Player 2 Wins the Game!

                Final Score: Player 1: ${this.player1.score} 
                             Player 2: ${this.player2.score}`); //this will log if player 1 or 2 wins the game based off the final score.
        } else {
            console.log(`It's a Tie!`); //if both players end up having the same score, this will log "It's a Tie!"
        }
    }
}

const game = new Game(); //here is where I am creating a new instance of the game class.
game.playGame(); //this is going to call the playGame method to start the game as seen in the code from earlier.

// const deck = new Deck(); //This is creating a new instance of the deck class.
// deck.createDeck(); //This is calling the createDeck method to create the deck of cards.
// deck.shuffleDeck(); //This is calling the shuffleDeck method to shuffle the deck of cards.
// console.log(deck.deck); //This is logging the deck of cards to the console.
