import { setStore } from '../utils';

const persistLocal = store => next => action => {
    const state = store.getState();
    let localStore = state.get('localStore');
    if (!localStore) {
        localStore = {};
    }
    setStore(localStore, 'LOCAL');
    return next(action);
}

const persistSession = store => next => action => {
    const state = store.getState();
    let sessionStore = state.get('sessionStore');
    if (!sessionStore) {
        sessionStore = {};
    }
    setStore(sessionStore, 'SESSION');
    return next(action);
}

export {
    persistLocal,
    persistSession,
};
