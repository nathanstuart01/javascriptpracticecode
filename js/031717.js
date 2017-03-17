//let msg;
//let level = 3;

//switch(level) {
//case 1:
  //msg = 'Good luck on the first test';
  //break;

//case 2:
  //msg = 'Second of three - keep going!';
  //break;

//case 3:
//  msg = 'Final round, almost there!';

//default:
  //msg = 'Good luck!';
//  break;

//}

//let el = document.getElementById('answer');
//el.textContent = msg;

let scores = [24, 32, 17];
let arrayLength = scores.length;
let roundNumber = 0;
let msg = '';
let i;

for (i = 0; i < arrayLength; i++) {
  roundNumber = (i + 1);

  msg += 'Round ' + roundNumber + ': ';

  msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;
