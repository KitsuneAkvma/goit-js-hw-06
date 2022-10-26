const categories = document.querySelectorAll('.item'); //defining categories as array of object (with items array and name of category)
let categoriesQuantity = `Number of Categories: ${categories.length}`; // Number of categories == lenght of categories table

const countCategories = () => {
  //display number of categories
  console.log(categoriesQuantity);
  console.log(' ');

  // iterating all the items in every category object
  for (let i of categories) {
    let name = i.querySelector('h2').innerHTML;
    let elementList = i.querySelector('ul');
    let elements = elementList.children.length;
    console.log(`Category: ${name}`);
    console.log(`Elements: ${elements}`);
    console.log(' ');
  }
};

//calling primary function onload
countCategories();
