let elMap = document.getElementById('loc');
let msg = 'Sorry, we were unable to get your location.';

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = 'Checking location...';
} else {
  elMap.textContent = msg;
}

function success(position) {
  msg = '<h3><em>Longitude:</em><br>';
  msg += position.coords.longitude + '</h3>';
  msg += '<h3><b>Latitude:</b><br>';
  msg += position.coords.latitude + '</h3>';
  elMap.innerHTML = msg;
}

function fail(msg) {
  elMap.textContent = msg;
  console.log(msg.code);
}
