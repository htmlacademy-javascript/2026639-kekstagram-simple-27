import {isEscKeyPressed} from './utils.js';

const UPLOAD_FIELD = document.querySelector('#upload-file');
const PHOTO_EDITOR_FORM = document.querySelector('.img-upload__overlay');
const BODY = document.body;
const PHOTO_EDITOR_FORM_CLOSE_BUTTON = document.querySelector('#upload-cancel');
const SCALE_CONTROL_FIELD = document.querySelector('.img-upload__scale');
const SCALE_VALUE = document.querySelector('.scale__control--value');
const IMG_PREVIEW = document.querySelector('.img-upload__preview img');
const EFFECTS_LIST = document.querySelector('.effects__list');
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

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
  UPLOAD_FIELD.value = '';
  PHOTO_EDITOR_FORM.classList.add('hidden');
  BODY.classList.remove('modal-open');
  PHOTO_EDITOR_FORM_CLOSE_BUTTON.removeEventListener('click', closePhotoEditorForm);
  document.removeEventListener('keydown', onFormEscKeydown);
}

// Функция открытия формы редактирования фотографии
function openPhotoEditorForm() {
  // Установка обработчика события закрытия формы редактирования фотографии
  IMG_PREVIEW.style.transform = `scale(${DEFAULT_SCALE / 100})`;
  updateImageScaleValue();
  PHOTO_EDITOR_FORM.classList.remove('hidden');
  BODY.classList.add('modal-open');
  PHOTO_EDITOR_FORM_CLOSE_BUTTON.addEventListener('click', closePhotoEditorForm);
  document.addEventListener('keydown', onFormEscKeydown);
}

// Функция для определения масштаба изображения
function getCurrentImageScale() {
  return 100 * IMG_PREVIEW.style.transform.replace(/[^0-9.,]+/g, '');
}

// Функция для уменьшения масштаба изображения
function reduceImage() {
  const currentImageScale = getCurrentImageScale();
  if (currentImageScale > MIN_SCALE) {
    IMG_PREVIEW.style.transform = `scale(${(currentImageScale - SCALE_STEP) / 100})`;
  }
}

// Функция для увеличения масштаба изображения
function enlargeImage() {
  const currentImageScale = getCurrentImageScale();
  if (currentImageScale < MAX_SCALE) {
    IMG_PREVIEW.style.transform = `scale(${(currentImageScale + SCALE_STEP) / 100})`;
  }
}

// Функция для обновления поля масштаба изображения
function updateImageScaleValue() {
  const currentImageScale = getCurrentImageScale();
  SCALE_VALUE.value = `${currentImageScale}%`;
}

// Функция для изменения масштаба изображения
function changeScale (evt) {
  if (evt.target.matches('.scale__control--smaller')) {
    reduceImage();
  }
  if (evt.target.matches('.scale__control--bigger')) {
    enlargeImage();
  }
  updateImageScaleValue();
}

function changeEffect (evt) {
  if (evt.target.matches('#effect-none')) {
    IMG_PREVIEW.className = 'effects__preview--none';
  }
  if (evt.target.matches('#effect-chrome')) {
    IMG_PREVIEW.className = 'effects__preview--chrome';
  }
  if (evt.target.matches('#effect-sepia')) {
    IMG_PREVIEW.className = 'effects__preview--sepia';
  }
  if (evt.target.matches('#effect-marvin')) {
    IMG_PREVIEW.className = 'effects__preview--marvin';
  }
  if (evt.target.matches('#effect-phobos')) {
    IMG_PREVIEW.className = 'effects__preview--phobos';
  }
  if (evt.target.matches('#effect-heat')) {
    IMG_PREVIEW.className = 'effects__preview--heat';
  }
}

// Установка обработчика события загрузки фотографии
UPLOAD_FIELD.addEventListener('change', openPhotoEditorForm);

// Установка обработчика события изменения масштаба фотографии
SCALE_CONTROL_FIELD.addEventListener('click', changeScale);

// Установка обработчика события изменения эффекта фотографии
EFFECTS_LIST.addEventListener('change', changeEffect);

// Функция для блокирования кнопки отправки формы
// *пока закомментировал, так как проверять успешность отправки формы нас будут учить дальше*
// function validatePhotoEditorForm() {
//   if (UPLOAD_FIELD.value === '') {
//     PHOTO_EDITOR_FORM_UPLOAD_BUTTON.classList.add('img-upload__submit--disabled');
//     PHOTO_EDITOR_FORM_UPLOAD_BUTTON.setAttribute('disabled', '');
//   }
// }
