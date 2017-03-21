let el = document.getElementById('one');

el.className ='cool';

let elements = document.getElementsByClassName('hot');

if (elements.length > 2) {
  let el = elements[2];
  el.className = 'cool';
}
