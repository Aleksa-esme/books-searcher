import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

import styles from './card.module.css';

export const MediaCard = ({ image, category, title, author }) => {
    return (
        <Grow in>
            <Card className={styles.card}>
                <div className={styles.image}>
                    <CardMedia
                        className={styles.image}
                        component="img"
                        image={image}
                        alt="green iguana"
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