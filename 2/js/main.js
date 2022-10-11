// Функция для получения случайного целого числа от min до max включительно (Источник: https://www.w3schools.com/js/js_random.asp)
function getRndInteger(min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      const maxNumber = min;
      min = max;
      max = maxNumber;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  return NaN;
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

getRndInteger(34.1231, 11.231);
getStringLength('Peace!', 140);
