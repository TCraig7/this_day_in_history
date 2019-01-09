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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import {randomMonth, randomDay, getTrivia} from 'methods';
var getTrivia = function getTrivia(m, d) {
  fetch("http://numbersapi.com/".concat(m, "/").concat(d, "/date?json")).then(function (response) {
    return response.json();
  }).then(function (responseData) {
    return showTrivia(responseData);
  }).catch(function (error) {
    return console.error({
      error: error
    });
  });
};

var randomMonth = function randomMonth() {
  var num = Math.floor(Math.random() * 12) + 1;
  var stringedNum = num.toString();
  return checkLength(stringedNum);
};

var randomDay = function randomDay() {
  var num = Math.floor(Math.random() * 31) + 1;
  var stringedNum = num.toString();
  return checkLength(stringedNum);
};

var checkLength = function checkLength(stringedNum) {
  if (stringedNum.length < 2) {
    return "0".concat(stringedNum);
  } else {
    return stringedNum;
  }
};

var showTrivia = function showTrivia(trivia) {
  $('.trivia-container').append("<div class=\"trivia-fact\">\n      ".concat(trivia.text, "\n    </div>\n    "));
};

$('.submit-button').on('click', function () {
  $('.trivia-fact').remove();
  var m = $('.month-field').val();
  var d = $('.day-field').val();
  getTrivia(m, d);
});
$('.clear-button').on('click', function () {
  $('.month-field').val('01');
  $('.day-field').val('01');
  $('.trivia-fact').remove();
});
$('.random-button').on('click', function () {
  var m = randomMonth();
  var d = randomDay();
  $('.month-field').val(m);
  $('.day-field').val(d);
  $('.trivia-fact').remove();
  getTrivia(m, d);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFRyaXZpYSIsIm0iLCJkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VEYXRhIiwic2hvd1RyaXZpYSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwicmFuZG9tTW9udGgiLCJudW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdHJpbmdlZE51bSIsInRvU3RyaW5nIiwiY2hlY2tMZW5ndGgiLCJyYW5kb21EYXkiLCJsZW5ndGgiLCJ0cml2aWEiLCIkIiwiYXBwZW5kIiwidGV4dCIsIm9uIiwicmVtb3ZlIiwidmFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxD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LENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFUO0FBQ0QsQ0FQRCxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCIvLyBpbXBvcnQge3JhbmRvbU1vbnRoLCByYW5kb21EYXksIGdldFRyaXZpYX0gZnJvbSAnbWV0aG9kcyc7XG5cbmNvbnN0IGdldFRyaXZpYSA9IChtLCBkKSA9PiB7XG4gIGZldGNoKGBodHRwOi8vbnVtYmVyc2FwaS5jb20vJHttfS8ke2R9L2RhdGU/anNvbmApXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4ocmVzcG9uc2VEYXRhID0+IHNob3dUcml2aWEocmVzcG9uc2VEYXRhKSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoeyBlcnJvciB9KSk7XG59XG5cbmNvbnN0IHJhbmRvbU1vbnRoID0gKCkgPT4ge1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpICsgMVxuICBsZXQgc3RyaW5nZWROdW0gPSBudW0udG9TdHJpbmcoKVxuICByZXR1cm4gY2hlY2tMZW5ndGgoc3RyaW5nZWROdW0pXG59XG5cbmNvbnN0IHJhbmRvbURheSA9ICgpID0+IHtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMxKSArIDFcbiAgbGV0IHN0cmluZ2VkTnVtID0gbnVtLnRvU3RyaW5nKClcbiAgcmV0dXJuIGNoZWNrTGVuZ3RoKHN0cmluZ2VkTnVtKVxufVxuXG5jb25zdCBjaGVja0xlbmd0aCA9IChzdHJpbmdlZE51bSkgPT4ge1xuICBpZihzdHJpbmdlZE51bS5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGAwJHtzdHJpbmdlZE51bX1gXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cmluZ2VkTnVtXG4gIH1cbn1cblxuY29uc3Qgc2hvd1RyaXZpYSA9ICh0cml2aWEpID0+IHtcbiAgJCgnLnRyaXZpYS1jb250YWluZXInKS5hcHBlbmQoXG4gICAgYDxkaXYgY2xhc3M9XCJ0cml2aWEtZmFjdFwiPlxuICAgICAgJHt0cml2aWEudGV4dH1cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuJCgnLnN1Ym1pdC1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICQoJy50cml2aWEtZmFjdCcpLnJlbW92ZSgpXG4gIGxldCBtID0gJCgnLm1vbnRoLWZpZWxkJykudmFsKClcbiAgbGV0IGQgPSAkKCcuZGF5LWZpZWxkJykudmFsKClcbiAgZ2V0VHJpdmlhKG0sIGQpXG59KVxuXG4kKCcuY2xlYXItYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAkKCcubW9udGgtZmllbGQnKS52YWwoJzAxJyk7XG4gICQoJy5kYXktZmllbGQnKS52YWwoJzAxJyk7XG4gICQoJy50cml2aWEtZmFjdCcpLnJlbW92ZSgpO1xufSlcblxuJCgnLnJhbmRvbS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XG4gIGxldCBtID0gcmFuZG9tTW9udGgoKTtcbiAgbGV0IGQgPSByYW5kb21EYXkoKTtcbiAgJCgnLm1vbnRoLWZpZWxkJykudmFsKG0pO1xuICAkKCcuZGF5LWZpZWxkJykudmFsKGQpO1xuICAkKCcudHJpdmlhLWZhY3QnKS5yZW1vdmUoKTtcbiAgZ2V0VHJpdmlhKG0sIGQpO1xufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=