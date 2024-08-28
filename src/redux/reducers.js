import { SET_SORTING, TOGGLE_FILTER } from './actions';

const initialState = {
  sorting: 'cheap',
  filters: {
    all: false,
    zero: false,
    one: false,
    two: false,
    three: false,
  },
};

const filtersReducer = (action, state = initialState) => {
  switch (action.type) {
    case SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
      };
    case TOGGLE_FILTER:
      const filterName = action.payload;
      const newFilters = { ...state.filters };

      if (filterName === 'all') {
        const allSelected = !newFilters.all;
        Object.keys(newFilters).forEach((key) => (newFilters[key] = allSelected));
      } else {
        newFilters[filterName] = !newFilters[filterName];
        newFilters.all = Object.values(newFilters).slice(1).every(Boolean);
      }

      return {
        ...state,
        filters: newFilters,
      };
    default:
      return state;
  }
};

export default filtersReducer;
