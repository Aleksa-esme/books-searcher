import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBooksLoading } from '../../store/selectors';
import { MediaCard, Header, Loader } from '../../components';
import { ErrorBoundary } from '../../utils/errorBoundary';
import styles from './allBooks.module.css';

export const AllBooks = ({ books, categories, changeRequest, handlePressInput, inputRef, value }) => {
  const loading = useSelector(selectBooksLoading);
  
  return (
    <>
      <Header 
        categories={categories}
        changeRequest={changeRequest} 
        handlePressInput={handlePressInput} 
        inputRef={inputRef}
      />
      <main className={styles.main}>
        <p className={styles.quantity}>
          Found: {books.length}
          {value && <span> by request <span className={styles.request}>{value}</span></span>}
        </p>
          <div className={styles.books}>
            {books.map(book => (
              <ErrorBoundary key={book.id} >
                <Link to={`/${book.id}`} >
                  <MediaCard 
                    image={book.volumeInfo.imageLinks?.thumbnail}
                    category={book.volumeInfo.categories}
                    author={book.volumeInfo.authors}
                    title={book.volumeInfo.title}
                  />
                </Link>
              </ErrorBoundary>
            ))}
          </div>
      </main>
      {loading && <Loader />}
    </>
  )
}
