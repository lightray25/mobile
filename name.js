addEventListener('DOMContentLoaded', (event) => {

    const firstname = document.querySelector('#firstname');
    const lastname = document.querySelector('#lastname');
    const button = document.querySelector('#button');
    let output = document.getElementById('output');
    const list = [];

    console.log(firstname.value, lastname.value);

    button.addEventListener("click", e => {
      console.log(firstname.value, lastname.value);
      list.push(firstname.value, lastname.value)
      window.location = "plz.html";
    })
  
});

CondomcontentLoaded = (event) => {  };