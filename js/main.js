import './utils.js';
import {renderTumbnails} from './thumbnails.js';
import {createDescription} from './data.js';
import {PHOTO_DESCRIPTIONS_COUNT} from './constants.js';
import './upload.js';

// Формирование массива объектов
const photoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, (_, photoindex) =>
  createDescription (photoindex + 1)
);

renderTumbnails(photoDescriptions);
