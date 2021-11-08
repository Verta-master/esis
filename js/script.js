//Mobile menu
$('.header__btn').click(function() {
  $('.menu').addClass('menu--opened');
  $('.menu').slideDown();
});

$('.menu__close').click(function() {
  $('.menu').removeClass('menu--opened');
  $('.menu').slideUp();
})

// Mobile search
$('.search__open').click(function() {
  $('.search__drop').slideToggle();
});

//Mobile footer
if (window.innerWidth < 960) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__title--up');
  })
}

//City choice
$('.header__arrow').click(function() {
  $('.header__list').slideToggle();
  $(this).toggleClass('header__arrow--up');
})
