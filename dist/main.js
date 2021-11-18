/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart.ts":
/*!*********************!*\
  !*** ./src/cart.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"cartItems\": () => (/* binding */ cartItems)\n/* harmony export */ });\n/* harmony import */ var _retriveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retriveData */ \"./src/retriveData.ts\");\n\r\nvar addToCart = function (item) {\r\n    var parseItem = JSON.parse(item);\r\n    var itemObj = {\r\n        name: parseItem.name,\r\n        description: parseItem.description,\r\n        category: parseItem.category,\r\n        image: parseItem.image,\r\n    };\r\n    window.sessionStorage.setItem(parseItem.name, JSON.stringify(itemObj));\r\n};\r\nvar cartItems = function () {\r\n    var cartData = (0,_retriveData__WEBPACK_IMPORTED_MODULE_0__.retriveData)(sessionStorage);\r\n    var cardContainer = document.getElementById('container');\r\n    cartData.forEach(function (item) {\r\n        var newItem = JSON.parse(item);\r\n        var itemsCard = document.createElement('div');\r\n        itemsCard.className = 'item_container';\r\n        var itemsName = document.createElement('div');\r\n        var itemsImage = document.createElement('div');\r\n        var imageTag = document.createElement('img');\r\n        var imagePath = newItem.image.split('\\\\').pop();\r\n        var itemsDesc = document.createElement('div');\r\n        var itemsCategory = document.createElement('div');\r\n        itemsName.className = 'item_name';\r\n        itemsName.textContent = newItem.name;\r\n        itemsCard.appendChild(itemsName);\r\n        itemsImage.className = 'item_image';\r\n        imageTag.className = 'item_image';\r\n        imageTag.src = imagePath;\r\n        itemsImage.appendChild(imageTag);\r\n        itemsCard.appendChild(itemsImage);\r\n        itemsDesc.className = 'item_desc';\r\n        itemsDesc.textContent = newItem.description;\r\n        itemsCard.appendChild(itemsDesc);\r\n        itemsCategory.className = 'item_category';\r\n        itemsCategory.textContent = newItem.category;\r\n        itemsCard.appendChild(itemsCategory);\r\n        cardContainer.appendChild(itemsCard);\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://store/./src/cart.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.ts\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ \"./src/cart.ts\");\n\r\n\r\nwindow.storeItem = _storage__WEBPACK_IMPORTED_MODULE_0__.storeItem;\r\nwindow.getItemsFromStorage = _storage__WEBPACK_IMPORTED_MODULE_0__.getItemsFromStorage;\r\nwindow.cartItems = _cart__WEBPACK_IMPORTED_MODULE_1__.cartItems;\r\n\n\n//# sourceURL=webpack://store/./src/index.ts?");

/***/ }),

/***/ "./src/retriveData.ts":
/*!****************************!*\
  !*** ./src/retriveData.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"retriveData\": () => (/* binding */ retriveData)\n/* harmony export */ });\nvar retriveData = function (storage) {\r\n    var values, keys = Object.keys(storage), i = keys.length;\r\n    while (i--) {\r\n        values.push(storage.getItem(keys[i]));\r\n    }\r\n    return values;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://store/./src/retriveData.ts?");

/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storeItem\": () => (/* binding */ storeItem),\n/* harmony export */   \"getItemsFromStorage\": () => (/* binding */ getItemsFromStorage),\n/* harmony export */   \"retriveData\": () => (/* binding */ retriveData)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/cart.ts\");\n\r\nvar storeItem = function () {\r\n    var name = document.getElementById('name').value;\r\n    var description = document.getElementById('desc').value;\r\n    var category = document.getElementById('Category').value;\r\n    var image = document.getElementById('img').value;\r\n    var item = {\r\n        name: name,\r\n        description: description,\r\n        category: category,\r\n        image: image,\r\n    };\r\n    window.localStorage.setItem(name, JSON.stringify(item));\r\n};\r\nvar retriveData = function (storage) {\r\n    var values = [], keys = Object.keys(storage), i = keys.length;\r\n    while (i--) {\r\n        values.push(storage.getItem(keys[i]));\r\n    }\r\n    return values;\r\n};\r\nvar getItemsFromStorage = function (checkCategory) {\r\n    var data = retriveData(localStorage);\r\n    var cardContainer = document.getElementById('container');\r\n    data.forEach(function (item) {\r\n        var newItem = JSON.parse(item);\r\n        if (newItem.category === checkCategory || checkCategory === 'items') {\r\n            var itemsCard = document.createElement('div');\r\n            itemsCard.className = 'item_container';\r\n            var itemsName = document.createElement('div');\r\n            var itemsImage = document.createElement('div');\r\n            var imageTag = document.createElement('img');\r\n            var imagePath = newItem.image.split('\\\\').pop();\r\n            var itemsDesc = document.createElement('div');\r\n            var itemsCategory = document.createElement('div');\r\n            var divForButton = document.createElement('div');\r\n            var cartButton = document.createElement('button');\r\n            itemsName.className = 'item_name';\r\n            itemsName.textContent = newItem.name;\r\n            itemsCard.appendChild(itemsName);\r\n            itemsImage.className = 'item_image';\r\n            imageTag.className = 'item_image';\r\n            imageTag.src = imagePath;\r\n            itemsImage.appendChild(imageTag);\r\n            itemsCard.appendChild(itemsImage);\r\n            itemsDesc.className = 'item_desc';\r\n            itemsDesc.textContent = newItem.description;\r\n            itemsCard.appendChild(itemsDesc);\r\n            itemsCategory.className = 'item_category';\r\n            itemsCategory.textContent = newItem.category;\r\n            itemsCard.appendChild(itemsCategory);\r\n            divForButton.className = 'cart_btn_div';\r\n            cartButton.className = 'cart_btn';\r\n            cartButton.addEventListener('click', function () { return (0,_cart__WEBPACK_IMPORTED_MODULE_0__.addToCart)(item); });\r\n            cartButton.innerText = 'add to cart';\r\n            divForButton.appendChild(cartButton);\r\n            itemsCard.appendChild(divForButton);\r\n            cardContainer.appendChild(itemsCard);\r\n        }\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://store/./src/storage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;