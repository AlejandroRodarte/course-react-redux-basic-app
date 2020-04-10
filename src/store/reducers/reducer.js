import * as CounterTypes from '../types/types';

const initialState = {
    counter: 0,
    results: []
};

export default function(state = initialState, action) {

    switch(action.type) {

        case CounterTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };

        case CounterTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };

        case CounterTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value
            };

        case CounterTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            };

        case CounterTypes.STORE_RESULT:
            return {
                ...state,
                results: [
                    ...state.results,
                    {
                        id: new Date().getTime(),
                        value: state.counter
                    }
                ]
            };

        case CounterTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(({ id }) => id !== action.payload.id)
            };

        default:
            return state;

    }

}