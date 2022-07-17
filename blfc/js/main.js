function $(el) {
  return document.querySelector(el);
}

function toggleNav() {
  $('.bflc-nav').classList.toggle('opennav');
}

if ($('.blfc-mobileBtn')) {
  $('.blfc-mobileBtn').addEventListener('click', toggleNav);
}

if ($('.blfc-closeMobileBtn')) {
  $('.blfc-closeMobileBtn').addEventListener('click', toggleNav);
}

if ($('.bflc-nav')) {
  $('.bflc-nav').addEventListener('click', toggleNav);
}

AOS.init({
  once: true,
});

document.querySelectorAll('.bflc-nav').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    var el = document.querySelector(e.target.getAttribute('href'));
    var headerHeight = window.matchMedia('(min-width: 992px)').matches
      ? 107
      : 85;

    if (el) {
      var offset = el.offsetTop - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  });
});
