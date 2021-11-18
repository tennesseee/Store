import { storeItem, getItem } from './storage';
import { cartItems } from './cart';

(window as any).storeItem = storeItem;
(window as any).getItem = getItem;
(window as any).cartItems = cartItems;