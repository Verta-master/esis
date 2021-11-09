var mySwiper5 = new Swiper ('.review__slider', {
  navigation: {
    nextEl: '.review__next',
    prevEl: '.review__prev',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 'auto',
  spaceBetween: 22,
  loop: true,
  breakpoints: {
    640: {
      loop: false,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
  }
});