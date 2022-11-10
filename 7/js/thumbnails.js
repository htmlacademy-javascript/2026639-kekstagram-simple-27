// Переменная, содержащая в себе целевой тег для размещения фотографий
const PICTURES_CONTAINER = document.querySelector('.pictures');

// Переменная, содержащая в себе шаблон для фотогоафий
const PICTURE_TEMPLATE = document.querySelector('#picture')
  .content.querySelector('.picture');

// Создаём заготовку-контейнер списка фотографии
const PICTURE_BLANK = document.createDocumentFragment();

// Функция для наполнения заготовки данными
function renderTumbnails(picturesData) {
  picturesData.forEach(({url, likes, comments}) => {
    const newTumbnail = PICTURE_TEMPLATE.cloneNode(true);
    newTumbnail.querySelector('.picture__img').src = url;
    newTumbnail.querySelector('.picture__likes').textContent = likes;
    newTumbnail.querySelector('.picture__comments').textContent = comments;

    PICTURE_BLANK.append(newTumbnail);
  });
  // И только в конце отрисовываем всё из заготовки-контейнера
  return PICTURES_CONTAINER.appendChild(PICTURE_BLANK);
}

export {renderTumbnails};

//**********************

// function renderTumbnails(picturesData) {
//   picturesData.reduce()
// }
//
// const renderTumbnails = [{url: 'sd', likes: 'asd', comments: 'sad'}]
//   .reduce((arr, {a, b, c}) => {
//     newTumbnail.querySelector('.picture__img').src = url;
//     newTumbnail.querySelector('.picture__likes').textContent = likes;
//     newTumbnail.querySelector('.picture__comments').textContent = comments;
//
//     arr.append(newTumbnail);
//
//     return arr;
// }, document.createDocumentFragment())
