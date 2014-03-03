(function($) {
  var base = baseLayers();
  var potholes = potholeLayer();
  var map = L.map('map', {
    center: new L.LatLng(46.7868843, -92.1215788),
    zoom: 13,
    layers: [base.OpenStreetMap_Mapnik, potholes]
  });

  // See http://leaflet-extras.github.io/leaflet-providers/preview/
  function baseLayers() {
    return {
      OpenStreetMap_Mapnik: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      }),
      OpenStreetMap_HOT: L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
      })
    };
  }

  function potholeLayer() {
    var potholeCoordinates = [
      [46.786243, -92.101092],
      [46.787984, -92.102712]
    ];
    var potholeOptions = {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    };
    var potholeCircles = [];
    for (var i = 0; i < potholeCoordinates.length; i++) {
      potholeCircles.push(L.circle(potholeCoordinates[i], 1, potholeOptions));
    }

    return L.layerGroup(potholeCircles);
  }
})(jQuery);

