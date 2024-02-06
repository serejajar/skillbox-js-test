/* Примечания:
 - Использовал onclick и др. вместо addEventListener чтобы не добавлялись лишние слушатели
 - Для задания №3 использовал цикл в scss, см. source/scss/blocks/main-nav, но оставил и решение и на js
*/

const initPageMenu = () => {
  // 1. При реализации логики используйте data атрибуты.
  const sandwichBtn = document.querySelector('[data-sandwich]')
  const headerLogo = document.querySelector('[data-header-logo]')
  const mainNav = document.querySelector('[data-main-nav]')


  // 3. При открытии или закрытии меню пункты появляются не сразу все, а постепенно один за другим.

  // const navItems = document.querySelectorAll('[data-nav-item]')
  //
  // for (let i = 0; i < navItems.length; i++) {
  //   const navItem = navItems[i];
  //
  //   navItem.style.transitionDelay = `${i * 0.1}s`
  // }

  sandwichBtn.onclick = () => {
    // 2. При открытии меню скролл страницы должен блокироваться, логотип должен отображаться поверх меню и окрашиваться в белый цвет (Все стили уже написаны для класса .is-menu).
    document.body.classList.toggle('scroll-lock')
    window.scrollTo(0, 0);

    mainNav.classList.toggle('is-active')
    sandwichBtn.classList.toggle('is-active')

    headerLogo.classList.toggle('is-menu')
  }

  // 5. Для реализации логики ресайза можно использовать ResizeObserver, либо breakpoint checker вместе с match media.

  // 6. Если мы находимся на разрешении <=1023px и открываем меню, после чего мы его не закрываем и увеличиваем ширину экрана — меню остается открытым до разрешения 1023px. При разрешении >=1024, меню должно автоматически закрыться и все классы, которые добавились при открытии, должны удалиться с элементов.
  window.matchMedia('(min-width: 1024px)').onchange = closeMenu

  // 7. Закрытие меню должно работать по кнопке Esc. Проверяться это будет в девтулзах на ПК.
  document.onkeydown = (e) => {
    if (e.key === 'Escape') {
      closeMenu()
    }
  }

  function closeMenu () {
    document.body.classList.remove('scroll-lock')

    mainNav.classList.remove('is-active')
    sandwichBtn.classList.remove('is-active')
    headerLogo.classList.remove('is-menu')
  }
};

export { initPageMenu };

