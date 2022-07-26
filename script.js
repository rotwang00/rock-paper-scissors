let playerScore = 0;
let computerScore = 0;

const btn1 = document.getElementById('rock');
const btn2 = document.getElementById('paper');
const btn3 = document.getElementById('scissors');

btn1.addEventListener('click', function() {
    playRound('rock');
});

btn2.addEventListener('click', function() {
    playRound('paper')
});

btn3.addEventListener('click', function() {
    playRound('scissors');
});

const getComputerChoice = function () {
    let choice = Math.floor((Math.random()) * 3)
    switch(choice) {
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissors';
        break;
    }
}

const playRound = function(playerSelection) {
    let result = '';
    let computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        result = 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = 'Player wins!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }
    console.log(playerSelection, computerSelection, result);
}

// const game = function() {
//     let result = '';
//     let playerChoice = '';
//     let computerChoice = '';

//     for (let i = 0; i < 5; i++) {
//         playerChoice = getPlayerChoice();
//         computerChoice = getComputerChoice();
//         result = playRound(playerChoice, computerChoice);
//         processResult(playerChoice, computerChoice, result);
//     }
// }

const processResult = function(playerChoice, computerChoice, result) {
    if (result === 'It\'s a tie!') {
        console.log(`Both player and computer chose ${playerChoice}.`);
        console.log(result);
    } else {
        console.log(`Player chose ${playerChoice}.`);
        console.log(`Computer chose ${computerChoice}.`);
        console.log(result);
        (result === 'Player wins!') ? playerScore++ : computerScore++;
    }
    console.log(`Score is Player: ${playerScore}, Computer: ${computerScore}.`)
}

// game();
