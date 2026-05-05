let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const random = Math.random();

    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper";
    } else {
        return "scissors";
    };
    }


function getHumanChoice() {
    const choice = prompt("Please choose rock,paper or scissors:");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors" ) {
        humanScore++;
        return "You win! Rock beats scissors,";
    }
}