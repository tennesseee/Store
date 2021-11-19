const retriveData = (storage: Storage) => {
    let values: Object[],
        keys = Object.keys(storage),
        i = keys.length;

    while (i--) {
        values.push(storage.getItem(keys[i]));
    }

    return values;
};

export { retriveData };