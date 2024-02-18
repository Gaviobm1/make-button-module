const setButtonTextContent = (obj) => ({
  setTextContent: (value, key = 'buttonElement') => {
    const button = obj[key];
    button.textContent = value;
  },
});

const attachMethod = (obj) => ({
  attach: (parent = document.body, child = 'list') => {
    parent.appendChild(obj[child]);
  },
});

const setClassMethod = (obj) => ({
  setClass: (classToSet, key = 'list') => {
    const nodes = obj[key].childNodes
    nodes.forEach((node) => {
      node.classList.add(classToSet);
    });
  },
});

const addButtonEventListener = (obj) => ({
  addListener: (callbackFn, args = null, key = 'buttonElement') => {
    obj[key].addEventListener('click', () => {
      callbackFn(...args);
    });
  },
});

const buttonClass = function makeButtonClass(buttonElement) {
  const button = {
    buttonElement,
  };
  return {
    ...button,
    ...setButtonTextContent(button),
    ...addButtonEventListener(button),
    ...attachMethod(button),
    ...setClassMethod(button),
  };
};

export {
  buttonClass,
  setButtonTextContent,
  addButtonEventListener,
  attachMethod,
  setClassMethod,
 };