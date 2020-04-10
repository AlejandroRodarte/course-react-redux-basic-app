import * as CounterTypes from '../types/types';

export const increment = () => ({
    type: CounterTypes.INCREMENT
});

export const decrement = () => ({
    type: CounterTypes.DECREMENT
});

export const add = () => ({
    type: CounterTypes.ADD
});

export const subtract = () => ({
    type: CounterTypes.SUBTRACT
});
