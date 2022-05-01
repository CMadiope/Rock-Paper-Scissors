function computerPlay (){
    return play[Math.floor(Math.random()* play.length)];
}
const play = ["Rock", "Paper", "Scissors"]
function playRound(playerSelection, computerSelection) {
    if(playerSelection){
        return "You Lose! Paper beats Rock"
    }
}
const playerSelection = prompt("What is your selection: ").toUpperCase
const computerSelection = computerPlay();
console.log(computerPlay(play))

