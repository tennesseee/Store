type Item = {
    name: string,
    description: string,
    category: string,
    image: string
}

const addToCart = (item: string) => {
    let parseItem: Item = JSON.parse(item);

    let itemObj: Item = {
        name: parseItem.name,
        description: parseItem.description,
        category: parseItem.category,
        image: parseItem.image,
    };

    window.sessionStorage.setItem(parseItem.name, JSON.stringify(itemObj));
};

const cartItems = () => {
    let cartData: string[] = retriveData(sessionStorage);
    let cardContainer: HTMLElement = document.getElementById('container');

    cartData.forEach((item) => {
        let newItem: Item = JSON.parse(item);
        let itemsCard: HTMLElement = document.createElement('div');
        itemsCard.className = 'item_container';

        let itemsName: HTMLElement = document.createElement('div');
        let itemsImage: HTMLElement = document.createElement('div');
        let imageTag: HTMLImageElement = document.createElement('img');
        let imagePath: string = newItem.image.split('\\').pop();
        let itemsDesc: HTMLElement = document.createElement('div');
        let itemsCategory: HTMLElement = document.createElement('div');

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

        cardContainer.appendChild(itemsCard);
    });
};

const retriveData = (storage: Storage) => {
    let values = [],
        keys = Object.keys(storage),
        i = keys.length;

    while (i--) {
        values.push(storage.getItem(keys[i]));
    }

    return values;
};

export { addToCart, cartItems };
