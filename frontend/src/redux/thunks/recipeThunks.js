import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "redux/actions/actionTypes";
import RecipeService from "redux/services/recipeService";

export const getRecipeAsync = createAsyncThunk(
    actionTypes.GET_RECIPE,
    async () => {
        return await RecipeService.getRecipe();
    }
);

export const getFilteredRecipeAsync = createAsyncThunk(
    actionTypes.GET_FILTERED_RECIPE,
    async ([ingredients]) => {
        console.log(ingredients)
        return await RecipeService.getFilteredRecipe(ingredients);
    }
);

export const getSuggestionsAsync = createAsyncThunk(
    actionTypes.GET_INGREDIENTS_LIST,
    async (input) => {
        return await RecipeService.getSuggestions(input);
    }
)