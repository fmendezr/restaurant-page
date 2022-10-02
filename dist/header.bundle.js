"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["header"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentHeader = () => {\n\n    // fetch container\n    const container =  document.getElementById(\"content\");\n\n    // create elements \n    const header = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    const navBar = document.createElement(\"nav\");\n    const homeBtn = document.createElement(\"button\");\n    const menuBtn = document.createElement(\"button\");\n    const contactBtn = document.createElement(\"button\");\n\n    // insert elements into DOM \n    container.appendChild(header);\n    header.appendChild(title);\n    header.appendChild(navBar);\n    navBar.appendChild(homeBtn);\n    navBar.appendChild(menuBtn);\n    navBar.appendChild(contactBtn);\n\n    // add text content \n    title.textContent = \"Hattori's\";\n    homeBtn.textContent = \"Home\";\n    menuBtn.textContent = \"Menu\";\n    contactBtn.textContent = \"Contact\"\n\n    // add attributes \n    header.setAttribute(\"id\", \"header\");\n    homeBtn.classList.add(\"navBtn\");\n    menuBtn.classList.add(\"navBtn\");\n    contactBtn.classList.add(\"navBtn\");\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header.js"));
/******/ }
]);