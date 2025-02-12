const formEl = document.getElementById('form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const firstNameInputEl = document.getElementById('firstName');

  if (!firstNameInputEl.value) {
    setError(firstNameInputEl, 'First name cannot be blank');
  }
});

function setError(input, message) {
  const inputParent = input.parentElement;
  const smallEl = inputParent.querySelector('small');

  input.placeholder = '';

  smallEl.style.visibility = 'visible';
  smallEl.innerText = message;

  inputParent.className = 'form-control error';
  // checks
  //it did work for input and small
}
