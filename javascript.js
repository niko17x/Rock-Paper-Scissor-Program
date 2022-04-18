
//variables to hold the available moves:
let availMoves = ['rock', 'paper', 'scissor'];


//variable to hold the random (computer-generated) move:
//note that the *function declaration* hoists to the top so this variable does NOT run into a 
//reference error unlike using *function expressions*.
let computerSelection = computerPlay();

//variable to hold the players move:
let playerSelection;




//function that keeps the game going n number of times:
function game(playerWins, computerWins) {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    } if (playerWins > computerWins) {
        alert("Player wins the game!")
    } else {
        alert("Uh-oh, computer wins the game!")
    }
}



//function that returns 'rock, paper, or scissor':
function computerPlay() {
    let randomMove = availMoves[Math.floor(Math.random()*availMoves.length)];
    return randomMove;
}
//console.log(computerPlay())




//function that takes 2 parameters and declares winner of the single round played:
function playRound(playerSelection, computerSelection) {
    //get players move:    
    playerSelection = prompt("Choose rock, paper or scissor!").toLowerCase();

    //variable to count the number of wins for the player:
    let playerWins = 0;
    
    //variable to count computer wins:
    let computerWins = 0;
    
    if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
        alert(`You win!
        You chose ${playerSelection} and computer chose ${computerSelection}`);
        ++playerWins;
    } else if (playerSelection === computerSelection) {
        alert(`It's a tie!
        You chose ${playerSelection} and computer chose ${computerSelection}`);
    } else {
        alert(`You lose!
        You chose ${playerSelection} and computer chose ${computerSelection}`);
        ++computerWins;
    }
    //win counter:
    console.log(`Player Wins: ${playerWins} | Computer Wins ${computerWins}`)
}

console.log(playRound(playerSelection, computerSelection))



game()


