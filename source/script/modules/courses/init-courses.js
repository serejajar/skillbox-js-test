import { renderCourses } from '@/script/modules/courses/render-courses.js'

const initCourses = async () => {
   const response = await fetch('public/projects.json');

  if (!response.ok) return

  const data = await response.json();

  renderCourses(data);

  return data
};

export { initCourses };