const { addToCart, cartItems } = require('./cart');

const storeItem = () => {
    let name = document.getElementById('name').value;
    let description = document.getElementById('desc').value;
    let category = document.getElementById('Category').value;
    let image = document.getElementById('img').value;

    const item = {
        name: name,
        description: description,
        category: category,
        image: image,
    };

    window.localStorage.setItem(name, JSON.stringify(item));
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

const getItem = (checkCategory) => {
    let data = retriveData(localStorage);
    let cardContainer = document.getElementById('container');

    data.forEach((item) => {
        let newItem = JSON.parse(item);
        if (newItem.category === checkCategory || checkCategory === 'items') {
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

            let divForButton = document.createElement('div');
            divForButton.className = 'cart_btn_div';
            let cartButton = document.createElement('button');
            cartButton.className = 'cart_btn';

            cartButton.addEventListener('click', () => addToCart(item));
            cartButton.innerText = 'add to cart';

            divForButton.appendChild(cartButton);
            itemsCard.appendChild(divForButton);

            cardContainer.appendChild(itemsCard);
        }
    });
};

module.exports = { storeItem, getItem, retriveData };
