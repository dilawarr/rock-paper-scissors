let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor((Math.random() * 3) + 1)
}

// getComputerChoice() tester
// console.log(getComputerChoice());

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

// getHumanChoice() tester
// console.log(getHumanChoice());

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {

    console.log("play");
    if(humanChoice === computerChoice) {
        console.log("You drew!");
        humanScore++;
        computerScore++;
    }
    else if (humanChoice === 1 && computerChoice === 3) {
        console.log("You won! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === 2 && computerChoice === 1) {
        console.log("You won! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === 3 && computerChoice === 2) {
        console.log("You won! Scissors beat Paper");
        humanScore++;
    }
    else if (computerChoice === 1 && humanChoice === 3) {
        console.log("You Lost! Rock beats Scissors");
        computerScore++;
    }
    else if (computerChoice === 2 && humanChoice === 1) {
        console.log("You Lost! Paper beats Rock");
        computerScore++;
    }
    else if (computerChoice === 3 && humanChoice === 2) {
        console.log("You Lost! Scissors beat Paper");
        computerScore++;
    }

    console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`);
}

// playRound() tester
// playRound();