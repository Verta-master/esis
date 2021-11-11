var galleryThumbs = new Swiper('.modal-thumbs', {
  spaceBetween: 20,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    960: {
      spaceBetween: 22,
      slidesPerView: 3,
    }
  }
});
var galleryTop = new Swiper('.modal-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.modal__next',
    prevEl: '.modal__prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});