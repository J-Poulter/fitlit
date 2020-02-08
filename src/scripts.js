const userDashboard = document.querySelector('#user-dashboard');

var randomIdNum;
displayHomePage();
function displayHomePage() {

  userDashboard.innerHTML = '';
  instantiateUsers()
}

function instantiateUsers() {
  userData.forEach(user => {
    var person = new User(user);
    // populateUsers(person);
  })
  generateRandomUser()
}

function generateRandomUser() {
  randomIdNum = Math.floor(Math.random() * 50 + 1);
  var targetUser = userData.find(user => {
    return user.id === randomIdNum;
  })
  populateUsers(targetUser)
}

function populateUsers(person) {
  var person1 = new User(person);
  userDashboard.innerHTML += `
  <header>Hi, ${person1.returnFirstName()}!</header>
  <div>
    <label>Name: </label><p>${person.name}</p>
    <label>ID: </label><p>${randomIdNum}</p>
    <label>Address: </label><p>${person.address}</p>
    <label>Email: </label><p>${person.email}</p>
  </div>`;
}

//We need to instantiate a new user

//We will need to have a function that populates the cards and interpolates the user information.
//This will happen on the click event of a friends profile.
