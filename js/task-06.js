//defining DOM elements
const validateInput = document.querySelector('#validation-input');
const numOfSymbols = validateInput.getAttribute('data-length');

//that variable holds number of symbols in input
let inputValue = validateInput.value;

validateInput.addEventListener('blur', validate); //adding event listener on blur

function validate() {
  inputValue = validateInput.value; //assigning the current value

  if (inputValue.length == numOfSymbols) {
    //If the number of characters is correct

    validateInput.classList.add('valid');
    validateInput.classList.remove('invalid');
    console.log('valid');
  } else if (inputValue == '') {
    //If the field is empty

    validateInput.classList.remove('invalid');
    validateInput.classList.remove('valid');
    console.log('empty');
  } else {
    //All other, incorrect cases

    validateInput.classList.add('invalid');
    validateInput.classList.remove('valid');
    console.log('invalid');
  }

  //możliwe byłoby wykonanie tego za pomocą switch() ale kod jest zaskakująco bardziej przejrzysty przy użyciu if...else
}
