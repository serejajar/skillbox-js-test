const renderCard = (itemData) => {
  const template = document.querySelector('[data-template="project-card"]');

  // доп. проверка к основной, если шаблон получен, то отображаем карточки
  if (!template) return;

  const clonedTemplate = template.content.cloneNode(true);

  const li = clonedTemplate.querySelector('[data-template="element"]');

  const link = clonedTemplate.querySelector('.product-card__shadow-link');
  link.href = itemData.href;

  const title = clonedTemplate.querySelector('.product-card__title');
  title.textContent = itemData.title;

  const img = clonedTemplate.querySelector('.product-card__img');
  img.src = itemData.src;
  img.alt = itemData.alt;
  img.width = itemData.width;
  img.height = itemData.height;

  const label = clonedTemplate.querySelector('.product-card__label');
  label.innerText = itemData.label;

  const date = clonedTemplate.querySelector('.product-card__date');
  date.innerText = itemData.date;


  if (!itemData.hit) {
    const hit = clonedTemplate.querySelector('.product-card__hit');
    hit.remove();
  }

  const card = clonedTemplate.querySelector('.product-card');
  card.classList.add(...itemData.classes)

  return li;
}

const renderCourses = (data, tag = '#all') => {
  const parent = document.querySelector('[data-project="parent"]');
  parent.classList.add('is-active')
  parent.innerHTML = ''

  data.forEach((itemData) => {
    if (tag === '#all' || itemData.tags.includes(tag)) {
      const li = renderCard(itemData);
      parent.appendChild(li);
    }
  })
}

export { renderCourses };