import { useState, useLayoutEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, selectBooksLoading, selectCategory, selectSortBy } from './store/selectors';
import { getAllBooks } from './store/middlewares/getBooks';
import { CircularProgress } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AllBooks } from './pages/AllBooks/allBooks';
import { Book } from './pages/Book/book';

import styles from './app.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#815166',
      light: '#b17e94',
      dark: '#53273c',
    },
    secondary: {
      light: '#fff87d',
      main: '#f3c54c',
      contrastText: '#bd9515',
    },
    custom: {
      light: '#815166',
      main: '#815166',
      dark: '#815166',
      contrastText: '#1c1933',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const loading = useSelector(selectBooksLoading);
  const category = useSelector(selectCategory);
  const sort = useSelector(selectSortBy);

  const [value, setValue] = useState('');
  const [request, setRequest] = useState('');

  console.log(books)

  const requestBooks = useCallback((request, sort) => {
    dispatch(getAllBooks(request, sort));
  }, [dispatch]);
  
  useLayoutEffect(() => {
    requestBooks(request, sort);
  }, [request, requestBooks, sort]);

  const filterBooks = (books, activeFilter) => {
    switch (activeFilter) {
      case 'All':
        return books;
      case activeFilter:
        return books.filter(book => String(book.volumeInfo.categories) === activeFilter);
      default: 
        return books;
    }
  }

  const getUniqueList = (array, prop) => {
    const newArray = [];
    array.forEach(el => {
      if (el.volumeInfo[prop] !== undefined) {
        return newArray.push(el.volumeInfo[prop])
      };
    });
    let resultArray = [...new Set(newArray.flat().sort())];
    resultArray.unshift('All');
    return resultArray;
  };

  const getBook = key => {
    return books.find((book) => book.id === key);
  }

  const changeRequest = value => {
    setRequest(value)
    return requestBooks(request, sort);
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      changeRequest(value);
      requestBooks(request, sort);
    };
  };

  const handleInputChange = value => {
    return setValue(value);
  }

  if (loading) {
    return <CircularProgress />;
  } else return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <Routes>
            <Route 
              path="/" 
              element={
                <AllBooks 
                  books={filterBooks(books, category)}
                  categories={getUniqueList(books, 'categories')}
                  value={value} 
                  inputChange={handleInputChange} 
                  changeRequest={changeRequest} 
                  handlePressInput={handlePressInput} 
                />
              } 
            />
            <Route path="/:key" element={<Book getBook={getBook} />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;