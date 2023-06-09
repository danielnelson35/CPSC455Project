import * as actions from './actions';

const initialState = {
    username: null
  }

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case (actions.ADD_USERNAME):
            return {
                ...state,
                username: action.username
            }
        default:
            return state;
    }

}
