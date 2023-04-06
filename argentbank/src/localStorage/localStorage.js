// function to get the data from local storage

export const getLocalStorage = ( key, defaultValue ) => {
    const stored = localStorage.getItem( key );

    if(!stored) {
        return defaultValue;
    }
    return JSON.parse(stored);
};

export default getLocalStorage;