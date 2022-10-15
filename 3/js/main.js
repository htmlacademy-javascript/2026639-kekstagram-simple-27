// Функция для получения случайного целого числа от min до max включительно (Источник: https://www.w3schools.com/js/js_random.asp)
function getRndInteger(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }

  if (min > max) {
    const maxNumber = min;
    min = max;
    max = maxNumber;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Функция для получения длины строки
function getStringLength(str, maxLength) {
  if (typeof str !== 'string') {
    // eslint-disable-next-line no-console
    console.warn('The first argument of getStringLength function is not a String');
    return undefined;
  } else {
    return str.length <= maxLength;
  }
}

getStringLength('Peace!', 140);

//
// Выполнение задания 4 модуля
//

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

// Формирование массива объектов
const photoDescriptions = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, (_, photoindex) =>
  createDescription (photoindex + 1)
);

// eslint-disable-next-line no-console
console.log(photoDescriptions);
