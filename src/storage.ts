import { addToCart, cartItems } from './cart';

type Item = {
    name: string,
    description: string,
    category: string,
    image: string
}

const storeItem = () => {
    let name: string = (<HTMLInputElement>document.getElementById('name')).value;
    let description: string = (<HTMLInputElement>document.getElementById('desc')).value;
    let category: string = (<HTMLInputElement>document.getElementById('Category')).value;
    let image: string = (<HTMLInputElement>document.getElementById('img')).value;

    const item: Item = {
        name: name,
        description: description,
        category: category,
        image: image,
    };

    window.localStorage.setItem(name, JSON.stringify(item));
};

const retriveData = (storage: Storage) => {
    let values: Object[] = [],
        keys = Object.keys(storage),
        i = keys.length;

    while (i--) {
        values.push(storage.getItem(keys[i]));
    }

    return values;
};

const getItem = (checkCategory: string) => {
    let data: Object[] = retriveData(localStorage);
    let cardContainer: HTMLElement = document.getElementById('container');

    data.forEach((item: any) => {
        let newItem: Item = JSON.parse(item);
        if (newItem.category === checkCategory || checkCategory === 'items') {
            let itemsCard = document.createElement('div');
            itemsCard.className = 'item_container';

            let itemsName: HTMLElement = document.createElement('div');
            let itemsImage: HTMLElement = document.createElement('div');
            let imageTag: HTMLImageElement = document.createElement('img');
            let imagePath: string = newItem.image.split('\\').pop();
            let itemsDesc: HTMLElement = document.createElement('div');
            let itemsCategory: HTMLElement = document.createElement('div');
            let divForButton: HTMLElement = document.createElement('div');
            let cartButton: HTMLElement = document.createElement('button');

            itemsName.className = 'item_name';
            itemsName.textContent = newItem.name;
            itemsCard.appendChild(itemsName);

            itemsImage.className = 'item_image';
            imageTag.className = 'item_image';

            imageTag.src = imagePath;
            itemsImage.appendChild(imageTag);
            itemsCard.appendChild(itemsImage);

            itemsDesc.className = 'item_desc';
            itemsDesc.textContent = newItem.description;
            itemsCard.appendChild(itemsDesc);

            itemsCategory.className = 'item_category';
            itemsCategory.textContent = newItem.category;
            itemsCard.appendChild(itemsCategory);

            divForButton.className = 'cart_btn_div';
            cartButton.className = 'cart_btn';
            cartButton.addEventListener('click', () => addToCart(item));
            cartButton.innerText = 'add to cart';
            divForButton.appendChild(cartButton);
            itemsCard.appendChild(divForButton);

            cardContainer.appendChild(itemsCard);
        }
    });
};

export {storeItem, getItem, retriveData };