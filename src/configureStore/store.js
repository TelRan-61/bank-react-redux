import {accountReducer} from "../reducer/accountReducer.js";
import {createStore} from "redux";

const initialState = {
    balance: 0,
};

export const store = createStore(accountReducer, initialState);