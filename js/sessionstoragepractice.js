if (window.sessionStorage) {
  let txtUsername = document.getElementById('username');
  let txtAnswer = document.getElementById('answer');

  txtUsername.value = sessionStorage.getItem('username');
  txtAnswer.value = sessionStorage.getItem('answer');

  txtUsername.addEventListener('input', function() {
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}
