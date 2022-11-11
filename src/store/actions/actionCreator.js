import { CHANGE_FILTER } from '../constants';

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    activeFilter,
});