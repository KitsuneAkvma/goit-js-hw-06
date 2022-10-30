const increse = document.querySelector('[data-action="increment"]'); //defining increment button
const decrese = document.querySelector('[data-action="decrement"]'); //defining decrement button
let counterValue = document.querySelector('#value').innerHTML; //defining counter

counterValue = 0; //reseting value to 0 on page load

//adding event listeners to buttons

increse.addEventListener('click', () => {
  counterValue++;

  //assigning current 'counterValue' value to counter
  document.querySelector('#value').innerHTML = counterValue;
});

decrese.addEventListener('click', () => {
  counterValue--;

  //assigning current 'counterValue' value to counter
  document.querySelector('#value').innerHTML = counterValue;
});
