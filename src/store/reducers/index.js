import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({ booksReducer, filtersReducer });

export default rootReducer;