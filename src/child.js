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
    alert('Item is saved to storage');
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

const getItem = () => {
    let data = retriveData(localStorage);
    let cardContainer = document.getElementById('container');

    data.forEach((item) => {
        let newItem = JSON.parse(item);

        let itemsCard = document.createElement('div');
        itemsCard.className = 'item_container';

        let itemsName = document.createElement('div');
        itemsName.className = 'item_name';
        itemsName.textContent = newItem.name;
        itemsCard.appendChild(itemsName);

        let itemsImage = document.createElement('div');
        itemsImage.className = 'item_image';
        itemsImage.textContent = newItem.image;
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
    });
};

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
        itemsImage.textContent = newItem.image;
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

// const setListener = document.getElementsByClassName('btn')[0];
// setListener.addEventListener('click', storeItem, false);

const getListener = document.getElementsByClassName('btn_get');
for (var i in getListener) {
    getListener[i].onclick = function () {
        getItem();
    };
}

module.exports = { storeItem, getItem, cartItems };
