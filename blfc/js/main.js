function $(el) {
  return document.querySelector(el);
}

function toggleNav() {
  $('.bflc-nav').classList.toggle('opennav');
}

$('.blfc-mobileBtn').addEventListener('click', toggleNav);
$('.blfc-closeMobileBtn').addEventListener('click', toggleNav);

AOS.init({
  once: true,
});
