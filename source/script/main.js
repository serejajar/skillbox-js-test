import "../scss/style.scss"
import "./utils/prism.js";
import "./modules/header/init-page-menu.js";
import { iosVhFix } from "./utils/ios-vh-fix.js";
import { initPageMenu } from '@/script/modules/header/init-page-menu.js'
import { initCourses } from '@/script/modules/courses/init-courses.js'
import { initFilter } from '@/script/modules/filter/init-filter.js'

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', async () => {
    initPageMenu();

    const template = document.querySelector('[data-template="project-card"]');

    // оборажаем карточки курсов только если шаблон получен
    if (template) {
      const data = await initCourses();

      initFilter(data);
    }

  });
});
