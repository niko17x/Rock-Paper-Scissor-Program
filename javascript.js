// variables used to target the specific image element:
const rock = document.querySelector('img#rock');
const paper = document.querySelector('img#paper');
const scissor = document.querySelector('img#scissor');

// variables used to store the images to display on webpage:
const rockImg = document.getElementById('rock').src='images/rock.png';
const paperImg = document.getElementById('paper').src='images/paper.png';
const scissorImg = document.getElementById('scissor').src='images/scissor.png';



// player must be able to click on one of the images and return a value to be able to compare with the bot move.


//variables to hold the available moves:
let availMoves = [rockImg, paperImg, scissorImg];



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
// function playerPlay() {
//     let playerSelection = prompt("Choose rock (r), paper (p) or scissor (s)!").toLowerCase();
//     if (playerSelection === 'r' || playerSelection === 'p' || playerSelection === 's') {
//         return playerSelection;
//     } else {
//         alert("That is not a valid input. Please try again.");
//     }
//     playerPlay();
// }

// returns the corresponding letter based on the image clicked:
function playerChoice() {
    rock.addEventListener('click', () => {
        //console.log('r');
        return 'r';
    })
    paper.addEventListener('click', () => {
        //console.log('p');
        return 'p';
    })
    scissor.addEventListener('click', () => {
        //console.log('s');
        return 's';
    })
}



//function that compares the return value of the image clicked and the random bot play:
function playerPlay() {
    if (playerChoice === 'r' || playerChoice === 'p' || playerChoice === 's') {
        return playerChoice;
    } else {
        console.log("That is not a valid input. Please try again.");
    }
    playerPlay(); //keeps running this function until valid input from player.
}





//get the computer's random move:
function computerPlay() {
    let randomMove = availMoves[Math.floor(Math.random()*availMoves.length)];
    document.getElementById('bot-img').src = randomMove; //replace filler image in html with random image.
    if (randomMove === rockImg) {
        console.log('r');
        return 'r';
    } else if (randomMove === paperImg) {
        console.log('p');
        return 'p';
    } else if (randomMove === scissorImg) {
        console.log('s');
        return 's';
    }
    //return randomMove;
}
//console.log(computerPlay())
computerPlay();



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

