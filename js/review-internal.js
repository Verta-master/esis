var breakpoint = window.matchMedia('(min-width: 960px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.review__slider', {
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
    }
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
