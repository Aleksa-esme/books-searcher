import { CircularProgress } from '@mui/material';
import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <CircularProgress size={100}/>
    </div>
  );
}
