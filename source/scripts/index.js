/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');
navToggle.classList.remove('header__toggle--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__nav--opened')) {
    navMain.classList.remove('header__nav--opened');
    navToggle.classList.remove('button-burger--closed');
  } else {
    navMain.classList.add('header__nav--opened');
    navToggle.classList.add('button-burger--closed');
  }
});
