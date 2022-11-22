// Переменная, содержащая в себе целевой тег для размещения фотографий
const picturesContainerElement = document.querySelector('.pictures');

// Переменная, содержащая в себе шаблон для фотогоафий
const picturesTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

// Функция для наполнения заготовки данными
function renderTumbnails (picturesData) {
  // Создаём заготовку-контейнер списка фотографии
  const picturesBlankElement = document.createDocumentFragment();

  picturesData.forEach(({url, likes, comments}) => {
    const newTumbnail = picturesTemplateElement.cloneNode(true);
    newTumbnail.querySelector('.picture__img').src = url;
    newTumbnail.querySelector('.picture__likes').textContent = likes;
    newTumbnail.querySelector('.picture__comments').textContent = comments;

    picturesBlankElement.append(newTumbnail);
  });
  // И только в конце отрисовываем всё из заготовки-контейнера
  return picturesContainerElement.appendChild(picturesBlankElement);
}

export {renderTumbnails};
