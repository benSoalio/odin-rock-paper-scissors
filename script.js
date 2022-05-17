// Function to randomly return Rock Paper or Scissors
function computerPlay() {
  let selections = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * selections.length);
  let selection = selections[randomIndex];
  //   console.log(selection);
  return selection;
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
  // if player selection and computer selection match, it is a draw
  if (playerSelection === computerSelection) {
    console.log("it is a draw");
  }
  // the possible wins for the player
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log("You win th round");
  }
  // else if player selection is scissors
  else {
    console.log("You lose the round ");
  }
}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log | playRound(playerSelection, computerSelection);
