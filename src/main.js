import Efficiency from "./view/efficiency.js";
import FormView from "./view/formView.js";
import {render} from "./render.js";
import {Data} from "./data.js";
import NewEfficiency from "./view/newLilst";
import Button from "./view/button.js";
import LastE from "./view/last.js";

const getValue = () => {
  const inputs = document.querySelectorAll(`input`);
  let result = 0;
  for (let input of inputs) {
    result += Number(input.value);
  }
  return result;
};


const renderForm = (elementList, element) => {
  const formView = new FormView(element);
  render(elementList, formView);
};

const renderElement = (elementList, element) => {
  const efficiency = new Efficiency(element);

  const replaceChildToMain = (evt) => {
    evt.preventDefault();
    element.value = getValue();
    document.querySelector(`.main__wrapper`).remove();
    renderForm(document.querySelector(`.main`), Data[0]);
    renderElements();
  };

  const replaceMainToChild = (evt) => {
    evt.preventDefault();
    document.querySelector(`.main__wrapper`).remove();
    renderForm(document.querySelector(`.main`), element);
    newRenderElements(element);
    render(document.querySelector(`form`), new Button());
    const button = document.querySelector(`.form__button`);
    button.addEventListener(`click`, replaceChildToMain);
  };

  efficiency.getElement().querySelector(`.form__button`).addEventListener(`click`, replaceMainToChild);
  render(elementList, efficiency);
};

const getFull = (evt) => {
  evt.preventDefault();
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < Data.length; i++) {
    if (i < Data.length / 2) {
      sum1 += Number(Data[i].value);
    } else {
      sum2 += Number(Data[i].value);
    }
  }

  if (sum1 !== 0 && sum2 !== 0) {
    const result = sum2 / sum1;
    Data[0].value = result;
    document.querySelector(`.form__last`).value = result;
  } else {
    document.querySelector(`.form__last`).value = `Плохие данные`;
  }

};

const renderElements = () => {
  const last = new LastE();
  for (let i = 1; i < Data.length; i++) {
    renderElement(document.querySelector(`form`), Data[i]);
  }
  render(document.querySelector(`form`), last);
  document.querySelector(`.button__ok`).addEventListener(`click`, getFull);
};

const newRenderElement = (elementList, element) => {
  const newEfficiency = new NewEfficiency(element);
  render(elementList, newEfficiency);
};

const newRenderElements = (element) => {
  for (let i = 0; i < element.label.length; i++) {
    newRenderElement(document.querySelector(`form`), element.label[i]);
  }
};

renderForm(document.querySelector(`.main`), Data[0]);
renderElements();

