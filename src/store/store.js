import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterReducer from './reducers/counter';
import resultsReducer from './reducers/results';

const rootReducer = combineReducers({
    counter: counterReducer,
    results: resultsReducer
});

// 3rd order function: called directly by redux, passing the entire store as argument
// 2nd order function: called with a next function argument
// 1st order function: called with the currently dispatched action, must return with a call to next
// with the action object to indicate we want to move further in the middleware chain
// of course you can mutate in the middleware the action object
const logger = store => next => action => {

    console.log('[Middleware] Dispatching', action);

    const result = next(action);
    console.log('[Middleware] Next State', store.getState());

    return result;

};

export default createStore(rootReducer, applyMiddleware(logger));
