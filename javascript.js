// call game function
game();

// store their result
function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, or Scissors?");
    if (playerChoice === "rock"
        || playerChoice === "paper"
        || playerChoice === "scissors") {
            playerChoice = playerChoice.toLowerCase();
            return playerChoice;
        } else {
            console.log("invalid input from player.");
        }
}

// have computer randomly select "rock" "paper" or "scissors"
function getComputerChoice() {
    computerChoice =  Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
    } else {
        console.log("bad output from computerChoice");
        return;
    }
    return computerChoice;
}

//compare results
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            results = "Lose";
        } else if (computerSelection === "scissors"){
            results = "Win";
        } else {
            results = "Tie";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            results = "Lose";
        } else if (computerSelection === "rock"){
            results = "Win";
        } else {
            results = "Tie";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            results = "Lose";
        } else if (computerSelection === "paper"){
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

//plays the best of 5 game
function game() {
// game will stop after either the user or computer wins 3 rounds (best of 5)
    let pWins = 0;
    let cWins = 0;
    while (pWins < 3, cWins < 3) {
    // initialize player and computer selection variables 
    // and call their functions
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
    // create variable for results
        results = playRound(playerSelection, computerSelection)
    // count wins for computer and player
        if (results.includes("Win")) {
            pWins++
        } else if (results.includes("Lose")) {
            cWins++
        }
    // add to results string with standings b/w player and computer
        if (pWins > cWins) {
            results = (results + ` You are winning ${pWins}-${cWins}.`)
        } else if (pWins === cWins) {
            results = (results + ` You are tied ${pWins}-${cWins}.`)
        } else {
            results = (results + ` You are losing ${pWins}-${cWins}.`)
        }
    // log and alert user of results
        console.log(results)
        console.log(computerSelection)
        alert(results);
            }
// alert the results of game
    if (pWins == 3) {
        alert(`Congratulations! You win!`)
    } else if (cWins == 3) {
        alert(`You lose. Score one for the machines.`)
    } else {
        console.log("error in game()")
    }
        }