//defining DOM elements
const body = document.querySelector('body');
const randomBtn = document.querySelector('.change-color');
const hexColor = document.querySelector('.color');

//showing default background color in span.
hexColor.textContent = '#ffffff';

//Color randomizer function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Adding event listener
body.addEventListener('click', (changeBg) => {
  let color = getRandomHexColor();

  body.style.backgroundColor = color; // assing generated color to page background
  hexColor.textContent = color; // Showing hexcode on page
});
