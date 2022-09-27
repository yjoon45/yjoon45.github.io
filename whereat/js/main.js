$(function() {
  $('.tokenSlide').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerPadding: '20px',
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
          centerMode: true,
          dots: false,
        },
      },
    ],
  });
});

$(function () {
  $('.ourAdviser-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});

$(function() {
  $('.exploreAppSlide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          fade: true,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
});


$(function() {
  $('#showNav').on('click', function () {
    $('.wh-navbar').addClass('mobileNav');
  });

  $('.closeNav').on('click', function () {
    $('.wh-navbar').removeClass('mobileNav');
  });
});
