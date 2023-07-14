import { createSlice } from '@reduxjs/toolkit';
import { login, deleteFavouriteRecipe, getFavouriteRecipes, addFavouriteRecipe } from 'redux/thunks/userThunks';
import { REQUEST_STATE } from 'redux/utils';

const INITIAL_STATE = {
    user: { username: "" },
    login: REQUEST_STATE.IDLE,
    deleteFavouriteRecipe: REQUEST_STATE.IDLE,
    addFavouriteRecipe: REQUEST_STATE.IDLE,
    getFavouriteRecipes: REQUEST_STATE.IDLE,
    error: null
}

const userStore = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setUsername: (state, action) => {
            state.user.username = action.payload
        },
        setUserImage: (state, action) => {
            state.user.userImageLink = action.payload
        },
        addRecipe: (state, action) => {
            state.user.favouriteRecipes.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.login = REQUEST_STATE.PENDING;
        })
            .addCase(login.fulfilled, (state, action) => {
                state.login = REQUEST_STATE.FULFILLED;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.login = REQUEST_STATE.REJECTED;
                state.error = action.payload;
            })

            .addCase(deleteFavouriteRecipe.pending, (state) => {
                state.deleteFavouriteRecipe = REQUEST_STATE.PENDING;
            })
            .addCase(deleteFavouriteRecipe.fulfilled, (state, action) => {
                state.deleteFavouriteRecipe = REQUEST_STATE.FULFILLED;
                if (action.payload.response) {
                    state.user.favouriteRecipes = state.user.favouriteRecipes.filter((recipe) => {
                        return recipe.title !== action.payload.recipename;
                    })
                }

                console.log(state.user.favouriteRecipes.length)
            })
            .addCase(deleteFavouriteRecipe.rejected, (state, action) => {
                state.deleteFavouriteRecipe = REQUEST_STATE.REJECTED;
                state.error = action.payload;
            })

            .addCase(getFavouriteRecipes.pending, (state) => {
                state.getFavouriteRecipes = REQUEST_STATE.PENDING;
            })
            .addCase(getFavouriteRecipes.fulfilled, (state, action) => {
                state.getFavouriteRecipes = REQUEST_STATE.FULFILLED;
                state.user.favouriteRecipes = action.payload;
            })
            .addCase(getFavouriteRecipes.rejected, (state, action) => {
                state.getFavouriteRecipes = REQUEST_STATE.REJECTED;
                state.error = action.payload;
            })
            .addCase(addFavouriteRecipe.pending, (state) => {
                state.addFavouriteRecipe = REQUEST_STATE.PENDING;
            })
            .addCase(addFavouriteRecipe.fulfilled, (state, action) => {
                state.addFavouriteRecipe = REQUEST_STATE.FULFILLED;
                state.user.favouriteRecipes.push(action.payload);
            })
            .addCase(addFavouriteRecipe.rejected, (state, action) => {
                state.addFavouriteRecipe = REQUEST_STATE.REJECTED;
                state.error = action.payload;
            })

    } // For thunks
});

export const { setUsername, setUserImage, addRecipe } = userStore.actions
export default userStore;
