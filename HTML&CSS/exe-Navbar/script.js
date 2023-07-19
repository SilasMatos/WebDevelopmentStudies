var burger = document.querySelector('.burger');
var navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', function() {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});
