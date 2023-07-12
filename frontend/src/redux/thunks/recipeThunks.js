import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "redux/actions/actions";
import RecipeService from "redux/services/recipeService";

export const getRecipeAsync = createAsyncThunk(
    actionTypes.GET_RECIPE,
    async () => {
        return await RecipeService.getRecipe();
    }
);