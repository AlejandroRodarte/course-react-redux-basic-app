import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actions from '../../store/actions';

const Counter = ({ 
    counter,
    results,
    onIncrementCounter, 
    onDecrementCounter, 
    onAddCounter, 
    onSubtractCounter,
    onStartStoreResult,
    onDeleteResult
}) => (
    <div>

        <CounterOutput value={ counter } />
        <CounterControl label="Increment" clicked={ onIncrementCounter } />
        <CounterControl label="Decrement" clicked={ onDecrementCounter }  />
        <CounterControl label="Add 5" clicked={ onAddCounter }  />
        <CounterControl label="Subtract 5" clicked={ onSubtractCounter }  />

        <hr />

        <button onClick={ () => onStartStoreResult(counter) }>
            Store Result
        </button>

        <ul>
            {
                results.map(({ id, value }) => <li key={ id } onClick={ () => onDeleteResult(id) }>{ value }</li>)
            }
        </ul>

    </div>
);

const mapStateToProps = (state) => ({
    counter: state.counter.counter,
    results: state.results.results
});

const mapDispatchToProps = (dispatch) => ({
    onIncrementCounter: () => dispatch(actions.increment()),
    onDecrementCounter: () => dispatch(actions.decrement()),
    onAddCounter: () => dispatch(actions.add(5)),
    onSubtractCounter: () => dispatch(actions.subtract(5)),
    onStartStoreResult: (result) => dispatch(actions.startStoreResult(result)),
    onDeleteResult: (id) => dispatch(actions.deleteResult(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);