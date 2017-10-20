(function () {
  var popup = document.querySelector('.popup');
  var buttonClose = popup.querySelector('.popup__close');
  var buttonsOpen = document.querySelectorAll('.js-popup-open');

  var popupOpen = function() {
    popup.classList.remove('popup--closed');
  }

  var popupClose = function() {
    popup.classList.add('popup--closed');
  }


  for (var i = 0; i < buttonsOpen.length; i++) {
    buttonsOpen[i].addEventListener('click', function() {
      popupOpen();
    });
  }

  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup')) {
      popupClose();
    }
  });

  buttonClose.addEventListener('click', function() {
    popupClose();
  });
})();
