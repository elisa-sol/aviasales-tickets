export const SET_SORTING = 'SET_SORTING';
export const TOGGLE_CHECKBOX = 'TOGGLE_FILTER';
export const SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS';
export const SORT_BY_PRICE = 'SORT_TICKETS_BY_PRICE';
export const SORT_BY_DURATION = 'SORT_BY_DURATION';
export const SORT_BY_OPTIMAL = 'SORT_BY_OPTIMAL';

export const setSorting = (sorting) => ({
  type: SET_SORTING,
  payload: sorting,
});

export const toggleCheckbox = (checkboxName) => ({
  type: TOGGLE_CHECKBOX,
  payload: checkboxName,
});

export const showMoreTickets = () => ({
  type: SHOW_MORE_TICKETS,
});

export const sortByPrice = () => ({
  type: SORT_BY_PRICE,
});

export const sortByDuration = () => ({
  type: SORT_BY_DURATION,
});

export const sortByOptimal = () => ({
  type: SORT_BY_OPTIMAL,
});
