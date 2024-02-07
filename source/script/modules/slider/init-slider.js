import Swiper from 'swiper/bundle';

const initSlider = () => {
  // не инициализируем слайдер если нет контейнера
  if (!document.querySelector('.products__swiper')) return;

  new Swiper('.products__swiper', {
    spaceBetween: 10,
    rewind: true,
    wrapperClass: 'products__list',
    slideClass: 'products__item',

    navigation: {
      nextEl: '.products__nav-button--next',
      prevEl: '.products__nav-button--prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1341: {
        slidesPerView: 3,
      },
    }
  });
}

export { initSlider }