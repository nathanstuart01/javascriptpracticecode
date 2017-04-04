function setup() {
 let textInput;
 textInput = document.getElementById('username');
 textInput.focus();
}

function checkUsername() {
  let username = el.value;
  if (username.length < 5) {
    elMsg.className = 'warning';
    elMsg.textContent = 'Not long enough, yet...';
  } else {
    elMsg.textContent = '';
  }
}

function tipUsername() {
  elMsg.className = 'tip';
  elMsg.innerHTML = 'Username must be at least 5 characters';
}

let el = document.getElementById('')

window.addEventListener('load', setup, false);
