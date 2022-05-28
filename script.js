// SELECT the choice
const buttons = document.querySelectorAll("button");
const roundWinner = document.querySelector("#roundWinner");
const playerBoxScore = document.querySelector("#playerBoxScore");
const computerBoxScore = document.querySelector("#computerBoxScore");
const gameWinner = document.querySelector("#gameWinner");

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
    // console.log("it is a draw");
    winner = "";
  }
  // the possible wins for the player
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    // console.log("You win the round ");
    winner = "player";
  }
  // else if player selection is scissors
  else {
    // console.log("You lose the round ");
    winner = "computer";
  }
  return winner;
}

// track the computer and the player score
let computerScore = 0;
let playerScore = 0;

//

// do {
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    if (computerScore === 5 || playerScore === 5) return; //stop the game
    const computerSelection = computerPlay();
    const playerSelection = button.id;
    let winner = playRound(playerSelection, computerSelection);
    // Reset the result display
    roundWinner.textContent = "";
    //update the score the winner
    if (winner === "player") {
      ++playerScore;

      roundWinner.textContent = `${winner} wins the round`;
    } else if (winner === "computer") {
      ++computerScore;

      roundWinner.textContent = `${winner} wins the round`;
    }
    //show the score on the page
    playerBoxScore.textContent = `${playerScore}`;
    computerBoxScore.textContent = `${computerScore}`;
    //Print the winner of the round and give the score
    if (winner === "") {
      roundWinner.textContent = "it is a draw";
      console.log(
        `it is a draw, player score: ${playerScore} VS computer: ${computerScore}`
      );
    } else {
      console.log(
        `${winner} wins the round, player score: ${playerScore} VS computer: ${computerScore}`
      );
    }

    //print the winner of the game, the first to reach a score of 5
    if (playerScore === 5) {
      gameWinner.textContent = `Player wins the game`;
      console.log(
        `Player wins the game, player score: ${playerScore} VS computer: ${computerScore}`
      );
    } else if (computerScore === 5) {
      gameWinner.textContent = `Computer wins the game`;
      console.log(
        `Computer wins the game, player score: ${playerScore} VS computer: ${computerScore}`
      );
    }
  })
);
// } while (playerScore < 5 || computerScore < 5);
// //Function to play the game x time
// function game() {
//   // track the computer and the player score
//   let computerScore = 0;
//   let playerScore = 0;
//   //Loop through the number of round to play
//   for (let i = 0; i < 5; i++) {
//     //Player selection
//     const playerSelection = prompt("enter your choice: ");
//     //Computer selection
//     const computerSelection = computerPlay();

//     //find winner of the round
//     let winner = playRound(playerSelection, computerSelection);
//     console.log(winner);

//     //update the score the winner
//     if (winner === "player") {
//       ++playerScore;
//     } else if (winner === "computer") {
//       ++computerScore;
//     }
//   }

//   // print the winner of the game
//   if (playerScore > computerScore) {
//     alert(`player won. player: ${playerScore}, computer: ${computerScore}`);
//   } else {
//     alert(`computer won. player: ${playerScore}, computer: ${computerScore}`);
//   }
// }

// game();
