//defining DOM elements
const numberInput = document.querySelector('[type="number"');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

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
    // adding class to every square
    box.classList.add('boxes__item');
    // adding box ID
    box.setAttribute('id', `box${[i + 1]}`);

    // random color
    box.style.backgroundColor = getRandomHexColor();

    //increasing size of boxes
    const sizeOfBox = 30 + i * 10;
    box.style.width = `${sizeOfBox}px`;
    box.style.height = `${sizeOfBox}px`;

    // adding just created square to collection's container
    boxesContainer.appendChild(box);
  }
}

// removing collection of colored squares
function destroyCollection() {
  boxesContainer.innerHTML = '';
}
