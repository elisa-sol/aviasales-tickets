import { SET_SORTING, TOGGLE_CHECKBOX } from './actions';

const initialState = {
  sorting: 'CHEAPEST',
  checkboxes: {
    all: false,
    zero: false,
    one: false,
    two: false,
    three: false,
  },
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
    default:
      return state;
  }
};

export default rootReducer;
