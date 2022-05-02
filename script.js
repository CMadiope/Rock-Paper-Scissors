const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  // to play the game (five rounds)
  for (let i = 0; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}
function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computeChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
	logRound(playerSelection,computerSelection,winner,round);
}

function playerChoice() {
  // get player input
  let input = prompt("Type Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, Scissors. Spelling needs to be exact, but capitalisation does not matter."
    );
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}
function computeChoice() {
  // generate random computer selection
  return choices[Math.floor(Math.random() * choices.length)];
}
function validateInput(choice) {
  return choices.includes(choice);
}
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}
function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer ").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player wins", playerWins);
  console.log("Computer wins", computerWins);
  console.log("Tie", ties);
}
function logRound(playerChoice, computeChoice, winner,round) {
	console.log("Round", round)
	console.log("Player Choice:", playerChoice);
	console.log("Computer Choice:", computeChoice);
	console.log(winner, "Won the Round");
	console.log("............................");
}
game();
