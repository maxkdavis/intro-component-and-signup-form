const formEl = document.getElementById('form');
const firstNameInputEl = document.getElementById('firstName');
const lastNameInputEl = document.getElementById('lastName');
const emailInputEl = document.getElementById('email');
const passwordInputEl = document.getElementById('password');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  if (firstNameInputEl.value === '') {
    setError(firstNameInputEl, 'First name cannot be blank');
  }

  if (lastNameInputEl.value === '') {
    setError(lastNameInputEl, 'Last name cannot be blank');
  }

  if (emailInputEl === '') {
    setError(emailInputEl, 'Email cannot be blank');
  } else if (!isEmail(emailInputEl)) {
    setError(emailInputEl, 'Email is not valid');
  }

  if (passwordInputEl === '') {
    setError(passwordInputEl, 'Password cannot be blank');
  }
});

function setError(input, message) {
  const inputParent = input.parentElement;
  const smallEl = inputParent.querySelector('small');

  input.placeholder = '';

  smallEl.style.visibility = 'visible';
  smallEl.innerText = message;

  inputParent.className = 'form-control error';
}

function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
