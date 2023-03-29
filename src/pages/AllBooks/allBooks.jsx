import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectBooksLoading } from '../../store/selectors';
import { MediaCard } from "../../components/mediaCard/mediaCard";
import { Header } from '../../components/header/header';
import { Loader } from '../../components/loader/loader';

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
              <Link 
                to={`/${book.id}`} 
                key={book.id} 
              >
								<MediaCard 
									image={book.volumeInfo.imageLinks?.thumbnail}
									category={book.volumeInfo.categories}
									author={book.volumeInfo.authors}
									title={book.volumeInfo.title}
								/>
              </Link>
            ))}
          </div>
      </main>
      {loading && <Loader />}
    </>
  )
}
