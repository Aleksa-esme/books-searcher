// TODO add apikey to github secrets before deploy
export const API_KEY = process.env.REACT_APP_APIKEY;

export const CHANGE_CATEGORY = 'FILTERS::CHANGE_CATEGORY';
export const CHANGE_SORT = 'FILTERS::CHANGE_SORT';

export const GET_BOOKS_REQUEST = 'BOOKS::GET_BOOKS_REQUEST';
export const GET_BOOKS_SUCCESS = 'BOOKS::GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = "BOOKS::GET_BOOKS_FAILURE";
export const SHOW_INDICATOR = "BOOKS::SHOW_INDICATOR";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}