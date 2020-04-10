import * as ResultsTypes from '../types/results';

export const startStoreResult = (result) => (dispatch, getState) => setTimeout(() => {
    console.log(getState().counter.counter);
    dispatch(storeResult(result));
}, 2000);

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
