import * as ResultsTypes from '../types/results';

import updateObject from '../../util/functions/update-object';

const initialState = {
    results: []
};

const deleteResult = (state, action) => updateObject(state, {
    results: state.results.filter(({ id }) => id !== action.payload.id)
});

const storeResult = (state, action) => updateObject(state, {
    ...state,
    results: [
        ...state.results,
        {
            id: new Date().getTime(),
            value: action.payload.result
        }
    ]
});

export default function(state = initialState, action) {

    switch(action.type) {

        case ResultsTypes.STORE_RESULT:
            return storeResult(state, action);

        case ResultsTypes.DELETE_RESULT:
            return deleteResult(state, action);

        default:
            return state;

    }

}