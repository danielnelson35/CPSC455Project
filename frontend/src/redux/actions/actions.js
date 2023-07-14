import { setUsername, setUserImage, addRecipe } from "redux/reducers/userReducer";

export const actionTypes = {
    GET_RECIPE: 'recipe/getRecipe',
    LOGIN: 'user/login',
    ADD_FAVOURITE_RECIPE: 'user/addFavouriteRecipe',
    DELETE_FAVOURITE_RECIPE: 'user/deleteFavouriteRecipe',
    GET_FAVOURITE_RECIPES: 'user/getFavouriteRecipes'
}

export const SET_USERNAME = setUsername;
export const SET_USER_IMAGE = setUserImage;
export const ADD_RECIPE = addRecipe;