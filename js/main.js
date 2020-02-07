var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {

    530: {
      slidesPerView: 2
    }
  }
});

const menubutton = document.querySelector('.header-button'),
  menu = document.querySelector('.header');

menubutton.addEventListener('click', () => {
  menubutton.classList.toggle('header-button-active')
  menu.classList.toggle('header-active');
})