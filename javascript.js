// call game function
game();

// store their result
function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, or Scissors?");
// Returns null value if player clicks cancel, which later 
// allows the game to fully abort
    if (playerChoice === null){
        return null;
    }
// sets up playerChoice to be evaluated in all lowercase
    playerChoice = playerChoice.toLowerCase();
    while (playerChoice != "rock" 
        && playerChoice != "scissors" 
        && playerChoice != "paper" 
        && playerChoice != "r" 
        && playerChoice != "p" 
        && playerChoice != "s") {
            playerChoice = prompt(`Please enter "Rock" "Paper" or "Scissors"`);
        }
// formats the playerChoice string to Correct Case and returns
    if (playerChoice == "rock"
        || playerChoice == "paper"
        || playerChoice == "scissors") {
            firstLetter = playerChoice.charAt(0);
            firstLetter = firstLetter.toUpperCase();
            notFirstLetter = playerChoice.slice(1);
            playerChoice = (firstLetter + notFirstLetter);
            return playerChoice;
    // allows for shorthand for testing and the impatient
        } else if (playerChoice == "r"){
            playerChoice = "rock"
            firstLetter = playerChoice.charAt(0);
            firstLetter = firstLetter.toUpperCase();
            notFirstLetter = playerChoice.slice(1);
            playerChoice = (firstLetter + notFirstLetter);
            return playerChoice;
        } else if (playerChoice == "p"){
            playerChoice = "paper"
            firstLetter = playerChoice.charAt(0);
            firstLetter = firstLetter.toUpperCase();
            notFirstLetter = playerChoice.slice(1);
            playerChoice = (firstLetter + notFirstLetter);
            return playerChoice;
        } else if (playerChoice == "s"){
            playerChoice = "scissors"
            firstLetter = playerChoice.charAt(0);
            firstLetter = firstLetter.toUpperCase();
            notFirstLetter = playerChoice.slice(1);
            playerChoice = (firstLetter + notFirstLetter);
            return playerChoice;
        }
}

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

//plays the best of 5 game
function game() {
// game will stop after either the user or computer wins 3 rounds (best of 5)
    let pWins = 0;
    let cWins = 0;
    while (pWins < 3 && cWins < 3) {
    // initialize player and computer selection variables 
    // and call their functions
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        if (playerSelection === null) {
            return;
        }
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
        return
    } else if (cWins == 3) {
        alert(`You lose. Score one for the machines.`)
        return
    } else {
        console.log("error in game()")
    }
        }