import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = undefined;

const recipe = [
    {
        title: "Cocktail sauce",
        image: "https://littlesunnykitchen.com/wp-content/uploads/2021/05/Shrimp-Cocktail-Sauce-1.jpg",
        ingredients: [
            "1/2 cup chili sauce",
            "1/2 cup ketchup",
            "3 tablespoon prepared horseradish",
            "2 teaspoon fresh lemon juice",
            "1/2 teaspoon Worcestershire sauce",
            "1/4 teaspoon hot sauce"
        ],
        directions: "Combine all ingredients."
    },
    {
        title: "Avocado & olive tapenade, with chedder toast",
        image: "https://www.loveandoliveoil.com/wp-content/uploads/2014/02/goat-cheese-avocado-toast.jpg",
        ingredients: [
            "1 slice bread, toasted",
            "1 tbsp olive tapenade",
            "1 slice cheddar cheese",
            "1/2 avocado, sliced",
            "1 tsp olive oil",
            "Sea salt",
            "Crushed red pepper"
        ],
        directions: "Spread toast with tapenade. Top with cheddar and avocado, pressing down to secure the avocado slices. " +
            "Drizzle with the oil and sprinkle with flaky sea salt and red pepper flakes."
    },
    {
        title: "Creamy peppercorn-Parmesan dressing",
        image: "https://homeinthefingerlakes.com/wp-content/uploads/2020/01/pepper-parm-salad-dressing-0369-720x720.jpg.webp",
        ingredients: [
            "1 cup buttermilk",
            "1/2 cup sour cream",
            "1/4 cup mayonnaise",
            "2 oz Parmesan, finely grated",
            "1 tsp pepper, coarsely ground",
            "Salt, to taste"
        ],
        directions: "Whisk together all ingredients."
    }
]

const recipeStore = createSlice({
    name: "recipe",
    initialState: {
        recipe: INITIAL_STATE
    },
    reducers: {
        findRecipe: (state, action) => {
            state.recipe = recipe[action.payload];
        }
    },
    extraReducers: (builder) => { }
});

export const { findRecipe } = recipeStore.actions
export default recipeStore;