let scores = [1,2,3,4,5,6,7,8,9,10];
let arrayLength = scores.length;
let roundNumber = 0;
let i;
let msg = '';

for (i = 0; i < arrayLength; i++ ) {
 roundNumber = ( i + 1);

 msg += 'Round ' + roundNumber + ': ';

 msg += scores[i] + '<br />';

}

document.getElementById('answer').innerHTML = msg;
