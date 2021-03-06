function getPlayerChoice() {
       
    let response = prompt("Choose (r)ock, (p)aper, or (s)cissors:");

    response = response.toLowerCase();

    if (response == "r") {response = "rock"};
    if (response == "p") {response = "paper"};
    if (response == "s") {response = "scissors"};

    // if (choices.includes(response)) {
    //     return response;
    // }
return(response);
}

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("It's a tie!");
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore++;
        return ("Player wins!");
    } else {
        computerScore++;
        return ("Computer wins!");
    }
}

function game() {
    // Plays five rounds
    for (i = 1; i <= 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(result);
    }
    console.log("Final scores");
    console.log("============");
    console.log("Player: " + playerScore + " wins")
    console.log("Computer: " + computerScore + " wins")
}

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

game();

