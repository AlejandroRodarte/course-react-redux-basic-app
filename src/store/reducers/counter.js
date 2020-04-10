import * as CounterTypes from '../types/counter';

import updateObject from '../../util/functions/update-object';

const initialState = {
    counter: 0
};

export default function(state = initialState, action) {

    switch(action.type) {

        case CounterTypes.INCREMENT:
            return updateObject(state, {
                counter: state.counter + 1
            });

        case CounterTypes.DECREMENT:
            return updateObject(state, {
                counter: state.counter - 1
            });

        case CounterTypes.ADD:
            return updateObject(state, {
                counter: state.counter + action.payload.value
            });

        case CounterTypes.SUBTRACT:
            return updateObject(state, {
                counter: state.counter - action.payload.value
            });

        default:
            return state;

    }

}