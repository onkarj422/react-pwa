import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import checkStore from './checkStore';
import createReducer from '../createReducers';

export const injectReducerFactory = (store, isValid) => (key, reducer) => {
    if (!isValid) checkStore(store);
    invariant(
        isString(key) && !isEmpty(key) && isFunction(reducer),
        '(app/redux/utils...) injectReducer: Expected `reducer` to be a reducer function',
    );
    if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;
    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.injectedReducers));
}

export default function getInjectors(store) {
    checkStore(store);
    return {
        injectReducer: injectReducerFactory(store, true),
    };
}
