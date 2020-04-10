import * as CounterTypes from '../types/types';

const initialState = {
    counter: 0
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
                counter: state.counter + 5
            };

        case CounterTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - 5
            };

        default:
            return state;

    }

}