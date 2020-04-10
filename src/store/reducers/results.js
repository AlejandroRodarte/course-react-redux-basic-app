import * as ResultsTypes from '../types/results';

import updateObject from '../../util/functions/update-object';

const initialState = {
    results: []
};

export default function(state = initialState, action) {

    switch(action.type) {

        case ResultsTypes.STORE_RESULT:
            return updateObject(state, {
                ...state,
                results: [
                    ...state.results,
                    {
                        id: new Date().getTime(),
                        value: action.payload.result
                    }
                ]
            });

        case ResultsTypes.DELETE_RESULT:
            return updateObject(state, {
                results: state.results.filter(({ id }) => id !== action.payload.id)
            });

        default:
            return state;

    }

}