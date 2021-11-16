const storeItem = () => {
    let name = document.getElementById('name').value;
    let description = document.getElementById('desc').value;
    let category = document.getElementById('Category').value;
    let image = document.getElementById('img').value

    console.log(image);

    window.localStorage.setItem(
        'items',
        JSON.stringify([ name, description, category, image])
    );
};

module.exports = { storeItem };