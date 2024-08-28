export const SET_SORTING = 'SET_SORTING';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const setSorting = (sorting) => ({
  type: SET_SORTING,
  payload: sorting,
});

export const toggleFilter = (filterName) => ({
  type: TOGGLE_FILTER,
  payload: filterName,
});
