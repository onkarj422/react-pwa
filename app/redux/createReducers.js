import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable'
import storageReducer from '../storage/redux/reducer';

export default (injectedReducers = {}, history) => (combineReducers({
    ...injectedReducers,
    router: connectRouter(history),
    storage: storageReducer,
}));
