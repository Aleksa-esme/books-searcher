import { useState, useCallback, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AllBooks, Book } from './pages';
import { selectBooks, selectCategory, selectSortBy } from './store/selectors';
import { getAllBooks } from './store/middlewares/getAllBooks';
import { ErrorBoundary } from './utils/errorBoundary';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import styles from './app.module.css';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#815166',
//       light: '#b17e94',
//       dark: '#53273c',
//     },
//     secondary: {
//       light: '#fff87d',
//       main: '#f3c54c',
//       contrastText: '#bd9515',
//     },
//     custom: {
//       light: '#815166',
//       main: '#815166',
//       dark: '#815166',
//       contrastText: '#1c1933',
//     },
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   },
// });

function App() {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const category = useSelector(selectCategory);
  const sort = useSelector(selectSortBy);

  const textRef = useRef();
  const [value, setValue] = useState('');

  const requestBooks = useCallback((request, sort) => {
    if (request.length > 0) {
      dispatch(getAllBooks(request, sort));
    }
    setValue(request);
  }, [dispatch]);

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

  const getBook = key => books.find(book => book.id === key);

  const changeRequest = () => requestBooks(textRef.current.value, sort);
  
  const handlePressInput = ({ code }) => {
    if (code === 'Enter') {
      changeRequest();
    };
  };

  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        <div className={styles.app}>
          <Routes>
            <Route 
              path="/" 
              element={
                <AllBooks 
                  books={filterBooks(books, category)}
                  categories={getUniqueList(books, 'categories')}
                  changeRequest={changeRequest} 
                  handlePressInput={handlePressInput} 
                  inputRef={textRef}
                  value={value}
                />
              } 
            />
            <Route path="/:key" element={<ErrorBoundary><Book getBook={getBook} /></ErrorBoundary>} />
          </Routes>
        </div>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
