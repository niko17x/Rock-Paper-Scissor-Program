// variables used to target the specific image element:
const rock = document.querySelector('img#rock');
const paper = document.querySelector('img#paper');
const scissor = document.querySelector('img#scissor');

// variables used to store the images to display on webpage:
const rockImg = document.getElementById('rock').src='images/rock.png';
const paperImg = document.getElementById('paper').src='images/paper.png';
const scissorImg = document.getElementById('scissor').src='images/scissor.png';


// text that tells the user if won, lost or tied:
const text = document.querySelector('.display-text');

// selects the "wins" text:
const winScore = document.querySelector('#win-score');

// selects the "loss" text:
const loseScore = document.querySelector('#lose-score');


//variables to hold the available moves:
let availMoves = [rockImg, paperImg, scissorImg];
//variable to count the number of wins for the player:
let playerWins = 0;
//variable to count computer wins:
let computerWins = 0;
//variable to count number of ties:
let tieRound = 0;





//FUNCTION BELOW:

// main function for game play:
function main() {
    playerChoice();
}

main();


// function that converts input value of: r, p, s to rock, paper, scissors for better readability:
function convertLetters(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissor';
}

// function with output when player wins:
function wins(userChoice, computerChoice) {
    playerWins++;
    winScore.innerHTML = playerWins;
    text.textContent = convertLetters(userChoice) + ' beats ' + convertLetters(computerChoice) + " - Winner!";
    if (playerWins === 10) {
        text.textContent = "Player is the first to 10 wins!"
    }
    
}

// function with output when player loses:
function lose(userChoice, computerChoice) {
    computerWins++;
    loseScore.innerHTML = `${computerWins}`;
    text.textContent = convertLetters(userChoice) + ' loses to ' + convertLetters(computerChoice) + " - Loser!";
    if (computerWins === 10) {
        text.textContent = "Computer is the first to 10 wins!"
    }
}

// function with output when player ties with computer:
function tie(computerChoice) {
    tieRound++;
    text.textContent = "You both chose " + convertLetters(computerChoice) + " - it's a tie!";
}

// function that outputs players move and computer generated random move:
function game(userChoice) {
    const computerChoice = computerPlay();
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            wins(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            tie(userChoice, computerChoice);
            break;
    }
}


// function that takes user input with event listener when image of paper, rock, scissor is clicked:
function playerChoice() {
    rock.addEventListener('click', () => {
        game('r');
    });
    paper.addEventListener('click', () => {
        game('p');
    });
    scissor.addEventListener('click', () => {
        game('s');
    });
}


// function that returns 'r', 's' or 'p' through Math.random function:
function computerPlay() {
    let randomMove = availMoves[Math.floor(Math.random()*availMoves.length)]; // returns 0, 1 or 2.
    document.getElementById('bot-img').src = randomMove; //replace filler image in html with random image.
    if (randomMove === rockImg) { // 'rockImg' is the variable that holds the image.
        console.log('r');
        return 'r';
    } else if (randomMove === paperImg) {
        console.log('p');
        return 'p';
    } else if (randomMove === scissorImg) {
        console.log('s');
        return 's';
    }
}

// function that accepts user input for game replay:
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


