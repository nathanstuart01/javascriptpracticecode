//var saying = 'Home sweet home ';
//var msg = '<h2>length</h2><p>' + saying.length + '</p>';
//msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '<p/>';
//msg += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';
//msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
//msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
//msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
//msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

//var el = document.getElementById('info');
//el.innerHTML = msg;

//var originalNumber = 10.23456;

//var msg = '<h2>original number </h2><p>' + originalNumber + '</p>';
//msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(5) + '</p>';
//msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(5) + '</p>';
//var el = document.getElementById('info');
//el.innerHTML = msg;

var randomNum = Math.floor((Math.random() * 100 ) + 1);

var el = document.getElementById('info');
el.innerHTML = '<h2>Random number</h2><p>' + randomNum + '</p>';

var today = new Date();
var year = today.getFullYear();

var ele = document.getElementById('date');
ele.innerHTML = '<p>Copyright &copy;' + year + '</p>';
