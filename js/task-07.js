// defining DOM elements
const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

//this variable reads slider value onLoad
let sliderValue = slider.value;

//assign font size adequate to actual slider value
text.style.fontSize = sliderValue + 'px';

//adding event listener
slider.addEventListener('input', (changeSize) => {
  sliderValue = slider.value; // read slider value
  text.style.fontSize = sliderValue + 'px'; //convert slider value to font size
});
