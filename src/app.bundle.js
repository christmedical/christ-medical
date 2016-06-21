/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _store = __webpack_require__(2);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _actions = __webpack_require__(4);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _getters = __webpack_require__(5);
	
	var getters = _interopRequireWildcard(_getters);
	
	var _navBar = __webpack_require__(6);
	
	var _navBar2 = _interopRequireDefault(_navBar);
	
	var _navBtn = __webpack_require__(12);
	
	var _navBtn2 = _interopRequireDefault(_navBtn);
	
	var _appNav = __webpack_require__(17);
	
	var _appNav2 = _interopRequireDefault(_appNav);
	
	var _mockUp = __webpack_require__(19);
	
	var _mockUp2 = _interopRequireDefault(_mockUp);
	
	var _workSpace = __webpack_require__(24);
	
	var _workSpace2 = _interopRequireDefault(_workSpace);
	
	var _followups = __webpack_require__(28);
	
	var _followups2 = _interopRequireDefault(_followups);
	
	var _patient = __webpack_require__(30);
	
	var _patient2 = _interopRequireDefault(_patient);
	
	var _patientFollowups = __webpack_require__(35);
	
	var _patientFollowups2 = _interopRequireDefault(_patientFollowups);
	
	var _patientProfile = __webpack_require__(37);
	
	var _patientProfile2 = _interopRequireDefault(_patientProfile);
	
	var _patientTreatments = __webpack_require__(39);
	
	var _patientTreatments2 = _interopRequireDefault(_patientTreatments);
	
	var _patientVisit = __webpack_require__(41);
	
	var _patientVisit2 = _interopRequireDefault(_patientVisit);
	
	var _reports = __webpack_require__(43);
	
	var _reports2 = _interopRequireDefault(_reports);
	
	var _search = __webpack_require__(45);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _settings = __webpack_require__(49);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _sync = __webpack_require__(51);
	
	var _sync2 = _interopRequireDefault(_sync);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.component('app-nav', _appNav2.default);
	_vue2.default.component('mock-up', _mockUp2.default);
	_vue2.default.component('nav-bar', _navBar2.default);
	_vue2.default.component('nav-btn', _navBtn2.default);
	_vue2.default.component('work-space', _workSpace2.default);
	
	_vue2.default.component('followups', _followups2.default);
	_vue2.default.component('patient', _patient2.default);
	_vue2.default.component('patient-followups', _patientFollowups2.default);
	_vue2.default.component('patient-profile', _patientProfile2.default);
	_vue2.default.component('patient-treatments', _patientTreatments2.default);
	_vue2.default.component('patient-visit', _patientVisit2.default);
	_vue2.default.component('reports', _reports2.default);
	_vue2.default.component('search', _search2.default);
	_vue2.default.component('settings', _settings2.default);
	_vue2.default.component('sync', _sync2.default);
	
	exports.default = new _vue2.default({
	    el: '#app',
	    store: _store2.default,
	    vuex: { getters: getters, actions: actions },
	    ready: function ready() {
	        this.startWatchingHash();
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Vue;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(3);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	var state = {
	    activePage: 'search',
	    patientTab: 'patient-visit',
	    watchingHash: false
	};
	
	var mutations = {
	    SHOW_PAGE: function SHOW_PAGE(state, value) {
	        state.activePage = value.toLowerCase();
	    },
	    SET_PATIENT_TAB: function SET_PATIENT_TAB(state, value) {
	        state.patientTab = value.toLowerCase();
	    },
	    SET_WATCHING_HASH: function SET_WATCHING_HASH(state, value) {
	        state.watchingHash = value;
	    }
	};
	
	var store = new _vuex2.default.Store({ state: state, mutations: mutations });
	
	exports.default = store;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Vuex;

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var startWatchingHash = exports.startWatchingHash = function startWatchingHash(_ref) {
	    var dispatch = _ref.dispatch;
	    var state = _ref.state;
	
	    if (!state.watchingHash) {
	
	        dispatch('SHOW_PAGE', location.hash.replace('#', ''));
	
	        window.onhashchange = function () {
	            dispatch('SHOW_PAGE', location.hash.replace('#', ''));
	        };
	
	        dispatch('SET_WATCHING_HASH', true);
	    }
	};
	
	var setPatientTab = exports.setPatientTab = function setPatientTab(_ref2, value) {
	    var dispatch = _ref2.dispatch;
	
	    dispatch('SET_PATIENT_TAB', value);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var patientTab = exports.patientTab = function patientTab(state) {
	    return state.patientTab;
	};
	
	var activePage = exports.activePage = function activePage(state) {
	    return state.activePage;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(7)
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/components/nav-bar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./nav-bar.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./nav-bar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.nav-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: fixed;\n    background-color: #222222;\n}\n\n/* Small Devices, Tablets */\n@media only screen and (max-width : 767px) {\n    .nav-bar {\n        right: 0; bottom: 0; left: 0;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n    }\n}\n@media only screen and (min-width : 768px) {\n    .nav-bar {\n        top: 0; bottom: 0; left: 0;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n}\n", "", {"version":3,"sources":["/./src/app/components/nav-bar.vue?3d88d3d3"],"names":[],"mappings":";AAKA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,gBAAA;IACA,0BAAA;CACA;;AAEA,4BAAA;AACA;IACA;QACA,SAAA,CAAA,UAAA,CAAA,QAAA;QACA,+BAAA;QAAA,8BAAA;YAAA,wBAAA;gBAAA,oBAAA;KACA;CACA;AACA;IACA;QACA,OAAA,CAAA,UAAA,CAAA,QAAA;QACA,6BAAA;QAAA,8BAAA;YAAA,2BAAA;gBAAA,uBAAA;KACA;CACA","file":"nav-bar.vue","sourcesContent":["<template>\n    <div class=\"nav-bar\"><slot></slot></div>\n</template>\n\n<style>\n    .nav-bar {\n        display: flex;\n        position: fixed;\n        background-color: #222222;\n    }\n\n    /* Small Devices, Tablets */\n    @media only screen and (max-width : 767px) {\n        .nav-bar {\n            right: 0; bottom: 0; left: 0;\n            flex-direction: row;\n        }\n    }\n    @media only screen and (min-width : 768px) {\n        .nav-bar {\n            top: 0; bottom: 0; left: 0;\n            flex-direction: column;\n        }\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {
		var list = [];
	
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
	
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"nav-bar\"><slot></slot></div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/components/nav-btn.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/components/nav-btn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./nav-btn.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./nav-btn.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.nav-btn {\n    color: #DDDDDD;\n    background-color: #222222;\n    width: 44px;\n    height: 44px;\n    text-align: center;\n}\n\n.nav-btn i {\n    line-height: 32px;\n    margin-top: 6px;\n}\n\n.nav-btn:hover {\n    color: #222222;\n    background-color: #DDDDDD;\n}\n\n/* Small Devices, Tablets */\n@media only screen and (max-width : 767px) {\n    .nav-btn {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n    }\n}\n", "", {"version":3,"sources":["/./src/app/components/nav-btn.vue?6e9f7805"],"names":[],"mappings":";AAcA;IACA,eAAA;IACA,0BAAA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;CACA;;AAEA;IACA,kBAAA;IACA,gBAAA;CACA;;AAEA;IACA,eAAA;IACA,0BAAA;CACA;;AAEA,4BAAA;AACA;IACA;QACA,oBAAA;YAAA,qBAAA;gBAAA,aAAA;KACA;CACA","file":"nav-btn.vue","sourcesContent":["<template>\n    <a class=\"nav-btn\" href=\"{{href}}\">\n        <i class=\"fa fa-1x fa-{{icon}}\"></i>\n        <slot></slot>\n    </a>\n</template>\n\n<script>\n    module.exports = {\n        props: ['href', 'icon']\n    }\n</script>\n\n<style>\n    .nav-btn {\n        color: #DDDDDD;\n        background-color: #222222;\n        width: 44px;\n        height: 44px;\n        text-align: center;\n    }\n\n    .nav-btn i {\n        line-height: 32px;\n        margin-top: 6px;\n    }\n\n    .nav-btn:hover {\n        color: #222222;\n        background-color: #DDDDDD;\n    }\n\n    /* Small Devices, Tablets */\n    @media only screen and (max-width : 767px) {\n        .nav-btn {\n            flex-grow: 1;\n        }\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	    props: ['href', 'icon']
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<a class=\"nav-btn\" href=\"{{href}}\">\n    <i class=\"fa fa-1x fa-{{icon}}\"></i>\n    <slot></slot>\n</a>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/components/app-nav.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<nav-bar>\n    <nav-btn href=\"#search\" icon=\"search\" priority></nav-btn>\n    <nav-btn href=\"#patient\" icon=\"plus\" priority></nav-btn>\n    <nav-btn href=\"#followups\" icon=\"flag\" priority></nav-btn>\n    <nav-btn href=\"#reports\" icon=\"print\"></nav-btn>\n    <nav-btn href=\"#sync\" icon=\"refresh\"></nav-btn>\n    <nav-btn href=\"#settings\" icon=\"gears\"></nav-btn>\n</nav-bar>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/components/mock-up.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/components/mock-up.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mock-up.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mock-up.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mock-up {\n    display: inline-block;\n    position: relative;\n}\n.mock-up > img {\n    z-index: -1;\n}\n.mock-up > div {\n    position: absolute;\n    top: 0; bottom: 0; left: 0; right: 0;\n    z-index: 100;\n}\n", "", {"version":3,"sources":["/./src/app/components/mock-up.vue?634260ba"],"names":[],"mappings":";AAsBA;IACA,sBAAA;IACA,mBAAA;CACA;AACA;IACA,YAAA;CACA;AACA;IACA,mBAAA;IACA,OAAA,CAAA,UAAA,CAAA,QAAA,CAAA,SAAA;IACA,aAAA;CACA","file":"mock-up.vue","sourcesContent":["<template>\n    <div class=\"mock-up\">\n        <img :src=\"imageSrc\">\n        <div>\n            <slot></slot>\n        </div>\n    </div>\n</template>\n\n<script>\n    module.exports = {\n        props: ['src'],\n        computed: {\n            imageSrc: function() {\n                return 'assets/images/' + this.src;\n            }\n        }\n    };\n    //style=\"background-image: url(assets/images/{{src}});\"\n</script>\n\n<style>\n    .mock-up {\n        display: inline-block;\n        position: relative;\n    }\n    .mock-up > img {\n        z-index: -1;\n    }\n    .mock-up > div {\n        position: absolute;\n        top: 0; bottom: 0; left: 0; right: 0;\n        z-index: 100;\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	    props: ['src'],
	    computed: {
	        imageSrc: function imageSrc() {
	            return 'assets/images/' + this.src;
	        }
	    }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mock-up\">\n    <img :src=\"imageSrc\">\n    <div>\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/components/work-space.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work-space.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./work-space.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.work-space {\n    background-color: #cccccc;\n    padding: 10px;\n}\n\n.content {\n    padding: 20px;\n    background-color: #ffffff;\n    /* border-radius */\n    border-radius: 3px;\n    /* box-shadow */\n    box-shadow: rgba(0,0,0,0.5) 0 0 5px;\n}\n\n\n/* Small Devices, Tablets */\n@media only screen and (max-width : 767px) {\n    .work-space {\n        position: fixed;\n        left: 0;  top: 0; bottom: 44px; right: 0;\n        overflow-y: scroll;\n    }\n}\n@media only screen and (min-width : 768px) {\n    .work-space {\n        position: fixed;\n        left: 44px;  top: 0; bottom: 0; right: 0;\n        overflow-y: scroll;\n    }\n}\n", "", {"version":3,"sources":["/./src/app/components/work-space.vue?276112e6"],"names":[],"mappings":";AASA;IACA,0BAAA;IACA,cAAA;CACA;;AAEA;IACA,cAAA;IACA,0BAAA;IACA,mBAAA;IAGA,mBAAA;IACA,gBAAA;IAGA,oCAAA;CACA;;;AAGA,4BAAA;AACA;IACA;QACA,gBAAA;QACA,QAAA,EAAA,OAAA,CAAA,aAAA,CAAA,SAAA;QACA,mBAAA;KACA;CACA;AACA;IACA;QACA,gBAAA;QACA,WAAA,EAAA,OAAA,CAAA,UAAA,CAAA,SAAA;QACA,mBAAA;KACA;CACA","file":"work-space.vue","sourcesContent":["<template>\n    <div class=\"work-space\">\n        <div class=\"content\">\n            <slot></slot>\n        </div>\n    </div>\n</template>\n\n<style>\n    .work-space {\n        background-color: #cccccc;\n        padding: 10px;\n    }\n\n    .content {\n        padding: 20px;\n        background-color: #ffffff;\n        /* border-radius */\n        -webkit-border-radius: 3px;\n        -moz-border-radius: 3px;\n        border-radius: 3px;\n        /* box-shadow */\n        -webkit-box-shadow: rgba(0,0,0,0.5) 0px 0 5px;\n        -moz-box-shadow: rgba(0,0,0,0.5) 0 0 5px;\n        box-shadow: rgba(0,0,0,0.5) 0 0 5px;\n    }\n\n\n    /* Small Devices, Tablets */\n    @media only screen and (max-width : 767px) {\n        .work-space {\n            position: fixed;\n            left: 0;  top: 0; bottom: 44px; right: 0;\n            overflow-y: scroll;\n        }\n    }\n    @media only screen and (min-width : 768px) {\n        .work-space {\n            position: fixed;\n            left: 44px;  top: 0; bottom: 0; right: 0;\n            overflow-y: scroll;\n        }\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"work-space\">\n    <div class=\"content\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/followups.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-followup.png\"></mock-up>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/pages/patient.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/patient.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./patient.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./patient.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.patient-tabs a:hover {\n    cursor: pointer;\n}\n\n.patient-tabs a.tab-selected {\n    font-weight: bolder;\n}\n", "", {"version":3,"sources":["/./src/app/pages/patient.vue?3b659b6a"],"names":[],"mappings":";AA0CA;IACA,gBAAA;CACA;;AAEA;IACA,oBAAA;CACA","file":"patient.vue","sourcesContent":["<template>\n    <patient-profile></patient-profile>\n    <div class=\"patient-tabs\">\n        <a @click=\"setPatientTab('patient-visit')\">Overall</a>&nbsp;|&nbsp;\n        <a @click=\"setPatientTab('patient-followups')\">Followups</a>&nbsp;|&nbsp;\n        <a @click=\"setPatientTab('patient-treatments')\">Treatments</a>\n        <!--<patient-tab tab-page=\"patient-visit\">Overall</patient-tab>&nbsp;|&nbsp;-->\n        <!--<patient-tab tab-page=\"patient-followups\">Followups</patient-tab>&nbsp;|&nbsp;-->\n        <!--<patient-tab tab-page=\"patient-treatments\">Treatments</patient-tab>-->\n    </div>\n    <component :is=\"patientTab\"></component>\n</template>\n\n<script>\n    var Vue = require('vue');\n    var getters = require('../data/getters.js');\n    var actions = require('../data/actions.js');\n\n    var PatientTab = Vue.extend({\n        template: '<a @click=\"tabClicked\" class=\"{{cssClass}}\"><slot></slot></a>',\n        props: ['tab-page'],\n        computed: {\n          cssClass: function() {\n              return this.parent.tab == this['tab-page'] ? 'tab-selected' : '';\n          }\n        },\n        methods: {\n            tabClicked: function() {\n                this.parent.setPatientTab(this['tab-page']);\n            }\n        }\n    });\n\n    module.exports = {\n        vuex: {\n            getters: getters,\n            actions: actions\n        }\n    }\n</script>\n\n<style>\n    .patient-tabs a:hover {\n        cursor: pointer;\n    }\n\n    .patient-tabs a.tab-selected {\n        font-weight: bolder;\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Vue = __webpack_require__(1);
	var getters = __webpack_require__(5);
	var actions = __webpack_require__(4);
	
	var PatientTab = Vue.extend({
	    template: '<a @click="tabClicked" class="{{cssClass}}"><slot></slot></a>',
	    props: ['tab-page'],
	    computed: {
	        cssClass: function cssClass() {
	            return this.parent.tab == this['tab-page'] ? 'tab-selected' : '';
	        }
	    },
	    methods: {
	        tabClicked: function tabClicked() {
	            this.parent.setPatientTab(this['tab-page']);
	        }
	    }
	});
	
	module.exports = {
	    vuex: {
	        getters: getters,
	        actions: actions
	    }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<patient-profile></patient-profile>\n<div class=\"patient-tabs\">\n    <a @click=\"setPatientTab('patient-visit')\">Overall</a>&nbsp;|&nbsp;\n    <a @click=\"setPatientTab('patient-followups')\">Followups</a>&nbsp;|&nbsp;\n    <a @click=\"setPatientTab('patient-treatments')\">Treatments</a>\n    <!--<patient-tab tab-page=\"patient-visit\">Overall</patient-tab>&nbsp;|&nbsp;-->\n    <!--<patient-tab tab-page=\"patient-followups\">Followups</patient-tab>&nbsp;|&nbsp;-->\n    <!--<patient-tab tab-page=\"patient-treatments\">Treatments</patient-tab>-->\n</div>\n<component :is=\"patientTab\"></component>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/patient-followups.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-patient-followups.png\"></mock-up>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/patient-profile.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-patient-profile.png\"></mock-up>\n";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/patient-treatments.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-patient-treatments.png\"></mock-up>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/patient-visit.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-patient-visit.png\"></mock-up>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/reports.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-reports.png\"></mock-up>\n";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(46)
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./search.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./search.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.search input {\n    width: 500px;\n}\n", "", {"version":3,"sources":["/./src/app/pages/search.vue?76c1a59c"],"names":[],"mappings":";AASA;IACA,aAAA;CACA","file":"search.vue","sourcesContent":["<template>\n    <div class=\"search\">\n        <mock-up src=\"mock-search.png\">\n            <input placeholder=\"Search on PatientID, Name or DOB\">\n        </mock-up>\n    </div>\n</template>\n\n<style>\n    .search input {\n        width: 500px;\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search\">\n    <mock-up src=\"mock-search.png\">\n        <input placeholder=\"Search on PatientID, Name or DOB\">\n    </mock-up>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/settings.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-settings.png\"></mock-up>\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(52)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jameym/Code/christ-medical/src/app/pages/sync.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n<mock-up src=\"mock-sync.png\"></mock-up>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map