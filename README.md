# CPSC455Project
CPSC 455 group project: What Should I Eat

Project Description:

The website will be for hungry people who are in need of recipe ideas. It will generate random recipes or based on what ingredients the user currently has. It will store recipes that have been recommended to the user previously and ingredients the user currently has. They can choose the recipe recommended or choose to skip it. Some additional functionality could be best before dates for ingredients (reminds the user to use them before they expire). 


Project Task Requirements
○ minimal requirements (will definitely complete) 
- use API calls to a website to get recipe (https://developer.edamam.com/edamam-recipe-api)
- Skip a recipe 
- Store favoured recipes 
- User profile - with just their favoured recipes 
- Recommend a recipe from favoured recipes 

○ "standard" requirements (will most likely complete) 
- Setting up the webpage to take user input (add ingredients and it will output a recipe based on those ingredients) 
- select what type of cuisine/ingredient and filter based on that 
- Exclude allergies
- User profile - with ingredients, recipes 
- Make their own recipes and store that in their favoured recipes

○ stretch requirements (plan to complete at least 1!)
- use chatGPT for recipes on the internet
- Remind user of soon-to-expire ingredients
- Automate reduction of ingredients (user profile)



Project Task Breakdown
1. use API calls to websites to get recipe
- Choose an API
- Get it working on command line (ensure backend is working correctly)
- Manipulate the json 
- Populate the frontend with the resulting json
2. Favourited recipes 
- Store user ID + recipe in cache/temp storage
- Favourite button calls backend?
- Move recipe from cache/temp storage into user storage/recipe storage pk recipe/fk user?

Protocol

![image](https://github.com/danielnelson35/CPSC455Project/assets/28066750/9fcfd8ce-cc2e-4d30-9892-1e8d57cf0ba5)

![image](https://github.com/danielnelson35/CPSC455Project/assets/28066750/36271027-3e07-4306-ad77-030c8b1e0c10)


