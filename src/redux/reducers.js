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
  filteredTickets: [],
  visibleTicketsCount: 5,
  isLoading: true,
  isComplete: false,
  stop: false,
};

const filterTickets = (tickets, checkboxes) => {
  if (checkboxes.all) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    const stopsCounts = ticket.segments.map((segment) => segment.stops.length);
    return (
      (checkboxes.zero && stopsCounts.includes(0)) ||
      (checkboxes.one && stopsCounts.includes(1)) ||
      (checkboxes.two && stopsCounts.includes(2)) ||
      (checkboxes.three && stopsCounts.includes(3))
    );
  });
};

// const sortedTickets = (tickets, sorting) => {
//   switch (sorting) {
//     case 'CHEAPEST':
//       return [...tickets].sort((a, b) => a.price - b.price);
//     case 'FASTEST':
//       return [...tickets].sort((a, b) => {
//         const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
//         const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
//         return durationA - durationB;
//       });
//     case 'OPTIMAL':
//       return [...tickets].sort((a, b) => {
//         const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
//         const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
//         return a.price + durationA - (b.price + durationB);
//       });
//     default:
//       return tickets;
//   }
// };

const sortedTickets = (tickets, sorting) => {
  switch (sorting) {
    case 'CHEAPEST':
      return [...tickets].sort((a, b) => a.price - b.price);
    case 'FASTEST':
      return [...tickets].sort((a, b) => {
        const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
        const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
        return durationA - durationB;
      });
    case 'OPTIMAL': {
      const minPrice = Math.min(...tickets.map((ticket) => ticket.price));
      const minDuration = Math.min(
        ...tickets.map((ticket) => ticket.segments.reduce((sum, segment) => sum + segment.duration, 0))
      );

      return [...tickets].sort((a, b) => {
        const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
        const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);

        const scoreA = a.price / minPrice + durationA / minDuration;
        const scoreB = b.price / minPrice + durationB / minDuration;

        return scoreA - scoreB;
      });
    }
    default:
      return tickets;
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
        filteredTickets: sortedTickets(state.filteredTickets, action.payload),
      };

    case SHOW_MORE_TICKETS:
      return {
        ...state,
        visibleTicketsCount: state.visibleTicketsCount + 5,
      };

    case SORT_BY_PRICE:
      return state;

    case SORT_BY_DURATION:
      return state;

    case SORT_BY_OPTIMAL:
      return state;

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

      const areAllChecked = newCheckboxes.zero && newCheckboxes.one && newCheckboxes.two && newCheckboxes.three;

      if (areAllChecked) {
        newCheckboxes.all = true;
      }

      const filteredTickets = filterTickets(state.tickets, newCheckboxes);
      return {
        ...state,
        checkboxes: newCheckboxes,
        filteredTickets: sortedTickets(filteredTickets, state.sorting),
      };

    case GET_ID:
      return {
        ...state,
        searchId: action.searchId,
        tickets: [],
        stop: false,
        isLoading: true,
        isComplete: false,
      };

    case GET_TICKETS:
      const updatedTickets = [...state.tickets, ...action.tickets];
      const filteredAfterNewTickets = filterTickets(updatedTickets, state.checkboxes);
      return {
        ...state,
        tickets: updatedTickets,
        filteredTickets: sortedTickets(filteredAfterNewTickets, state.sorting),
        isLoading: !state.stop,
      };

    case STOP_SEARCH:
      return {
        ...state,
        stop: true,
        isLoading: false,
        isComplete: true,
      };

    default:
      return state;
  }
};

export default rootReducer;
