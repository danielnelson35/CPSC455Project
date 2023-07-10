import { combineReducers } from "redux"
import userStore from "./userReducer"
import recipeStore from "./recipeReducer";

const rootReducer = combineReducers({
    userStore: userStore.reducer,
    recipeStore: recipeStore.reducer
});

export default rootReducer;