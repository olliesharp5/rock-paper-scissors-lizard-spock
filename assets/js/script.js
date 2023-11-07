/**
 * Declare constants for the DOM  
*/
const playerScore = document.getElementsByClassName("player-score-count");
const botScore = document.getElementsByClassName("computer-score-count");
const playerChoice = document.getElementById("player");
const botChoice = document.getElementById("computer");
const resetButton = document.getElementsByClassName("reset");
const buttons = document.getElementsByClassName("btn");

const choices = [rock, paper, scissors, lizard, spock];

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