# Rock, Paper, Scissors, Lizard, Spock

RPSLS is a user-friendly website that offers an online version of the popular game, Rock, Paper, Scissors, Lizard, Spock. Players can enjoy single-player matches against a computer opponent. The site provides clear and concise rules for the game, ensuring that players understand how to play. While there is no leaderboard or tutorial section, the website focuses on providing a simple and fun experience for players.

# Table of Contents
- [Rock, Paper, Scissors, Lizard, Spock](#rock-paper-scissors-lizard-spock)
- [Table of Contents](#table-of-contents)
  - [Demo](#demo)
    - [A live demo to the website can be found here](#a-live-demo-to-the-website-can-be-found-here)
  - [UX](#ux)
  - [User stories](#user-stories)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
  - [Technologies](#technologies)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
      - [HTML](#html)
      - [CSS](#css)
      - [WebAim Contrast checker](#webaim-contrast-checker)
    - [JavaScript](#javascript)
      - [Fixed Bugs](#fixed-bugs)
      - [Unfixed Bugs](#unfixed-bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)

## Demo

![Website look on different devices](./assets/readme-assets/responsive_design.png)

### A live demo to the website can be found [here](https://olliesharp5.github.io/rock-paper-scissors/)

## UX
This website is not targeting any specific group of users. 
The site is focused on simplicity and ease of navigation so users can interact with the game as easily as possible. 

## User stories
As the sole developer of this website, my goal is to create an online game that plays true to the rules of the game and is accessible to a wide range of users. 
I came up with the following points, which are applicable to the users:

- As a user, I want to understand the purpose of this website quickly and easily.
- As a user, I want to easily navigate this website (by using a mouse or a touch screen).
- As a user, I want to have access to the rules of the game.
- As a user, I want to know how to use the game interface 
- As a user, I want to know who wins each round
- As a user, I want to know who wins overall
- As a user, I want to be able to restart the game.

### Strategy
The goal is to create an interactive online game that plays true to the rules of the game and is accessible to a wide range of users. 

### Scope
For the users, I wanted to build an interactive game that is fun to play and provides the challenge of playing against a "computer".

**Website Sections:**
1. **_Title:_** A logo which contains the name of the game.
2. **_Rules:_** A popup which contains the rules in written and image form. The opoup is triggered by clicking the "Rules" button under the title.
3. **_Round Counter:_** A section that keeps count of the game round.
4. **_Player/Computer Score:_** A section which displays the scores of the player and computer during a game.
5. **_Player/Computer selection cards:_** A section which displays the image of the selection made by both the player and computer. 
6. **_Win/Loss Message:_** A section that displays the winner once the player and computer cards have been revealed.
7. **_Play Buttons:_** A section which contains 5 buttons, each are assigned to a selector in the game. 

### Skeleton
The website is designed to be clear and simple. The site has a main title area which then leads to the main game area. 

**Wireframe**
The wireframe is designed using Balsamiq software. The first draft was edited with the guidance of the mentor.

![wireframe](./assets/readme-assets/wireframe.png)

### Surface
I have selected white (#FFFFFF) and dark red (#B10D19) color palette. I also used a background color which gradients from dark red (#B10D19) to orange (#f0882f). This provides a dynamic and playful backdrop to the game area on the site. The color pallette for the game area was chosen because it matched that of the logo and also provided good contrast and accessibility. 

## Technologies

1. HTML - To create a basic site
2. CSS - To create a nice, standout front-end and to give a great user experience
4. JavaScript - To create an interactive frontend and provide logic to the game. 
3. Balsamiq - To create a wireframe

## Features

### Existing Features

* Title
  
The title is highly crucial in a website for an online game as it sets the first impression for potential players. It not only provides a glimpse into the nature of the game but also facilitates easy discoverability on search engines. A standout title should reflect the essence of the game, captivating the audience's interest and prompting them to explore further.

![title](./assets/readme-assets/title.png)


* The Rules
  
The rules section is crucial in providing players with a clear understanding of how the game is played. A well-structured and concise explanation of the game mechanics, objectives, and any special features or strategies will help players navigate their gameplay confidently, enhancing their overall experience.

![rules_button](./assets/readme-assets/rules_button.png)

![rules_expanded](./assets/readme-assets/rules_expanded.png)

* The Round Counter
  
The round counter serves as a visual aid that keeps track of the progress in the game. It provides players with a sense of accomplishment as they move through each round and also helps in creating a competitive atmosphere by showcasing progress and moving closer to victory.

![round_counter](./assets/readme-assets/round_counter.png)

* Player/Computer Score

This section plays a significant role in conveying the current score of both the player and the computer in real-time. Moreover, showcasing scores can add excitement and motivate players to strive for higher achievements and play the game again to win.

![score](./assets/readme-assets/scores.png)

- Player/Computer Selection Cards & Win/Loss Message
  
Displaying the image of the selections made by the player and computer is essential for transparent gameplay. By showcasing the choices visually, it offers clarity and builds trust so players can follow and understand the logic behind the results. This enhances immersion in the game's narrative and creates. The Win/Loss message plays a pivotal role in instilling a sense of achievement or motivation in players. It instantly informs them about the outcome and declares the winner or loser once the player and computer cards are revealed. This instant gratification helps in creating a satisfying gameplay loop and keeps players motivated to continue playing or aim for a better outcome in subsequent rounds.

![cards_default](./assets/readme-assets/cards_default.png)

![cards_play](./assets/readme-assets/cards_play.png)

* Reset Button 

The reset button is in place in case the player wishes to reset the game in the middle of a game. The scores will automatically reset when the game over message is closed  This button adds flexibility for the player as they don't have to go through a whole game to reset the scores. 

![reset_button](./assets/readme-assets/reset_button.png)

* Action Buttons
  
The play buttons section is the gateway for players to interact with the game and make their selections. Being assigned to specific selectors in the game, these buttons provide players with direct control over their gameplay actions. 

![play_buttons](./assets/readme-assets/play_buttons.png)

* Game Over Message

The game over message is a messgae which pops up after the round counter reaches 3 and informes the user of the overall winner. Once the user closes this pop-up, the game resets so a new game can begin. This feature is important as it provides a definitive end to each game and creates a competitive atmosphere based on the outcome. 

![game_over_message](./assets/readme-assets/game_over_message.png)

* Footer

The footer is a consistent feature that appears at the bottom of every webpage. This footer provides links to my social media pages as well as my GitHub profile so users can view the other projects I have created or been a part of.

![footer](./assets/readme-assets/footer.png)

### Features Left to Implement

In the future I would like to add,

* A feature where on every turn it would say why someone had won. i.e. "Scissors cuts Paper, computer wins!"
* A feature where you could adjust the difficulty of the computer the user plays against.

## Testing

* I tested the site, and it works in different web browsers: Chrome, Firefox, and Microsoft Edge.
* On mobile devices, I tested the my site on a Samsung Galaxy S21 Ultra with the Samsung browser and an iPhone 13 with the Safari browser.
* I confirmed that the site is responsive and functions on different screen sizes using the devtools device toolbar.
* I tested the logic of the JavaScript ensuring the correct outcomes were determined from each combination of plays. 

### Validator Testing

#### HTML
No errors were found when passing through the official W3C validator.

![html_validator](./assets/readme-assets/html_validator.png)

#### CSS
No errors were found when passing through the official (Jigsaw) validator.

![css_validator](./assets/readme-assets/css_validator.png)

#### WebAim Contrast checker 
No errors were found when passing through the contrast validator.

![contrast_validator](./assets/readme-assets/contrast_validator.png)

### JavaScript
No errors were found when passing though the JSHint validator

![javascript_validator](insert filepath)

#### Fixed Bugs

* The alert to announce the outcome of the game was triggered in time with the final selection being made by the player - This bug was fixed by adding a "timeout" element in JavaScript to delay the display of the alert by 100 milliseconds. 
* Images not displaying upon deploying the website to GitHub Pages - This bug was fixed by amending the file paths for each image ensuring they began with "."
* Cursor missing from buttons - This bug was resolved by adding the "cursor" atrribute in CSS. 
* Round counter doesnt reset to zero in line with player scores - This bug occurred as the `updateRound()` function was not called in the `resetScores()` function. To fix this issue I only needed to update the 'resetScores()' function to include the UpdateRound() function.
* Upon resetting the game, the pictures wouldn't return to their default "question mark" images - This bug was fixed by calling the player and computer default images in the resetScores function. Additionally I needed to define the variables playerPicture and botPicture at the beginning af the function
* Upon resetting the game, the win/loss message failed to dissapear - This bug was fixed by setting the text content of the "message" element to an empty string, effectively hiding the result.
* The modals were scrolling with the main site - This bug was fixed by changing the overflow attribute in CSS from overflow to hidden. 
* Scores weren't reset when the pop-up was closed by clicking outside it - This bug was fixed by calling the resetScores() function when the window was clicked. 

#### Unfixed Bugs

* Clicking outside the rules modal doesnt close it as expected. 

## Deployment

* The site was deployed to Git Hub pages using the following steps:
  - In the Github repository, the Stetting tab.
  - Under General, navigate to Code and Automation and select 'Pages'.
  - In the Build and Deployment section for Source, select 'Deploy from a branch' from the drop-down list.
  - For Branch, select 'main' from the drop-down list and Save.
  - On the top of the page, the link to the complete website is provided.
  
* The deployed site will update automatically upon new commits to the master branch.

## Credits

### Content

* The code for the modal elements in HTML, CSS and JavaScript was created with the assistance of the template found in: https://www.w3schools.com/howto/howto_css_modals.asp 
* The timeout element used in JavaScript used to delay the display of the alert message was found in: https://www.w3schools.com/jsref/met_win_settimeout.asp 
* The CSS attribute to fade the backfround color was found in: https://www.w3schools.com/css/css3_gradients.asp 

### Media

* The icon used for the favicon is from favicon.io
* The image used for the title is from pngwing.com
* The images used for the play cards have been cut from the .png used in the title
* The image used for the question mark card is from pngwing.com