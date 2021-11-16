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

const getItem = () => {
    const retriveData = JSON.parse(window.localStorage.getItem(localStorage.key(0)));

    formName = document.getElementById('item_name');
    formDesc = document.getElementById('item_desc');
    formCategory = document.getElementById('item_category');
    formImage = document.getElementById('item_image');

    let itemsName = document.createElement('div');
    let itemsImage = document.createElement('div');
    let itemsDesc = document.createElement('div');
    let itemsCategory = document.createElement('div');

    itemsName.innerText = retriveData.name;  
    itemsDesc.innerText = retriveData.description; 
    itemsCategory.innerText = retriveData.category; 
    itemsImage.innerText = retriveData.image;   
      
    formName.appendChild(itemsName);   
    formDesc.appendChild(itemsDesc);
    formCategory.appendChild(itemsCategory);
    formImage.appendChild(itemsImage);
};

module.exports = { storeItem, getItem };
