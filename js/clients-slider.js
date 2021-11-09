var mySwiper3 = new Swiper ('.clients__slider', {
  navigation: {
    nextEl: '.clients__next',
    prevEl: '.clients__prev',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    960: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 22,
    },
  }
});