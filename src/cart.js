const addToCart = (item) => {
    let parseItem = JSON.parse(item);

    let itemObj = {
        name: parseItem.name,
        description: parseItem.description,
        category: parseItem.category,
        image: parseItem.image,
    };

    window.sessionStorage.setItem(parseItem.name, JSON.stringify(itemObj));
};

const cartItems = () => {
    let cartData = retriveData(sessionStorage);
    cardContainer = document.getElementById('container');

    cartData.forEach((item) => {
        let newItem = JSON.parse(item);

        let itemsCard = document.createElement('div');
        itemsCard.className = 'item_container';

        let itemsName = document.createElement('div');
        itemsName.className = 'item_name';
        itemsName.textContent = newItem.name;
        itemsCard.appendChild(itemsName);

        let itemsImage = document.createElement('div');
        itemsImage.className = 'item_image';
        let imageTag = document.createElement('img');
        imageTag.className = 'item_image';
        let imagePath = newItem.image.split('\\').pop();
        imageTag.src = imagePath;
        itemsImage.appendChild(imageTag);
        itemsCard.appendChild(itemsImage);

        let itemsDesc = document.createElement('div');
        itemsDesc.className = 'item_desc';
        itemsDesc.textContent = newItem.description;
        itemsCard.appendChild(itemsDesc);

        let itemsCategory = document.createElement('div');
        itemsCategory.className = 'item_category';
        itemsCategory.textContent = newItem.category;
        itemsCard.appendChild(itemsCategory);

        cardContainer.appendChild(itemsCard);
    });
};

const retriveData = (storage) => {
    let values = [],
        keys = Object.keys(storage),
        i = keys.length;

    while (i--) {
        values.push(storage.getItem(keys[i]));
    }

    return values;
};

module.exports = { addToCart, cartItems };
