import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const InitialState = {
    counter: 0
};

export const actionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
};

// REDUCERS
export const counterReducer = (state = 0, { type }) => {
    switch (type) {
        case actionTypes.INCREMENT:
            return state + 1;
        case actionTypes.DECREMENT:
            return state - 1;
        case actionTypes.RESET:
            return 0;
        default:
            return state;
    }
};

// COMBINED REDUCERS
export const reducers = {
    counter: counterReducer
};

// ACTIONS
export const incrementCount = () => ({ type: actionTypes.INCREMENT });
export const decrementCount = () => ({ type: actionTypes.DECREMENT });
export const resetCount = () => ({ type: actionTypes.RESET });

export function initializeStore(initialState = InitialState) {
    return createStore(
        combineReducers(reducers),
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}
