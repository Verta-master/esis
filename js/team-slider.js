var mySwiper4 = new Swiper ('.team__slider', {
  navigation: {
    nextEl: '.team__next',
    prevEl: '.team__prev',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 23,
    },
  }
});