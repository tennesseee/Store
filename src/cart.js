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
        let itemsImage = document.createElement('div');
        let imageTag = document.createElement('img');
        let imagePath = newItem.image.split('\\').pop();
        let itemsDesc = document.createElement('div');
        let itemsCategory = document.createElement('div');

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
