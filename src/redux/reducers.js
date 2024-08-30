import { SET_SORTING, TOGGLE_CHECKBOX } from './actions';
import { GET_ID, GET_TICKETS, STOP_SEARCH, ERROR_LOADING } from './ticketsActions';

const initialState = {
  sorting: 'CHEAPEST',
  checkboxes: {
    all: false,
    zero: false,
    one: false,
    two: false,
    three: false,
  },
  searchId: null,
  tickets: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
      };

    case TOGGLE_CHECKBOX:
      const checkboxName = action.payload;
      const isAllChecked = checkboxName === 'all';
      const newCheckboxes = isAllChecked
        ? {
            all: !state.checkboxes.all,
            zero: !state.checkboxes.all,
            one: !state.checkboxes.all,
            two: !state.checkboxes.all,
            three: !state.checkboxes.all,
          }
        : {
            ...state.checkboxes,
            [checkboxName]: !state.checkboxes[checkboxName],
            all: false,
          };
      return {
        ...state,
        checkboxes: newCheckboxes,
      };

    case GET_ID:
      return {
        ...state,
        searchId: action.searchId,
        tickets: [],
        stop: false,
        error: null,
      };

    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
        error: null,
      };

    case STOP_SEARCH:
      return {
        ...state,
        stop: true,
      };

    case ERROR_LOADING:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default rootReducer;
