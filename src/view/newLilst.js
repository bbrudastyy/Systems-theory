import Abstract from "./abstract.js";

const getNewEfficiency = (label) => {
  return `<div class="form__mark">
      <label class="form__label">${label}, тыс.руб</label>
      <input class="form__text" value="0" type="text">
    </div>`;

};

class newEfficiency extends Abstract {
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

export default newEfficiency;
