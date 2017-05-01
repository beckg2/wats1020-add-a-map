$(document).ready(function() { 
  
var map = L.map('map-container').setView([46.852, -121.760], 13);

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.tileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});
  
var satLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1Ijoic3NhZGFybyIsImEiOiJjajF4cWpiaDcwMDBxMndxNWNnYW50bnc0In0.OXQXQLzfbFX3h_7jOo5gIw'
});

var drawLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.mapbox-terrain-v2',
    accessToken: 'pk.eyJ1Ijoic3NhZGFybyIsImEiOiJjajF4cWpiaDcwMDBxMndxNWNnYW50bnc0In0.OXQXQLzfbFX3h_7jOo5gIw'

});
var mapLayers = {
    "Open Street Maps": osm,
    "Satellite": satLayer,
    "Map View": drawLayer,
}
L.control.layers(mapLayers).addTo(map);
osm.addTo(map);

var marker1 = L.marker([46.852, -121.760]).addTo(map);
marker1.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 14,411 feet high.");
    
var marker2 = L.marker([46.837798, -121.841713]).addTo(map);
marker2.bindPopup("<b>Welcome to Tokaloo Spire!</b><br>This peak is 7500 feet high.");
    
var circle = L.circle([46.842222, -121.690833], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(map).bindPopup("Whitman Glacier, I am a sub peak of Mt.Rainer");
	
	
$('a[href*=#]').on('click', function(event){     
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
});
	 
  });