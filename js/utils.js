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

// Функция для проверки нажания кнопки Escape
function isEscKeyPressed(evt) {
  return evt.key === 'Escape';
}

export {isEscKeyPressed};
export {showMessage};
