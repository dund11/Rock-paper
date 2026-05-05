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
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors" )
        || (humanChoice === "paper" && computerChoice === "rock" )
        || (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        humanScore++;
        return "You win! Dude";
    }  else {
            computerScore++;
            return "You lose! Dawg";
        }
    }

function playGame() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
}

playGame();

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

if (humanScore > computerScore) {
console.log("You win the game! Congrats!");
} else if (computerScore > humanScore) {
    console.log("You lose the game! Better luck next time!");
} else {
    console.log("The game is a tie! Try Again!");
}