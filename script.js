function getComputerChoice() {
    const choice = Math.random() * 3;
    if (choice < 1) return "rock";
    return choice < 2
        ? "paper"
        : "scissors";
}

function playRound(humanChoice) {
    const cpuChoice = getComputerChoice();

    if (humanChoice.toLowerCase() === cpuChoice) {
        displayMessage(`It's a draw! ${humanChoice} with ${cpuChoice}!`)
        return 0;
    }
    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (cpuChoice === "paper") {
                displayMessage(`You lose! ${humanChoice} loses to ${cpuChoice}!`)
                return -1;
            }
            displayMessage(`You win! ${humanChoice} beats ${cpuChoice}!`)
            return 1;
        case "paper":
            if (cpuChoice === "scissors") {
                displayMessage(`You lose! ${humanChoice} loses to ${cpuChoice}!`)
                return -1;
            }
            displayMessage(`You win! ${humanChoice} beats ${cpuChoice}!`)
            return 1;
        case "scissors":
            if (cpuChoice === "rock") {
                displayMessage(`You lose! ${humanChoice} loses to ${cpuChoice}!`)
                return -1;
            }
            displayMessage(`You win! ${humanChoice} beats ${cpuChoice}!`)
            return 1;
    }
}

function displayMessage(string) {
    const displayDiv = document.querySelector(".result");
    displayDiv.textContent = string;
    console.log(string);
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let playerScore = 0;
let cpuScore = 0;

function updateScore() {
    const cpuScoreboard = document.querySelector("#cpu div");
    const humanScoreboard = document.querySelector("#human div");
    humanScoreboard.textContent = playerScore.toString();
    cpuScoreboard.textContent = cpuScore.toString();
}

function roundHandler(humanChoice, e) {
    const roundResult = playRound(humanChoice);
    if (roundResult === 1) playerScore++;
    else if (roundResult === -1) cpuScore++;
    console.log(roundResult, playerScore, cpuScore);
    updateScore();
}

rockBtn.addEventListener("click", e => roundHandler("Rock", e));
paperBtn.addEventListener("click", e => roundHandler("Paper", e));
scissorsBtn.addEventListener("click", e => roundHandler("Scissors", e));
