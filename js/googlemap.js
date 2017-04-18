function init() {
 let mapOptions = {
  center: new google.maps.LatLng(40.7608, -111.8910),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  zoom: 13,
  panControl: false,

  zoomControl: true,
  zoomControlOptions: {
    style: google.maps.ZoomControlStyle.SMALL,
    position: google.maps.ControlPosition.TOP_RIGHT
  },
 };

 let pinLocation = new google.maps.LatLng(40.7608, -111.8910);
 let venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

 let startPosition = new google.maps.Marker({
   position: pinLocation,
   map: venueMap,
   icon: 'c09/img/go.png'
 });


}


function loadScript() {
  let script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;
