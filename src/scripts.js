const userDashboard = document.querySelector('#user-dashboard');
const hydrationDashboard = document.querySelector('#hydration-dashboard');
const hydrateData = new Hydration(hydrationData);
const activeData = new Activity(activityData);
const sleepingData = new Sleep(sleepData);
const userRepo = new UserRepository(userData);
var randomIdNum;
var targetUser;
displayHomePage();

function displayHomePage() {
  userDashboard.innerHTML = '';
  hydrationDashboard.innerHTMl = '';
  generateRandomUser()
}

function generateRandomUser() {
  randomIdNum = Math.floor(Math.random() * 50 + 1);
  targetUser = userData.find(user => {
    return user.id === randomIdNum;
  })
  populateUsers(targetUser);
  displayWaterConsumedToday(randomIdNum, "2019/06/15");
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

function displayWaterConsumedToday(id, date) {
  let filteredUser = hydrationData.filter(user => user.userID === id);
  let todaysIntake = filteredUser.find(filtered => filtered.date.includes(date)).numOunces
    hydrationDashboard.innerHTML += `
    <div>
    <label>Today's water intake</label><p>${todaysIntake}</p>
    </div>`;
}
