// Computer function which return a hand sign.

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
    computerSelection = computerPlay();
    let matchCheck = `${playerSelection} vs ${computerSelection}`;

    if (playerSelection === computerSelection) {
        // alert(`${matchCheck} is a tie`);
        return `${matchCheck} is a tie`;
    }
}
    

console.log(letPlay());
