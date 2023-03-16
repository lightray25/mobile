addEventListener('DOMContentLoaded', (event) => {
  const nummer = document.querySelector('#nummer')
  const mail = document.querySelector('#mail')
  const output = document.querySelector('#output')
  const button = document.querySelector('#button')
  const list = [];

  button.addEventListener("click", e => {
      console.log(nummer.value, mail.value);
      list.push(nummer.value, mail.value)
  })  


});


ondomcontentLoaded = (event) => {  };