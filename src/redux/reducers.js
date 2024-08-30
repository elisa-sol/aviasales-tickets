import {
  SET_SORTING,
  TOGGLE_CHECKBOX,
  SHOW_MORE_TICKETS,
  SORT_BY_PRICE,
  SORT_BY_DURATION,
  SORT_BY_OPTIMAL,
} from './actions';
import { GET_ID, GET_TICKETS, STOP_SEARCH } from './ticketsActions';

const initialState = {
  sorting: 'CHEAPEST',
  checkboxes: {
    all: true,
    zero: true,
    one: true,
    two: true,
    three: true,
  },
  searchId: null,
  tickets: [],
  loading: false,
  visibleTicketsCount: 5,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
      };

    case SHOW_MORE_TICKETS:
      return {
        ...state,
        visibleTicketsCount: state.visibleTicketsCount + 5,
      };

    case SORT_BY_PRICE:
      const sortedPrice = [...state.tickets].sort((a, b) => a.price - b.price);
      return {
        ...state,
        tickets: sortedPrice,
      };

    case SORT_BY_DURATION:
      const sortedDuration = [...state.tickets].sort((a, b) => {
        const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
        const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
        return durationA - durationB;
      });
      return {
        ...state,
        tickets: sortedDuration,
      };

    case SORT_BY_OPTIMAL:
      const sortedOptimal = [...state.tickets].sort((a, b) => {
        const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
        const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
        return a.price + durationA - (b.price + durationB);
      });
      return {
        ...state,
        tickets: sortedOptimal,
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
      };

    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
      };

    case STOP_SEARCH:
      return {
        ...state,
        stop: true,
      };

    default:
      return state;
  }
};

export default rootReducer;
