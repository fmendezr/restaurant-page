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

eval("\nconst componentHeader = () => {\n\n    // fetch container\n    const container =  document.getElementById(\"content\");\n\n    // create elements \n    const header = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    const navBar = document.createElement(\"nav\");\n    const homeBtn = document.createElement(\"button\");\n    const menuBtn = document.createElement(\"button\");\n    const contactBtn = document.createElement(\"button\");\n    \n    // add attributes \n    header.setAttribute(\"id\", \"header\");\n\n    // insert elements into DOM \n    container.appendChild(header);\n    header.appendChild(title);\n    header.appendChild(navBar);\n    navBar.appendChild(homeBtn);\n    navBar.appendChild(menuBtn);\n    navBar.appendChild(contactBtn);\n\n    // add text content \n    title.textContent = \"Hattori's\";\n    homeBtn.textContent = \"Home\";\n    menuBtn.textContent = \"Menu\";\n    contactBtn.textContent = \"Contact Us\"\n}\n\ncomponentHeader();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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