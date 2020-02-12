const userDashboard = document.querySelector('#user-dashboard');
const hydrationDashboard = document.querySelector('#hydration-dashboard');
const hydrateData = new Hydration(hydrationData);
const activeData = new Activity(activityData);
const sleepingData = new Sleep(sleepData);
const userRepo = new UserRepository(userData);
var randomIdNum;
var targetUser;
const week1 = ['2019/06/16', '2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22'];
const currentDate = "2019/09/22";

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
  displayWaterConsumedToday();
  displayWeeklyWaterIntake();
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

function displayWaterConsumedToday() {
    hydrationDashboard.innerHTML += `
    <div>
    <label>Today's water intake:</label><p>${hydrateData.returnDailyConsumption(currentDate, randomIdNum)}</p>
    </div>`;
}

function displayWeeklyWaterIntake() {
  hydrationDashboard.innerHTML += `
  <div>
  <label>Weekly Consumption:</label><p>${hydrateData.returnWeeklyConsumption(week1, randomIdNum)}</p>
  </div>`;
}
