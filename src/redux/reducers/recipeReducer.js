import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: "Avocado, olive tapenade, and chedder toast",
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
}

const recipeStore = createSlice({

})