import {
    SET_ITEM,
    QUERY_LOCAL_STORE,
    QUERY_LOCAL_STORE_SUCCESS,
} from './constants';

export const queryLocalStore = () => ({
    type: QUERY_LOCAL_STORE
});

export const queryLocalStoreSuccess = (localStore) => ({
    type: QUERY_LOCAL_STORE_SUCCESS,
    localStore,
});

export const setItem = (key, value, storageType, expiry) => ({
    type: SET_ITEM,
    key, value, storageType, expiry
});
