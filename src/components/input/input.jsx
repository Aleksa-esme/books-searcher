import { FormControl, Select, MenuItem } from '@mui/material';
import styles from './input.module.css';

export const Input = ({ label, menu, changeFunc, filter }) => {
  
  const handleChange = (event) => {
    changeFunc(event.target.value);
  };
  
  return (
    <div className={styles.form}>
      <p className={styles.label}>{label}</p>
      <FormControl sx={{ m: 1, minWidth: 260, mr: 0, ml: 0, backgroundColor: 'white', borderRadius: 1 }} fullWidth>
        <Select className={styles.input}
          inputProps={{ 'aria-label': 'Without label' }}
          value={filter}
          onChange={handleChange}
        >
          { menu.map((el, index) => <MenuItem className={styles.inputBla} key={index} value={el}>{el}</MenuItem>) }
        </Select>
      </FormControl>
    </div>
  );
}

