let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
	return Math.floor(Math.random() * 3 + 1);
}

function getHumanChoice() {
	let invalidInput = 1;
	let humanChoice = 0;
	while (invalidInput) {
		humanChoice = prompt(
			"Submit your choice:\nSample valid choice: 'Rock', 'rock', 'ROCK', '1', 'R', 'r', etc.\n\n1. Rock\n2. Paper\n3. Scissors"
		);
		let numericValue = Number(humanChoice);
		if (numericValue >= 1 && numericValue <= 3) {
			// console.log("number");
			humanChoice = numericValue;
			invalidInput = 0;
		} else if (humanChoice == null) {
			console.log("Invalid Input");
		} else {
			humanChoice = humanChoice.toLowerCase();
			humanChoice = humanChoice.trim();
			// console.log("string");
			if (humanChoice === "r" || humanChoice === "rock") {
				humanChoice = 1;
				invalidInput = 0;
			} else if (humanChoice === "p" || humanChoice === "paper") {
				humanChoice = 2;
				invalidInput = 0;
			} else if (humanChoice === "s" || humanChoice === "scissors") {
				humanChoice = 3;
				invalidInput = 0;
			} else {
				console.log("Invalid Input");
			}
		}
	}
	return humanChoice;
}

function displayInputs(userInput, computerChoice) {
	const humanInput = document.querySelector(".user-input");
	const computerInput = document.querySelector(".computer-input");

	switch (computerChoice) {
		case 1:
			computerInput.textContent = "Computer played Rock";
			break;
		case 2:
			computerInput.textContent = "Computer played Paper";
			break;
		case 3:
			computerInput.textContent = "Computer played Scissors";
			break;
	}
	switch (userInput) {
		case 1:
			humanInput.textContent = "You played Rock";
			break;
		case 2:
			humanInput.textContent = "You played Paper";
			break;
		case 3:
			humanInput.textContent = "You played Scissors";
			break;
	}
}

function playGame(userInput) {
	if (userScore === 0 && computerScore === 0) {
		const endText = document.querySelector(".end-text");
		endText.textContent = "";
	}

	function playRound(computerChoice = getComputerChoice()) {
		displayInputs(userInput, computerChoice);
		const winText = document.querySelector(".win-text");
		if (userInput === computerChoice) {
			winText.textContent = "You drew!";
		} else if (userInput === 1 && computerChoice === 3) {
			winText.textContent = "You won! Rock beats Scissors";
			userScore++;
		} else if (userInput === 2 && computerChoice === 1) {
			winText.textContent = "You won! Paper beats Rock";
			userScore++;
		} else if (userInput === 3 && computerChoice === 2) {
			winText.textContent = "You won! Scissors beat Paper";
			userScore++;
		} else if (computerChoice === 1 && userInput === 3) {
			winText.textContent = "You Lost! Rock beats Scissors";
			computerScore++;
		} else if (computerChoice === 2 && userInput === 1) {
			winText.textContent = "You Lost! Paper beats Rock";
			computerScore++;
		} else if (computerChoice === 3 && userInput === 2) {
			winText.textContent = "You Lost! Scissors beat Paper";
			computerScore++;
		}
		console.log(`Computer Score: ${computerScore}\nHuman Score: ${userScore}`);
	}
	playRound();
	const scores = document.querySelector(".scores");
	scores.textContent = `Your Score: ${userScore} Computer's Score: ${computerScore}`;
	if (userScore === 5 || computerScore === 5) {
		const endText = document.querySelector(".end-text");
		if (userScore === 5) {
			endText.textContent = "Game Over! You Won! Congratulations";
		} else {
			endText.textContent = "Game Over! You Lost! Better luck next time";
		}
		userScore = 0;
		computerScore = 0;
	}
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
	button.addEventListener("click", () => {
		userInput = +button.value;
		console.log(userInput);
		playGame(userInput);
	})
);
