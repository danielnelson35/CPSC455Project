import { combineReducers } from "redux"
import userStore from "./userReducer"

const rootReducer = combineReducers({
    userStore: userStore.reducer
});

export default rootReducer;