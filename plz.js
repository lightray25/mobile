addEventListener('DOMContentLoaded', (event) => {
  const streetname = document.querySelector('#streetname')
  const streetnumber = document.querySelector('#streetnumber')
  const $postleitzahl = document.querySelector('#plz')
  const place = document.querySelector('#place')
  const land = document.querySelector('#land')
  const button = document.querySelector('#button')
  const list = [];

  if($postleitzahl !== null) {
    $postleitzahl.addEventListener("keypress", e => {
      console.log(e);
      if (!regexNumber.test(e.key)) {
        e.preventDefault();
      }
    })
  }


  button.addEventListener("click", e => {
    const user = {
      name: list[0] + ' ' + list[1],
      street: list[2] + ' ' + list[3],
      plz: list[4],
      land: list[5],
    }
    list.push(streetname.value, streetnumber.value, $postleitzahl.value, place.value, land.value);
    window.localStorage.setItem('user', JSON.stringify(user))
    window.localStorage.getItem('user');
    window.location = "./telefonnummer.html";
  })
});


ondomcontentLoaded = (event) => {  };