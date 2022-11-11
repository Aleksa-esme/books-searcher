import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { Input } from '../input/input';

import styles from './header.module.css';

const SORT = [
    'relevance',
    'newest'
]

export const Header = ({ inputChange, value, changeRequest, handlePressInput, categories, changeFilter, changeSort }) => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title}>Search for books</h1>
                <TextField
                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
                    id="input-with-icon-textfield"
                    variant="outlined"
                    size='small'
                    fullWidth
                    value={value}
                    onChange = {(e) => inputChange(e.target.value)}
                    onKeyPress={handlePressInput}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon 
                                    className={styles.button}
                                    onClick={() => changeRequest(value)}
                                />
                            </InputAdornment>
                        ),
                    }}
                />
                <div className={styles.filters}>
                    <Input label='Categories' menu={categories} changeFunc={changeFilter} />
                    <Input label='Sorting by' menu={SORT} changeFunc={changeSort} />
                </div>
            </div>
        </header>
    );
};