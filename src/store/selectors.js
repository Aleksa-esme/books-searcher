export const selectBooks = state => state.booksReducer.books;
export const selectBooksError = state => state.booksReducer.error;
export const selectBooksLoading = state => state.booksReducer.loading;

export const selectCategory = state => state.filtersReducer.category;
export const selectSortFilters = state => state.filtersReducer.sortFilters;
export const selectSortBy = state => state.filtersReducer.sortBy;
