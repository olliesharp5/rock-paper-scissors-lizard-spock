# Rock, Paper, Scissors, Lizard, Spock

RPSLS is a user-friendly website that offers an online version of the popular game, Rock, Paper, Scissors, Lizard, Spock. Players can enjoy single-player matches against a computer opponent. The site provides clear and concise rules for the game, ensuring that players understand how to play. While there is no leaderboard or tutorial section, the website focuses on providing a simple and fun experience for players.

# Table of Contents
- [Rock, Paper, Scissors, Lizard, Spock](#rock-paper-scissors-lizard-spock)
- [Table of Contents](#table-of-contents)
  - [Demo](#demo)
    - [A live demo to the website can be found \[here\](gitHub deployment link)](#a-live-demo-to-the-website-can-be-found-heregithub-deployment-link)
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

![Website look on different devices](insert image path.png) //use https://ui.dev/amiresponsive

### A live demo to the website can be found [here](gitHub deployment link)

## UX
This website is not targeting any specific group of users. 
The site is focused on simplicity and ease of navigation so users can interact with the game as easily as possible. 

## User stories
As the sole developer of this website, my goal is to create an online game that plays true to the rules of the game and is accessible to a wide range of users. 
I came up with the following points, which are applicable to the users:

- As a user, I want to understand the purpose of this website quickly and easily.
- As a user, I want to easily navigate this website (by using a mouse, a keyboard, or a touch screen).
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

![wireframe](insert filepath for wireframe)

### Surface
TO CHANGE 
I have selected an antique white (#faebd7) and dark green (#435426) color palette. I also used a background image with badminton themes in 2 sections of the site. The color palette was chosen because i wanted it to represent the sophisticated and clinical nature of the sport of badminton as well as directly reflecting the colors seen on a badminton court. 

## Technologies

1. HTML - To create a basic site
2. CSS - To create a nice, standout front-end and to give a great user experience
4. JavaScript - To create an interactive frontend and provide logic to the game. 
3. Balsamiq - To create a wireframe

## Features

### Existing Features

* Title
  
The title is highly crucial in a website for an online game as it sets the first impression for potential players. It not only provides a glimpse into the nature of the game but also facilitates easy discoverability on search engines. A standout title should reflect the essence of the game, captivating the audience's interest and prompting them to explore further.

![title](insert filepath for image)


* The Rules
  
The rules section is crucial in providing players with a clear understanding of how the game is played. A well-structured and concise explanation of the game mechanics, objectives, and any special features or strategies will help players navigate their gameplay confidently, enhancing their overall experience.

![rules](insert filepath for image)

* The Round Counter
  
The round counter serves as a visual aid that keeps track of the progress in the game. It provides players with a sense of accomplishment as they move through each round and also helps in creating a competitive atmosphere by showcasing progress and moving closer to victory.

![round_counter](insert filepath for image)

* Player/Computer Score

This section plays a significant role in conveying the current score of both the player and the computer in real-time. Moreover, showcasing scores can add excitement and motivate players to strive for higher achievements and play the game again to win.

![score](insert filepath for image)

* Player/Computer Selection Cards
  
Displaying the image of the selections made by the player and computer is essential for transparent gameplay. By showcasing the choices visually, it offers clarity and builds trust so players can follow and understand the logic behind the results. This enhances immersion in the game's narrative and creates.

![selection_cards](insert filepath for image)

* Win/Loss Message
  
This section plays a pivotal role in instilling a sense of achievement or motivation in players. It instantly informs them about the outcome and declares the winner or loser once the player and computer cards are revealed. This instant gratification helps in creating a satisfying gameplay loop and keeps players motivated to continue playing or aim for a better outcome in subsequent rounds. 

![win_loss_message](insert filepath for image)

* Play Buttons
  
The play buttons section is the gateway for players to interact with the game and make their selections. Being assigned to specific selectors in the game, these buttons provide players with direct control over their gameplay actions. 

![play_buttons](./assets/readme-assets/registration-form.png)


### Features Left to Implement

In the future I would like to add, 
* 

## Testing

* I tested the site, and it works in different web browsers: Chrome, Firefox, and Microsoft Edge.
* On mobile devices, I tested the my site on a Samsung Galaxy S21 Ultra with the Samsung browser and an iPhone 13 with the Safari browser.
* I confirmed that the site is responsive and functions on different screen sizes using the devtools device toolbar.
* 

### Validator Testing

#### HTML
No errors were found when passing through the official W3C validator.

![html_validator](insert filepath)

#### CSS
No errors were found when passing through the official (Jigsaw) validator.

![css_validator](insert filepath)

#### WebAim Contrast checker 
No errors were found when passing through the contrast validator.

![contrast_validator](insert filepath)

### JavaScript
No errors were found when passing though the JSHint validator

![javascript_validator](insert filepath)

#### Fixed Bugs

* Timeout feature 
* Images not displaying 
* Event listener for buttons not working correctly 
* Cursor missing from buttons

#### Unfixed Bugs

* 

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

* 

### Media

* The icon used for the favicon is from favicon.io
* 