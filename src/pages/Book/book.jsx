import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
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
  const navigate = useNavigate();

  const toPreviousPage = () => {
    navigate(-1);
  }

  useEffect(() => {
    if (!book) {
      navigate('/');
    }
  }, [book, navigate])

  return (
    <>
      <div className={styles.header}>
        <Button 
          className={styles.buttonBack}
          variant="contained" 
          startIcon={<KeyboardBackspaceIcon/>} 
          onClick={toPreviousPage}
        />
      </div>
      {book && (
        <div className={styles.content}>
          <div className={styles.block}>
            {<img 
              src={book.volumeInfo.imageLinks?.thumbnail} 
              alt={book.volumeInfo.title} 
              className={styles.image}
            />}
            <div className={styles.info}>
              <h1 className={styles.title}>{book.volumeInfo.title}</h1>
              {book.volumeInfo.authors && <p className={styles.author}>{book.volumeInfo.authors}</p>}
              <p>{book.volumeInfo.categories}</p>
              <div className={styles.publication}>
                {book.volumeInfo.publisher && <p>{book.volumeInfo.publisher}</p>}
                {book.volumeInfo.publishedDate && <p>{book.volumeInfo.publishedDate}</p>}
              </div>
              {book.volumeInfo.pageCount && <p>Pages: {book.volumeInfo.pageCount}</p>}
              {/* если нет фрагмента то сделать disabled */}
              <Button variant="contained" startIcon={<MenuBookIcon />} size='large' className={styles.button}>Read fragment</Button>
              <p>{book.volumeInfo.maturityRating}</p>
            </div>
          </div>
          <div className={styles.about}>
            <p>About:</p>
            {book.volumeInfo.description
              ? <p>{book.volumeInfo.description}</p>
              : <p>No description</p>
            }
          </div>
        </div>
      )}
   </>
  )
}
