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

// Функция для проверки нажания кнопки Escape
function isEscKeyPressed(evt) {
  return evt.key === 'Escape';
}


//=================================
// Вывод сообщения в отдельном окне

const BODY = document.body;

// Функция для закрытия сообщения по нажатию Escape
function onMessageEscKeydown (evt) {
  if (isEscKeyPressed(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

// Функция для закрытия сообщения по нажатию вне сообщения
function outsideMessageClick (evt) {
  const MESSAGE_INNER = document.querySelector('div.message__inner');
  if (!MESSAGE_INNER.contains(evt.target)) {
    closeMessage();
  }
}

// Функция закрытия сообщения
function closeMessage () {
  const MESSAGE_SECTION = document.querySelector('section.message');
  BODY.removeChild(MESSAGE_SECTION);
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', outsideMessageClick);
}

// Функция отображения сообщения
function showMessage (messageType, messageInfo, messageText, messageButtonText) {

  // Переменная для шаблона сообщения
  let MESSAGE_TEMPLATE;
  if (messageType === 'success') {
    // Выбираем шаблон для вывода сообщения об успехе
    MESSAGE_TEMPLATE = document.querySelector('#success').content.querySelector('.success');
  } else {
    // Выбираем шаблон для вывода сообщения об ошибке
    MESSAGE_TEMPLATE = document.querySelector('#error').content.querySelector('.error');
  }

  // Создаём заготовку-контейнер списка фотографии
  const MESSAGE_BLANK = document.createDocumentFragment();

  const newMessage = MESSAGE_TEMPLATE.cloneNode(true);
  // newMessage.querySelector('.message__title').textContent = `${messageInfo}. ${messageText}`;

  // Проверяем наличие модифицирующих аргументов
  if (typeof messageInfo !== 'undefined' || typeof messageText !== 'undefined') {
    newMessage.querySelector('.message__title').textContent = '';
    // Редактируем текст сообщения
    if (typeof messageInfo !== 'undefined') {
      newMessage.querySelector('.message__title').textContent += `${messageInfo}. `;
    }

    if (typeof messageText !== 'undefined') {
      newMessage.querySelector('.message__title').textContent += `${messageText}`;
    }
  }

  // Проверяем наличие аргумента, модифицирующего текст кнопки
  if (typeof messageButtonText !== 'undefined') {
    newMessage.querySelector('.message__button').textContent = messageButtonText;
  }

  newMessage.querySelector('.message__button').addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', outsideMessageClick);
  MESSAGE_BLANK.append(newMessage);
  return BODY.appendChild(MESSAGE_BLANK);
}

//=========

export {getRndInteger};
export {getStringLength};
export {isEscKeyPressed};
export {showMessage};
