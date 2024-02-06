const initCourses = async () => {
  let template = document.querySelector('[data-template="project-card"]');

  if (!template) return;

  const response = await fetch('public/projects.json');

  if (!response.ok) return

  // данные и шаблон полученны, отображаем карточки
  const parent = document.querySelector('[data-project="parent"]');
  parent.classList.add('is-active')


  const data = await response.json();

  data.forEach((item) => {
    const clonedTemplate = template.content.cloneNode(true);

    const li = clonedTemplate.querySelector('[data-template="element"]');

    const link = clonedTemplate.querySelector('.product-card__shadow-link');
    link.href = item.href;

    const title = clonedTemplate.querySelector('.product-card__title');
    title.textContent = item.title;

    const img = clonedTemplate.querySelector('.product-card__img');
    img.src = item.src;
    img.alt = item.alt;
    img.width = item.width;
    img.height = item.height;

    const label = clonedTemplate.querySelector('.product-card__label');
    label.innerText = item.label;

    const date = clonedTemplate.querySelector('.product-card__date');
    date.innerText = item.date;


    if (!item.hit) {
      const hit = clonedTemplate.querySelector('.product-card__hit');
      hit.remove();
    }

    const card = clonedTemplate.querySelector('.product-card');
    card.classList.add(...item.classes)

    parent.appendChild(li);
  })
};

export { initCourses };