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
/*!*************************************************************************************!*\
  !*** D:/phpStudy/WWW/qunshang/main.js?{"page":"pages%2Fshort-video%2Fshort-video"} ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/short-video/short-video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/short-video/short-video'\n        _pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_short_video_short_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTBFO0FBQzFFLFFBQVEsdUZBQUc7QUFDWCxRQUFRLHVGQUFHO0FBQ1gsUUFBUSx1RkFBRztBQUNYLGdCQUFnQix1RkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9zaG9ydC12aWRlby9zaG9ydC12aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9zaG9ydC12aWRlby9zaG9ydC12aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** D:/phpStudy/WWW/qunshang/main.js?{"type":"appStyle"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************************************!*\
  !*** D:/phpStudy/WWW/qunshang/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpStudy/WWW/qunshang/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!*******************************************************************************!*\
  !*** D:/phpStudy/WWW/qunshang/pages/short-video/short-video.nvue?mpType=page ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./short-video.nvue?vue&type=template&id=2805cc92&mpType=page */ 5);\n/* harmony import */ var _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./short-video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./short-video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./short-video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"a428832e\",\n  false,\n  _short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/short-video/short-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDMkU7QUFDTDtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdFQUFnRTtBQUNwSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0VBQWdFO0FBQ3pIOztBQUVBOztBQUVBO0FBQzJLO0FBQzNLLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4MDVjYzkyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Nob3J0LXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3Nob3J0LXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC1iZXRhL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImE0Mjg4MzJlXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3Nob3J0LXZpZGVvL3Nob3J0LXZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*************************************************************************************************************!*\
  !*** D:/phpStudy/WWW/qunshang/pages/short-video/short-video.nvue?vue&type=template&id=2805cc92&mpType=page ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./short-video.nvue?vue&type=template&id=2805cc92&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_template_id_2805cc92_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpStudy/WWW/qunshang/pages/short-video/short-video.nvue?vue&type=template&id=2805cc92&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                  _vm.currentPoster
                    ? _c("u-image", {
                        staticClass: ["poster"],
                        style: { height: _vm.videoHeight + "px" },
                        attrs: { src: videoItem.posterSrc, mode: "aspectFit" }
                      })
                    : _vm._e(),
                  index == _vm.currentSwiperIndex
                    ? _c("u-video", {
                        staticClass: ["video"],
                        style: { height: _vm.videoHeight + "px" },
                        attrs: {
                          src: videoItem.src,
                          objectFit: "fill",
                          id: "video" + index,
                          autoplay: true,
                          loop: true,
                          controls: "false"
                        },
                        on: { play: _vm.hidePoster, click: _vm.tapVideo }
                      })
                    : _vm._e(),
                  index == _vm.currentSwiperIndex
                    ? _c(
                        "cover-view",
                        { staticClass: ["info"] },
                        [
                          _c("cover-view", { on: { click: _vm.toUserPage } }, [
                            _c("u-text", { staticClass: ["name"] }, [
                              _vm._v("@" + _vm._s(videoItem.name))
                            ])
                          ]),
                          _c("cover-view", [
                            _c("u-text", { staticClass: ["intro"] }, [
                              _vm._v(_vm._s(videoItem.intro))
                            ])
                          ]),
                          _c("cover-view", [
                            _c("u-text", { staticClass: ["publishtime"] }, [
                              _vm._v("发布于：" + _vm._s(videoItem.publishtime))
                            ])
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  index == _vm.currentSwiperIndex
                    ? _c(
                        "cover-view",
                        { staticClass: ["cover-view-container"] },
                        [
                          _c("cover-image", {
                            staticClass: ["headimg"],
                            attrs: { src: videoItem.headimg },
                            on: { click: _vm.toUserPage }
                          }),
                          _c(
                            "cover-view",
                            { staticClass: ["cover-view-item"] },
                            [
                              _c("cover-image", {
                                staticClass: ["cover-image"],
                                attrs: {
                                  src: "../../static/img/short-video/heart.png"
                                }
                              }),
                              _c(
                                "cover-view",
                                { staticClass: ["cover-view"] },
                                [
                                  _c(
                                    "u-text",
                                    { staticClass: ["cover-view-text"] },
                                    [_vm._v("点赞")]
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
                                    "../../static/img/short-video/comment.png"
                                }
                              }),
                              _c(
                                "cover-view",
                                { staticClass: ["cover-view"] },
                                [
                                  _c(
                                    "u-text",
                                    { staticClass: ["cover-view-text"] },
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
                                  src: "../../static/img/short-video/share.png"
                                }
                              }),
                              _c(
                                "cover-view",
                                { staticClass: ["cover-view"] },
                                [
                                  _c(
                                    "u-text",
                                    { staticClass: ["cover-view-text"] },
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
/*!*******************************************************************************************************!*\
  !*** D:/phpStudy/WWW/qunshang/pages/short-video/short-video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./short-video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_beta_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_beta_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_beta_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_beta_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThjLENBQWdCLDBlQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLWJldGEvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgtYmV0YS9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLWJldGEvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLWJldGEvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgtYmV0YS9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLWJldGEvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG9ydC12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpStudy/WWW/qunshang/pages/short-video/short-video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n\n{\n  data: {\n\n    videoList: [{\n      index: 0,\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fc80000brcq4qpevctv7pnq6thg&ratio=720p&line=0\",\n      posterSrc: \"https://p9-dy.byteimg.com/img/tos-cn-p-0015/1805c9ca6dd8497eb37159c3c9faf5f6~c5_300x400.jpeg?from=2563711402_large\",\n      intro: \"为什么学习？最佳是兴趣，最俗是一技之长\",\n      name: \"徐凤年\",\n      publishtime: \"07-10 22:13\",\n      headimg: \"http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg\" },\n\n    {\n      index: 1,\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fe70000bquvmisthbi0h53ah6d0&ratio=720p&line=0\",\n      posterSrc: \"https://p6-dy-ipv6.byteimg.com/img/tos-cn-p-0015/3a4b743cf25a404da6cb2a159b0b8a9d~c5_300x400.jpeg?from=2563711402_large\",\n      intro: \"终于知道铁丝网这么做的了\",\n      name: \"李淳罡\",\n      publishtime: \"07-10 22:13\",\n      headimg: \"https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2714978353,1075402837&fm=111&gp=0.jpg\" },\n\n    {\n      index: 2,\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f5c0000bru6m13pqv6apkc3cke0&ratio=720p&line=0\",\n      posterSrc: \"https://p3-dy.byteimg.com/img/tos-cn-p-0015/1939bd44c2a246538be941193d8f360b~c5_300x400.jpeg?from=2563711402_large\",\n      intro: \"啤酒瓶升值计划\",\n      name: \"姜倪\",\n      publishtime: \"07-10 22:13\",\n      headimg: \"http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg\" },\n\n    {\n      index: 3,\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f4f0000brrbntdahtm68pamna30&ratio=720p&line=0\",\n      posterSrc: \"https://p3-dy.byteimg.com/img/tos-cn-p-0015/2a162ac9461e4f068ca85b444afaf214_1593228282~c5_300x400.jpeg?from=2563711402_large\",\n      intro: \"小小年纪一挑二，面对大鹅真是毫无畏惧\",\n      name: \"吴龙骧\",\n      publishtime: \"07-10 22:13\",\n      headimg: \"http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg\" },\n\n    {\n      index: 4,\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f7f0000brq6mkkmavf54vk2get0&ratio=720p&line=0\",\n      posterSrc: \"https://p29-dy.byteimg.com/img/tos-cn-p-0015/bc140896d4cc4c44bb05a5409edcf874~c5_300x400.jpeg?from=2563711402_large\",\n      intro: \"大家帮帮看看这是不是“土猫”\",\n      name: \"小黑老实人\",\n      publishtime: \"07-10 22:13\",\n      headimg: \"http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg\" },\n\n    {\n      index: 5,\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f3c0000bruns0l9688i25vnv0hg&ratio=720p&line=0\",\n      posterSrc: \"https://p3-dy.byteimg.com/img/tos-cn-p-0015/ce6ac3088eb84b509cb532bdfdcb892f~c5_300x400.jpeg?from=2563711402_large\",\n      intro: \"他看起来很焦虑，自从有了可升降的防洪闸，他不知道洪水什么时候才能淹了他家。\",\n      name: \"千秋万代的李哥\",\n      publishtime: \"07-10 22:13\",\n      headimg: \"http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg\" },\n\n    {\n      index: 6,\n      src: \"https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f090000brtuno32ap943039khmg&ratio=720p&line=0\",\n      posterSrc: \"https://p9-dy.byteimg.com/img/tos-cn-p-0015/612c71d71a6b4d838aba339b0ce2602f_1593568307~c5_300x400.jpeg?from=2563711402_large\",\n      intro: \"老爸请长辈喝他埋藏多年的某儿红 可是这个意外来得太突然\",\n      name: \"一个玩劫的主播\",\n      publishtime: \"07-10 22:13\",\n      headimg: \"http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg\" }],\n\n\n    currentSwiperIndex: 0, //当前Item下标\n    currentSwiperState: true, //当前Item的播放状态：true为播放，false为暂停\n    currentPoster: true },\n\n  computed: {\n    currentVideoId: function currentVideoId(currentSwiperIndex) {\n      return currentSwiperIndex.toString();\n    },\n    //计算视频窗口高度\n    videoHeight: function videoHeight() {\n      return this.$store.state.windowsHeight - this.$store.state.iStatusBarHeight;\n    } },\n\n  //更新窗口高度和状态栏高度\n  onReady: function onReady() {\n    this.$store.commit('getWindowsHeight');\n    this.$store.commit('getStatusBarHeight');\n  },\n  onLoad: function onLoad() {\n    this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;\n  },\n  onShow: function onShow() {\n    this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n    this.Video.play();\n  },\n  onHide: function onHide() {\n    this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n    this.Video.pause();\n  },\n  methods: {\n    //切换Item时，stop上一个， play这一个\n    changeSwiperItem: function changeSwiperItem(event) {\n      __f__(\"log\", this.currentSwiperIndex, \" at pages/short-video/short-video.nvue:143\");\n      this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n      this.Video.stop();\n      this.currentSwiperIndex = event.detail.current;\n      __f__(\"log\", this.currentSwiperIndex, \" at pages/short-video/short-video.nvue:147\");\n      this.currentPoster = true;\n\n      //用autoplay取代了以下\n      // this.Video = uni.createVideoContext('video'+this.currentSwiperIndex,this)\n      // this.Video.play()\n\n    },\n    //点击Item时，判断当前状态，决定暂停还是播放\n    tapVideo: function tapVideo(event) {\n      __f__(\"log\", \"tap occur！\", \" at pages/short-video/short-video.nvue:157\");\n      this.Video = uni.createVideoContext(\"video\" + this.currentSwiperIndex, this);\n      if (this.currentSwiperState == true) {\n        this.Video.pause();\n        this.currentSwiperState = false;\n      } else {\n        this.Video.play();\n        this.currentSwiperState = true;\n      }\n    },\n    hidePoster: function hidePoster() {\n      var _this = this;\n      setTimeout(function () {\n        _this.currentPoster = false;\n      }, 100);\n    },\n    toUserPage: function toUserPage() {\n      uni.navigateTo({\n        url: \"userPage/userPage\" });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2hvcnQtdmlkZW8vc2hvcnQtdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBO0FBQ0E7O0FBRUE7QUFDQSxjQURBO0FBRUEsa0hBRkE7QUFHQSxxSUFIQTtBQUlBLGtDQUpBO0FBS0EsaUJBTEE7QUFNQSxnQ0FOQTtBQU9BLDRIQVBBOztBQVNBO0FBQ0EsY0FEQTtBQUVBLGtIQUZBO0FBR0EsMElBSEE7QUFJQSwyQkFKQTtBQUtBLGlCQUxBO0FBTUEsZ0NBTkE7QUFPQSxpSEFQQSxFQVRBOztBQWtCQTtBQUNBLGNBREE7QUFFQSxrSEFGQTtBQUdBLHFJQUhBO0FBSUEsc0JBSkE7QUFLQSxnQkFMQTtBQU1BLGdDQU5BO0FBT0EsNEhBUEEsRUFsQkE7O0FBMkJBO0FBQ0EsY0FEQTtBQUVBLGtIQUZBO0FBR0EsZ0pBSEE7QUFJQSxpQ0FKQTtBQUtBLGlCQUxBO0FBTUEsZ0NBTkE7QUFPQSw0SEFQQSxFQTNCQTs7QUFvQ0E7QUFDQSxjQURBO0FBRUEsa0hBRkE7QUFHQSxzSUFIQTtBQUlBLDZCQUpBO0FBS0EsbUJBTEE7QUFNQSxnQ0FOQTtBQU9BLDRIQVBBLEVBcENBOztBQTZDQTtBQUNBLGNBREE7QUFFQSxrSEFGQTtBQUdBLHFJQUhBO0FBSUEsb0RBSkE7QUFLQSxxQkFMQTtBQU1BLGdDQU5BO0FBT0EsNEhBUEEsRUE3Q0E7O0FBc0RBO0FBQ0EsY0FEQTtBQUVBLGtIQUZBO0FBR0EsZ0pBSEE7QUFJQSwwQ0FKQTtBQUtBLHFCQUxBO0FBTUEsZ0NBTkE7QUFPQSw0SEFQQSxFQXREQSxDQUZBOzs7QUFrRUEseUJBbEVBLEVBa0VBO0FBQ0EsNEJBbkVBLEVBbUVBO0FBQ0EsdUJBcEVBLEVBREE7O0FBdUVBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBLEVBdkVBOztBQWdGQTtBQUNBLFNBakZBLHFCQWlGQTtBQUNBO0FBQ0E7QUFDQSxHQXBGQTtBQXFGQTtBQUNBO0FBQ0EsR0F2RkE7QUF3RkE7QUFDQTtBQUNBO0FBQ0EsR0EzRkE7QUE0RkE7QUFDQTtBQUNBO0FBQ0EsR0EvRkE7QUFnR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQWRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFCQTtBQTJCQSxjQTNCQSx3QkEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBaENBO0FBaUNBLGNBakNBLHdCQWlDQTtBQUNBO0FBQ0EsZ0NBREE7O0FBR0EsS0FyQ0EsRUFoR0EsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHQgPHZpZXcgOnN0eWxlPVwieyBoZWlnaHQ6IHRoaXMuJHN0b3JlLnN0YXRlLmlTdGF0dXNCYXJIZWlnaHQgKyAncHgnfVwiIGNsYXNzPVwic3RhdHVzQmFyXCI+PC92aWV3PlxyXG5cdFx0PHN3aXBlciB2ZXJ0aWNhbD1cInRydWVcIiAgQGNoYW5nZT1cImNoYW5nZVN3aXBlckl0ZW1cIiA6c3R5bGU9XCJ7aGVpZ2h0OnZpZGVvSGVpZ2h0KydweCd9XCIgY2xhc3M9XCJzd2lwZXJcIiA+XHJcblx0XHRcdDxzd2lwZXItaXRlbSB2LWZvcj1cIih2aWRlb0l0ZW0saW5kZXgpIGluIHZpZGVvTGlzdFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwic3dpcGVyLWl0ZW1cIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJwb3N0ZXJcIiA6c3JjPVwidmlkZW9JdGVtLnBvc3RlclNyY1wiIHYtaWY9XCJjdXJyZW50UG9zdGVyXCIgIG1vZGU9XCJhc3BlY3RGaXRcIiA6c3R5bGU9XCJ7aGVpZ2h0OnZpZGVvSGVpZ2h0KydweCd9XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dmlkZW8gQHRhcD1cInRhcFZpZGVvXCIgQHBsYXk9XCJoaWRlUG9zdGVyXCIgOnNyYz1cInZpZGVvSXRlbS5zcmNcIiA6c3R5bGU9XCJ7aGVpZ2h0OnZpZGVvSGVpZ2h0KydweCd9XCIgb2JqZWN0Rml0PVwiZmlsbFwiIDppZD1cIid2aWRlbycraW5kZXhcIiB2LWlmPVwiaW5kZXg9PWN1cnJlbnRTd2lwZXJJbmRleFwiIDphdXRvcGxheT1cInRydWVcIiA6bG9vcD1cInRydWVcIiBjb250cm9scz1cImZhbHNlXCIgY2xhc3M9XCJ2aWRlb1wiPlxyXG5cdFx0XHRcdDwvdmlkZW8+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJpbmZvXCIgdi1pZj1cImluZGV4PT1jdXJyZW50U3dpcGVySW5kZXhcIj5cclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3IEBjbGljaz1cInRvVXNlclBhZ2VcIj48dGV4dCBjbGFzcz1cIm5hbWVcIj5Ae3t2aWRlb0l0ZW0ubmFtZX19PC90ZXh0PjwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3ID48dGV4dCBjbGFzcz1cImludHJvXCI+e3t2aWRlb0l0ZW0uaW50cm99fTwvdGV4dD48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHQ8Y292ZXItdmlldyA+PHRleHQgY2xhc3M9XCJwdWJsaXNodGltZVwiPuWPkeW4g+S6ju+8mnt7dmlkZW9JdGVtLnB1Ymxpc2h0aW1lfX08L3RleHQ+PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctY29udGFpbmVyXCIgdi1pZj1cImluZGV4PT1jdXJyZW50U3dpcGVySW5kZXhcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwiaGVhZGltZ1wiIDpzcmM9XCJ2aWRlb0l0ZW0uaGVhZGltZ1wiIEBjbGljaz1cInRvVXNlclBhZ2VcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDnlKjnm7jlr7nlrprkvY3lgZrlh7rnqoHlh7rmlYjmnpwgLS0+XHJcblx0XHRcdFx0XHQ8L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImNvdmVyLWltYWdlXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltZy9zaG9ydC12aWRlby9oZWFydC5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXdcIj48dGV4dCBjbGFzcz1cImNvdmVyLXZpZXctdGV4dFwiPueCuei1njwvdGV4dD48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImNvdmVyLWltYWdlXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltZy9zaG9ydC12aWRlby9jb21tZW50LnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlld1wiPjx0ZXh0IGNsYXNzPVwiY292ZXItdmlldy10ZXh0XCI+6K+E6K66PC90ZXh0PjwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwiY292ZXItaW1hZ2VcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1nL3Nob3J0LXZpZGVvL3NoYXJlLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlld1wiPjx0ZXh0IGNsYXNzPVwiY292ZXItdmlldy10ZXh0XCI+6L2s5Y+RPC90ZXh0PjwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHQ8L3N3aXBlcj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdFxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGE6e1xyXG5cdFx0XHRcclxuXHRcdFx0dmlkZW9MaXN0Olt7XHJcblx0XHRcdFx0XHRcdGluZGV4OjAsXHJcblx0XHRcdFx0XHRcdHNyYzogXCJodHRwczovL2F3ZW1lLnNuc3Nkay5jb20vYXdlbWUvdjEvcGxheXdtLz92aWRlb19pZD12MDIwMGZjODAwMDBicmNxNHFwZXZjdHY3cG5xNnRoZyZyYXRpbz03MjBwJmxpbmU9MFwiLFxyXG5cdFx0XHRcdFx0XHRwb3N0ZXJTcmM6IFwiaHR0cHM6Ly9wOS1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS8xODA1YzljYTZkZDg0OTdlYjM3MTU5YzNjOWZhZjVmNn5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCIsXHJcblx0XHRcdFx0XHRcdGludHJvOiBcIuS4uuS7gOS5iOWtpuS5oO+8n+acgOS9s+aYr+WFtOi2o++8jOacgOS/l+aYr+S4gOaKgOS5i+mVv1wiLFxyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5b6Q5Yek5bm0XCIsXHJcblx0XHRcdFx0XHRcdHB1Ymxpc2h0aW1lOlwiMDctMTAgMjI6MTNcIiwgXHJcblx0XHRcdFx0XHRcdGhlYWRpbWc6IFwiaHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vcV83MCxjX3pvb20sd182NDAvaW1hZ2VzLzIwMTkwMTE1Lzg3ODY4ZjIxYmVmYzRlN2Y5MDA3YWE3MWVmYTc5NjIxLmpwZWdcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcdFxyXG5cdFx0XHRcdFx0XHRpbmRleDoxLFxyXG5cdFx0XHRcdFx0XHRzcmM6IFwiaHR0cHM6Ly9hd2VtZS5zbnNzZGsuY29tL2F3ZW1lL3YxL3BsYXl3bS8/dmlkZW9faWQ9djAyMDBmZTcwMDAwYnF1dm1pc3RoYmkwaDUzYWg2ZDAmcmF0aW89NzIwcCZsaW5lPTBcIixcclxuXHRcdFx0XHRcdFx0cG9zdGVyU3JjOiBcImh0dHBzOi8vcDYtZHktaXB2Ni5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS8zYTRiNzQzY2YyNWE0MDRkYTZjYjJhMTU5YjBiOGE5ZH5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCIsXHJcblx0XHRcdFx0XHRcdGludHJvOiBcIue7iOS6juefpemBk+mTgeS4nee9kei/meS5iOWBmueahOS6hlwiLFxyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5p2O5rez572hXCIsXHJcblx0XHRcdFx0XHRcdHB1Ymxpc2h0aW1lOlwiMDctMTAgMjI6MTNcIiwgXHJcblx0XHRcdFx0XHRcdGhlYWRpbWc6IFwiaHR0cHM6Ly9kc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNzE0OTc4MzUzLDEwNzU0MDI4MzcmZm09MTExJmdwPTAuanBnXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjIsXHJcblx0XHRcdFx0XHRcdHNyYzogXCJodHRwczovL2F3ZW1lLnNuc3Nkay5jb20vYXdlbWUvdjEvcGxheXdtLz92aWRlb19pZD12MDIwMGY1YzAwMDBicnU2bTEzcHF2NmFwa2MzY2tlMCZyYXRpbz03MjBwJmxpbmU9MFwiLFxyXG5cdFx0XHRcdFx0XHRwb3N0ZXJTcmM6IFwiaHR0cHM6Ly9wMy1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS8xOTM5YmQ0NGMyYTI0NjUzOGJlOTQxMTkzZDhmMzYwYn5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCIsXHJcblx0XHRcdFx0XHRcdGludHJvOiBcIuWVpOmFkueTtuWNh+WAvOiuoeWIklwiLFxyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5aec5YCqXCIsXHJcblx0XHRcdFx0XHRcdHB1Ymxpc2h0aW1lOlwiMDctMTAgMjI6MTNcIiwgXHJcblx0XHRcdFx0XHRcdGhlYWRpbWc6IFwiaHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vcV83MCxjX3pvb20sd182NDAvaW1hZ2VzLzIwMTkwMTE1Lzg3ODY4ZjIxYmVmYzRlN2Y5MDA3YWE3MWVmYTc5NjIxLmpwZWdcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6MyxcclxuXHRcdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vYXdlbWUuc25zc2RrLmNvbS9hd2VtZS92MS9wbGF5d20vP3ZpZGVvX2lkPXYwMjAwZjRmMDAwMGJycmJudGRhaHRtNjhwYW1uYTMwJnJhdGlvPTcyMHAmbGluZT0wXCIsXHJcblx0XHRcdFx0XHRcdHBvc3RlclNyYzogXCJodHRwczovL3AzLWR5LmJ5dGVpbWcuY29tL2ltZy90b3MtY24tcC0wMDE1LzJhMTYyYWM5NDYxZTRmMDY4Y2E4NWI0NDRhZmFmMjE0XzE1OTMyMjgyODJ+YzVfMzAweDQwMC5qcGVnP2Zyb209MjU2MzcxMTQwMl9sYXJnZVwiLFxyXG5cdFx0XHRcdFx0XHRpbnRybzogXCLlsI/lsI/lubTnuqrkuIDmjJHkuozvvIzpnaLlr7nlpKfpuYXnnJ/mmK/mr6vml6DnlY/mg6dcIixcclxuXHRcdFx0XHRcdFx0bmFtZTpcIuWQtOm+memqp1wiLFxyXG5cdFx0XHRcdFx0XHRwdWJsaXNodGltZTpcIjA3LTEwIDIyOjEzXCIsIFxyXG5cdFx0XHRcdFx0XHRoZWFkaW1nOiBcImh0dHA6Ly81YjA5ODhlNTk1MjI1LmNkbi5zb2h1Y3MuY29tL3FfNzAsY196b29tLHdfNjQwL2ltYWdlcy8yMDE5MDExNS84Nzg2OGYyMWJlZmM0ZTdmOTAwN2FhNzFlZmE3OTYyMS5qcGVnXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjQsXHJcblx0XHRcdFx0XHRcdHNyYzogXCJodHRwczovL2F3ZW1lLnNuc3Nkay5jb20vYXdlbWUvdjEvcGxheXdtLz92aWRlb19pZD12MDIwMGY3ZjAwMDBicnE2bWtrbWF2ZjU0dmsyZ2V0MCZyYXRpbz03MjBwJmxpbmU9MFwiLFxyXG5cdFx0XHRcdFx0XHRwb3N0ZXJTcmM6IFwiaHR0cHM6Ly9wMjktZHkuYnl0ZWltZy5jb20vaW1nL3Rvcy1jbi1wLTAwMTUvYmMxNDA4OTZkNGNjNGM0NGJiMDVhNTQwOWVkY2Y4NzR+YzVfMzAweDQwMC5qcGVnP2Zyb209MjU2MzcxMTQwMl9sYXJnZVwiLFxyXG5cdFx0XHRcdFx0XHRpbnRybzogXCLlpKflrrbluK7luK7nnIvnnIvov5nmmK/kuI3mmK/igJzlnJ/njKvigJ1cIixcclxuXHRcdFx0XHRcdFx0bmFtZTpcIuWwj+m7keiAgeWunuS6ulwiLFxyXG5cdFx0XHRcdFx0XHRwdWJsaXNodGltZTpcIjA3LTEwIDIyOjEzXCIsIFxyXG5cdFx0XHRcdFx0XHRoZWFkaW1nOiBcImh0dHA6Ly81YjA5ODhlNTk1MjI1LmNkbi5zb2h1Y3MuY29tL3FfNzAsY196b29tLHdfNjQwL2ltYWdlcy8yMDE5MDExNS84Nzg2OGYyMWJlZmM0ZTdmOTAwN2FhNzFlZmE3OTYyMS5qcGVnXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGluZGV4OjUsXHJcblx0XHRcdFx0XHRcdHNyYzogXCJodHRwczovL2F3ZW1lLnNuc3Nkay5jb20vYXdlbWUvdjEvcGxheXdtLz92aWRlb19pZD12MDIwMGYzYzAwMDBicnVuczBsOTY4OGkyNXZudjBoZyZyYXRpbz03MjBwJmxpbmU9MFwiLFxyXG5cdFx0XHRcdFx0XHRwb3N0ZXJTcmM6IFwiaHR0cHM6Ly9wMy1keS5ieXRlaW1nLmNvbS9pbWcvdG9zLWNuLXAtMDAxNS9jZTZhYzMwODhlYjg0YjUwOWNiNTMyYmRmZGNiODkyZn5jNV8zMDB4NDAwLmpwZWc/ZnJvbT0yNTYzNzExNDAyX2xhcmdlXCIsXHJcblx0XHRcdFx0XHRcdGludHJvOiBcIuS7lueci+i1t+adpeW+iOeEpuiZke+8jOiHquS7juacieS6huWPr+WNh+mZjeeahOmYsua0qumXuO+8jOS7luS4jeefpemBk+a0quawtOS7gOS5iOaXtuWAmeaJjeiDvea3ueS6huS7luWutuOAglwiLFxyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5Y2D56eL5LiH5Luj55qE5p2O5ZOlXCIsXHJcblx0XHRcdFx0XHRcdHB1Ymxpc2h0aW1lOlwiMDctMTAgMjI6MTNcIiwgXHJcblx0XHRcdFx0XHRcdGhlYWRpbWc6IFwiaHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vcV83MCxjX3pvb20sd182NDAvaW1hZ2VzLzIwMTkwMTE1Lzg3ODY4ZjIxYmVmYzRlN2Y5MDA3YWE3MWVmYTc5NjIxLmpwZWdcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW5kZXg6NixcclxuXHRcdFx0XHRcdFx0c3JjOiBcImh0dHBzOi8vYXdlbWUuc25zc2RrLmNvbS9hd2VtZS92MS9wbGF5d20vP3ZpZGVvX2lkPXYwMjAwZjA5MDAwMGJydHVubzMyYXA5NDMwMzlraG1nJnJhdGlvPTcyMHAmbGluZT0wXCIsXHJcblx0XHRcdFx0XHRcdHBvc3RlclNyYzogXCJodHRwczovL3A5LWR5LmJ5dGVpbWcuY29tL2ltZy90b3MtY24tcC0wMDE1LzYxMmM3MWQ3MWE2YjRkODM4YWJhMzM5YjBjZTI2MDJmXzE1OTM1NjgzMDd+YzVfMzAweDQwMC5qcGVnP2Zyb209MjU2MzcxMTQwMl9sYXJnZVwiLFxyXG5cdFx0XHRcdFx0XHRpbnRybzogXCLogIHniLjor7fplb/ovojllp3ku5bln4vol4/lpJrlubTnmoTmn5DlhL/nuqIg5Y+v5piv6L+Z5Liq5oSP5aSW5p2l5b6X5aSq56qB54S2XCIsXHJcblx0XHRcdFx0XHRcdG5hbWU6XCLkuIDkuKrnjqnliqvnmoTkuLvmkq1cIixcclxuXHRcdFx0XHRcdFx0cHVibGlzaHRpbWU6XCIwNy0xMCAyMjoxM1wiLCBcclxuXHRcdFx0XHRcdFx0aGVhZGltZzogXCJodHRwOi8vNWIwOTg4ZTU5NTIyNS5jZG4uc29odWNzLmNvbS9xXzcwLGNfem9vbSx3XzY0MC9pbWFnZXMvMjAxOTAxMTUvODc4NjhmMjFiZWZjNGU3ZjkwMDdhYTcxZWZhNzk2MjEuanBlZ1wiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0Y3VycmVudFN3aXBlckluZGV4OjAsICAvL+W9k+WJjUl0ZW3kuIvmoIdcclxuXHRcdFx0Y3VycmVudFN3aXBlclN0YXRlOnRydWUsICAvL+W9k+WJjUl0ZW3nmoTmkq3mlL7nirbmgIHvvJp0cnVl5Li65pKt5pS+77yMZmFsc2XkuLrmmoLlgZxcclxuXHRcdFx0Y3VycmVudFBvc3Rlcjp0cnVlXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6e1xyXG5cdFx0XHRjdXJyZW50VmlkZW9JZDpmdW5jdGlvbihjdXJyZW50U3dpcGVySW5kZXgpe1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3dpcGVySW5kZXgudG9TdHJpbmcoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/orqHnrpfop4bpopHnqpflj6Ppq5jluqZcclxuXHRcdFx0dmlkZW9IZWlnaHQ6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUud2luZG93c0hlaWdodCAtIHRoaXMuJHN0b3JlLnN0YXRlLmlTdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL+abtOaWsOeql+WPo+mrmOW6puWSjOeKtuaAgeagj+mrmOW6plxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdnZXRXaW5kb3dzSGVpZ2h0Jyk7XHJcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZ2V0U3RhdHVzQmFySGVpZ2h0Jyk7XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOmZ1bmN0aW9uKCl7XHJcblx0XHRcdCB0aGlzLmlTdGF0dXNCYXJIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHR9LFxyXG5cdFx0b25TaG93OmZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuVmlkZW8gPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KFwidmlkZW9cIit0aGlzLmN1cnJlbnRTd2lwZXJJbmRleCx0aGlzKVxyXG5cdFx0XHR0aGlzLlZpZGVvLnBsYXkoKVxyXG5cdFx0fSxcclxuXHRcdG9uSGlkZTpmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLlZpZGVvID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dChcInZpZGVvXCIrdGhpcy5jdXJyZW50U3dpcGVySW5kZXgsdGhpcylcclxuXHRcdFx0dGhpcy5WaWRlby5wYXVzZSgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdC8v5YiH5o2iSXRlbeaXtu+8jHN0b3DkuIrkuIDkuKrvvIwgcGxheei/meS4gOS4qlxyXG5cdFx0XHRjaGFuZ2VTd2lwZXJJdGVtOmZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTd2lwZXJJbmRleClcclxuXHRcdFx0XHR0aGlzLlZpZGVvID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dChcInZpZGVvXCIrdGhpcy5jdXJyZW50U3dpcGVySW5kZXgsdGhpcylcclxuXHRcdFx0XHR0aGlzLlZpZGVvLnN0b3AoKVxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFN3aXBlckluZGV4ID0gZXZlbnQuZGV0YWlsLmN1cnJlbnRcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTd2lwZXJJbmRleClcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQb3N0ZXIgPSB0cnVlXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly/nlKhhdXRvcGxheeWPluS7o+S6huS7peS4i1xyXG5cdFx0XHRcdC8vIHRoaXMuVmlkZW8gPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KCd2aWRlbycrdGhpcy5jdXJyZW50U3dpcGVySW5kZXgsdGhpcylcclxuXHRcdFx0XHQvLyB0aGlzLlZpZGVvLnBsYXkoKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+eCueWHu0l0ZW3ml7bvvIzliKTmlq3lvZPliY3nirbmgIHvvIzlhrPlrprmmoLlgZzov5jmmK/mkq3mlL5cclxuXHRcdFx0dGFwVmlkZW86ZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidGFwIG9jY3Vy77yBXCIpXHJcblx0XHRcdFx0dGhpcy5WaWRlbyA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoXCJ2aWRlb1wiK3RoaXMuY3VycmVudFN3aXBlckluZGV4LHRoaXMpXHJcblx0XHRcdFx0aWYodGhpcy5jdXJyZW50U3dpcGVyU3RhdGUgPT0gdHJ1ZSl7XHJcblx0XHRcdFx0XHR0aGlzLlZpZGVvLnBhdXNlKClcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFN3aXBlclN0YXRlID0gZmFsc2VcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuVmlkZW8ucGxheSgpXHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRTd2lwZXJTdGF0ZSA9IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGhpZGVQb3N0ZXIoKXtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdF90aGlzLmN1cnJlbnRQb3N0ZXIgPSBmYWxzZVxyXG5cdFx0XHRcdH0sMTAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1VzZXJQYWdlKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOlwidXNlclBhZ2UvdXNlclBhZ2VcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5zdGF0dXNCYXJ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdH1cclxuXHQuc3dpcGVye1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcblx0LnZpZGVve1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuY292ZXItdmlldy1jb250YWluZXJ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHJpZ2h0OiAxMHB4O1xyXG5cdFx0Ym90dG9tOiAxMTBweDtcclxuXHR9XHJcblx0LmhlYWRpbWd7XHJcblx0XHR3aWR0aDogNDVweDtcclxuXHRcdGhlaWdodDogNDVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcblx0fVxyXG5cdC5jb3Zlci12aWV3LWl0ZW17XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmNvdmVyLWltYWdle1xyXG5cdFx0d2lkdGg6IDM1cHg7XHJcblx0XHRoZWlnaHQ6IDM1cHg7XHJcblx0fVxyXG5cdC5jb3Zlci12aWV3e1xyXG5cdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdH1cclxuXHQuY292ZXItdmlldy10ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHRcclxuXHR9XHJcblx0LmluZm97XHJcblx0XHR3aWR0aDogNTIwcnB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMTBweDtcclxuXHRcdGJvdHRvbTogMjBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHR9XHJcblx0Lm5hbWV7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQuaW50cm97XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdH1cclxuXHQucHVibGlzaHRpbWV7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

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
/*!***************************************************************************************************************!*\
  !*** D:/phpStudy/WWW/qunshang/pages/short-video/short-video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../HBuilderX-beta/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./short-video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_beta_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_beta_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_short_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpStudy/WWW/qunshang/pages/short-video/short-video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "alignItems": "center",
    "right": "10",
    "bottom": "110"
  },
  "headimg": {
    "width": "45",
    "height": "45",
    "borderRadius": 50
  },
  "cover-view-item": {
    "marginTop": "20",
    "alignItems": "center"
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
    "color": "#FFFFFF"
  },
  "info": {
    "width": "520rpx",
    "position": "absolute",
    "left": "10",
    "bottom": "20",
    "flexDirection": "column",
    "alignItems": "flex-start"
  },
  "name": {
    "color": "#FFFFFF",
    "fontSize": "18",
    "fontWeight": "bold"
  },
  "intro": {
    "color": "#FFFFFF",
    "fontSize": "16",
    "marginTop": "10",
    "marginRight": 0,
    "marginBottom": "10",
    "marginLeft": 0
  },
  "publishtime": {
    "color": "#FFFFFF",
    "fontSize": "14"
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