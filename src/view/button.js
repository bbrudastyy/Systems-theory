import Abstract from "./abstract.js";

const getButton = () => {
  return `<button class="form__button">Рассчитать</button>`;

};

class Button extends Abstract {
  getTemplate() {
    return getButton();
  }
}

export default Button;
