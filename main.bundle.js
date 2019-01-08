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

var showTrivia = function showTrivia(trivia) {
  $('.trivia-container').append("<div class=\"trivia-fact\">\n      ".concat(trivia.text, "\n    </div>\n    "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFRyaXZpYSIsIm0iLCJkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VEYXRhIiwic2hvd1RyaXZpYSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwidHJpdmlhIiwiJCIsImFwcGVuZCIsInRleHQiLCJyYW5kb21Nb250aCIsIm51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN0cmluZ2VkTnVtIiwidG9TdHJpbmciLCJjaGVja0xlbmd0aCIsInJhbmRvbURheSIsImxlbmd0aCIsIm9uIiwicmVtb3ZlIiwidmFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxF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RCxFQUFJQyxDQUFKLENBQVQ7QUFDRCxDQVBELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGdldFRyaXZpYSA9IChtLCBkKSA9PiB7XG4gIGZldGNoKGBodHRwOi8vbnVtYmVyc2FwaS5jb20vJHttfS8ke2R9L2RhdGU/anNvbmApXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4ocmVzcG9uc2VEYXRhID0+IHNob3dUcml2aWEocmVzcG9uc2VEYXRhKSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoeyBlcnJvciB9KSk7XG59XG5cbmNvbnN0IHNob3dUcml2aWEgPSAodHJpdmlhKSA9PiB7XG4gICQoJy50cml2aWEtY29udGFpbmVyJykuYXBwZW5kKFxuICAgIGA8ZGl2IGNsYXNzPVwidHJpdmlhLWZhY3RcIj5cbiAgICAgICR7dHJpdmlhLnRleHR9XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG5cbmNvbnN0IHJhbmRvbU1vbnRoID0gKCkgPT4ge1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpICsgMVxuICBsZXQgc3RyaW5nZWROdW0gPSBudW0udG9TdHJpbmcoKVxuICByZXR1cm4gY2hlY2tMZW5ndGgoc3RyaW5nZWROdW0pXG59XG5cbmNvbnN0IHJhbmRvbURheSA9ICgpID0+IHtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMxKSArIDFcbiAgbGV0IHN0cmluZ2VkTnVtID0gbnVtLnRvU3RyaW5nKClcbiAgcmV0dXJuIGNoZWNrTGVuZ3RoKHN0cmluZ2VkTnVtKVxufVxuXG5jb25zdCBjaGVja0xlbmd0aCA9IChzdHJpbmdlZE51bSkgPT4ge1xuICBpZihzdHJpbmdlZE51bS5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGAwJHtzdHJpbmdlZE51bX1gXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cmluZ2VkTnVtXG4gIH1cbn1cblxuJCgnLnN1Ym1pdC1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICQoJy50cml2aWEtZmFjdCcpLnJlbW92ZSgpO1xuICBsZXQgbSA9ICQoJy5tb250aC1maWVsZCcpLnZhbCgpO1xuICBsZXQgZCA9ICQoJy5kYXktZmllbGQnKS52YWwoKTtcbiAgZ2V0VHJpdmlhKG0sIGQpO1xufSlcblxuJCgnLmNsZWFyLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgJCgnLm1vbnRoLWZpZWxkJykudmFsKCcwMScpO1xuICAkKCcuZGF5LWZpZWxkJykudmFsKCcwMScpO1xuICAkKCcudHJpdmlhLWZhY3QnKS5yZW1vdmUoKTtcbn0pXG5cbiQoJy5yYW5kb20tYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgbSA9IHJhbmRvbU1vbnRoKCk7XG4gIGxldCBkID0gcmFuZG9tRGF5KCk7XG4gICQoJy5tb250aC1maWVsZCcpLnZhbChtKTtcbiAgJCgnLmRheS1maWVsZCcpLnZhbChkKTtcbiAgJCgnLnRyaXZpYS1mYWN0JykucmVtb3ZlKCk7XG4gIGdldFRyaXZpYShtLCBkKTtcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9