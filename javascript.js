// call game function
// game();

//initialize win counter globally
let pWins = 0;
let cWins = 0;

const playerOptions = document.querySelector("#player-options");
const submitBtn = document.querySelector("#submit-button");

playerOptions.addEventListener('click', (event) => {
    let target = event.target;
   // target.setAttribute("class", "selected");
   // use somewhere else, don't give a function two purposes.
    switch(target.id) {
        case 'rock':
            playerSelection = 'Rock';
            return playerSelection;
        case 'paper':
            playerSelection = 'Paper';
            return playerSelection;
        case 'scissors':
            playerSelection = 'Scissors';
            return playerSelection;
    }
});

// have computer randomly select "rock" "paper" or "scissors"
function getComputerChoice() {
    computerChoice =  Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else if (computerChoice === 2) {
        computerChoice = "Scissors";
    } else {
        console.log("bad output from computerChoice");
        return;
    }
    return computerChoice;
}

submitBtn.addEventListener('click', (event) => {
    if (pWins >= 5 || cWins >= 5) {
        event.preventDefault();
        alert("sorry game over")
    } else {
        game();
    }
});

//compare results
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            results = "Lose";
        } else if (computerSelection === "Scissors"){
            results = "Win";
        } else {
            results = "Tie";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            results = "Lose";
        } else if (computerSelection === "Rock"){
            results = "Win";
        } else {
            results = "Tie";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            results = "Lose";
        } else if (computerSelection === "Paper"){
            results = "Win";
        } else {
            results = "Tie";
        }
    }
// determine winner
    message = `You ${results}`
    if (results === "Win") {
        message = message + `! ${playerSelection} beats ${computerSelection}.`;
    } else if (results === "Lose") {
        message = message + `. ${computerSelection} beats ${playerSelection}.`;
    } else {
        message = message + `.`;
    }
// return the completed message
    return message;
}

//add results as listed items below the submit button
function displayRoundMessage() {
// Create li tags for results
    const resultsOl = document.querySelector("#results-list");
    const resultsLi = document.createElement('li');
// needed in order to have the variable defined for
    computerSelection = getComputerChoice();
    resultsLi.textContent = playRound(playerSelection, computerSelection);
    resultsOl.appendChild(resultsLi);
    return playRound(playerSelection, computerSelection);
}

function displayStandings() {
    const standingsDiv = document.querySelector("#standings");
    const standingsPara = document.querySelector('#standings-text');
    standingsPara.textContent = "";
    if (pWins > cWins) {
        standingsPara.textContent = (`You are winning ${pWins}-${cWins}.`)
    } else if (pWins === cWins) {
        standingsPara.textContent = (`You are tied ${pWins}-${cWins}.`)
    } else {
        standingsPara.textContent = (`You are losing ${pWins}-${cWins}.`)
    }
    standingsDiv.appendChild(standingsPara);
}

function displayWinner() {
    const standingsDiv = document.querySelector("#standings");
    const standingsPara = document.querySelector('#standings-text');
    if (pWins >= 5) {
        standingsPara.textContent = "";
        standingsPara.textContent = (`Congratulations! You win ${pWins}-${cWins}.`);
        return
    } else if (cWins >= 5) {
        standingsPara.textContent = "";
        standingsPara.textContent = (`Sorry, you lose ${pWins}-${cWins}. \n Score one for the machines.`);
        return
    } else {
        console.log("error in game()")
    }
}

//plays the best of 5 game
function game() {
// call function which will run the round and display the results to the page    
    roundMessage = displayRoundMessage();
// count wins for computer and player
    if (roundMessage.includes("Win")) {
        pWins++;
    } else if (roundMessage.includes("Lose")) {
        cWins++;
    }
    displayStandings();
// alert the results of game
    if (pWins == 5 ||
        cWins == 5) {
        displayWinner();
    }
}