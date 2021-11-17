const { storeItem, getItem } = require('./storage');
const { cartItems } = require('./cart');

window.storeItem = storeItem;
window.getItem = getItem;
window.cartItems = cartItems;
