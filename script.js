function getComputerChoice() {
    const choice = Math.random() * 3;
    if (choice < 1) return "rock";
    return choice < 2
        ? "paper"
        : "scissors";
}

function getHumanChoice() {
    const valid = ["rock", "paper", "scissors"];
    let choice = prompt("Type your choice").toLowerCase();
    while (!valid.includes(choice)) {
        choice = prompt("Type your choice").toLowerCase();
    }

    return choice;
}

function playRound() {

    const humanChoice = getHumanChoice();
    const cpuChoice = getComputerChoice();

    if (humanChoice === cpuChoice) {
        console.log(`It's a draw! ${humanChoice} with ${cpuChoice}!`)
        return 0;
    }
    switch (humanChoice) {
        case "rock":
            if (cpuChoice === "paper") {
                console.log(`You lose! ${cpuChoice} beats ${humanChoice}!`)
                return -1;
            }
            console.log(`You win! ${humanChoice} beats ${cpuChoice}!`)
            return 1;
        case "paper":
            if (cpuChoice === "scissors") {
                console.log(`You lose! ${cpuChoice} beats ${humanChoice}!`)
                return -1;
            }
            console.log(`You win! ${humanChoice} beats ${cpuChoice}!`)
            return 1;
        case "scissors":
            if (cpuChoice === "rock") {
                console.log(`You lose! ${cpuChoice} beats ${humanChoice}!`)
                return -1;
            }
            console.log(`You win! ${humanChoice} beats ${cpuChoice}!`)
            return 1;
    }
}

function playGame() {
    let humanScore = 0;
    let cpuScore = 0;

    let rounds = 5;
    while (rounds --> 0) {
        let result = playRound();
        if (result === 0) continue;
        result === 1 ? humanScore++
            : cpuScore++;
    }

    console.log(`
    Wins: ${humanScore}\n
    Draws: ${5 - humanScore - cpuScore}\n
    Losses: ${cpuScore}\n`)
}

playGame()

