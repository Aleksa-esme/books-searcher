import styles from './card.module.css';

export const Card = ({ image, category, title, author }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="img" className={styles.image} />
            <div className={styles.textBlock}>
                <p className={styles.light}>{category}</p>
                <h6 className={styles.title}>{title}</h6>
                <p className={styles.light}>{author}</p>
            </div>
        </div>
    );
}