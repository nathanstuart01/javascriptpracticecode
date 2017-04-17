if (window.localStorage) {
  let txtUsername = document.getElementById('username');
  let txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');
  txtAnswer.value = localStorage.getItem('answer');

  txtUsername.addEventListener('input', function () {
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function() {
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}
