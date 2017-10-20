(function () {
  var popup = document.querySelector('.popup');
  var buttonClose = popup.querySelector('.popup__close');

  var popupOpen = function() {
    popup.classList.remove('popup--closed');
  }

  var popupClose = function() {
    popup.classList.add('popup--closed');
  }


  [].forEach.call(document.querySelectorAll('.js-popup-open'), function (it) {
    it.addEventListener('click', function() {
      popupOpen();
    });
  });

  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup')) {
      popupClose();
    }
  });

  buttonClose.addEventListener('click', function() {
    popupClose();
  });
})();
