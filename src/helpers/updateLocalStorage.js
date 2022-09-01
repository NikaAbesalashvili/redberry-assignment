const LOCAL_STORAGE_PREFIX = 'redberry-assignment';

export const updateLocalStorage = (key, value) => {
    const newLocalStorageData = {
        ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX)),
        [key]: value,
    };
    localStorage.setItem(LOCAL_STORAGE_PREFIX, JSON.stringify(newLocalStorageData));
};
