// selecting images from html file to display on webpage:
const rock = document.getElementById('rock').src = 'images/rock.png';
const paper = document.getElementById('paper').src = 'images/paper.png';
const scissor = document.getElementById('scissor').src = 'images/scissor.png';


/**
 * figure out how to select random images and display it on the page.
 * find out how to use queryselector to target each image.
 * put the images into an array so you can use the random function.
 * the images should then dynamically change based on the random image chosen.
 */



//variables to hold the available moves:
//let availMoves = ['r', 'p', 's'];
let availMoves = [rock, paper, scissor];



//variable to count the number of wins for the player:
let playerWins = 0;

//variable to count computer wins:
let computerWins = 0;

//variable to count number of ties:
let tieRound = 0;


//FUNCTION BELOW:


//keep the game going n number of times:
function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay());
        console.log(`Player Wins: ${playerWins} | Computer Wins: ${computerWins} | Tie Games: ${tieRound}`);
    } if (playerWins > computerWins) {
        alert("! PLAYER WINS !")
    } else if (computerWins > playerWins) {
        alert("! YOU LOSE !")
    } else {
        alert("No one wins today...")
    }
console.log("Game over!")
playAgain();

}

//get players move:    
function playerPlay() {
    let playerSelection = prompt("Choose rock (r), paper (p) or scissor (s)!").toLowerCase();
    if (playerSelection === 'r' || playerSelection === 'p' || playerSelection === 's') {
        return playerSelection;
    } else {
        alert("That is not a valid input. Please try again.");
    }
    playerPlay();
}
//console.log(playerPlay())



//get the computer's random move:
function computerPlay() {
    let randomMove = availMoves[Math.floor(Math.random()*availMoves.length)];
    console.log(randomMove);
    document.getElementById('bot-img').src = randomMove;
    return randomMove;
}
console.log(computerPlay())
//computerPlay();



//function that takes 2 parameters and declares winner of the single round played:
function playRound(playerSelection, computerSelection) {
    //tie game:
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! You chose ${playerSelection} and computer chose ${computerSelection}`);
        tieRound = ++tieRound;
        return tieRound;
    //win game:
    } else if ((playerSelection === 'r' && computerSelection === 's') || (playerSelection === 'p' && computerSelection === 'r') || (playerSelection === 's') && computerSelection === 'p') {
        console.log(`You win!You chose ${playerSelection} and computer chose ${computerSelection}`);
        playerWins = ++playerWins;
        //console.log("Player Wins: " + playerWins);
        return playerWins;
    //lose game:
    } else {
        console.log(`You lose! You chose ${playerSelection} and computer chose ${computerSelection}`);
        computerWins = ++computerWins;
        //console.log("Computer Wins: " + computerWins);
        return computerWins;
    }
}

//replay game if player types 'y':
function playAgain() {
    let askReplay = prompt("Would you like to play again? Y/N: ").toLowerCase();
    if (askReplay === 'y') {
        game();
    } else if (askReplay === 'n') {
        alert("Thanks for playing - BYE!");
    } else {
        alert("Sorry, that is an incorrect key - type 'Y/N'");
        playAgain();
    }
} 



//game();

