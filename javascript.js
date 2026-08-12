function getComputerChoice()
{
    let result = Math.floor(Math.random() * 3);
    if(result == 0){
        return "rock";
    }else if(result == 1){
        return "paper";
    }else{
        return "scissors";
    }
}
 

function getHumanChoice() {
  let input = prompt("Enter your choice: rock, paper, or scissors ");
  return input;
}
 
function playGame(){
 
 let humanScore = 0;
  let computerScore = 0;

function playRound(humanChoice , computerChoice){

    if (!humanChoice) {
      console.log("Invalid choice! Please enter rock, paper, or scissors .");
      return;
    }

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
      console.log("Invalid choice! Please enter rock, paper, or scissors .");
    } else if (humanChoice == computerChoice) {
      console.log("Draw");
    } else {
      switch (computerChoice) {
        case "rock":
          if (humanChoice === "paper") {
            humanScore++;
            console.log(" You Win! Paper beats Rock");
          } else if (humanChoice === "scissors") {
            computerScore++;
            console.log(" You Lose! Rock beats Scissors");
          }
          break;

        case "paper":
          if (humanChoice === "rock") {
            computerScore++;
            console.log(" You Lose! Paper beats Rock");
          } else if (humanChoice === "scissors") {
            humanScore++;
            console.log(" You Win! Scissors beats Paper");
          }
          break;

        case "scissors":
          if (humanChoice === "rock") {
            humanScore++;
            console.log(" You Win! Rock beats Scissors");
          } else if (humanChoice === "paper") {
            computerScore++;
            console.log(" You Lose! Scissors beats Paper");
          }
          break;
      }
    }
 }

   for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);
  }

  console.log("\n=== GAME OVER ===");
  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > humanScore) {
    console.log("Computer Wins!");
  } else {
    console.log("It's a Draw!");
  }

}
 

playGame();