import { storeItem, getItemsFromStorage } from './storage';
import { cartItems } from './cart';

(window as any).storeItem = storeItem;
(window as any).getItemsFromStorage = getItemsFromStorage;
(window as any).cartItems = cartItems;