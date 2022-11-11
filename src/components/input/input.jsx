import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import styles from './input.module.css';

export const Input = ({ label, menu, changeFunc }) => {
  const [filter, setFilter] = useState(menu[0]);

  const handleChange = (event) => {
    setFilter(event.target.value);
    changeFunc(event.target.value);
  };
  
  return (
    <div className={styles.form}>
      <p className={styles.label}>{label}</p>
      <FormControl sx={{ m: 1, minWidth: 260, mr: 0, ml: 0, backgroundColor: 'white', borderRadius: 1 }} fullWidth>
        <Select
          inputProps={{ 'aria-label': 'Without label' }}
          value={filter}
          onChange={handleChange}
        >
          { menu.map((el, index) => <MenuItem key={index} value={el}>{el}</MenuItem>) }
        </Select>
      </FormControl>
    </div>
  );
}

