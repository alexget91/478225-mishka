(function () {
  window.mapInit = function () {
    var uluru = {lat: 59.9387846, lng: 30.3232306};
    var image = 'img/icon-map-pin.svg';
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru,
      disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
      position: {lat: 59.938685, lng: 30.322939},
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP
    });
  }
})();
