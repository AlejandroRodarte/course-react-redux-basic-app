import * as ResultsTypes from '../types/results';

export const storeResult = (result) => ({
    type: ResultsTypes.STORE_RESULT,
    payload: {
        result
    }
});

export const deleteResult = (id) => ({
    type: ResultsTypes.DELETE_RESULT,
    payload: {
        id
    }
});
