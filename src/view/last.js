import Abstract from "./abstract.js";

const getEfficiency = () => {
  return `<div class="form__mark"">
      <label class="form__label">Расчет экономической эффективности</label>
      <input class="form__text form__last" value="0" readonly type="text">
      <button class="form__button button__ok">Рассчитать</button>
    </div>`;

};

class LastE extends Abstract {
  getTemplate() {
    return getEfficiency();
  }
}

export default LastE;
