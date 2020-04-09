const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state;

    }

};

const store = createStore(rootReducer);

console.log(store.getState());
