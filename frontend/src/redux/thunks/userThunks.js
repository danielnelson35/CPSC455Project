import { createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { actionTypes } from "redux/actions/actionTypes";
import UserService from "redux/services/userService";

export const login = createAsyncThunk(
    actionTypes.LOGIN,
    async (user) => {
        return await UserService.login(user)
    }
);

export const addFavouriteRecipe = createAsyncThunk(
    actionTypes.ADD_FAVOURITE_RECIPE,
    async ([username, recipe], {rejectWithValue} ) => {
        try {
            return await UserService.addToFavouriteRecipes(username, recipe)
        } catch (err) {
            return rejectWithValue(err);
        }
    });

export const deleteFavouriteRecipe = createAsyncThunk(
    actionTypes.DELETE_FAVOURITE_RECIPE,
    async ([username, recipename]) => {
        return await UserService.deleteRecipe(username, recipename)
    });

export const getFavouriteRecipes = createAsyncThunk(
    actionTypes.GET_FAVOURITE_RECIPES,
    async (username) => {
        return await UserService.getRecipes(username)
    });