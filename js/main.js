import './utils.js';
import {createDescription} from './data.js';
import {PHOTO_DESCRIPTIONS_COUNT} from './constants.js';

// Формирование массива объектов
const photoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, (_, photoindex) =>
  createDescription (photoindex + 1)
);

// eslint-disable-next-line no-console
console.log(photoDescriptions);
