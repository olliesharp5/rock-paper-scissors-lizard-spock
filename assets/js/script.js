let roundNumber = 0;
let playerScore = 0;
let botScore = 0;

const playerPicture = document.getElementById("player-picture");
const botPicture = document.getElementById("computer-picture");
const actionButtons = document.getElementsByClassName("btn");
const CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const rulesModalBody = document.getElementById("rules-modal");
const rulesButton = document.getElementById("rules");
const rulesCloseButton = document.getElementById("rules-close");
const gameOverModal = document.getElementById("game-over-modal");
const gameOverMessage = document.getElementById("game-over-message");
const gameOverCloseButton = document.getElementById("game-over-close");

// Modal Listeners
rulesButton.onclick = function () {
    rulesModalBody.style.display = "block";
};
rulesCloseButton.onclick = function () {
    rulesModalBody.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == rulesModalBody) {
        rulesModalBody.style.display = "none";
    } else if (event.target == gameOverModal) {
        gameOverModal.style.display = "none";
        resetScores();
    }
};

gameOverCloseButton.onclick = function() {
    gameOverModal.style.display = "none";
resetScores();
};


/**
 * Function sets the player card based on their selection. 
 * Ramdomises the selection for the computer and sets the associated player card 
 */
function setPlayerAttribute(playerChoice) {
    let playerPicture = document.getElementById("player-picture");

    playerPicture.src = `./assets/images/${CHOICES[playerChoice]}.png`;
    playerPicture.alt = CHOICES[playerChoice];

    // Random number selector for bot
    botChoice = Math.floor(Math.random() * CHOICES.length);
    let botPicture = document.getElementById("computer-picture");

    botPicture.src = `./assets/images/${CHOICES[botChoice]}.png`;
    botPicture.alt = CHOICES[botChoice];
}

/**
 * Function runs the game based on the player and computer choices 
 * incrementing individual scores and round scores
*/
function runGame(playerChoice) {
    setPlayerAttribute(playerChoice);

    let result = checkWinner(CHOICES[playerChoice], CHOICES[botChoice]);
    document.getElementById("message").textContent = result;
    if (result === "Player Wins!") {
        playerScore++;
        updatePlayerScore();
    } else if (result === "Computer Wins!") {
        botScore++;
        updateBotScore();
    }
    // Increases round number
    roundNumber++;
    updateRound();

    // Limits rounds to 3 and triggers alert
    if(roundNumber === 3) {
        // Timeout method pushes alerts by 100 milliseconds
        setTimeout(function() {
        if (playerScore > botScore) {
            gameOverMessage.textContent = "You WON!" + "\n" + "Close this popup to reset the game";
        } else if (botScore > playerScore) {
            gameOverMessage.textContent = "You LOST!" + "\n" + "Close this popup to reset the game";
        } else {
            gameOverMessage.textContent = "It's a TIE!" + "\n" + "Close this popup to reset the game";
        }
        gameOverModal.style.display = "block";
    }, 100);
}
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
 * Function that updates and displays the round number
 */
function updateRound() {
    document.getElementById("round-count").textContent = roundNumber;
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
            return botChoice === "scissors" || botChoice === "lizard" ? "Player Wins!" : "Computer Wins!";
            
        case "paper":
            return botChoice === "rock" || botChoice === "spock" ? "Player Wins!" : "Computer Wins!"; 
            
        case "scissors":
            return botChoice === "paper" || botChoice === "lizard" ? "Player Wins!" : "Computer Wins!"; 
            
        case "lizard":
            return botChoice === "spock" || botChoice === "paper" ? "Player Wins!" : "Computer Wins!";
           
        case "spock":
            return botChoice === "scissors" || botChoice === "rock" ? "Player Wins!" : "Computer Wins!";
    }}
            
    /**
     * Function that resets the scores and values 
     */        
    function resetScores() {
            roundNumber = 0;    
            playerScore = 0;
            botScore = 0;
            playerChoice = null;
            botChoice = null;
            updatePlayerScore();
            updateBotScore();
            updateRound();
            playerPicture.src = "./assets/images/question_mark.png";
            botPicture.src = "./assets/images/question_mark.png";
            document.getElementById("message").textContent = "";
    }

// Event Listeners

/**
 * Event listener to identify which selection was made 
 * based on which button was pressed 
*/
for (let i = 0; i < actionButtons.length; i++) {
    actionButtons[i].addEventListener('click', function () {
        let playerChoice = parseInt(this.getAttribute("data-choice"));
        runGame(playerChoice);
    });
}

/**
 * Event listener for resetting the game 
 */
document.getElementsByClassName('reset')[0].addEventListener('click', resetScores);