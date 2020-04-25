const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const InsertionPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, component, place) => {
  switch (place) {
    case InsertionPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case InsertionPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

const replace = (parent, newElement, oldElement) => {
  parent.replaceChild(newElement, oldElement);
};

const remove = (element) => {
  element.remove();
};

export {createElement, InsertionPosition, render, replace, remove};
