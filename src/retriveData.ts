type Item = {
    name: string,
    description: string,
    category: string,
    image: string
};

const retriveData = (storage: Storage) => {
    let values: Item    [],
        keys = Object.keys(storage),
        i = keys.length;

    while (i--) {
        values.push(storage.getItem(keys[i]));
    }

    return values;
};

export { retriveData };