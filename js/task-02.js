const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Defining DOM element
const list = document.querySelector('#ingredients');

//Adding 'ingredients' array elements to list on page
const addItemsToList = () => {
  for (let i of ingredients) {
    let listItem = document.createElement('li');
    let node = document.createTextNode(i);
    listItem.appendChild(node);
    list.appendChild(listItem);
    listItem.classList.add('item');
  }
};

//calling a function
addItemsToList();
