import {getPictures} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import {setUserFormSubmit, hideModal} from './form.js';

renderThumbnails(getPictures());

setUserFormSubmit(hideModal);
