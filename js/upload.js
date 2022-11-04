import {isEscKeyPressed} from './utils.js';

const UPLOAD_FIELD = document.querySelector('#upload-file');
const PHOTO_EDITOR_FORM = document.querySelector('.img-upload__overlay');
const BODY = document.body;
const PHOTO_EDITOR_FORM_CLOSE_BUTTON = document.querySelector('#upload-cancel');
// const PHOTO_EDITOR_FORM_UPLOAD_BUTTON = document.querySelector('#upload-submit');

// Функция для закрытия формы по нажатию Escape
function onFormEscKeydown(evt) {
  if (isEscKeyPressed(evt)) {
    evt.preventDefault();
    closePhotoEditorForm();
  }
}

// Функция закрытия формы редактирования фотографии
function closePhotoEditorForm() {
  // Установка обработчика события закрытия формы редактирования фотографии
  PHOTO_EDITOR_FORM.classList.add('hidden');
  BODY.classList.remove('modal-open');
  PHOTO_EDITOR_FORM_CLOSE_BUTTON.removeEventListener('click', closePhotoEditorForm);
  document.removeEventListener('keydown', onFormEscKeydown);
}

// Функция открытия формы редактирования фотографии
function openPhotoEditorForm() {
  // Установка обработчика события закрытия формы редактирования фотографии
  PHOTO_EDITOR_FORM.classList.remove('hidden');
  BODY.classList.add('modal-open');
  PHOTO_EDITOR_FORM_CLOSE_BUTTON.addEventListener('click', closePhotoEditorForm);
  document.addEventListener('keydown', onFormEscKeydown);
}

// Установка обработчика события загрузки фотографии
UPLOAD_FIELD.addEventListener('change', openPhotoEditorForm);

// Функция для блокирования кнопки отправки формы
// *пока закомментировал, так как проверять успешность отправки формы нас будут учить дальше*
// function validatePhotoEditorForm() {
//   if (UPLOAD_FIELD.value === '') {
//     PHOTO_EDITOR_FORM_UPLOAD_BUTTON.classList.add('img-upload__submit--disabled');
//     PHOTO_EDITOR_FORM_UPLOAD_BUTTON.setAttribute('disabled', '');
//   }
// }
