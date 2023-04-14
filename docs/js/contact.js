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

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ (() => {

eval("\r\n// open close\r\n\r\nconst open = document.getElementById('open');\r\nconst overlay = document.querySelector('.overlay');\r\nconst close = document.getElementById('close');\r\nconst ul = document.querySelector('.overlay-list');\r\n\r\nopen.addEventListener('click', () => {\r\n    overlay.classList.add('show');\r\n    open.classList.add('hide');\r\n});\r\n\r\nclose.addEventListener('click', () => {\r\n    overlay.classList.remove('show');\r\n    open.classList.remove('hide');\r\n});\r\n\r\nul.addEventListener('click', () => {\r\n  overlay.classList.remove('show');\r\n  open.classList.remove('hide');\r\n});\r\n\r\n// Interaction Ovserver API\r\n\r\nconst fv = document.querySelector('.fv');\r\nconst header = document.querySelector('header');\r\n\r\nfunction callback(entries) {\r\n  console.log(entries[0]);\r\n  if (entries[0].isIntersecting) {\r\n    header.classList.remove('show-bg');\r\n  } else {\r\n    header.classList.add('show-bg');\r\n  }\r\n}\r\n\r\nconst options = {\r\n  threshold: [0.1]\r\n}\r\nconst observer = new IntersectionObserver(callback, options);\r\nobserver.observe(fv);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://practice02/./src/js/contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/contact.js"]();
/******/ 	
/******/ })()
;