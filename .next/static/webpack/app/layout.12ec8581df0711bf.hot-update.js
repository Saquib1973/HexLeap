"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"767f8965d47d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2RkM2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3NjdmODk2NWQ0N2RcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ThemeSwitcher.tsx":
/*!**************************************!*\
  !*** ./components/ThemeSwitcher.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_SunIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=SunIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/SunIcon.js\");\n/* harmony import */ var _barrel_optimize_names_MoonIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MoonIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MoonIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ThemeSwitcher = ()=>{\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { systemTheme, theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    // useEffect only runs on the client, so now we can safely show the UI\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return null;\n    }\n    const renderThemeChanger = ()=>{\n        if (!mounted) return null;\n        const currentTheme = theme === \"system\" ? systemTheme : theme;\n        if (currentTheme === \"dark\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_SunIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"size-10 text-white hover:bg-white p-1\",\n                role: \"button\",\n                onClick: ()=>setTheme(\"light\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\saquib\\\\Desktop\\\\Assignement\\\\project3\\\\design\\\\components\\\\ThemeSwitcher.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MoonIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"size-10 text-black hover:bg-white p-1 \",\n                role: \"button\",\n                onClick: ()=>setTheme(\"dark\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\saquib\\\\Desktop\\\\Assignement\\\\project3\\\\design\\\\components\\\\ThemeSwitcher.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: renderThemeChanger()\n    }, void 0, false);\n};\n_s(ThemeSwitcher, \"CPDKJVYa7exwADt5wtjl3BIeKAE=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = ThemeSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitcher);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBQ0w7QUFDZTtBQUNEO0FBRXJELE1BQU1LLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRVEsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHUixxREFBUUE7SUFFakQsc0VBQXNFO0lBQ3RFRCxnREFBU0EsQ0FBQztRQUNSTSxXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxTQUFTO1FBQ1osT0FBTztJQUNUO0lBRUEsTUFBTUsscUJBQXFCO1FBQ3pCLElBQUksQ0FBQ0wsU0FBUyxPQUFPO1FBRXJCLE1BQU1NLGVBQWVILFVBQVUsV0FBV0QsY0FBY0M7UUFFeEQsSUFBSUcsaUJBQWlCLFFBQVE7WUFDM0IscUJBQ0UsOERBQUNULGlHQUFPQTtnQkFDTlUsV0FBVTtnQkFDVkMsTUFBSztnQkFDTEMsU0FBUyxJQUFNTCxTQUFTOzs7Ozs7UUFHOUIsT0FBTztZQUNMLHFCQUNFLDhEQUFDTixnR0FBUUE7Z0JBQ1BTLFdBQVU7Z0JBQ1ZDLE1BQUs7Z0JBQ0xDLFNBQVMsSUFBTUwsU0FBUzs7Ozs7O1FBRzlCO0lBQ0Y7SUFFQSxxQkFBTztrQkFBR0M7O0FBQ1o7R0F0Q01OOztRQUVxQ0gsaURBQVFBOzs7S0FGN0NHO0FBd0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci50c3g/YTEzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcclxuaW1wb3J0IHsgU3VuSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgTW9vbkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xyXG5cclxuY29uc3QgVGhlbWVTd2l0Y2hlciA9ICgpID0+IHtcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBzeXN0ZW1UaGVtZSwgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAvLyB1c2VFZmZlY3Qgb25seSBydW5zIG9uIHRoZSBjbGllbnQsIHNvIG5vdyB3ZSBjYW4gc2FmZWx5IHNob3cgdGhlIFVJXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1vdW50ZWQodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIW1vdW50ZWQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyVGhlbWVDaGFuZ2VyID0gKCkgPT4ge1xyXG4gICAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSB0aGVtZSA9PT0gXCJzeXN0ZW1cIiA/IHN5c3RlbVRoZW1lIDogdGhlbWU7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3VuSWNvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS0xMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIHAtMVwiXHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKFwibGlnaHRcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vb25JY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLTEwIHRleHQtYmxhY2sgaG92ZXI6Ymctd2hpdGUgcC0xIFwiXHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKFwiZGFya1wiKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8PntyZW5kZXJUaGVtZUNoYW5nZXIoKX08Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVN3aXRjaGVyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VUaGVtZSIsIlN1bkljb24iLCJNb29uSWNvbiIsIlRoZW1lU3dpdGNoZXIiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInN5c3RlbVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsInJlbmRlclRoZW1lQ2hhbmdlciIsImN1cnJlbnRUaGVtZSIsImNsYXNzTmFtZSIsInJvbGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ThemeSwitcher.tsx\n"));

/***/ })

});