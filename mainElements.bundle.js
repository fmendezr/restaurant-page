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

/***/ "./src/mainElements.js":
/*!*****************************!*\
  !*** ./src/mainElements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"componentContact\": () => (/* binding */ componentContact),\n/* harmony export */   \"componentHome\": () => (/* binding */ componentHome),\n/* harmony export */   \"componentMenu\": () => (/* binding */ componentMenu)\n/* harmony export */ });\n/* harmony import */ var _img_home_Hattori_Hanzo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/home/Hattori_Hanzo.jpeg */ \"./src/img/home/Hattori_Hanzo.jpeg\");\n/* harmony import */ var _img_menu_dumpling_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu/dumpling.svg */ \"./src/img/menu/dumpling.svg\");\n/* harmony import */ var _img_menu_gyoza_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu/gyoza.svg */ \"./src/img/menu/gyoza.svg\");\n/* harmony import */ var _img_menu_nigiri_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu/nigiri.svg */ \"./src/img/menu/nigiri.svg\");\n/* harmony import */ var _img_menu_onigiri_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu/onigiri.svg */ \"./src/img/menu/onigiri.svg\");\n/* harmony import */ var _img_menu_pufferFish_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu/pufferFish.svg */ \"./src/img/menu/pufferFish.svg\");\n/* harmony import */ var _img_menu_ramen_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu/ramen.svg */ \"./src/img/menu/ramen.svg\");\n/* harmony import */ var _img_menu_riceBowl_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/menu/riceBowl.svg */ \"./src/img/menu/riceBowl.svg\");\n/* harmony import */ var _img_menu_sushiRoll_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/menu/sushiRoll.svg */ \"./src/img/menu/sushiRoll.svg\");\n/* harmony import */ var _img_contact_house_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/contact/house.svg */ \"./src/img/contact/house.svg\");\n/* harmony import */ var _img_contact_phone_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/contact/phone.svg */ \"./src/img/contact/phone.svg\");\n/* harmony import */ var _img_contact_map_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/contact/map.jpeg */ \"./src/img/contact/map.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n const componentHome = () => {\n\n    // fetch container\n    const container =  document.getElementById(\"content\");\n\n   // create elements \n   const main = document.createElement(\"main\");\n   const txt1 = document.createElement(\"p\");\n   const txt2 = document.createElement(\"p\");\n   const img = new Image();\n   img.src = _img_home_Hattori_Hanzo_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n   const txt3 = document.createElement(\"p\");\n\n   // insert element into HTML\n   container.appendChild(main);\n   main.appendChild(txt1);\n   main.appendChild(txt2);\n   main.appendChild(img);\n   main.appendChild(txt3);\n\n   // add text content \n   txt1.textContent = \"Demon Hanzō's cuisine \";\n   txt2.textContent = \"In  Edo since 1592\";\n   txt3.textContent = '\"Wake up from death and return to life\"';\n\n   // add attributes \n   main.classList.add(\"home\")\n   img.id = \"profilePic\";\n   txt1.classList.add(\"txt\");\n   txt2.classList.add(\"txt\");\n   txt3.classList.add(\"txt\");\n}\n\nconst componentMenu = () => {\n    \n    //fetch container \n    const container = document.getElementById(\"content\");\n    \n    // set up main\n    const main = document.createElement(\"main\");\n    container.appendChild(main)\n    main.classList.add(\"menu\");\n\n    const imgs = [_img_menu_dumpling_svg__WEBPACK_IMPORTED_MODULE_1__, _img_menu_gyoza_svg__WEBPACK_IMPORTED_MODULE_2__, _img_menu_ramen_svg__WEBPACK_IMPORTED_MODULE_6__, _img_menu_riceBowl_svg__WEBPACK_IMPORTED_MODULE_7__, _img_menu_nigiri_svg__WEBPACK_IMPORTED_MODULE_3__, _img_menu_onigiri_svg__WEBPACK_IMPORTED_MODULE_4__, _img_menu_sushiRoll_svg__WEBPACK_IMPORTED_MODULE_8__, _img_menu_pufferFish_svg__WEBPACK_IMPORTED_MODULE_5__];\n    const foodNames =[\"Dumplings\", \"Gyozas\", \"Ramen\", \"Rice Bowl\", \"Nigiri\", \"Onigiri\", \"Sushi\", \"Puffer Fish\"];\n\n    for (let i = 0; i < 8; i++){\n\n        //create elements\n        let menuItem = document.createElement(\"div\");\n        let img = new Image();\n        img.src = imgs[i]\n        let foodName = document.createElement(\"h2\");\n        let description = document.createElement(\"p\");\n\n        // insert into DOM \n        main.appendChild(menuItem);\n        menuItem.appendChild(img);\n        menuItem.appendChild(foodName);\n        menuItem.appendChild(description);\n\n        // add text content\n        foodName.textContent = foodNames[i];\n\n        // add attributes \n        menuItem.classList.add(\"menuItem\");\n        img.classList.add(\"menuItemImg\");\n        foodName.classList.add(\"foodName\");\n        description.classList.add(\"foodDescription\");\n        description.id = `desc${i}`;        \n    }\n}\n\nconst componentContact = () => {\n\n    //fetch container \n    const container = document.getElementById(\"content\");\n\n    // set up main\n    const main = document.createElement(\"main\");\n    container.appendChild(main)\n    main.classList.add(\"contact\");\n\n    // create elements \n    const phoneDiv = document.createElement(\"div\");\n    const phoneNumber = document.createElement(\"p\");\n    const phoneIconImg = new Image();\n    phoneIconImg.src = _img_contact_phone_svg__WEBPACK_IMPORTED_MODULE_10__;\n    const directionDiv = document.createElement(\"div\");\n    const direction = document.createElement(\"p\");\n    const houseIconImg = new Image()\n    houseIconImg.src = _img_contact_house_svg__WEBPACK_IMPORTED_MODULE_9__;\n    const imgMap = new Image();\n    imgMap.src = _img_contact_map_jpeg__WEBPACK_IMPORTED_MODULE_11__;\n\n    // insert element into DOM \n    main.appendChild(phoneDiv);\n    phoneDiv.appendChild(phoneIconImg);\n    phoneDiv.appendChild(phoneNumber);\n    main.appendChild(directionDiv);\n    directionDiv.appendChild(houseIconImg);\n    directionDiv.appendChild(direction);\n    main.appendChild(imgMap);\n\n    // add text content \n    phoneNumber.textContent = \"+81 03-3224-9999\";\n    direction.textContent = \"Edo\"\n\n    // add attributes\n    phoneIconImg.classList.add(\"icon\");\n    houseIconImg.classList.add(\"icon\");\n    phoneDiv.id = \"phoneDiv\";\n    directionDiv.id = \"directionDiv\";\n    phoneNumber.id = \"phoneNumber\";\n    direction.id = \"direction\";\n    imgMap.id = \"map\";\n\n    console.log(\"Do you know the story of the scorpion and the frog?\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/mainElements.js?");

