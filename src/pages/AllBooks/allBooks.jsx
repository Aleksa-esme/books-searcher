import { MediaCard } from "../../components/card/card";

import styles from './allBooks.module.css';

export const AllBooks = ({ books }) => {
    return (
        <main className={styles.main}>
            <p className={styles.quantity}>Found: {books.length}</p>
            <div className={styles.books}>
                {books.map(book => (
                    <MediaCard 
                        key={book.id} 
                        image={book.volumeInfo.imageLinks?.thumbnail}
                        category={book.volumeInfo.categories}
                        author={book.volumeInfo.authors}
                        title={book.volumeInfo.title}
                    />
                ))}
            </div>
        </main>
    )
}