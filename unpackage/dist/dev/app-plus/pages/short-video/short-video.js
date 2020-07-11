"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/Koob/Documents/HBuilderProjects/qunshang/main.js?{"page":"pages%2Fshort-video%2Fshort-video"} ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/short-video/short-video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            const promise = this.constructor\n            return this.then(\n              value => promise.resolve(callback()).then(() => value),\n              reason => promise.resolve(callback()).then(() => {\n                throw reason\n              })\n            )\n          }\n        }\n        _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/short-video/short-video'\n        _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUZBQUc7QUFDWCxRQUFRLHVGQUFHO0FBQ1gsUUFBUSx1RkFBRztBQUNYLGdCQUFnQix1RkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9zaG9ydC12aWRlby9zaG9ydC12aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgICAgICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxuICAgICAgICAgICAgICByZWFzb24gPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9zaG9ydC12aWRlby9zaG9ydC12aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************************************************!*\
  !*** C:/Users/Koob/Documents/HBuilderProjects/qunshang/main.js?{"type":"appStyle"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************************************************************************************!*\
  !*** C:/Users/Koob/Documents/HBuilderProjects/qunshang/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Koob/Documents/HBuilderProjects/qunshang/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!********************************************************************************************************!*\
  !*** C:/Users/Koob/Documents/HBuilderProjects/qunshang/pages/short-video/short-video.nvue?mpType=page ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./short-video.nvue?vue&type=template&id=2805cc92&mpType=page */ 5);\n/* harmony import */ var _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./short-video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./short-video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./short-video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"44d2d46f\",\n  false,\n  _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/short-video/short-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDMkU7QUFDTDtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdFQUFnRTtBQUNwSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0VBQWdFO0FBQ3pIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4MDVjYzkyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Nob3J0LXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3Nob3J0LXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0NGQyZDQ2ZlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zaG9ydC12aWRlby9zaG9ydC12aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Koob/Documents/HBuilderProjects/qunshang/pages/short-video/short-video.nvue?vue&type=template&id=2805cc92&mpType=page ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./short-video.nvue?vue&type=template&id=2805cc92&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Koob/Documents/HBuilderProjects/qunshang/pages/short-video/short-video.nvue?vue&type=template&id=2805cc92&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["container"] },
        [
          _c("view", {
            staticClass: ["statusBar"],
            style: { height: this.$store.state.iStatusBarHeight + "px" }
          }),
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              style: { height: _vm.videoHeight + "px" },
              attrs: { vertical: "true" },
              on: { change: _vm.changeSwiperItem }
            },
            _vm._l(_vm.videoList, function(videoItem, index) {
              return _c(
                "swiper-item",
                { key: index, staticClass: ["swiper-item"] },
                [
                  index == _vm.currentSwiperIndex
                    ? _c(
                        "u-video",
                        {
                          staticClass: ["video"],
                          style: { height: _vm.videoHeight + "px" },
                          attrs: {
                            src: videoItem.src,
                            poster: videoItem.posterSrc,
                            id: "video" + index,
                            autoplay: true,
                            loop: true,
                            controls: "false"
                          },
                          on: { click: _vm.tapVideo }
                        },
                        [
                          _c(
                            "u-scalable",
                            {
                              staticStyle: {
                                position: "absolute",
                                left: "0",
                                right: "0",
                                top: "0",
                                bottom: "0"
                              }
                            },
                            [
                              _c(
                                "cover-view",
                                { staticClass: ["cover-view-container"] },
                                [
                                  _c(
                                    "cover-view",
                                    { staticClass: ["cover-view-item"] },
                                    [
                                      _c("cover-image", {
                                        staticClass: ["cover-image"],
                                        attrs: {
                                          src:
                                            "../../static/img/short-video/heart.png"
                                        }
                                      }),
                                      _c(
                                        "cover-view",
                                        { staticClass: ["cover-view"] },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["cover-view-text"]
                                            },
                                            [_vm._v("赞")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _c(
                                    "cover-view",
                                    { staticClass: ["cover-view-item"] },
                                    [
                                      _c("cover-image", {
                                        staticClass: ["cover-image"],
                                        attrs: {
                                          src:
                                            "../../static/img/short-video/ver-code.png"
                                        }
                                      }),
                                      _c(
                                        "cover-view",
                                        { staticClass: ["cover-view"] },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["cover-view-text"]
                                            },
                                            [_vm._v("评论")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _c(
                                    "cover-view",
                                    { staticClass: ["cover-view-item"] },
                                    [
                                      _c("cover-image", {
                                        staticClass: ["cover-image"],
                                        attrs: {
                                          src:
                                            "../../static/img/short-video/share.png"
                                        }
                                      }),
                                      _c(
                                        "cover-view",
                                        { staticClass: ["cover-view"] },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["cover-view-text"]
                                            },
                                            [_vm._v("转发")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Koob/Documents/HBuilderProjects/qunshang/pages/short-video/short-video.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./short-video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFiLENBQWdCLGllQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Koob/Documents/HBuilderProjects/qunshang/pages/short-video/short-video.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n\n{\n  data: {\n    videoList: [\n    {\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fc80000brcq4qpevctv7pnq6thg&ratio=720p&line=0\",\n      posterSrc: \"https://p9-dy.byteimg.com/img/tos-cn-p-0015/1805c9ca6dd8497eb37159c3c9faf5f6~c5_300x400.jpeg?from=2563711402_large\" },\n\n\n    {\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fe70000bquvmisthbi0h53ah6d0&ratio=720p&line=0\",\n      posterSrc: \"https://p6-dy-ipv6.byteimg.com/img/tos-cn-p-0015/3a4b743cf25a404da6cb2a159b0b8a9d~c5_300x400.jpeg?from=2563711402_large\" },\n\n    {\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f5c0000bru6m13pqv6apkc3cke0&ratio=720p&line=0\",\n      posterSrc: \"https://p3-dy.byteimg.com/img/tos-cn-p-0015/1939bd44c2a246538be941193d8f360b~c5_300x400.jpeg?from=2563711402_large\" },\n\n    {\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f4f0000brrbntdahtm68pamna30&ratio=720p&line=0\",\n      posterSrc: \"https://p3-dy.byteimg.com/img/tos-cn-p-0015/2a162ac9461e4f068ca85b444afaf214_1593228282~c5_300x400.jpeg?from=2563711402_large\" },\n\n    {\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f7f0000brq6mkkmavf54vk2get0&ratio=720p&line=0\",\n      posterSrc: \"https://p29-dy.byteimg.com/img/tos-cn-p-0015/bc140896d4cc4c44bb05a5409edcf874~c5_300x400.jpeg?from=2563711402_large\" },\n\n    {\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f3c0000bruns0l9688i25vnv0hg&ratio=720p&line=0\",\n      posterSrc: \"https://p3-dy.byteimg.com/img/tos-cn-p-0015/ce6ac3088eb84b509cb532bdfdcb892f~c5_300x400.jpeg?from=2563711402_large\" },\n\n    {\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f090000brtuno32ap943039khmg&ratio=720p&line=0\",\n      posterSrc: \"https://p9-dy.byteimg.com/img/tos-cn-p-0015/612c71d71a6b4d838aba339b0ce2602f_1593568307~c5_300x400.jpeg?from=2563711402_large\" }],\n\n\n    currentSwiperIndex: 0, //当前Item下标\n    currentSwiperState: true //当前Item的播放状态：true为播放，false为暂停\n  },\n  computed: {\n    currentVideoId: function currentVideoId(currentSwiperIndex) {\n      return currentSwiperIndex.toString();\n    },\n    //计算视频窗口高度\n    videoHeight: function videoHeight() {\n      return this.$store.state.windowsHeight - this.$store.state.iStatusBarHeight;\n    } },\n\n  //更新窗口高度和状态栏高度\n  onReady: function onReady() {\n    this.$store.commit('getWindowsHeight');\n    this.$store.commit('getStatusBarHeight');\n  },\n  onLoad: function onLoad() {\n    this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;\n  },\n  onShow: function onShow() {\n    this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n    this.Video.play();\n  },\n  onHide: function onHide() {\n    this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n    this.Video.pause();\n  },\n  methods: {\n    //切换Item时，stop上一个， play这一个\n    changeSwiperItem: function changeSwiperItem(event) {\n      __f__(\"log\", this.currentSwiperIndex, \" at pages/short-video/short-video.nvue:101\");\n      this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n      this.Video.stop();\n      this.currentSwiperIndex = event.detail.current;\n      __f__(\"log\", this.currentSwiperIndex, \" at pages/short-video/short-video.nvue:105\");\n\n      //用autoplay取代了以下\n      // this.Video = uni.createVideoContext('video'+this.currentSwiperIndex,this)\n      // this.Video.play()\n\n    },\n    //点击Item时，判断当前状态，决定暂停还是播放\n    tapVideo: function tapVideo(event) {\n      __f__(\"log\", \"tap occur！\", \" at pages/short-video/short-video.nvue:114\");\n      this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n      if (this.currentSwiperState == true) {\n        this.Video.pause();\n        this.currentSwiperState = false;\n      } else {\n        this.Video.play();\n        this.currentSwiperState = true;\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2hvcnQtdmlkZW8vc2hvcnQtdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrSEFEQTtBQUVBLHFJQUZBLEVBREE7OztBQU1BO0FBQ0Esa0hBREE7QUFFQSwwSUFGQSxFQU5BOztBQVVBO0FBQ0Esa0hBREE7QUFFQSxxSUFGQSxFQVZBOztBQWNBO0FBQ0Esa0hBREE7QUFFQSxnSkFGQSxFQWRBOztBQWtCQTtBQUNBLGtIQURBO0FBRUEsc0lBRkEsRUFsQkE7O0FBc0JBO0FBQ0Esa0hBREE7QUFFQSxxSUFGQSxFQXRCQTs7QUEwQkE7QUFDQSxrSEFEQTtBQUVBLGdKQUZBLEVBMUJBLENBREE7OztBQWdDQSx5QkFoQ0EsRUFnQ0E7QUFDQSw0QkFqQ0EsQ0FpQ0E7QUFqQ0EsR0FEQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0FQQSxFQXBDQTs7QUE2Q0E7QUFDQSxTQTlDQSxxQkE4Q0E7QUFDQTtBQUNBO0FBQ0EsR0FqREE7QUFrREE7QUFDQTtBQUNBLEdBcERBO0FBcURBO0FBQ0E7QUFDQTtBQUNBLEdBeERBO0FBeURBO0FBQ0E7QUFDQTtBQUNBLEdBNURBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBYkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBekJBLEVBN0RBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0IDx2aWV3IDpzdHlsZT1cInsgaGVpZ2h0OiB0aGlzLiRzdG9yZS5zdGF0ZS5pU3RhdHVzQmFySGVpZ2h0ICsgJ3B4J31cIiBjbGFzcz1cInN0YXR1c0JhclwiPjwvdmlldz5cclxuXHRcdDxzd2lwZXIgdmVydGljYWw9XCJ0cnVlXCIgIEBjaGFuZ2U9XCJjaGFuZ2VTd2lwZXJJdGVtXCIgOnN0eWxlPVwie2hlaWdodDp2aWRlb0hlaWdodCsncHgnfVwiIGNsYXNzPVwic3dpcGVyXCIgPlxyXG5cdFx0XHQ8c3dpcGVyLWl0ZW0gdi1mb3I9XCIodmlkZW9JdGVtLGluZGV4KSBpbiB2aWRlb0xpc3RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInN3aXBlci1pdGVtXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDx2aWRlbyBAdGFwPVwidGFwVmlkZW9cIiA6c3JjPVwidmlkZW9JdGVtLnNyY1wiIDpwb3N0ZXI9XCJ2aWRlb0l0ZW0ucG9zdGVyU3JjXCIgOnN0eWxlPVwie2hlaWdodDp2aWRlb0hlaWdodCsncHgnfVwiIDppZD1cIid2aWRlbycraW5kZXhcIiB2LWlmPVwiaW5kZXg9PWN1cnJlbnRTd2lwZXJJbmRleFwiIDphdXRvcGxheT1cInRydWVcIiA6bG9vcD1cInRydWVcIiBjb250cm9scz1cImZhbHNlXCIgY2xhc3M9XCJ2aWRlb1wiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImNvdmVyLWltYWdlXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltZy9zaG9ydC12aWRlby9oZWFydC5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlld1wiPjx0ZXh0IGNsYXNzPVwiY292ZXItdmlldy10ZXh0XCI+6LWePC90ZXh0PjwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImNvdmVyLWltYWdlXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltZy9zaG9ydC12aWRlby92ZXItY29kZS5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlld1wiPjx0ZXh0IGNsYXNzPVwiY292ZXItdmlldy10ZXh0XCI+6K+E6K66PC90ZXh0PjwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJjb3Zlci1pbWFnZVwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWcvc2hvcnQtdmlkZW8vc2hhcmUucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXdcIj48dGV4dCBjbGFzcz1cImNvdmVyLXZpZXctdGV4dFwiPui9rOWPkTwvdGV4dD48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdDwvc3dpcGVyPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YTp7XHJcblx0XHRcdHZpZGVvTGlzdDpbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6XCJodHRwczovL2F3ZW1lLnNuc3Nkay5jb20vYXdlbWUvdjEvcGxheXdtLz92aWRlb19pZD12MDIwMGZjODAwMDBicmNxNHFwZXZjdHY3cG5xNnRoZyZyYXRpbz03MjBwJmxpbmU9MFwiLFxyXG5cdFx0XHRcdHBvc3RlclNyYzpcImh0dHBzOi8vcDktZHkuYnl0ZWltZy5jb20vaW1nL3Rvcy1jbi1wLTAwMTUvMTgwNWM5Y2E2ZGQ4NDk3ZWIzNzE1OWMzYzlmYWY1ZjZ+YzVfMzAweDQwMC5qcGVnP2Zyb209MjU2MzcxMTQwMl9sYXJnZVwiXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6XCJodHRwczovL2F3ZW1lLnNuc3Nkay5jb20vYXdlbWUvdjEvcGxheXdtLz92aWRlb19pZD12MDIwMGZlNzAwMDBicXV2bWlzdGhiaTBoNTNhaDZkMCZyYXRpbz03MjBwJmxpbmU9MFwiLFxyXG5cdFx0XHRcdHBvc3RlclNyYzpcImh0dHBzOi8vcDYtZHktaXB2Ni5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS8zYTRiNzQzY2YyNWE0MDRkYTZjYjJhMTU5YjBiOGE5ZH5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzpcImh0dHBzOi8vYXdlbWUuc25zc2RrLmNvbS9hd2VtZS92MS9wbGF5d20vP3ZpZGVvX2lkPXYwMjAwZjVjMDAwMGJydTZtMTNwcXY2YXBrYzNja2UwJnJhdGlvPTcyMHAmbGluZT0wXCIsXHJcblx0XHRcdFx0cG9zdGVyU3JjOlwiaHR0cHM6Ly9wMy1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS8xOTM5YmQ0NGMyYTI0NjUzOGJlOTQxMTkzZDhmMzYwYn5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzpcImh0dHBzOi8vYXdlbWUuc25zc2RrLmNvbS9hd2VtZS92MS9wbGF5d20vP3ZpZGVvX2lkPXYwMjAwZjRmMDAwMGJycmJudGRhaHRtNjhwYW1uYTMwJnJhdGlvPTcyMHAmbGluZT0wXCIsXHJcblx0XHRcdFx0cG9zdGVyU3JjOlwiaHR0cHM6Ly9wMy1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS8yYTE2MmFjOTQ2MWU0ZjA2OGNhODViNDQ0YWZhZjIxNF8xNTkzMjI4MjgyfmM1XzMwMHg0MDAuanBlZz9mcm9tPTI1NjM3MTE0MDJfbGFyZ2VcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOlwiaHR0cHM6Ly9hd2VtZS5zbnNzZGsuY29tL2F3ZW1lL3YxL3BsYXl3bS8/dmlkZW9faWQ9djAyMDBmN2YwMDAwYnJxNm1ra21hdmY1NHZrMmdldDAmcmF0aW89NzIwcCZsaW5lPTBcIixcclxuXHRcdFx0XHRwb3N0ZXJTcmM6XCJodHRwczovL3AyOS1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS9iYzE0MDg5NmQ0Y2M0YzQ0YmIwNWE1NDA5ZWRjZjg3NH5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzpcImh0dHBzOi8vYXdlbWUuc25zc2RrLmNvbS9hd2VtZS92MS9wbGF5d20vP3ZpZGVvX2lkPXYwMjAwZjNjMDAwMGJydW5zMGw5Njg4aTI1dm52MGhnJnJhdGlvPTcyMHAmbGluZT0wXCIsXHJcblx0XHRcdFx0cG9zdGVyU3JjOlwiaHR0cHM6Ly9wMy1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS9jZTZhYzMwODhlYjg0YjUwOWNiNTMyYmRmZGNiODkyZn5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzpcImh0dHBzOi8vYXdlbWUuc25zc2RrLmNvbS9hd2VtZS92MS9wbGF5d20vP3ZpZGVvX2lkPXYwMjAwZjA5MDAwMGJydHVubzMyYXA5NDMwMzlraG1nJnJhdGlvPTcyMHAmbGluZT0wXCIsXHJcblx0XHRcdFx0cG9zdGVyU3JjOlwiaHR0cHM6Ly9wOS1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS82MTJjNzFkNzFhNmI0ZDgzOGFiYTMzOWIwY2UyNjAyZl8xNTkzNTY4MzA3fmM1XzMwMHg0MDAuanBlZz9mcm9tPTI1NjM3MTE0MDJfbGFyZ2VcIlx0XHJcblx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0Y3VycmVudFN3aXBlckluZGV4OjAsICAvL+W9k+WJjUl0ZW3kuIvmoIdcclxuXHRcdFx0Y3VycmVudFN3aXBlclN0YXRlOnRydWUsICAvL+W9k+WJjUl0ZW3nmoTmkq3mlL7nirbmgIHvvJp0cnVl5Li65pKt5pS+77yMZmFsc2XkuLrmmoLlgZxcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDp7XHJcblx0XHRcdGN1cnJlbnRWaWRlb0lkOmZ1bmN0aW9uKGN1cnJlbnRTd2lwZXJJbmRleCl7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTd2lwZXJJbmRleC50b1N0cmluZygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+iuoeeul+inhumikeeql+WPo+mrmOW6plxyXG5cdFx0XHR2aWRlb0hlaWdodDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS53aW5kb3dzSGVpZ2h0IC0gdGhpcy4kc3RvcmUuc3RhdGUuaVN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8v5pu05paw56qX5Y+j6auY5bqm5ZKM54q25oCB5qCP6auY5bqmXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2dldFdpbmRvd3NIZWlnaHQnKTtcclxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdnZXRTdGF0dXNCYXJIZWlnaHQnKTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0IHRoaXMuaVN0YXR1c0JhckhlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdH0sXHJcblx0XHRvblNob3c6ZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5WaWRlbyA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoXCJ2aWRlb1wiK3RoaXMuY3VycmVudFN3aXBlckluZGV4LHRoaXMpXHJcblx0XHRcdHRoaXMuVmlkZW8ucGxheSgpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOmZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuVmlkZW8gPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KFwidmlkZW9cIit0aGlzLmN1cnJlbnRTd2lwZXJJbmRleCx0aGlzKVxyXG5cdFx0XHR0aGlzLlZpZGVvLnBhdXNlKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0Ly/liIfmjaJJdGVt5pe277yMc3RvcOS4iuS4gOS4qu+8jCBwbGF56L+Z5LiA5LiqXHJcblx0XHRcdGNoYW5nZVN3aXBlckl0ZW06ZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFN3aXBlckluZGV4KVxyXG5cdFx0XHRcdHRoaXMuVmlkZW8gPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KFwidmlkZW9cIit0aGlzLmN1cnJlbnRTd2lwZXJJbmRleCx0aGlzKVxyXG5cdFx0XHRcdHRoaXMuVmlkZW8uc3RvcCgpXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50U3dpcGVySW5kZXggPSBldmVudC5kZXRhaWwuY3VycmVudFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFN3aXBlckluZGV4KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8v55SoYXV0b3BsYXnlj5bku6Pkuobku6XkuItcclxuXHRcdFx0XHQvLyB0aGlzLlZpZGVvID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgndmlkZW8nK3RoaXMuY3VycmVudFN3aXBlckluZGV4LHRoaXMpXHJcblx0XHRcdFx0Ly8gdGhpcy5WaWRlby5wbGF5KClcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ngrnlh7tJdGVt5pe277yM5Yik5pat5b2T5YmN54q25oCB77yM5Yaz5a6a5pqC5YGc6L+Y5piv5pKt5pS+XHJcblx0XHRcdHRhcFZpZGVvOmZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInRhcCBvY2N1cu+8gVwiKVxyXG5cdFx0XHRcdHRoaXMuVmlkZW8gPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KFwidmlkZW9cIit0aGlzLmN1cnJlbnRTd2lwZXJJbmRleCx0aGlzKVxyXG5cdFx0XHRcdGlmKHRoaXMuY3VycmVudFN3aXBlclN0YXRlID09IHRydWUpe1xyXG5cdFx0XHRcdFx0dGhpcy5WaWRlby5wYXVzZSgpXHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRTd2lwZXJTdGF0ZSA9IGZhbHNlXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLlZpZGVvLnBsYXkoKVxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50U3dpcGVyU3RhdGUgPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuc3RhdHVzQmFye1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblx0LnN3aXBlcntcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cdC5zd2lwZXItaXRlbXtcclxuXHRcdFxyXG5cdH1cclxuXHQudmlkZW97XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jb3Zlci12aWV3LWNvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRyaWdodDogMjBweDtcclxuXHRcdGJvdHRvbTogMTAwcHg7XHJcblx0fVxyXG5cdC5jb3Zlci12aWV3LWl0ZW17XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0XHJcblx0fVxyXG5cdC5jb3Zlci1pbWFnZXtcclxuXHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdH1cclxuXHQuY292ZXItdmlld3tcclxuXHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHR9XHJcblx0LmNvdmVyLXZpZXctdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Koob/Documents/HBuilderProjects/qunshang/pages/short-video/short-video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./short-video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Koob/Documents/HBuilderProjects/qunshang/pages/short-video/short-video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "statusBar": {
    "backgroundColor": "#000000"
  },
  "swiper": {
    "flexDirection": "column",
    "flexWrap": "wrap"
  },
  "video": {
    "position": "relative"
  },
  "cover-view-container": {
    "position": "absolute",
    "flexDirection": "column",
    "right": "20",
    "bottom": "100"
  },
  "cover-view-item": {
    "marginTop": "20"
  },
  "cover-image": {
    "width": "35",
    "height": "35"
  },
  "cover-view": {
    "marginTop": "5"
  },
  "cover-view-text": {
    "fontSize": "12",
    "textAlign": "center",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);