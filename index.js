const formEl = document.getElementById('form');
const firstNameInputEl = document.getElementById('firstName');
const lastNameInputEl = document.getElementById('lastName');
const emailInputEl = document.getElementById('email');
const passwordInputEl = document.getElementById('password');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // .trim() method will remove any whitespaces
  const firstNameValue = firstNameInputEl.value.trim();
  const lastNameValue = lastNameInputEl.value.trim();
  const emailValue = emailInputEl.value.trim();
  const passwordValue = passwordInputEl.value.trim();

  if (firstNameValue === '') {
    setError(firstNameInputEl, 'First name cannot be blank');
  }

  if (lastNameValue === '') {
    setError(lastNameInputEl, 'Last name cannot be blank');
  }

  if (emailValue === '') {
    setError(emailInputEl, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setError(emailInputEl, 'Looks like this is not an email');
    emailInputEl.placeholder = 'email@example/com';
  }

  if (passwordValue === '') {
    setError(passwordInputEl, 'Password cannot be blank');
  }
}

function setError(input, message) {
  const inputParent = input.parentElement;
  const smallEl = inputParent.querySelector('small');

  // input.placeholder = '';

  smallEl.style.visibility = 'visible';
  smallEl.innerText = message;

  inputParent.className = 'form-control error';
}

function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
