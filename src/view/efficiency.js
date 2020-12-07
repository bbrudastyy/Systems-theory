import Abstract from "./abstract.js";

const getEfficiency = (element) => {
  const {fieldset, value} = element;
  return `<div class="form__mark"">
      <label class="form__label">${fieldset}, тыс.руб</label>
      <input class="form__text" value="${value}" readonly type="text">
      <button class="form__button">Рассчитать</button>
    </div>`;
};

class Efficiency extends Abstract {
  constructor(template) {
    super();
    this._template = template;
    this._element = null;
  }
  getTemplate() {
    return getEfficiency(this._template);
  }
}

export default Efficiency;
