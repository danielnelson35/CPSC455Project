import { clearSuggestions } from "redux/reducers/recipeReducer";
import { setUsername, setUserImage, addRecipe } from "redux/reducers/userReducer";
import { displayRecipe } from "redux/reducers/recipeReducer";

export const SET_USERNAME = setUsername;
export const SET_USER_IMAGE = setUserImage;
export const ADD_RECIPE = addRecipe;
export const CLEAR_INGREDIENTS = clearSuggestions
export const DISPLAY_RECIPE = displayRecipe;
