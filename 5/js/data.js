import {getRndInteger} from './utils.js';
import {LIKES_COUNT} from './constants.js';
import {COMMENTS_COUNT} from './constants.js';
import {PHOTO_DESCRIPTIONS} from './constants.js';

// Функция для получения случайного описания фотографии
function getPhotoDescription(descriptionsArray){
  return descriptionsArray[getRndInteger(0, descriptionsArray.length - 1)];
}

// Функция для получения случайного количества лайков
function getPhotoLikes() {
  return getRndInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX);
}

// Функция для получения случайного количества комментов
function getPhotoComments() {
  return getRndInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX);
}

// Формирование объекта с информацией о фотографии
const createDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getPhotoDescription(PHOTO_DESCRIPTIONS),
  likes: getPhotoLikes(),
  comments: getPhotoComments(),
});

export {createDescription};
