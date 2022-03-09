
// Below I am trying to have the hand selection show on the webpage

let yourChoice = document.getElementById("yourChoice");
let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("result");
let allChoices = document.querySelectorAll("button");
let userChoice;

allChoices.forEach(allChoices => allChoices.addEventListener("click", (e)=> {
    userChoice = e.target.id 
    yourChoice.innerHTML = userChoice
}))

// Computer function which return a hand sign randomly.

function computerPlay(){
    let hands = ['Rock', 'Paper', 'Scissors'];
    let chosen = hands[Math.floor(Math.random() * hands.length)];
    return  chosen;
}
// console.log(computerPlay())  ;// Optional: Just seeing if the function works

// Player function which return a hand sign 
// Must make this dynamic after getting a working game

function playerPlay(){
    let hands = ['Rock', 'Paper', 'Scissors'];
    let chosen = hands[Math.floor(Math.random() * hands.length)];
    return chosen;
}

// console.log(playerPlay()) ;// Optional: Just seeing if the function works

// Game function
// Need to add the IFs statement. Function works

function letPlay (playerSelection, computerSelection){
    playerSelection = playerPlay();
    // playerSelection = yourChoice;
    computerSelection = computerPlay();
    let matchCheck = `${playerSelection} vs ${computerSelection}`;

    if (playerSelection === computerSelection) {

        return `${matchCheck} is a tie`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `${matchCheck} You won! Rock breaks Scissors`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `${matchCheck} You won! Paper wraps Rock`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `${matchCheck} You won! Scissors cut Paper`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `${matchCheck} You Lose! Scissors cut Paper`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `${matchCheck} You Lose! Paper wraps Rock`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `${matchCheck} You Lose! Rock breaks Paper`;
    } 
}

computerChoice.innerHTML = computerPlay();
    

console.log(letPlay()); //Function works



