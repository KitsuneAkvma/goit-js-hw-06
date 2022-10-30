// defining DOM elements
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-form [type="email"]');
const passInput = document.querySelector('.login-form [type="password"]');
const submit = document.querySelector('.login-form [type="submit"]');

// email and password form requirements
let emailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// adding event listener
submit.addEventListener('click', submitForm);

// user class constructor
const user = {
  print() {
    console.log(this);
  },
};

function submitForm(event) {
  event.preventDefault(); // prevent page refresh after submit

  // checking if all the fields are filled
  if (emailInput.value == '' || passInput.value == '') {
    alert('Please fill all the fields');
    return false;
  }
  // checking if email adress format is correct
  else if (emailInput.value.match(emailForm)) {
    alert('everything ok');

    // creating new user with 'print' method
    const user1 = Object.create(user);

    // the square brackets part on the left side are responsible for getting input field's name
    user1[emailInput.getAttribute(`name`)] = emailInput.value;
    user1[passInput.getAttribute(`name`)] = passInput.value;

    // calling user1 method that prints this object
    user1.print();

    loginForm.reset();
    return true;
  }

  // if all the filds are filled but adres format is incorrect
  else {
    alert('Use correct email adress.');
    return false;
  }
}
