import { clearSuggestions } from "redux/reducers/recipeReducer";
import { setUsername, setUserImage, addRecipe } from "redux/reducers/userReducer";

export const SET_USERNAME = setUsername;
export const SET_USER_IMAGE = setUserImage;
export const ADD_RECIPE = addRecipe;
export const CLEAR_INGREDIENTS = clearSuggestions