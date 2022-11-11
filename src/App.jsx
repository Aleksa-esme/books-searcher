import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeFilter } from './store/actions/actionCreator';
import { fetchJson, API_KEY } from "./api/books";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Header } from './components/header/header';
import { AllBooks } from './pages/AllBooks/allBooks';

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
  const [value, setValue] = useState('');
  const [request, setRequest] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [books, setBooks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  console.log(books)
  const url = `https://www.googleapis.com/books/v1/volumes?q=${request}&maxResults=40&printType=books&orderBy=${sortBy}&key=${API_KEY}`;

  const changeRequest = (value) => {
    return setRequest(value);
  }

  const handlePressInput = ({ code }) => {
    if (code === "Enter") changeRequest(value);
  };

  const handleInputChange = (value) => {
    return setValue(value);
  }

  const changeFilter = (value) => {
    return setActiveFilter(value);
  }

  const changeSort = (value) => {
    return setSortBy(value);
  }

  const filterBooks = (books, activeFilter) => {
    switch (activeFilter) {
      case 'All':
        return books;
      case activeFilter:
        return books.filter(book => book.volumeInfo.categories == activeFilter);
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

  useEffect(() => {
    fetchJson(url)
      .then(data => {
        if (data.totalItems > 0) {
          setBooks(data.items);
          setActiveFilter('All')
        } else console.log('no books');
      });
  }, [url]);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Header 
          categories={getUniqueList(books, 'categories')}
          value={value} 
          activeFilter={activeFilter}
          inputChange={handleInputChange} 
          changeRequest={changeRequest} 
          handlePressInput={handlePressInput} 
          changeFilter={changeFilter}
          changeSort={changeSort}
        />
        <AllBooks books={filterBooks(books, activeFilter)}/>
      </div>
    </ThemeProvider>
  );
}

// export default connect(({ filter }) => ({
//   filter
// }), { changeFilter })(App);

export default App;