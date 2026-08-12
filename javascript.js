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
console.log(getComputerChoice());

function getHumanChoice() {
  let input = prompt("Enter your choice: rock, paper, or scissors ");
  return input;
}
console.log(getHumanChoice());