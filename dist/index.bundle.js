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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant-font.ttf */ \"./src/restaurant-font.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/traditional-japan2.jpeg */ \"./src/img/traditional-japan2.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'restaurant';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* { \\n    margin: 0;\\n    padding: 0;\\n    border: none;\\n    font-family: \\\"restaurant\\\";\\n    font-size: 10px;\\n}\\n\\nhtml {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-repeat: no-repeat;\\n    background-size: auto;\\n}\\n\\n/* content */\\n\\n#content {\\n    display: grid;\\n    grid-template-rows: auto minmax(calc(100vh - 192px), auto) auto;\\n}\\n\\n/* header */\\n\\n#header {\\n    display: flex;\\n    flex-direction: column;\\n    flex-shrink: 0;\\n    align-items: center;\\n    justify-content:  center;\\n    background-color: rgba(255, 255, 255, 0.500);\\n}\\n\\n#header > h1 {\\n    font-size: 7rem;\\n}\\n\\nnav {\\n    display: flex;\\n}\\n\\n.navBtn {\\n    border: none;\\n    padding: 1.25rem 2.25rem;\\n    background: none;\\n    font-size: 2rem;\\n    font-weight: bold;\\n}\\n\\n.navBtn.active{\\n    transition-timing-function: ease-in-out ;\\n    transition-duration: 100ms;\\n    border-top: 4px solid rgb(255, 0, 81);\\n    border-bottom: 4px solid black;\\n}\\n\\n/* footer */\\n\\n#footer {\\n    padding: 1.2rem;\\n    box-shadow: 0 0 0 100vmax rgba(255, 255, 255, 0.500);\\n    clip-path: inset(0 -100vmax);\\n    background-color:  rgba(255, 255, 255, 0.500);\\n}\\n\\n/* main Home Page */\\n\\nmain.home {\\n    margin: 4rem auto;\\n    width: 290px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2rem;\\n    flex-shrink: 0;\\n    align-items: center;\\n    justify-content: center;\\n    background-color: rgba(255, 255, 255, 0.500);\\n    padding: 2rem 1rem;\\n}\\n\\n.txt {\\n    font-size: 2rem;\\n    font-weight: bold;\\n    text-align: center;\\n}\\n\\n#profilePic {\\n    border-radius: 20rem;\\n    width: 290px;\\n    height: 290px;\\n}\\n\\n/* main menu page */\\n\\nmain.menu {\\n    width: 300px;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\\n    gap: 1rem;\\n    background-color: rgba(255, 255, 255, 0.500);\\n    margin: 4rem auto;\\n}\\n\\n.menuItem {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    background-color: rgba(255, 255, 255, 0.550);\\n}\\n\\n.menuItemImg {\\n    height: 120px;\\n    width: 120px;\\n}\\n\\n.foodName {\\n    font-size: 2rem;\\n}\\n\\n/* main contact page */ \\n\\nmain.contact {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-around;\\n    margin: 2rem auto;\\n    background-color: rgba(255, 255, 255, 0.650);\\n    width: 300px;\\n}\\n\\n#phoneDiv, #directionDiv{\\n    display: flex;\\n    gap: 1rem;\\n}\\n\\n.icon {\\n    height: 3rem;\\n     \\n}\\n\\n#phoneNumber, #direction {\\n    font-size: 2rem;\\n}\\n\\n#map {\\n    height: 17rem;\\n    width: 25rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ componentFooter)\n/* harmony export */ });\nfunction componentFooter() {\n\n    // fetch the contianer \n    const container = document.getElementById(\"content\");\n\n    // create elements \n    const footer = document.createElement(\"div\");\n    const footerTxt = document.createElement(\"div\")\n    const footerLink = document.createElement(\"a\");\n    const icon = document.createElement(\"i\");\n\n    // insert elements into HTML \n    container.appendChild(footer);\n    footer.appendChild(footerTxt);\n    footerTxt.appendChild(footerLink);\n    footerLink.appendChild(icon);\n\n    // add text content \n    footerTxt.textContent = \"Copyright ?? 2022 fmendezr \"\n\n    // add attributes \n    footer.setAttribute(\"id\", \"footer\");\n    footerTxt.classList.add(\"txt\");\n    footerLink.setAttribute(\"href\", \"https://github.com/fmendezr\");\n    icon.classList.add(\"fa\", \"fa-github\");\n    icon.setAttribute(\"style\", \"font-size:21px\")\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ componentHeader)\n/* harmony export */ });\nfunction componentHeader() {\n\n    // fetch container\n    const container =  document.getElementById(\"content\");\n\n    // create elements \n    const header = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    const navBar = document.createElement(\"nav\");\n    const homeBtn = document.createElement(\"button\");\n    const menuBtn = document.createElement(\"button\");\n    const contactBtn = document.createElement(\"button\");\n\n    // insert elements into DOM \n    container.appendChild(header);\n    header.appendChild(title);\n    header.appendChild(navBar);\n    navBar.appendChild(homeBtn);\n    navBar.appendChild(menuBtn);\n    navBar.appendChild(contactBtn);\n\n    // add text content \n    title.textContent = \"Hattori's\";\n    homeBtn.textContent = \"Home\";\n    menuBtn.textContent = \"Menu\";\n    contactBtn.textContent = \"Contact\"\n\n    // add attributes \n    header.setAttribute(\"id\", \"header\");\n    homeBtn.classList.add(\"navBtn\");\n    homeBtn.classList.add(\"active\")\n    menuBtn.classList.add(\"navBtn\");\n    contactBtn.classList.add(\"navBtn\");\n    homeBtn.id = \"homeBtn\";\n    menuBtn.id = \"menuBtn\"\n    contactBtn.id = \"contactBtn\";\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _mainElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainElements.js */ \"./src/mainElements.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst homeBtn = document.getElementById(\"homeBtn\");\nconst menuBtn = document.getElementById(\"menuBtn\");\nconst contactBtn = document.getElementById(\"contactBtn\");\n\nhomeBtn.addEventListener(\"click\", () => {\n\n    // clear \n    const main = document.querySelector(\"main\");\n    const footer = document.getElementById(\"footer\");\n    main.remove();\n    footer.remove();\n\n    // set style \n    homeBtn.classList.add(\"active\");\n    menuBtn.classList.remove(\"active\");\n    contactBtn.classList.remove('active')\n\n    // add new content\n    ;(0,_mainElements_js__WEBPACK_IMPORTED_MODULE_2__.componentHome)();\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\nmenuBtn.addEventListener(\"click\", () => {\n    \n    // clear\n    const main = document.querySelector(\"main\");\n    const footer = document.getElementById(\"footer\");\n    main.remove();\n    footer.remove();\n\n    // set style\n    menuBtn.classList.add(\"active\");\n    contactBtn.classList.remove('active');\n    homeBtn.classList.remove(\"active\");\n\n    // add new content\n    (0,_mainElements_js__WEBPACK_IMPORTED_MODULE_2__.componentMenu)();\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\ncontactBtn.addEventListener(\"click\", () => {\n\n    // clear \n    const main = document.querySelector(\"main\");\n    const footer = document.getElementById(\"footer\");\n    main.remove();\n    footer.remove();\n\n    // set style \n    contactBtn.classList.add('active');\n    homeBtn.classList.remove(\"active\");\n    menuBtn.classList.remove(\"active\");\n\n    // add new content \n    (0,_mainElements_js__WEBPACK_IMPORTED_MODULE_2__.componentContact)();\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\n;(0,_mainElements_js__WEBPACK_IMPORTED_MODULE_2__.componentHome)();\n(0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/mainElements.js":
/*!*****************************!*\
  !*** ./src/mainElements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"componentContact\": () => (/* binding */ componentContact),\n/* harmony export */   \"componentHome\": () => (/* binding */ componentHome),\n/* harmony export */   \"componentMenu\": () => (/* binding */ componentMenu)\n/* harmony export */ });\n/* harmony import */ var _img_home_Hattori_Hanzo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/home/Hattori_Hanzo.jpeg */ \"./src/img/home/Hattori_Hanzo.jpeg\");\n/* harmony import */ var _img_menu_dumpling_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu/dumpling.svg */ \"./src/img/menu/dumpling.svg\");\n/* harmony import */ var _img_menu_gyoza_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu/gyoza.svg */ \"./src/img/menu/gyoza.svg\");\n/* harmony import */ var _img_menu_nigiri_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu/nigiri.svg */ \"./src/img/menu/nigiri.svg\");\n/* harmony import */ var _img_menu_onigiri_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu/onigiri.svg */ \"./src/img/menu/onigiri.svg\");\n/* harmony import */ var _img_menu_pufferFish_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu/pufferFish.svg */ \"./src/img/menu/pufferFish.svg\");\n/* harmony import */ var _img_menu_ramen_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu/ramen.svg */ \"./src/img/menu/ramen.svg\");\n/* harmony import */ var _img_menu_riceBowl_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/menu/riceBowl.svg */ \"./src/img/menu/riceBowl.svg\");\n/* harmony import */ var _img_menu_sushiRoll_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/menu/sushiRoll.svg */ \"./src/img/menu/sushiRoll.svg\");\n/* harmony import */ var _img_contact_house_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/contact/house.svg */ \"./src/img/contact/house.svg\");\n/* harmony import */ var _img_contact_phone_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/contact/phone.svg */ \"./src/img/contact/phone.svg\");\n/* harmony import */ var _img_contact_map_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/contact/map.jpeg */ \"./src/img/contact/map.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n const componentHome = () => {\n\n    // fetch container\n    const container =  document.getElementById(\"content\");\n\n   // create elements \n   const main = document.createElement(\"main\");\n   const txt1 = document.createElement(\"p\");\n   const txt2 = document.createElement(\"p\");\n   const img = new Image();\n   img.src = _img_home_Hattori_Hanzo_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n   const txt3 = document.createElement(\"p\");\n\n   // insert element into HTML\n   container.appendChild(main);\n   main.appendChild(txt1);\n   main.appendChild(txt2);\n   main.appendChild(img);\n   main.appendChild(txt3);\n\n   // add text content \n   txt1.textContent = \"Demon Hanz??'s cuisine \";\n   txt2.textContent = \"In  Edo since 1592\";\n   txt3.textContent = '\"Wake up from death and return to life\"';\n\n   // add attributes \n   main.classList.add(\"home\")\n   img.id = \"profilePic\";\n   txt1.classList.add(\"txt\");\n   txt2.classList.add(\"txt\");\n   txt3.classList.add(\"txt\");\n}\n\nconst componentMenu = () => {\n    \n    //fetch container \n    const container = document.getElementById(\"content\");\n    \n    // set up main\n    const main = document.createElement(\"main\");\n    container.appendChild(main)\n    main.classList.add(\"menu\");\n\n    const imgs = [_img_menu_dumpling_svg__WEBPACK_IMPORTED_MODULE_1__, _img_menu_gyoza_svg__WEBPACK_IMPORTED_MODULE_2__, _img_menu_ramen_svg__WEBPACK_IMPORTED_MODULE_6__, _img_menu_riceBowl_svg__WEBPACK_IMPORTED_MODULE_7__, _img_menu_nigiri_svg__WEBPACK_IMPORTED_MODULE_3__, _img_menu_onigiri_svg__WEBPACK_IMPORTED_MODULE_4__, _img_menu_sushiRoll_svg__WEBPACK_IMPORTED_MODULE_8__, _img_menu_pufferFish_svg__WEBPACK_IMPORTED_MODULE_5__];\n    const foodNames =[\"Dumplings\", \"Gyozas\", \"Ramen\", \"Rice Bowl\", \"Nigiri\", \"Onigiri\", \"Sushi\", \"Puffer Fish\"];\n\n    for (let i = 0; i < 8; i++){\n\n        //create elements\n        let menuItem = document.createElement(\"div\");\n        let img = new Image();\n        img.src = imgs[i]\n        let foodName = document.createElement(\"h2\");\n        let description = document.createElement(\"p\");\n\n        // insert into DOM \n        main.appendChild(menuItem);\n        menuItem.appendChild(img);\n        menuItem.appendChild(foodName);\n        menuItem.appendChild(description);\n\n        // add text content\n        foodName.textContent = foodNames[i];\n\n        // add attributes \n        menuItem.classList.add(\"menuItem\");\n        img.classList.add(\"menuItemImg\");\n        foodName.classList.add(\"foodName\");\n        description.classList.add(\"foodDescription\");\n        description.id = `desc${i}`;        \n    }\n}\n\nconst componentContact = () => {\n\n    //fetch container \n    const container = document.getElementById(\"content\");\n\n    // set up main\n    const main = document.createElement(\"main\");\n    container.appendChild(main)\n    main.classList.add(\"contact\");\n\n    // create elements \n    const phoneDiv = document.createElement(\"div\");\n    const phoneNumber = document.createElement(\"p\");\n    const phoneIconImg = new Image();\n    phoneIconImg.src = _img_contact_phone_svg__WEBPACK_IMPORTED_MODULE_10__;\n    const directionDiv = document.createElement(\"div\");\n    const direction = document.createElement(\"p\");\n    const houseIconImg = new Image()\n    houseIconImg.src = _img_contact_house_svg__WEBPACK_IMPORTED_MODULE_9__;\n    const imgMap = new Image();\n    imgMap.src = _img_contact_map_jpeg__WEBPACK_IMPORTED_MODULE_11__;\n\n    // insert element into DOM \n    main.appendChild(phoneDiv);\n    phoneDiv.appendChild(phoneIconImg);\n    phoneDiv.appendChild(phoneNumber);\n    main.appendChild(directionDiv);\n    directionDiv.appendChild(houseIconImg);\n    directionDiv.appendChild(direction);\n    main.appendChild(imgMap);\n\n    // add text content \n    phoneNumber.textContent = \"+81 03-3224-9999\";\n    direction.textContent = \"Edo\"\n\n    // add attributes\n    phoneIconImg.classList.add(\"icon\");\n    houseIconImg.classList.add(\"icon\");\n    phoneDiv.id = \"phoneDiv\";\n    directionDiv.id = \"directionDiv\";\n    phoneNumber.id = \"phoneNumber\";\n    direction.id = \"direction\";\n    imgMap.id = \"map\";\n\n    console.log(\"Do you know the story of the scorpion and the frog?\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/mainElements.js?");

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

/***/ }),

/***/ "./src/img/traditional-japan2.jpeg":
/*!*****************************************!*\
  !*** ./src/img/traditional-japan2.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5a77b32018039832590.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/traditional-japan2.jpeg?");

/***/ }),

/***/ "./src/restaurant-font.ttf":
/*!*********************************!*\
  !*** ./src/restaurant-font.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3170b8e5d362ca787108.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant-font.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;