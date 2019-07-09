import { createStore, applyMiddleware, compose as _compose } from 'redux';
import Immutable from 'immutable';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './createReducers';
import { persistLocal } from '../storage/redux/middlewares';

export const history = createBrowserHistory();

const initialState = Immutable.Map();

export default (state = initialState) => {
    let compose = _compose;
    const reduxSagaMonitorOptions = {};

    // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

        // NOTE: Uncomment the code below to restore support for Redux Saga
        // Dev Tools once it supports redux-saga version 1.x.x
        // if (window.__SAGA_MONITOR_EXTENSION__)
        //   reduxSagaMonitorOptions = {
        //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
        //   };
        /* eslint-enable */
    }

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [routerMiddleware(history), sagaMiddleware, persistLocal];

    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        createReducer({}, history),
        state,
        compose(...enhancers),
    );

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./createReducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers, history));
        });
    }

    return store;
}