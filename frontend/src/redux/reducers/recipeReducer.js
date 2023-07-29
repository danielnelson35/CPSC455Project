import { createSlice } from '@reduxjs/toolkit';
import { getSuggestionsAsync, getRecipeAsync, getFilteredRecipeAsync } from 'redux/thunks/recipeThunks';
import { REQUEST_STATE } from 'redux/utils';

const INITIAL_STATE = {
    recipe: null,
    suggestions: [],
    ingredientsList: [],
    getRecipe: REQUEST_STATE.IDLE,
    getFilteredRecipe: REQUEST_STATE.IDLE,
    getSuggestions: REQUEST_STATE.IDLE,
    error: null
};

const recipeStore = createSlice({
    name: "recipe",
    initialState: INITIAL_STATE,
    reducers: {
        clearSuggestions: (state, action) => {
            state.suggestions = [];
        },
        addIngredient: (state, action) => {
            state.ingredientsList.push(action.payload);
        },
        removeIngredient: (state, action) => {
            state.ingredientsList = state.ingredientsList.filter((ingredient) => ingredient != action.payload);
        },
        displayRecipe: (state, action) => {
            state.recipe = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecipeAsync.pending, (state) => {
                state.getRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getRecipeAsync.fulfilled, (state, action) => {
                state.getRecipe = REQUEST_STATE.FULFILLED;
                state.recipe = action.payload;
            })
            .addCase(getRecipeAsync.rejected, (state, action) => {
                state.getRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(getFilteredRecipeAsync.pending, (state) => {
                state.getFilteredRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getFilteredRecipeAsync.fulfilled, (state, action) => {
                state.getFilteredRecipe = REQUEST_STATE.FULFILLED;
                state.recipe = action.payload;
            })
            .addCase(getFilteredRecipeAsync.rejected, (state, action) => {
                state.getFilteredRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(getSuggestionsAsync.pending, (state) => {
                state.getSuggestions = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getSuggestionsAsync.fulfilled, (state, action) => {
                state.getSuggestions = REQUEST_STATE.FULFILLED;
                state.suggestions = action.payload;
            })
            .addCase(getSuggestionsAsync.rejected, (state, action) => {
                state.getSuggestions = REQUEST_STATE.REJECTED;
                state.error = action.error;
                state.suggestions = [];
            });
    }
    });

export const { clearSuggestions: clearSuggestions, addIngredient: addIngredient, removeIngredient: removeIngredient, displayRecipe: displayRecipe } = recipeStore.actions
export default recipeStore;