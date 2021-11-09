var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    640: {
      direction: 'vertical',
      slidesPerView: 6,
      spaceBetween: 10,
    },
    960: {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  }
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 15,
  thumbs: {
    swiper: galleryThumbs
  },
  breakpoints: {
    640: {
      spaceBetween: 30,
    },
  }
});