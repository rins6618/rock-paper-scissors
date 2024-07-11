function getComputerChoice() {
    const choice = Math.random() * 3;
    if (choice < 1) return "rock";
    return choice < 2
        ? "paper"
        : "scissors"
}

console.log(getComputerChoice())