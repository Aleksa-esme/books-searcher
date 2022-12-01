import { getBooksRequest, getBooksSuccess, getBooksFailure, showLoadingIndicator, changeCategory } from "../actions/actionCreator";
import { API_KEY } from "../constants";

export const getAllBooks = (request, sort) => async (dispatch) => {
    dispatch(showLoadingIndicator(true));
    dispatch(getBooksRequest());
    try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${request}&maxResults=40&printType=books&orderBy=${sort}&key=${API_KEY}`);
        
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        
        const result = await res.json();
        
        if (result.totalItems > 0) {
            dispatch(changeCategory('All'));
            dispatch(getBooksSuccess(result.items));
        } else console.log('no books');

    } catch (err) {
        dispatch(getBooksFailure(err.message));
    } finally {
        dispatch(showLoadingIndicator(false));
    }
};
    