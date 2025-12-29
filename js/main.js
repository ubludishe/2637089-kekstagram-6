import {renderThumbnails} from './thumbnail.js';
import {setUserFormSubmit, hideModal} from './form.js';
import {getData} from './api.js';
import {showAlert, debounce} from './util.js';
import {init as initFilter, getFilteredPictures} from './filter.js';

getData(
  (pictures) => {
    renderThumbnails(pictures);
    initFilter(pictures, debounce(renderThumbnails));
  },
  () => {
    showAlert('Не удалось загрузить данные. Попробуйте обновить страницу');
  }
);

setUserFormSubmit(hideModal);
