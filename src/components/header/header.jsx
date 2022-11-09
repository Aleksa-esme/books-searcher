import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { Input } from '../input/input';

import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title}>Search for books</h1>
                <TextField
                    id="input-with-icon-textfield"
                    variant="outlined"
                    size='small'
                    fullWidth
                    // label="TextField"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <div className={styles.filters}>
                    <Input label='Categories' />
                    <Input label='Sorting by' />
                </div>
            </div>
        </header>
    );
};