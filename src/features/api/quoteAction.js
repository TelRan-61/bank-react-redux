import {putQuote} from "../quote/quoteSlice.js";

export const fetchQuote = () => {
    return dispatch => {
        dispatch(putQuote('Pending...'));
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(() => dispatch(putQuote('Failed to fetch quote')))
    }
}