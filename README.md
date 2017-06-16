README

Game Lists App

What the App does and How it Works:
This application is a way for a user to sign up, login, and make a list of games they either want to play, have started playing, or have completed.
The backend rails server will be where the game are saved at and retrieved from.
The client will provide the UX.
I used bootstrap for the bare minimum of styling/buttons/tables
I used handlebars to append new post data into divs
I also used handlebars to generate buttons for each table row (associated with each item)
Buttons show and hide contextually based on the properties of the currently-selected game.
If a game has a status of "completed", only the other two options will show up for the user to alter what list the game is in.

Approach:
My approach was to make the simplest possible list app I could, while livening it up slightly with a recognizable/enjoyable theme (games). I spent almost zero time on styling, and used bootstrap and modals to implement form fields, color coded buttons, and the bare minimum structure. My goal was to get the most basic functions required to behave and react in an elegant way, and I spent most of my time on that.

Unsolved Problems:
I believe that I solved all the problems that I intended to solve by the first submittal. I have many ideas for additional features and styling, but in terms of a minimum viable product, I think I was successful in solving every issue that arose. I did a much better job pushing through stuck moments on this project than I did on the last one.

Highlights:
I think I had some of my best coding moments so far as a developer while working on this project, and I’d like to point some of them out.

I was able to filter one array of objects into three separate groups based on their "progress" property, and place them dynamically with handlebars.
I dynamically generated buttons in handlbars and used them to change the "progress" state of each game, and then moved them seemlessly into their new column.
The getGamesSuccess and  onShowGameInfo/renderGameInfo in the games/ui.js file are my best bits of programming.
I also use a helper function to re-render the page after every change in data.

User Stories:
As a user I want to be able to:
-Sign up and log in
-Create games that only I can see, and put them into lists: want to play, started playing, and completed
-Update the progress state of any game that I click on
-View some more information about any game I have in my lists, and show a thumbnail of the box art

Links:

Link to the client repo:
https://github.com/noobiwankenoobi/project-4-capstone-client

Link to the deployed client:
https://noobiwankenoobi.github.io/project-4-capstone-client/

Link to the API repo:
https://github.com/noobiwankenoobi/project-4-capstone-api

Link to the deployed API:
https://project-4-capstone-api.herokuapp.com/
