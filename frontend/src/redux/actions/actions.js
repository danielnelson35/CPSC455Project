import { setUsername, setUserImage, addRecipe } from "redux/reducers/userReducer";

export const actionTypes = {
    GET_RECIPE: 'recipe/getRecipe'
}

export const SET_USERNAME = setUsername;
export const SET_USER_IMAGE = setUserImage;
export const ADD_RECIPE = addRecipe;