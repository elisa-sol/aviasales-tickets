import { createStore } from 'redux';

import filtersReducer from './reducers';

const store = createStore(filtersReducer);

export default store;
