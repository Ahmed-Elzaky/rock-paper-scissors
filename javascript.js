
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) return "Even";
  else {
    if (computerSelection === "rock") {
      if (playerSelection === "paper")
        return "You Wine! Paper beats Rock";
      else if (playerSelection === "scissors")
        return "You Lose! Rock beats Scissors";
    }
    if (computerSelection === "paper") {
      if (playerSelection === "rock")
        return "You Lose! Paper beats Rock";
      else if (playerSelection === "scissors")
        return "You Wine! Scissors beats Paper";
    }
    if (computerSelection === "scissors") {
      if (playerSelection === "rock")
        return "You Wine! Rock beats Scissors";
      else if (playerSelection === "paper")
        return "You Wine! Scissors beats Paper";
    }
  }
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let getPlayerChoice = prompt("Choose 'Rock', 'Paper', 'Scissors'. ");
//     console.log(`Plyer: ${getPlayerChoice}`);
//     console.log(playRound(getPlayerChoice, getComputerChoice()));
//   }
// }

// game();

const para = document.querySelector("#result");
// const select = document.querySelector("select");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const getPlayerChoice = select.value.toLowerCase();
//   select.value = "";
//   select.focus();
//   para.textContent = "";
//   if (
//     getPlayerChoice === "rock" ||
//     getPlayerChoice === "paper" ||
//     getPlayerChoice === "scissors"
//   ) {
//     // let getComputerChoice = getComputerChoice();
//     // para.textContent =
//     para.textContent = playRound(getPlayerChoice, getComputerChoice());
//   } else {
//     para.textContent = "Wrong choice";
//   }
// });


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', event => {
  para.textContent = playRound("rock", getComputerChoice());
});
paper.addEventListener('click', event => {
  para.textContent = playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  para.textContent = playRound("scissors", getComputerChoice());
});

