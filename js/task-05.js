const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  //function takes input value  and comapres if string is empty - If is, website will show: "Hello Anomymous!", otherwise - it will show "Hello ${input}!".
  if (nameInput.value == '') {
    nameOutput.innerHTML = 'Anonymous';
  } else {
    nameOutput.innerHTML = nameInput.value;
  }
});
