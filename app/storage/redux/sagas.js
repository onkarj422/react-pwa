// eslint-disable-next-line import/no-extraneous-dependencies
import "regenerator-runtime/runtime";
import { put, take, cancel, all, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import { QUERY_LOCAL_STORE, SET_ITEM } from './constants';
import { queryLocalStoreSuccess } from './actions';
import { setItem, getStore } from '../utils';

function* doSetKey(action) {
    const { key, value, storageType } = action;
    yield setItem(key, value, storageType);
}

function* setKeyWatcher() {
    yield takeLatest(SET_ITEM, doSetKey);
}

function* doQueryLocalStore() {
    const localStore = yield getStore('LOCAL');
    let result = {};
    if (localStore) {
        result = localStore;
    }
    yield put(queryLocalStoreSuccess(result));
}

function* queryLocalStoreWatcher() {
    yield takeLatest(QUERY_LOCAL_STORE, doQueryLocalStore);
}

export default function* () {
    const watcher = yield all([
        setKeyWatcher(),
        queryLocalStoreWatcher(),
    ]);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}
