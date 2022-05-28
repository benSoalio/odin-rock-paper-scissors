// SELECT the choice
const buttons = document.querySelectorAll("button");
const roundWinner = document.querySelector("#roundWinner");
const playerBoxScore = document.querySelector("#playerBoxScore");
const computerBoxScore = document.querySelector("#computerBoxScore");

// Function to randomly return Rock Paper or Scissors
function computerPlay() {
  let selections = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * selections.length);
  let selection = selections[randomIndex];

  return selection;
}

// Function to play a round
function playRound(playerSelection, computerSelection) {
  // keep track of the winner of the round
  let winner;
  // if player selection and computer selection match, it is a draw
  if (playerSelection === computerSelection) {
    winner = "";
  }
  // the possible wins for the player
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    winner = "player";
  } else {
    winner = "computer";
  }
  return winner;
}

// track the computer and the player score
let computerScore = 0;
let playerScore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    if (computerScore === 5 || playerScore === 5) return; //stop the game
    const computerSelection = computerPlay();
    const playerSelection = button.id;
    let winner = playRound(playerSelection, computerSelection);
    // Reset the result display
    roundWinner.textContent = "";
    //update the score the winner and Print the winner of the round and give the score
    if (winner === "player") {
      ++playerScore;
      roundWinner.textContent = `${winner} wins the round`;
    } else if (winner === "computer") {
      ++computerScore;
      roundWinner.textContent = `${winner} wins the round`;
    } else if (winner === "") {
      roundWinner.textContent = "it is a draw";
    }
    //show the score on the page
    playerBoxScore.textContent = `${playerScore}`;
    computerBoxScore.textContent = `${computerScore}`;

    //print the winner of the game, the first to reach a score of 5
    if (playerScore === 5) {
      roundWinner.textContent = `Player wins the game`;
      roundWinner.classList.add("winner");
    } else if (computerScore === 5) {
      roundWinner.textContent = `Computer wins the game`;
      roundWinner.classList.add("winner");
    }
  })
);
