import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';


import styles from './book.module.css';

// обложка маленькая и большая при открытии
// название
// все авторы
// все категории
// полное описание
// количество страниц
// издатель
// дата издания
// электронная книга
// бесплатный фрагмент
// язык
// рейтинг

export const Book = ({ getBook }) => {
    const { key } = useParams();
    const book = getBook(key);
    return (
        <>
            <div className={styles.header} />
            <div className={styles.content}>
                <div className={styles.block}>
                    {<img 
                        src={book.volumeInfo.imageLinks?.thumbnail} 
                        alt={book.volumeInfo.title} 
                        className={styles.image}
                    />}
                    <div className={styles.info}>
                        <h1>{book.volumeInfo.title}</h1>
                        <p className={styles.author}>{book.volumeInfo.authors}</p>
                        <p>{book.volumeInfo.categories}</p>
                        <div className={styles.publication}>
                            <p>{book.volumeInfo.publisher}</p>
                            <p>{book.volumeInfo.publishedDate}</p>
                        </div>
                        <p>Количество страниц: {book.volumeInfo.pageCount}</p>
                        {/* если нет фрагмента то сделать disabled */}
                        <Button variant="contained" startIcon={<MenuBookIcon />} size='large' className={styles.button} >Читать ознакомительный фрагмент</Button>
                        <p>{book.volumeInfo.maturityRating}</p>
                    </div>
                </div>
                <div className={styles.about}>
                    <p>О книге:</p>
                    <p>{book.volumeInfo.description}</p>
                </div>
            </div>
        </>
    )
}