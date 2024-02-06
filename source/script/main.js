import "../scss/style.scss"
import "./utils/prism.js";
import "./modules/header/init-page-menu.js";
import { iosVhFix } from "./utils/ios-vh-fix.js";
import { initPageMenu } from '@/script/modules/header/init-page-menu.js'
import { initCourses } from '@/script/modules/courses/init-courses.js'

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initPageMenu();

    initCourses();

  });
});
