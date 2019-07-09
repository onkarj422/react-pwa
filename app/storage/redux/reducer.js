import { fromJS } from 'immutable';
import {
    QUERY_LOCAL_STORE,
    QUERY_LOCAL_STORE_SUCCESS,
} from './constants';
import getInitialStoreState from './state';

const initialState = fromJS(getInitialStoreState());

function storageReducer(state = initialState, action) {
    switch (action.type) {
    case QUERY_LOCAL_STORE:
        return state.set('loadingLocalStore', true);
    case QUERY_LOCAL_STORE_SUCCESS:
        return state.set('loadingLocalStore', false).set('localStore', fromJS(action.localStore));
    default:
        return state;
    }
}

export default storageReducer;
