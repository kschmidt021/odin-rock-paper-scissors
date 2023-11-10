// Prompt user to type "rock" "paper" or "scissors"
playerChoice = "RoCK"

console.log(game());

// store their result
function getPlayerChoice() {
    /* document.getElementById("playerSelection").value;*/
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock"
        || playerChoice === "paper"
        || playerChoice === "scissors") {
            return playerChoice;
        } else {
            console.log("bad output from playerChoice");
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

// turn results into variables
computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

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

    return message;
}

// print winner
console.log(playRound(playerSelection, computerSelection));


// function game() {
//     // game will stop after 5 rounds are played
//     for (i = 0; i < 5; i++) {
//         //game can also be stopped if the player wins 3 rounds
//         if (playRound(playerSelection, computerSelection).includes("Win")) {
//             for (x = 0; x < 3; x++) {
//                 getPlayerChoice();
//                 getComputerChoice();
//                 return playRound(playerSelection, computerSelection);
//             }
//         // game can also be stopped if the computer wins 3 rounds
//         } else if (playRound(playerSelection, computerSelection).includes("Lose")) {
//             for (o = 0; o < 3; o++) {
//                 getPlayerChoice();
//                 getComputerChoice();
//                 return playRound(playerSelection, computerSelection);
//             }
//         } else {
//             getPlayerChoice();
//             getComputerChoice();
//             return playRound(playerSelection, computerSelection);
//         }
//     }
// }

//broken right now, fix!
console.log(game());
