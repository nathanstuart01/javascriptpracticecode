//let el = document.getElementById('one');

//el.className ='cool';

//let elements = document.getElementsByTagName('li');
//
//if (elements.length > 0 ) {
//  let el = elements[0];
//  el.className = 'cool';
//}

//let el = document.querySelector('li.hot');
//el.className = 'cool';

//let els = document.querySelectorAll('li.hot');
//els[1].className = 'cool';

//var hotItems = document.querySelectorAll('li.hot');

//if (hotItems.length > 0) {
//  for (var i = 0; i<hotItems.length; i++) {
//    hotItems[i].className = 'cool';
//  }
//}

let startItem = document.getElementById('two');
let prevItem = startItem.previousSibling;
let nextItem = startItem.nextSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';
