import LocomotiveScroll from 'locomotive-scroll';

$(function () {
  $('.tokenslider').slick({
    centerMode: true,
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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

$(function () {
  $('.exploreAppSlide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
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

$(function () {
  $('#showNav').on('click', function () {
    $('.wh-navbar').addClass('mobileNav');
  });

  $('.closeNav').on('click', function () {
    $('.wh-navbar').removeClass('mobileNav');
  });
});

document.addEventListener('readystatechange', function () {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      document.querySelector('.wa-loader').classList.add('is-hide');

      new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
    }, 1000);
  }
});
