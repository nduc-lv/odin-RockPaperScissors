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

//function plays a 5 round game that keeps score and reports a winner or loser at the end
/*
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        //get player's and computer's choices
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper or Scissors? ","");

        //play 
        let result = playSingleRound(playerSelection, computerSelection);
        //print the result
        console.log(result);

        //adding score
        if (result == "Draw!"){
            continue;
        }
        else if (result[4] == "l"){ // player loses "You lose..."
            computerScore++;
        }
        else{
            playerScore++;
        }
    }

    //determine the winner overall
    if (computerScore > playerScore){
        console.log(`Computer: ${computerScore} - Player: ${playerScore}. The winner is Computer`);
    }
    else{
        console.log(`Player: ${playerScore} - Computer: ${computerScore}. The winner is Player`);
    }
}
game();
*/

//create three button, each for each selection
const parent = document.querySelector(`body`);
const rock = document.createElement(`button`);
const scissors = document.createElement(`button`);
const paper = document.createElement(`button`);
const button = [rock, paper, scissors];
//make the button react when be clicked on
for (let i = 0; i < 3; i++){
    button[i].addEventListener(`click`, () => {
        console.log(choices[i]);
    });
}
//add the button to the page
for (let i = 0; i < 3; i++){
    parent.appendChild(button[i]);
}