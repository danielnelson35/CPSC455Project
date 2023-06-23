import { setUsername, setUserImage, addRecipe } from "redux/reducers/userReducer";
import { findRecipe } from "redux/reducers/recipeReducer";

export const FIND_RECIPE = findRecipe;

export const SET_USERNAME = setUsername;
export const SET_USER_IMAGE = setUserImage;
export const ADD_RECIPE = addRecipe;