function setup() {
  let textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event) {
  let message = 'You have changes that have not been saved...';
  (event || window.event).returnValue = message;
  return message;
});