/***/ }),

/***/ "./src/img/contact/house.svg":
/*!***********************************!*\
  !*** ./src/img/contact/house.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"14b55f0c4e2b41a66ea4.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/contact/house.svg?");

/***/ }),

/***/ "./src/img/contact/map.jpeg":
/*!**********************************!*\
  !*** ./src/img/contact/map.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6380d8ad716d330a1ae2.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/contact/map.jpeg?");

/***/ }),

/***/ "./src/img/contact/phone.svg":
/*!***********************************!*\
  !*** ./src/img/contact/phone.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2e8eeb6ef04cfa8aa02.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/contact/phone.svg?");

/***/ }),

/***/ "./src/img/home/Hattori_Hanzo.jpeg":
/*!*****************************************!*\
  !*** ./src/img/home/Hattori_Hanzo.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1db1f31a205e6b76402.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/home/Hattori_Hanzo.jpeg?");

/***/ }),

/***/ "./src/img/menu/dumpling.svg":
/*!***********************************!*\
  !*** ./src/img/menu/dumpling.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7f82d1b17509e67a14d.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/dumpling.svg?");

/***/ }),

/***/ "./src/img/menu/gyoza.svg":
/*!********************************!*\
  !*** ./src/img/menu/gyoza.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"252240789e7e497aa2c7.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/gyoza.svg?");

/***/ }),

/***/ "./src/img/menu/nigiri.svg":
/*!*********************************!*\
  !*** ./src/img/menu/nigiri.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57b460c1e05f788c405b.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/nigiri.svg?");

/***/ }),

/***/ "./src/img/menu/onigiri.svg":
/*!**********************************!*\
  !*** ./src/img/menu/onigiri.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a723b0a13dde51dc2510.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/onigiri.svg?");

/***/ }),

/***/ "./src/img/menu/pufferFish.svg":
/*!*************************************!*\
  !*** ./src/img/menu/pufferFish.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0954889ce7b39f99ddc2.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/pufferFish.svg?");

/***/ }),

/***/ "./src/img/menu/ramen.svg":
/*!********************************!*\
  !*** ./src/img/menu/ramen.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9da24d9da2ceb8ab14f.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/ramen.svg?");

/***/ }),

/***/ "./src/img/menu/riceBowl.svg":
/*!***********************************!*\
  !*** ./src/img/menu/riceBowl.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f9cad5cf81d5ac3cb75.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/riceBowl.svg?");

/***/ }),

/***/ "./src/img/menu/sushiRoll.svg":
/*!************************************!*\
  !*** ./src/img/menu/sushiRoll.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0102364f8e82713c87da.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/menu/sushiRoll.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mainElements.js");
/******/ 	
/******/ })()
;