// Функция для получения случайного целого числа от min до max включительно (Источник: https://www.w3schools.com/js/js_random.asp)
function getRndInteger(min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      const maxNumber = min;
      min = max;
      max = maxNumber;
    }
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  return NaN;
}

// Функция для получения длины строки
function getStringLength(str) {
  if (typeof str !== 'string') {
    return undefined;
  } else {
    const stringLength = str.length;
    return stringLength;
  }
}

getRndInteger();
getStringLength();
