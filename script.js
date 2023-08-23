const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    //return computer's choice
    return choices[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice());
