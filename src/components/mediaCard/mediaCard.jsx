import { Card, CardContent, CardMedia, Typography, Grow } from '@mui/material';
import styles from './mediaCard.module.css';

export const MediaCard = ({ image, category, title, author }) => {
  return (
    <Grow in>
      <Card className={styles.card}>
        <div className={styles.image}>
          <CardMedia
            className={styles.image}
            component="img"
            image={image ? image : require('../../assets/images/stub.webp')}
            alt={title}
          />
        </div>
        <CardContent className={styles.textBlock}>
          <Typography gutterBottom variant="p" component="div" className={styles.title}>{title}</Typography>
          {author && <Typography variant="body2" color="text.secondary" className={styles.author}>{author[0]}</Typography>}
          {category && <Typography variant="p" color="text.secondary" className={styles.category}>{category[0]}</Typography>}
        </CardContent>
      </Card>
    </Grow>
  );
}
