import { createSlice } from '@reduxjs/toolkit';
import { getSuggestionsAsync, getRecipeAsync, getFilteredRecipeAsync, getRestrictionsAsync } from 'redux/thunks/recipeThunks';
import { getRandomFavourite } from 'redux/thunks/userThunks';
import { REQUEST_STATE } from 'redux/utils';

const INITIAL_STATE = {
    recipe: null,
    suggestions: [],
    ingredientsList: [],
    restrictions: [],
    restrictionsList: [],
    getRecipe: REQUEST_STATE.IDLE,
    getFilteredRecipe: REQUEST_STATE.IDLE,
    getSuggestions: REQUEST_STATE.IDLE,
    getRandomFavourite: REQUEST_STATE.IDLE,
    getRestrictions: REQUEST_STATE.IDLE,
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
        addRestriction: (state, action) => {
            state.restrictionsList.push(action.payload);
        },
        removeIngredient: (state, action) => {
            state.ingredientsList = state.ingredientsList.filter((ingredient) => ingredient !== action.payload);
        },
        removeRestriction: (state, action) => {
            state.restrictionsList = state.restrictionsList.filter((restriction) => restriction !== action.payload);
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
                state.getRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getFilteredRecipeAsync.fulfilled, (state, action) => {
                state.getRecipe = REQUEST_STATE.FULFILLED;
                state.recipe = action.payload;
            })
            .addCase(getFilteredRecipeAsync.rejected, (state, action) => {
                state.getRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })


            .addCase(getSuggestionsAsync.pending, (state) => {
                state.getSuggestions = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getSuggestionsAsync.fulfilled, (state, action) => {
                state.getSuggestions = REQUEST_STATE.FULFILLED;
                if (action.payload) {
                    state.suggestions = action.payload;
                } else {
                    state.suggestions = [];
                }
            })
            .addCase(getSuggestionsAsync.rejected, (state, action) => {
                state.getSuggestions = REQUEST_STATE.REJECTED;
                state.error = action.error;
                state.suggestions = [];
            })


            .addCase(getRestrictionsAsync.pending, (state) => {
                state.getRestrictions = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getRestrictionsAsync.fulfilled, (state, action) => {
                state.getRestrictions = REQUEST_STATE.FULFILLED;
                if (action.payload) {
                    state.restrictions = action.payload;
                } else {
                    state.restrictions = [];
                }
            })
            .addCase(getRestrictionsAsync.rejected, (state, action) => {
                state.getRestrictions = REQUEST_STATE.REJECTED;
                state.error = action.error;
                state.restrictions = [];
            })

            
            .addCase(getRandomFavourite.pending, (state) => {
                state.getRandomFavourite = REQUEST_STATE.PENDING;
            })
            .addCase(getRandomFavourite.fulfilled, (state, action) => {
                state.getRandomFavourite = REQUEST_STATE.FULFILLED;
                state.recipe  = action.payload;
            })
            .addCase(getRandomFavourite.rejected, (state, action) => {
                state.getRandomFavourite = REQUEST_STATE.REJECTED;
                state.error = action.payload;
            });
    }
});

export const { clearSuggestions, addIngredient, removeIngredient, displayRecipe, addRestriction, removeRestriction } = recipeStore.actions
export default recipeStore;