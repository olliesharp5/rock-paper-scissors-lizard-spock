/**
 * Declare constants for the DOM  
*/
const playerChoice = document.getElementById("player-picture");
const botChoice = document.getElementById("computer-picture");
const resetButton = document.getElementsByClassName("reset");
const buttons = document.getElementsByClassName("btn");
const roundScore = document.getElementsByClassName("round-score");

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("rules");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/**
 * Event listener to identify which selection was made 
 * based on which button was pressed 
*/
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    });
}

/**
 * Function displays the user and computer selection 
 * to the game area
*/
function runGame(playerChoice) {
    let playerPicture = document.getElementById("player-picture");

    playerPicture.src = `/assets/images/${choices[playerChoice]}.png`;
    playerPicture.alt = choices[playerChoice];

    // Random number selector for bot
    let botChoice = Math.floor(Math.random() * choices.length);
    let botPicture = document.getElementById("computer-picture");

    botPicture.src = `/assets/images/${choices[botChoice]}.png`;
    botPicture.alt = choices[botChoice];

    let result = checkWinner(choices[playerChoice], choices[botChoice]);
}

/**
 * Function that updates and displays the player score 
 */
function updatePlayerScore() {
    document.getElementById("player-score").textContent = playerScore;
}

/**
 * Function that updates and displays the bot score 
 */
function updateBotScore() {
    document.getElementById("computer-score").textContent = botScore;
}

/**
 * Function that checks the winner of each round and 
 * calls the functions to change scores 
 */
function checkWinner(playerChoice, botChoice) {
    if(playerChoice === botChoice) {
        return "It's a tie!";
    }
    switch (playerChoice) {
        case "rock":
            if (botChoice === "scissors" || botChoice === "lizard") {
                return "User wins!";
            } else {
                return "Bot wins!";
            }
        case "paper":
            if (botChoice === "rock" || botChoice === "spock") {
                return "User Wins!";
            } else {
                return "Bot wins!";
            }
        case "scissors":
            if (botChoice === "paper" || botChoice === "lizard") {
                return "User Wins!";
            } else {
                return "Bot wins!";
            }
        case "lizard":
            if (botChoice === "spock" || botChoice === "paper") {
                return "User Wins!";
            } else {
                return "Bot wins!";
            }
        case "spock":
            if (botChoice === "scissors" || botChoice === "rock") {
                return "User Wins!";
            } else {
                return "Bot wins!";
            }
            // add part to call functions to change score based on winner and to also increment the round each loop
}}

