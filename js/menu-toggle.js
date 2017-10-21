'use strict';

(function () {
  var blockNav = document.querySelector('.page-header__nav');
  var blockTools = document.querySelector('.page-header__tools');
  var navToggle = document.querySelector('.page-header__toggle');

  blockNav.classList.remove('page-header__nav--nojs');
  blockTools.classList.remove('page-header__tools--nojs');
  navToggle.classList.remove('page-header__toggle--nojs');

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
