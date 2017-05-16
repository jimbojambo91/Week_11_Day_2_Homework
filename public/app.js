var initialize = function(){
  var center = {lat: 55.953252, lng: -3.188267}
  var marker2 = {lat: 39.354218, lng: -85.966658}
  var marker3 = {lat: -34.733332, lng: 138.634179}
  var marker4 = {lat: 68.512212, lng: -110.833834}
  var zoom = 2
  var container = document.getElementById("main-map");
  var mainMap = new MapWrapper(center, zoom,container);
  var button = document.querySelector('button');
  var geoButton = document.getElementById("geo-tag");
  

  mainMap.addMarker(center);
  mainMap.addMarker(marker2);
  mainMap.addMarker(marker3);
  mainMap.addMarker(marker4);
  mainMap.addInfoToWindow(0, "This is edinburgh");

  mainMap.addClickEvent();

  var handleButtonClick = function(){
    mainMap.googleMap.setCenter({lat: 41.878114, lng: -87.629798});
  }
  button.addEventListener('click', handleButtonClick);

  var handleGeoButtonClick = function(){
    console.log("This is a geo button")
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        mainMap.googleMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
      });
      
    } else {
      console.log("Browser does not support geolocation");
    }
  }
  geoButton.addEventListener('click', handleGeoButtonClick);


}


window.addEventListener("load", initialize)