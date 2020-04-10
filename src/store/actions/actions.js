import * as CounterTypes from '../types/types';

export const increment = () => ({
    type: CounterTypes.INCREMENT
});

export const decrement = () => ({
    type: CounterTypes.DECREMENT
});

export const add = (value) => ({
    type: CounterTypes.ADD,
    payload: {
        value
    }
});

export const subtract = (value) => ({
    type: CounterTypes.SUBTRACT,
    payload: {
        value
    }
});

export const storeResult = () => ({
    type: CounterTypes.STORE_RESULT
});

export const deleteResult = (id) => ({
    type: CounterTypes.DELETE_RESULT,
    payload: {
        id
    }
});
