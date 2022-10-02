"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"componentHome\": () => (/* binding */ componentHome)\n/* harmony export */ });\n/* harmony import */ var _img_home_Hattori_Hanzo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/home/Hattori_Hanzo.jpeg */ \"./src/img/home/Hattori_Hanzo.jpeg\");\n\n\nconst componentHome = () => {\n\n    // fetch container\n    const container =  document.getElementById(\"content\");\n\n   // create elements \n   const main = document.createElement(\"main\");\n   const txt1 = document.createElement(\"p\");\n   const txt2 = document.createElement(\"p\");\n   const img = new Image();\n   img.src = _img_home_Hattori_Hanzo_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n   const txt3 = document.createElement(\"p\");\n\n   // insert element into HTML\n   container.appendChild(main);\n   main.appendChild(txt1);\n   main.appendChild(txt2);\n   main.appendChild(img);\n   main.appendChild(txt3);\n\n   // add text content \n   txt1.textContent = \"Demon Hanzō's cuisine \";\n   txt2.textContent = \"In  Edo since 1592\";\n   txt3.textContent = '\"Wake up from death and return to life\"';\n\n   // add attributes \n   img.setAttribute(\"id\", \"profilePic\");\n   txt1.classList.add(\"txt\");\n   txt2.classList.add(\"txt\");\n   txt3.classList.add(\"txt\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.js?");

/***/ }),

/***/ "./src/img/home/Hattori_Hanzo.jpeg":
/*!*****************************************!*\
  !*** ./src/img/home/Hattori_Hanzo.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1db1f31a205e6b76402.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/home/Hattori_Hanzo.jpeg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);