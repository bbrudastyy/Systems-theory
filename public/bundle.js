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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
let Data = [
  {
    fieldset: `Расчет экономической эффективности`,
    label: [`Операционные расходы`, `Расходы по банковским операциям`, `Прочие расходы`, `Операционные доходы`, `Доходы от банковский операций`, `Прочие доходы`, `Экономическая эффективность`],
    value: 0
  },
  {
    fieldset: `Операционные расходы`,
    label: [`Выплаты комиссий по услугам, оказываемым клиентами, а также за корреспондентские отношения с другими банками`, `Выплаты процентов по депозитам`, `Комиссии по операциям с инвалютой`],
    value: 0
  },
  {
    fieldset: `Расходы по банковским операциям`,
    label: [`Процентные расходы по выпущенным долговым обязательствам`, `Процентные расходы по привлеченным драгоценным металлам`],
    value: 0
  },
  {
    fieldset: `Прочие расходы`,
    label: [`Отрицательные курсовые разницы`, `Содержание технических средств управления, оплата услуг вычислительных центров`, `Издержки, связанные с перевозкой банковских документов и инкассацией выручки`],
    value: 0
  },
  {
    fieldset: `Операционные доходы`,
    label: [`Доходы, полученные банковским учреждением за деятельность по размещению государственных облигаций на финансовом рынке`, `Доходы от участия в деятельности других фирм`],
    value: 0
  },
  {
    fieldset: `Доходы от банковский операций`,
    label: [`Плата за услуги по ведению и открытию расчетных, валютных, текущих, ссудных счетов`, `Проценты по кредитам (полученные и начисленные)`, `Процентные доходы по приобретенным долговым обязательствам`],
    value: 0
  },
  {
    fieldset: `Прочие доходы`,
    label: [`Положительные курсовые разницы`, `Доходы от операций с финансовыми инструментами`, `Проценты, которые выплачены банками-корреспондентами`],
    value: 0
  },

];




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_efficiency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/efficiency.js */ "./src/view/efficiency.js");
/* harmony import */ var _view_formView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/formView.js */ "./src/view/formView.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _view_newLilst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/newLilst */ "./src/view/newLilst.js");
/* harmony import */ var _view_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/button.js */ "./src/view/button.js");
/* harmony import */ var _view_last_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/last.js */ "./src/view/last.js");








const getValue = () => {
  const inputs = document.querySelectorAll(`input`);
  let result = 0;
  for (let input of inputs) {
    result += Number(input.value);
  }
  return result;
};


const renderForm = (elementList, element) => {
  const formView = new _view_formView_js__WEBPACK_IMPORTED_MODULE_1__["default"](element);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(elementList, formView);
};

const renderElement = (elementList, element) => {
  const efficiency = new _view_efficiency_js__WEBPACK_IMPORTED_MODULE_0__["default"](element);

  const replaceChildToMain = (evt) => {
    evt.preventDefault();
    element.value = getValue();
    document.querySelector(`.main__wrapper`).remove();
    renderForm(document.querySelector(`.main`), _data_js__WEBPACK_IMPORTED_MODULE_3__["Data"][0]);
    renderElements();
  };

  const replaceMainToChild = (evt) => {
    evt.preventDefault();
    document.querySelector(`.main__wrapper`).remove();
    renderForm(document.querySelector(`.main`), element);
    newRenderElements(element);
    Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(document.querySelector(`form`), new _view_button_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    const button = document.querySelector(`.form__button`);
    button.addEventListener(`click`, replaceChildToMain);
  };

  efficiency.getElement().querySelector(`.form__button`).addEventListener(`click`, replaceMainToChild);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(elementList, efficiency);
};

const getFull = (evt) => {
  evt.preventDefault();
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_3__["Data"].length; i++) {
    if (i < _data_js__WEBPACK_IMPORTED_MODULE_3__["Data"].length / 2) {
      sum1 += Number(_data_js__WEBPACK_IMPORTED_MODULE_3__["Data"][i].value);
    } else {
      sum2 += Number(_data_js__WEBPACK_IMPORTED_MODULE_3__["Data"][i].value);
    }
  }

  if (sum1 !== 0 && sum2 !== 0) {
    const result = sum2 / sum1;
    _data_js__WEBPACK_IMPORTED_MODULE_3__["Data"][0].value = result;
    document.querySelector(`.form__last`).value = result;
  } else {
    document.querySelector(`.form__last`).value = `Плохие данные`;
  }

};

