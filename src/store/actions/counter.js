import * as CounterTypes from '../types/counter';

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

