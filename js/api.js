import {showMessage} from './utils.js';

// Источник данных для загрузки
const DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
// Адрес для отправки данных
const DESTINATION_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

// Функция для получения фотографий пользователей с сервера
function getData (onSuccess) {
  fetch(DATA_URL)
    .then((response) => response.json())
    .catch((err) => showMessage('error', err, 'Невозможно загрузить фотографии других пользователей', 'Закрыть'))
    .then((usersPostsData) => onSuccess(usersPostsData));
}

// Функция для отправки фотографии
function sendData (onSuccess, onFail, unexpectedFail, data) {
  fetch(
    DESTINATION_URL,
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch((err) => {
      unexpectedFail(err);
    });
}

export {getData};
export {sendData};
