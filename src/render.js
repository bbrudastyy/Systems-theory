import Abstract from "./view/abstract.js";

export const render = (container, template) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (template instanceof Abstract) {
    template = template.getElement();
  }

  container.append(template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


