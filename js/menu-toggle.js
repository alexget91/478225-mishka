'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var blockNav = header.querySelector('.page-header__nav');
  var blockTools = header.querySelector('.page-header__tools');
  var navToggle = header.querySelector('.page-header__toggle');

  header.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function() {
    if (!navToggle.classList.contains('page-header__toggle--close')) {
      blockNav.classList.remove('page-header__nav--closed');
      blockTools.classList.remove('page-header__tools--closed');
      navToggle.classList.add('page-header__toggle--close');
    } else {
      blockNav.classList.add('page-header__nav--closed');
      blockTools.classList.add('page-header__tools--closed');
      navToggle.classList.remove('page-header__toggle--close');
    }
  });
})();
