import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as counterActions from '../../store/actions/actions';

const Counter = ({ 
    counter, 
    onIncrementCounter, 
    onDecrementCounter, 
    onAddCounter, 
    onSubtractCounter 
}) => (
    <div>
        <CounterOutput value={ counter } />
        <CounterControl label="Increment" clicked={ onIncrementCounter } />
        <CounterControl label="Decrement" clicked={ onDecrementCounter }  />
        <CounterControl label="Add 5" clicked={ onAddCounter }  />
        <CounterControl label="Subtract 5" clicked={ onSubtractCounter }  />
    </div>
);

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
    onIncrementCounter: () => dispatch(counterActions.increment()),
    onDecrementCounter: () => dispatch(counterActions.decrement()),
    onAddCounter: () => dispatch(counterActions.add()),
    onSubtractCounter: () => dispatch(counterActions.subtract())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);