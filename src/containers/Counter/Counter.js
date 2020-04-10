import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as counterActions from '../../store/actions/counter';
import * as resultsActions from '../../store/actions/results';

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
    onIncrementCounter: () => dispatch(counterActions.increment()),
    onDecrementCounter: () => dispatch(counterActions.decrement()),
    onAddCounter: () => dispatch(counterActions.add(5)),
    onSubtractCounter: () => dispatch(counterActions.subtract(5)),
    onStartStoreResult: (result) => dispatch(resultsActions.startStoreResult(result)),
    onDeleteResult: (id) => dispatch(resultsActions.deleteResult(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);