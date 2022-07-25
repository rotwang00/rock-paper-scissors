let playerScore = 0;
let computerScore = 0;

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

const getPlayerChoice = function() {
    let choice = prompt('Please choose rock, paper, or scissors:')
    return choice;
}

const playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'Player wins!'
    } 

    return 'Computer wins!'
}

const game = function() {
    let result = '';
    let playerChoice = '';
    let computerChoice = '';

    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        processResult(playerChoice, computerChoice, result);
    }
}

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

game();
