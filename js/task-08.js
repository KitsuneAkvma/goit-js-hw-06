//defining DOM elements
const emailInput = document.querySelector('.login-form [type="Email"]');
const passInput = document.querySelector('.login-form [type="password"]');
const submit = document.querySelector('.login-form [type="submit"]');

//email and password form requirements
let emailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//adding event listener
submit.addEventListener('click', submitForm);

//user class constructor
class user {
  constructor(p1, p2) {
    this[p1] = emailInput.value;
    this[p2] = passInput.value;

    this.print = function () {
      console.log(`Email: ${this.email}`);
      console.log(`Password: ${this.password}`);
    };
  }
}

function submitForm(event) {
  event.preventDefault(); //prevent page refresh after submit

  //checking if all the fields are filled
  if (emailInput.value == '' || passInput.value == '') {
    alert('Please fill all the fields');
    return false;
  }
  //checking if email adress format is correct
  else if (emailInput.value.match(emailForm)) {
    alert('everything ok');

    let param1 = emailInput.getAttribute('name');
    let param2 = passInput.getAttribute('name');

    let user1 = new user([param1], [param2]);

    user1.print();

    emailInput.reset;
    passInput.reset;
    return true;
  }
  //If all the filds are filled but adres format is incorrect
  else {
    alert('Use correct email adress.');
    return false;
  }
}
