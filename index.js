const formEl = document.getElementById('form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName');

  if (!firstName.value) {
    firstName.classList.add('error');
  }
});
