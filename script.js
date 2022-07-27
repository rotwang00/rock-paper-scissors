let playerScore = 0;
let computerScore = 0;

const btn1 = document.getElementById('rock');
const btn2 = document.getElementById('paper');
const btn3 = document.getElementById('scissors');

const info = document.getElementById('info');
const roundResult = document.getElementById('result');

const playerInfo = document.getElementById('playerScore');
const compInfo = document.getElementById('computerScore');
const winBanner = document.getElementById('winNotification');

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
        result = 'We tied this round.';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = 'You won this round.';
        playerScore++;
    } else {
        result = 'I won this round.';
        computerScore++;
    }
    console.log(playerSelection, computerSelection, result);

    let roundChoices = `You chose ${playerSelection}. I chose ${computerSelection}.`;
    info.textContent = roundChoices;
    roundResult.textContent = result;

    playerInfo.textContent = `Your score: ${playerScore}`;
    compInfo.textContent = `My score: ${computerScore}`;

    if (playerScore === 5) {
        winBanner.textContent = 'You win the game!';
    }

    if (computerScore === 5) {
        winBanner.textContent = 'I win the game!';
    }
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
