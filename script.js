const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    //return computer's choice
    return choices[Math.floor(Math.random() * 3)];
}
//functoin plays a single round of Rock Paper Scissors
function playSingleRound(playerSelection, computerSelection){
    //ignore case of selections by capitalizing
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

    //determine winner and loser
    if (playerSelection === computerSelection){
        return "Draw!"
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Scissors" && computerSelection == "Rock") || (playerSelection == "Paper" && computerSelection == "Scissors")){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else{
        return `You won! ${playerSelection} beats ${computerSelection}.`;
    }
}
