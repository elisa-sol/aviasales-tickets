export const SET_SORTING = 'SET_SORTING';
export const TOGGLE_CHECKBOX = 'TOGGLE_FILTER';

export const setSorting = (sorting) => ({
  type: SET_SORTING,
  payload: sorting,
});

export const toggleCheckbox = (checkboxName) => ({
  type: TOGGLE_CHECKBOX,
  payload: checkboxName,
});
