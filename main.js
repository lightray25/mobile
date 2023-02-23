function login() {
  const age = element.querySelector('#age')
  const output = document.querySelector('#output')
  if (age < 0) {
    output.textContent = 'Alter kann nicht negativ sein.';
  }

  else {
    output.textContent = '';
  }
}