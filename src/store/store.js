import { createStore, combineReducers } from 'redux';

import counterReducer from './reducers/counter';
import resultsReducer from './reducers/results';

const rootReducer = combineReducers({
    counter: counterReducer,
    results: resultsReducer
});

export default createStore(rootReducer);
