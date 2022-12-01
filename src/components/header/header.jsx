import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeSort } from '../../store/actions/actionCreator';
import { selectCategory, selectSortBy, selectSortFilters } from '../../store/selectors';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '../input/input';

import styles from './header.module.css';

export const Header = ({ inputChange, value, changeRequest, handlePressInput, categories }) => {
    const dispatch = useDispatch();

    const category = useSelector(selectCategory);
    const sortFilters = useSelector(selectSortFilters);
    const sortBy = useSelector(selectSortBy);

    
    const changeActiveFilter = useCallback((value) => {
        dispatch(changeCategory(value));
    }, [dispatch]);
    
    const changeActiveSort = useCallback((value) => {
        dispatch(changeSort(value));
    }, [dispatch]);
    
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
                    <Input label='Categories' menu={categories} changeFunc={changeActiveFilter} filter={category} />
                    <Input label='Sorting by' menu={sortFilters} changeFunc={changeActiveSort} filter={sortBy} />
                </div>
            </div>
        </header>
    );
};