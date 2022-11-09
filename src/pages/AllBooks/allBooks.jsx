import { useState, useEffect } from "react"; 
import { fetchJson, API_KEY } from "../../api/books";
import { Card } from "../../components/card/card";

import styles from './allBooks.module.css';

const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`;

export const AllBooks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchJson(url)
            .then(books => setData(books.items));
    }, []);

    return (
        <main className={styles.main}>
            <p className={styles.quantity}>Found: {data.length}</p>
            <div className={styles.books}>
                {data.map(book => (
                    <Card 
                        key={book.id} 
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        category={book.volumeInfo.categories}
                        author={book.volumeInfo.authors[0]}
                        title={book.volumeInfo.title}
                    />
                ))}
            </div>
        </main>
    )
}