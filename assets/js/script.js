/**
 * Declare constants for the DOM  
*/
const playerScore = document.getElementsByClassName("player-score-count");
const botScore = document.getElementsByClassName("computer-score-count");
const playerChoice = document.getElementById("player-picture");
const botChoice = document.getElementById("computer-picture");
const resetButton = document.getElementsByClassName("reset");
const buttons = document.getElementsByClassName("btn");

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
}

/**
 * Function checks the winner of each round 
 */
function checkWinner() {

}