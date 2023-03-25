import { STATUSES, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE, SHOW_INDICATOR } from "../constants";

const initialState = {
  books: [],
  request: STATUSES.IDLE,
  error: null,
  loading: false
};
const booksReducer = (state = initialState, { type, data, err, show }) => {
  switch (type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: data,
        request: STATUSES.SUCCESS,
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        error: err,
        request: STATUSES.FAILURE,
      };
    case SHOW_INDICATOR:
      return {
        ...state,
        loading: show,
      };
    default:
      return state;
  }       
};

export default booksReducer;

