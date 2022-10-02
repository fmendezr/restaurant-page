"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["footer"],{

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentFooter = () => {\n\n    // fetch the contianer \n    const container = document.getElementById(\"content\");\n\n    // create elements \n    const footer = document.createElement(\"div\");\n    const footerTxt = document.createElement(\"div\")\n    const footerLink = document.createElement(\"a\");\n    const icon = document.createElement(\"i\");\n\n    // insert elements into HTML \n    container.appendChild(footer);\n    footer.appendChild(footerTxt);\n    footerTxt.appendChild(footerLink);\n    footerLink.appendChild(icon);\n\n    // add text content \n    footerTxt.textContent = \"Copyright © 2022 fmendezr \"\n\n    // add attributes \n    footer.setAttribute(\"id\", \"footer\");\n    footerTxt.classList.add(\"txt\");\n    footerLink.setAttribute(\"href\", \"https://github.com/fmendezr\");\n    icon.classList.add(\"fa\", \"fa-github\");\n    icon.setAttribute(\"style\", \"font-size:21px\")\n});\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/footer.js"));
/******/ }
]);