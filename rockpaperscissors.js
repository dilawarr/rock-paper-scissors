let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor((Math.random() * 3) + 1)
}

console.log(getComputerChoice());

function getHumanChoice() {

    let invalidInput = 1;
    let humanChoice = 0;
    while(invalidInput) {

        humanChoice = prompt("Submit your choice:\nSample valid choice: 'Rock', 'rock', 'ROCK', '1', 'R', 'r', etc.\n\n1. Rock\n2. Paper\n3. Scissors");
        let numeric_value = Number(humanChoice);
        if(numeric_value >= 1 && numeric_value <= 3) {
            console.log("number");
            humanChoice = numeric_value;
            invalidInput = 0;
        }
        else {
            humanChoice = humanChoice.toLowerCase();
            humanChoice = humanChoice.trim();
            console.log("string");
            if(humanChoice === "r" || humanChoice === "rock") {
                humanChoice = 1;
                invalidInput = 0;
            }
            else if(humanChoice === "p"|| humanChoice === "paper") {
                humanChoice = 2;
                invalidInput = 0;
            }
            else if(humanChoice === "s"|| humanChoice === "scissors") {
                humanChoice = 3;
                invalidInput = 0;
            }
            else {
                console.log("Invalid Input");
            }
        }
    }
    return humanChoice
}

console.log(getHumanChoice());