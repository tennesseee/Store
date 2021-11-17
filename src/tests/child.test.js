/**
 * @jest-environment jsdom
 */

const { storeItem } = require('../child');

describe('storeItem test', () => {
    test('should store items to storage', () => {
        const name = 'some name';
        const description = 'desc';
        const category = 'cat';
        const image = 'img';

        const item = {
            name,
            description,
            category,
            image,
        };

        jest.spyOn(document, 'getElementById').mockImplementation(
            (itemName) => {
                if (itemName === 'name') {
                    return { value: name };
                }
                if (itemName === 'desc') {
                    return { value: description };
                }
                if (itemName === 'Category') {
                    return { value: category };
                }
                if (itemName === 'img') {
                    return { value: image };
                }
            }
        );

        const localStorageSetItem = jest.spyOn(
            window.localStorage.__proto__,
            'setItem'
        );

        storeItem();

        expect(localStorageSetItem).toHaveBeenCalledWith(
            name,
            JSON.stringify(item)
        );
    });
});
