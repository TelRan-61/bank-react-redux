import {accountReducer} from "../reducer/accountReducer.js";
import {createStore} from "redux";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...',
};

export const store = createStore(accountReducer, initialState);