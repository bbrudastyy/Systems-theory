import Abstract from "./abstract.js";

const getForm = (element) => {
  const {fieldset} = element;

  return `<div class="main__wrapper">
  <form action="" class="main__form form">
      <fieldset class="form__heading">${fieldset}</fieldset>
    </form>
    </div>`;
};

class FormView extends Abstract {
  constructor(template) {
    super();
    this._template = template;
    this._element = null;
  }

  getTemplate() {
    return getForm(this._template);
  }
}

export default FormView;

