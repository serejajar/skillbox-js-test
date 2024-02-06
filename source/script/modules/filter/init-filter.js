import { renderCourses } from '@/script/modules/courses/render-courses.js'

const initFilter = (data) => {
  const filterBtns = document.querySelectorAll('[data-filter="link"]');

  filterBtns.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();

      filterBtns.forEach((btn) => {
        btn.classList.remove('is-active');
      });

      btn.classList.add('is-active');

      const tag = btn.getAttribute('href');

      renderCourses(data, tag);
    }
  });
};


export { initFilter };