//Mobile menu
$('.close').click(function() {
  $('body').removeClass('mm-ocd-opened');
  $('.mm-ocd').removeClass('mm-ocd--open');
});

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

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
