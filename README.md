# What Should I Eat

The application is designed for individuals seeking cooking inspiration. It will provide users with the option to receive spontaneous recipe suggestions or ones tailored to their available ingredients or allergies. Users can opt to save suggested recipes or request new ones.


## Project Description

The website will be for people who are in need of recipe ideas. It will generate random recipes or based on what ingredients the user currently has. They can choose to save the recipe recommended or generate another one. 


## Project Task Requirements

### Minimal Requirements

✅ use API calls to a website to get recipe (https://developer.edamam.com/edamam-recipe-api)

✅ Skip a recipe 

✅ Store favoured recipes 

✅ User profile - with just their favoured recipes 

✅ Recommend a recipe from favoured recipes 


### Standard Requirements

✅ Setting up the webpage to take user input (add ingredients and it will output a recipe based on those ingredients) 

✅ Enter ingredients and filter based on that 

✅ Exclude allergies

✅ User profile - with ingredients, recipes 

✅ Make their own recipes and store that in their favoured recipes


### Stretch Requirements

❌  use chatGPT for recipes on the internet

❌  Remind user of soon-to-expire ingredients

❌  Automate reduction of ingredients (user profile)



## Tech 

### Unit 1 - HTML, CSS, JS
These 3 technologies were used all throughout the project, in combination with other technologies from other units. Javascript was used to write both the frontend and backend code. And HTML and CSS were used to manipulate the frontend and add styling to components. 

### Unit 2 - React/Redux
We utilized react components for the UI and redux helped us manage state across the different components. React helped with making the frontend more organized and easier to create, and redux helped with sharing information throughout the application.

### Unit 3 - Node/Express
The node.js framework was used to write backend code. Express was used as our web server, to set up APIs that allowed our backend code to interface and serve responses to frontend requests. This also reduces complexity of the frontend, allowing the frontend to be more lightweight, and makes changing either much simpler.

### Unit 4 - MongoDB
MongoDB was used as a way to store user data, such as list of favorite recipes which persists enabling data to be retained for future use. The use of MongoDB allowed us to access our data easily and quickly. 

### Unit 5 - Deployment
We used Render for deployment which allows our application to be used from any device that can connect to the internet without the need to build and run the code. This also allows users to use the same data between different devices through the use of the same database.


### Above and Beyond Functionality
Loading image - The loading image was researched and added to make the transition between API calls look a little smoother. It was not in the scope of the course and made for a cool addition.

External API - The use of an external API provides this project with a large amount of recipes and ingredients, as well as a powerful query engine.


## Next Steps

Potential future directions for development is that we can implement a user authentication system for the login, and upgrade the user system to keep track of ingredients. There is also more filtering from the external API that we did not have time to implement, such as cuisine or diet.
 

## Task Breakdown

Daniel - Worked on the generate recipe API, setting up reducers, much of the front end functionality and css, lots of styling and contributed to peer programming

Elton - Worked on the express server and backend documentation, as well as implementing one of the external APIs. Also worked on the redux and helped with the styling and frontend.

Angela - I reorganized the main and profile page. Added thumbnail for list of favourites and display in the recipe card. Also, I added the allergies filter and the addition and deletion of an allergy from the allergies list. 

Jason - Worked on setting up the mongoDB and connecting it to the backend. Created an user input form to add their own recipe. Deployed both the frontend and backend via Render.


