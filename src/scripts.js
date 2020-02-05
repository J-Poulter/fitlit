const userDashboard = document.querySelector('#user-dashboard');
displayHomePage();
function displayHomePage() {

  userDashboard.innerHTML = '';
  instantiateUsers()
}

function instantiateUsers() {
  userData.forEach(user => {
    var person = new User(user);
    populateUsers(person);
  })
}

function populateUsers(person) {
  userDashboard.innerHTML = `
  <div>
    <label>Name: </label><p>${person.name}</p>
    <label>Address: </label><p>${person.address}</p>
    <label>Email: </label><p>${person.email}</p>
  </div>`;
}

//We need to instantiate a new user

//We will need to have a function that populates the cards and interpolates the user information.
//This will happen on the click event of a friends profile.
