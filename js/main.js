(function($) {
  // Base layers
  // See http://leaflet-extras.github.io/leaflet-providers/preview/
  var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  });
  var OpenStreetMap_HOT = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
  })
  var base = OpenStreetMap_Mapnik;

  var potholeOptions = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  };
  var potholes = L.layerGroup([
    L.circle([46.7868843, -92.1215788], 1, potholeOptions)
  ]);

  var map = L.map('map', {
    center: new L.LatLng(46.7868843, -92.1215788),
    zoom: 13,
    layers: [base, potholes]
  });
})(jQuery);