const renderElements = () => {
  const last = new _view_last_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  for (let i = 1; i < _data_js__WEBPACK_IMPORTED_MODULE_3__["Data"].length; i++) {
    renderElement(document.querySelector(`form`), _data_js__WEBPACK_IMPORTED_MODULE_3__["Data"][i]);
  }
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(document.querySelector(`form`), last);
  document.querySelector(`.button__ok`).addEventListener(`click`, getFull);
};

const newRenderElement = (elementList, element) => {
  const newEfficiency = new _view_newLilst__WEBPACK_IMPORTED_MODULE_4__["default"](element);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(elementList, newEfficiency);
};

const newRenderElements = (element) => {
  for (let i = 0; i < element.label.length; i++) {
    newRenderElement(document.querySelector(`form`), element.label[i]);
  }
};

renderForm(document.querySelector(`.main`), _data_js__WEBPACK_IMPORTED_MODULE_3__["Data"][0]);
renderElements();



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: render, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract.js */ "./src/view/abstract.js");


const render = (container, template) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (template instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    template = template.getElement();
  }

  container.append(template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};




/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/button.js":
/*!****************************!*\
  !*** ./src/view/button.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const getButton = () => {
  return `<button class="form__button">Рассчитать</button>`;

};

class Button extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return getButton();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Button);


/***/ }),

/***/ "./src/view/efficiency.js":
/*!********************************!*\
  !*** ./src/view/efficiency.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const getEfficiency = (element) => {
  const {fieldset, value} = element;
  return `<div class="form__mark"">
      <label class="form__label">${fieldset}, тыс.руб</label>
      <input class="form__text" value="${value}" readonly type="text">
      <button class="form__button">Рассчитать</button>
    </div>`;
};

class Efficiency extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(template) {
    super();
    this._template = template;
    this._element = null;
  }
  getTemplate() {
    return getEfficiency(this._template);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Efficiency);


/***/ }),

/***/ "./src/view/formView.js":
/*!******************************!*\
  !*** ./src/view/formView.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const getForm = (element) => {
  const {fieldset} = element;

  return `<div class="main__wrapper">
  <form action="" class="main__form form">
      <fieldset class="form__heading">${fieldset}</fieldset>
    </form>
    </div>`;
};

class FormView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(template) {
    super();
    this._template = template;
    this._element = null;
  }

  getTemplate() {
    return getForm(this._template);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (FormView);



/***/ }),

/***/ "./src/view/last.js":
/*!**************************!*\
  !*** ./src/view/last.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const getEfficiency = () => {
  return `<div class="form__mark"">
      <label class="form__label">Расчет экономической эффективности</label>
      <input class="form__text form__last" value="0" readonly type="text">
      <button class="form__button button__ok">Рассчитать</button>
    </div>`;

};

class LastE extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return getEfficiency();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LastE);


/***/ }),

/***/ "./src/view/newLilst.js":
/*!******************************!*\
  !*** ./src/view/newLilst.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const getNewEfficiency = (label) => {
  return `<div class="form__mark">
      <label class="form__label">${label}, тыс.руб</label>
      <input class="form__text" value="0" type="text">
    </div>`;

};

class newEfficiency extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(template) {
    super();
    this._template = template;
    this._element = null;
    this._position = this._template.position + 1;
  }
  getTemplate() {
    return getNewEfficiency(this._template);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (newEfficiency);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map