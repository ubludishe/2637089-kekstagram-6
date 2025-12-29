import {renderThumbnails} from './thumbnail.js';
import {setUserFormSubmit, hideModal} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData(
  (pictures) => {
    renderThumbnails(pictures);
  },
  () => {
    showAlert('Не удалось загрузить данные. Попробуйте обновить страницу');
  }
);

setUserFormSubmit(hideModal);
