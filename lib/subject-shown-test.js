(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("subject-shown-test", [], factory);
	else if(typeof exports === 'object')
		exports["subject-shown-test"] = factory();
	else
		root["subject-shown-test"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _questionSelect = __webpack_require__(/*! ./template/question-select */ "./src/template/question-select.js");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SubjectShown =
/*#__PURE__*/
function () {
  function SubjectShown(options, data) {
    _classCallCheck(this, SubjectShown);

    this.options = Object.assign({}, {
      editable: false,
      showAnswer: false
    }, options);
    this.data = data;
  }

  _createClass(SubjectShown, [{
    key: "showQuestions",
    value: function showQuestions() {
      var _this = this;

      var htmlsArr = this.data.map(function (subject) {
        return _this.showQuestion(subject.type, subject);
      });
      return htmlsArr.join();
    }
  }, {
    key: "showQuestion",
    value: function showQuestion() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var html;

      switch (type) {
        case '1':
          html = this.showQuestionSelect(data);
          break;

        case '2':
          html = this.showQuestionFillBlank(data);
          break;

        default:
          html = '<div>none match err!</div>';
          break;
      }

      ;
      return html;
    }
  }, {
    key: "showQuestionSelect",
    value: function showQuestionSelect(data) {
      var _this2 = this;

      var optionKeys = ['A', 'B', 'C', 'D', 'E', 'F'];
      var id = data.id,
          topic = data.topic,
          options = data.options;
      var optionsHtmlArr = options.map(function (item, index) {
        var tpl = _this2.options.editable ? _questionSelect.TPL_EDIT_SELECT_OPTION : _questionSelect.TPL_SELECT_OPTION;
        var html;
        html = tpl.replace('{{key}}', optionKeys[index]);
        html = html.replace('{{option}}', item.describe);

        if (_this2.options.editable) {
          html = html.replace('{{id}}', item.id).replace('{{value}}', item.id);
        }

        return html;
      });
      var optionsHtml = optionsHtmlArr.join('');
      return _questionSelect.TPL_SELECT.replace('{{id}}', id).replace('{{topic}}', topic).replace('{{options}}', optionsHtml);
    }
  }, {
    key: "showQuestionFillBlank",
    value: function showQuestionFillBlank() {
      console.log('showQuestionFillBlank');
    }
  }, {
    key: "getData",
    value: function getData() {
      var subjects = (0, _utils.clone)(this.data);
      return subjects.map(function (subject) {
        if (subject.type === '1') {
          subject.options = subject.options.map(function (option) {
            option.checked = false;
            var ref = document.querySelectorAll(".subject-wrapper-".concat(subject.id, " .option-input-").concat(option.id));

            if (ref && ref[0].checked) {
              option.checked = true;
            }

            return option;
          });
        }

        return subject;
      });
    }
  }]);

  return SubjectShown;
}();

var _default = SubjectShown;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/template/question-select.js":
/*!*****************************************!*\
  !*** ./src/template/question-select.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TPL_EDIT_SELECT_OPTION = exports.TPL_SELECT_OPTION = exports.TPL_SELECT = void 0;
var TPL_SELECT = "\n    <div class=\"subject-wrapper subject-wrapper-{{id}}\">\n        <div class=\"topic\">{{topic}}</div>\n        <div class=\"options\">{{options}}</div>\n    </div>\n";
exports.TPL_SELECT = TPL_SELECT;
var TPL_SELECT_OPTION = "\n    <div class=\"option\">\n        <span>{{key}}. {{option}}</span>\n    </div>\n";
exports.TPL_SELECT_OPTION = TPL_SELECT_OPTION;
var TPL_EDIT_SELECT_OPTION = "\n    <div class=\"option\">\n        <span><input type=\"radio\" class=\"option-input option-input-{{id}}\" value=\"{{value}}\"></span>\n        <span>{{key}}. {{option}}</span>\n    </div>\n";
exports.TPL_EDIT_SELECT_OPTION = TPL_EDIT_SELECT_OPTION;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ })

/******/ });
});
//# sourceMappingURL=subject-shown-test.js.map