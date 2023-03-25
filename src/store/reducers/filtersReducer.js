import { CHANGE_CATEGORY, CHANGE_SORT } from '../constants';

const initialState = {
  category: 'All',
  sortFilters: ['relevance', 'newest'],
  get sortBy() { return this.sortFilters[0] },
};

const filtersReducer = (state = initialState, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_CATEGORY:
       return {
        ...state, 
        category: activeFilter
      };
    case CHANGE_SORT:
      return {
        ...state, 
        sortBy: activeFilter
      };
    default:
      return state;
  }
}

export default filtersReducer;
