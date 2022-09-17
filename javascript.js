
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


const para = document.querySelector("#result");
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

