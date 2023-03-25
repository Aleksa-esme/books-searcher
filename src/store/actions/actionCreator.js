import { 
  CHANGE_CATEGORY, 
  CHANGE_SORT, 
  GET_BOOKS_REQUEST, 
  GET_BOOKS_SUCCESS, 
  GET_BOOKS_FAILURE,
  SHOW_INDICATOR
} from '../constants';

export const changeCategory = activeFilter => ({
  type: CHANGE_CATEGORY,
  activeFilter,
});

export const changeSort = activeFilter => ({
  type: CHANGE_SORT,
  activeFilter,
});


export const getBooksRequest = () => ({
  type: GET_BOOKS_REQUEST,
});

export const getBooksSuccess = data => ({
  type: GET_BOOKS_SUCCESS,
  data,
});

export const getBooksFailure = err => ({
  type: GET_BOOKS_FAILURE,
  err,
});

export const showLoadingIndicator = show => ({
  type: SHOW_INDICATOR,
  show,
});
