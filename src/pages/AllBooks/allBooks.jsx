import { Link } from "react-router-dom";
import { MediaCard } from "../../components/card/mediaCard";
import { Header } from '../../components/header/header';

import styles from './allBooks.module.css';

export const AllBooks = ({ books, categories, value, inputChange, changeRequest, handlePressInput }) => {
  return (
    <>
      <Header 
        categories={categories}
        value={value} 
        inputChange={inputChange} 
        changeRequest={changeRequest} 
        handlePressInput={handlePressInput} 
      />
      <main className={styles.main}>
        <p className={styles.quantity}>Found: {books.length}</p>
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
    </>
  )
}
