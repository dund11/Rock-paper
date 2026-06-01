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
    result.textContent = playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result.textContent = playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result.textContent = playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result.textContent = playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result.textContent = playRound(humanChoice, computerChoice);
}

playGame();

result.textContent = "Human Score: " + humanScore;
result.textContent = "Computer Score:" + computerScore;

if (humanScore > computerScore) {
result.textContent = "You win the game! Congrats!";
} else if (computerScore > humanScore) {
    result.textContent = "You lose the game! Better luck next time!";
} else {
    result.textContent = "The game is a tie! Try Again!";
}

rockBtn.addEventListener("click", () => {
    playRound("rock");
});