// get elements into variables

let inputEle = document.getElementById('input');
let buttonEle = document.getElementById('btn');
let pEle = document.getElementById('msg');

// Events
buttonEle.addEventListener('click', function () {
  // get value from input
  let inputValue = inputEle.value;

  if (inputValue != '') {
    // put input value into p
    pEle.innerHTML = inputValue;

    // empty input value
    inputEle.value = '';
  }
});
