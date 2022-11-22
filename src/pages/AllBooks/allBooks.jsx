import { Link } from "react-router-dom";
import { MediaCard } from "../../components/card/card";
import { Header } from '../../components/header/header';

import styles from './allBooks.module.css';

export const AllBooks = ({ books, categories, value, activeFilter, inputChange, changeRequest, handlePressInput, changeFilter, changeSort }) => {
    return (
        <>
            <Header 
                categories={categories}
                value={value} 
                activeFilter={activeFilter}
                inputChange={inputChange} 
                changeRequest={changeRequest} 
                handlePressInput={handlePressInput} 
                changeFilter={changeFilter}
                changeSort={changeSort}
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