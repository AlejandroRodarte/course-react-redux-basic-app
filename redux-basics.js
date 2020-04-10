const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload.value
            };

        default:
            return state;

    }

};

const store = createStore(rootReducer);

store.subscribe(() => console.log('[Subscription]', store.getState()));

console.log(store.getState());

store.dispatch({
    type: 'INC_COUNTER'
});

console.log(store.getState());

store.dispatch({
    type: 'ADD_COUNTER',
    payload: {
        value: 10
    }
});

console.log(store.getState());
