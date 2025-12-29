import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  const successButton = successElement.querySelector('.success__button');

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessMessage();
    }
  };

  const onBodyClick = (evt) => {
    if (evt.target.closest('.success__inner')) {
      return;
    }
    closeSuccessMessage();
  };

  function closeSuccessMessage() {
    successElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onBodyClick);
  }

  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onBodyClick);
};

const showErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);

  const errorButton = errorElement.querySelector('.error__button');

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorMessage();
    }
  };

  const onBodyClick = (evt) => {
    if (evt.target.closest('.error__inner')) {
      return;
    }
    closeErrorMessage();
  };

  function closeErrorMessage() {
    errorElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onBodyClick);
  }

  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onBodyClick);
};

export { showSuccessMessage, showErrorMessage };
