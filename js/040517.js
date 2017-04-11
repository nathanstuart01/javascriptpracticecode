let msg = '<div class=\"header\"><a id=\"close\" href="#">close x</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

let sx = document.getElementById('sx');
let sy = document.getElementById('sy');
let px = document.getElementById('px');
let py = document.getElementById('py');
let cx = document.getElementById('cx');
let cy = document.getElementById('cy');

let elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
document.body.removeChild(elNote);
}

function showPosition(event) {
  sx.value = event.screenX;
  sy.value = event.screenY;
  px.value = event.pageX;
  py.value = event.pageY;
  cx.value = event.clientX;
  cy.value = event.clientY;
}

let ele = document.getElementById('body');
ele.addEventListener('mousemove', showPosition, false );

//let elClose = document.getElementById('close');
//elClose.addEventListener('click', dismissNote, false);
