//let pass = 50;
//let score = 90;
//
//let hasPassed = score >= pass;
//
//let el = document.getElementById('answer');
//el.textContent = 'Level passed: ' + hasPassed;

//let score1 = 90;
//let score2 = 95;
//let highScore1 = 75;
//let highScore2 = 95;

//let comparison = (score1 + score2) > (highScore1 + highScore2);
//
//let el = document.getElementById('answer');
//el.textContent = 'New high score: ' + comparison;

//let score1 = 8;
//let score2 = 8;
//let pass1 = 6;
//let pass2 = 6;

//let passBoth = (score1 >= pass1 ) && (score2 >= pass2);
let pass = 50;
let score = 49;
let msg;

if (score >= pass) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'Have another go!';
}

let el = document.getElementById('answer');
el.textContent = msg;
