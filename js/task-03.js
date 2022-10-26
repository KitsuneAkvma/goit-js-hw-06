const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//defining DOM elements
const gallery = document.querySelector('.gallery');

//iterating through an array and adding images to gallery
const createGallery = () => {
  for (let el of images) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.setAttribute('src', el['url']);
    img.setAttribute('alt', el['alt']);
    li.appendChild(img);

    gallery.appendChild(li);
  }
};

//calling a function
createGallery();
