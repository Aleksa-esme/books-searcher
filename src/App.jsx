import styles from './app.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Header } from './components/header/header';
import { AllBooks } from './pages/AllBooks/allBooks';

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
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Header />
        <AllBooks />
      </div>
    </ThemeProvider>
  );
}

export default App;
