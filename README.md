#Client README

#GameDash
>An app for organizing the games you love into lists.

##What the App does and How it Works:
This application is a way for a user to sign up, login, and make lists of games they either want to play, have started playing, or have completed playing.
The backend rails server will store games and their "progress state".
The client will provide the UI.

##Technologies Used
HTML, CSS, Javascript, jQuery, Rails
-I used bootstrap for the bare minimum of styling/buttons/divs
-I used handlebars to append new data into list columns
-Buttons show and hide contextually based on the progress property of the currently-selected game.
-If a game has a status of "completed", only the other two options will show up (want-to-play, started-playing)

##Approach:
My approach was to make the simplest possible list app I could, while livening it up slightly with a recognizable/enjoyable theme (games)-- something I know a lot about. I spent almost zero time on styling, prioritizing the functionality. I used bootstrap and modals to implement form fields, color coded buttons, and the bare minimum structure. My goal was to get the most basic functions required to behave and react in an elegant way, and I spent most of my time on that.

##User Stories:
>As a user I want to be able to:
-Sign up, log in, change my password, log out
-Sign in on sign-up
-Create games that only I can see, and give them a title and a URL to their cover art.
-Put games into lists with the categories: Want to Play, Started Playing, and Completed
-Update the progress state of any game that I select
-View some more information about any game I have in my lists, and show a thumbnail of the box art

##Wireframes
>Link to wireframes:
http://i.imgur.com/Xqkiinr.jpg

##Project Links:
-Link to the client repo: https://github.com/noobiwankenoobi/project-4-capstone-client

-Link to the deployed client: https://noobiwankenoobi.github.io/project-4-capstone-client/

-Link to the API repo: https://github.com/noobiwankenoobi/project-4-capstone-api

-Link to the deployed API: https://project-4-capstone-api.herokuapp.com/

##Unsolved Problems:
I believe that I solved all the problems that I intended to solve by the first submittal. I have many ideas for additional features and styling, but in terms of a minimum viable product, I think I was successful in solving every issue that arose. I did a much better job pushing through moments where I felt stuck on this project than I did on the last project.

##Future Plans
-In the next iteration, I would like to add more interesting features.
-I would like to include at least one third-party API. Possibly twitch.tv's, perhaps a game info database.
-I would like to embed video from twitch and youtube.
-I would like to have more categories of lists and provide more functionality for the user.
-I would like to refactor in a poular moden framework. Possibly Ember, most likely React.

##Project Highlights:
>I think I had some of the best code I've written is contained in this project, and I’d like to point some of them out:

-I was able to filter one array of objects into three separate groups based on their "progress" property, and place them dynamically into columns using handlebars.
-I dynamically generated buttons in handlbars and used them to change the "progress" state of each game, changing both the data in the database and the object's organizational position on the page.
-The getGamesSuccess and onShowGameInfo/renderGameInfo functions in the games/ui.js file are my best bits of programming.
-I also use a helper function to re-render the page after every change in data.
