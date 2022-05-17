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
  // keep track of the winner of the round
  let winner;
  // if player selection and computer selection match, it is a draw
  if (playerSelection === computerSelection) {
    console.log("it is a draw");
    winner = "";
  }
  // the possible wins for the player
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    winner = "player";
  }
  // else if player selection is scissors
  else {
    console.log("You lose the round ");
    winner = "computer";
  }
  return winner;
}

//Function to play the game x time
function game() {
  // track the computer and the player score
  let computerScore = 0;
  let playerScore = 0;
  //Loop through the number of round to play
  for (let i = 0; i < 5; i++) {
    //Player selection
    const playerSelection = prompt("enter your choice: ");
    //Computer selection
    const computerSelection = computerPlay();

    //find winner of the round
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner);

    //update the score the winner
    if (winner === "player") {
      ++playerScore;
    } else if (winner === "computer") {
      ++computerScore;
    }
  }

  // print the winner of the game
  if (playerScore > computerScore) {
    alert(`player won. player: ${playerScore}, computer: ${computerScore}`);
  } else {
    alert(`computer won. player: ${playerScore}, computer: ${computerScore}`);
  }
}

game();
