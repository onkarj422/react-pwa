export const webStorage = {
    LOCAL: window.localStorage,
    SESSION: window.sessionStorage,
};

export const isValidStorageType = storageType => Object.keys(webStorage).includes(storageType);

export const getStorage = (storageType) => {
    if (!storageType || !isValidStorageType(storageType)) {
        return webStorage.LOCAL;
    }
    return webStorage[storageType];
}

export const formatValue = (value) => {
    const formatted = JSON.stringify(value);
    if (typeof value === 'undefined') {
        return '';
    }
    return formatted;
}

export const setItem = (key, value, storageType) => {
    const storage = getStorage(storageType);
    const formattedValue = formatValue(value);
    storage.setItem(key, formattedValue);
}

export const getItem = (key, storageType) => {
    const storage = getStorage(storageType);
    return storage.getItem(key);
}

export const setStore = (store, storageType) => {
    const storage = getStorage(storageType);
    const keys = Object.keys(store);
    if (keys && keys.length) {
        keys.forEach(key => {
            const formattedValue = formatValue(store[key]);
            storage.setItem(key, formattedValue);
        });
    }
}

export const getStore = (storageType) => {
    const store = {};
    const storage = getStorage(storageType);
    Object.keys(storage).forEach(key => {
        store[key] = storage[key];
    });
    return store;
}

export const clearStore = (storageType) => {
    const storage = getStorage(storageType);
    storage.clear();
}
