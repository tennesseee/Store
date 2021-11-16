/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// const { loggin } = require('./child');\r\n// const { storeItem } = require('./child');\r\n\r\nconst storeItem = () => {\r\n    let name = document.getElementById('name');\r\n    let description = document.getElementById('desc');\r\n    let category = document.getElementById('category');\r\n    let image = document.getElementById('img');\r\n\r\n    window.localStorage.setItem(\"items\", JSON.stringify([ name, description, category, image ]));\r\n};\r\n\r\nwindow.storeItem = storeItem;\n\n//# sourceURL=webpack://store/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;