import { createSelector } from 'reselect';

const selectStorageDomain = () => state => state.get('storage');

const selectLocalStore = () => createSelector(
    selectStorageDomain(),
    (substate) => substate.get('localStore').toJS()
);

const selectSessionStore = () => createSelector(
    selectStorageDomain(),
    (substate) => substate.get('localStore').toJS(),
);

const selectCookieStore = () => createSelector(
    selectStorageDomain(),
    (substate) => substate.get('localStore').toJS(),
);

export {
    selectLocalStore,
    selectSessionStore,
    selectCookieStore,
};
