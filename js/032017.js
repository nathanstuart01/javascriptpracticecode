let table = 3;
let operator = 'lewis';
let i = 1;
let msg = '';

if (operator === 'addition') {
while (i < 11 ) {
msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
i++;
  }
} else {
while ( i <11 ) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
  }
}

let el = document.getElementById('blackboard');
el.innerHTML = msg;
