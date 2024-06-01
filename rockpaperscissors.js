function getComputerChoice() {
    return Math.floor((Math.random() * 3) + 1)
}

console.log(getComputerChoice());

function getHumanChoice() {

    let invalid_input = 1;
    let human_choice = 0;
    while(invalid_input) {

        human_choice = prompt("Submit your choice:\nSample valid choice: 'Rock', 'rock', 'ROCK', '1', 'R', 'r', etc.\n\n1. Rock\n2. Paper\n3. Scissors");
        let numeric_value = Number(human_choice);
        if(numeric_value >= 1 && numeric_value <= 3) {
            console.log("number");
            human_choice = numeric_value;
            invalid_input = 0;
        }
        else {
            human_choice = human_choice.toLowerCase();
            human_choice = human_choice.trim();
            console.log("string");
            if(human_choice === "r" || human_choice === "rock") {
                human_choice = 1;
                invalid_input = 0;
            }
            else if(human_choice === "p"|| human_choice === "paper") {
                human_choice = 2;
                invalid_input = 0;
            }
            else if(human_choice === "s"|| human_choice === "scissors") {
                human_choice = 3;
                invalid_input = 0;
            }
            else {
                console.log("Invalid Input");
            }
        }
    }
    return human_choice
}

console.log(getHumanChoice());