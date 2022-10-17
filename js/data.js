import {getRndInteger} from './util.js';

const PHOTO_DESCRIPTIONS = [
  'Have try new recipe today',
  'Today\'s car repair routine',
  'What new film should I watch today?',
  'Old friends meet',
  'Hello Georgia!',
  'Hello Kazakhstan!',
  'Stop war!',
  'Where to find the churchhela in Uralsk?',
  'Thank to Kazakhs for the hospitality so much!',
  'Goodbye russia!',
  'I want back to 2020!',
  'What is better RB or JZ?',
  'My first shot on my new Sony a9000!',
  'Kodak Portra is my favourite film',
  'Look at this skintone!',
  'My next travel target',
  'G\'day day from parrots on my terrace!',
  '７１の曜日',
  'こんにちわ',
  'Спасибо HTML Academy за крутой курс!',
  'Noting is better than vegimite on toast',
  'One way ticket',
  'Kerri Chandler\'s Atmosphere track on repeat this week',
  'New set of 45\'s',
  'My Gibson Les Paul Custom 1985 for sale',
];

const PHOTO_DESCRIPTIONS_COUNT = 25;

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200
};

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
export {PHOTO_DESCRIPTIONS_COUNT};
