//defining DOM elements
const numberInput = document.querySelector('[type="number"');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

//styling collections's container
boxesContainer.style.display = 'flex';
boxesContainer.style.flexWrap = 'wrap';
boxesContainer.style.gap = '1rem';
boxesContainer.style.marginTop = '2rem';

//adding event listeners
createBtn.addEventListener('click', createCollection);
destroyBtn.addEventListener('click', destroyCollection);

//Hex color randomizer
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//creating collection of colored squares
function createCollection() {
  let numberOfElements = numberInput.value;

  // destroy previous collection before creating a new one
  destroyCollection();

  for (let i = 0; i <= numberOfElements - 1; i++) {
    let box = document.createElement('div');
    //adding class to every square
    box.classList.add('boxes__item');
    //styling squares
    box.style.width = '30px';
    box.style.height = '30px';
    box.style.backgroundColor = getRandomHexColor(); // random color
    box.style.border = '2px black solid';
    //adding just created square to collection's container
    boxesContainer.appendChild(box);
  }
}

//removing collection of colored squares
function destroyCollection() {
  let hasChild = document.querySelector('#boxes').hasChildNodes();

  //loop throgh collection's container and check if it has items inside - if it so : remove boxes
  do {
    if (hasChild == true) {
      document.querySelector('.boxes__item').remove();
      hasChild = document.querySelector('#boxes').hasChildNodes();
    } else {
      //break the loop when there are no boxes
      break;
    }
  } while (hasChild == true);

  //reseting input value
  numberInput.value = 0;
}
