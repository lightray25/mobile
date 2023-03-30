addEventListener('DOMContentLoaded', (event) => {

  const streetname = document.querySelector('#streetname')
  const streetnumber = document.querySelector('#streetnumber')
  const $postleitzahl = document.querySelector('#plz')
  const place = document.querySelector('#place')
  const land = document.querySelector('#land')
  const button = document.querySelector('#button')
  const list = [];

  button.addEventListener("click", e => {
    console.log("test2");
    const user = {
      name: list[0] + ' ' + list[1],
      street: list[2] + ' ' + list[3],
      plz: list[4],
      land: list[5],
    }
    window.localStorage.setItem('user', JSON.stringify(user))
    window.localStorage.getItem('user');
    window.location = "./telefonnummer.html";
  })




});


ondomcontentLoaded = (event) => {  };