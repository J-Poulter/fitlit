const userDashboard = document.querySelector('#user-dashboard');
const hydrationDashboard = document.querySelector('#hydration-dashboard');
const sleepDashboard = document.querySelector('#sleep-dashboard');
const activityDashboard = document.querySelector('#activity-dashboard');
const hydrateData = new Hydration(hydrationData);
const activeData = new Activity(activityData);
const sleepingData = new Sleep(sleepData);
const userRepo = new UserRepository(userData);
let randomIdNum;
let targetUser;
const lastWeek = ['2019/09/16', '2019/09/17', '2019/09/18', '2019/09/19', '2019/09/20', '2019/09/21', '2019/09/22']
const week1 = ['2019/06/16', '2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22'];
const currentDate = '2019/09/19';
const lastDay = '2019/09/22';


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
  displayDailySleepData();
  displayWeeklySleepData();
  displayTotalAverageSleepData();
  displayTodaysSteps(randomIdNum, currentDate);
  displayMinutesActive();
  displayMilesWalked();
  displayStepComparison(randomIdNum, currentDate)
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

//hydration

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

//sleep

function displayDailySleepData() {
  sleepDashboard.innerHTML += `
  <div>
  <label>Last Night's Sleep Quality:</label><p>${sleepingData.returnSleepQuality(randomIdNum, currentDate)}</p>
  <label>Last Night's Hours Slept:</label><p>${sleepingData.returnUsersHoursSleptOnDay(randomIdNum, currentDate)}
  </div>`;
}


function displayWeeklySleepData() {
  sleepDashboard.innerHTML += `
  <div>
  <label>Weekly Sleep Quality:</label><p>${sleepingData.returnUsersSleepQualityForWeek(randomIdNum, lastWeek)}</p>
  <label>Weekly Hours Slept:</label><p>${sleepingData.returnUsersHoursSleptForWeek(randomIdNum, lastWeek)}
  </div>`;
}

function displayTotalAverageSleepData() {
  sleepDashboard.innerHTML += `
  <div>
  <label>Average Sleep Quality:</label><p>${sleepingData.calculateUsersAverageSleepQuality(randomIdNum)}</p>
  <label>Average Hours Slept:</label><p>${sleepingData.calculateAverageHoursSlept(randomIdNum)}
  </div>`;
}

//activity

function displayTodaysSteps(id, date) {
  let filteredUser = activityData.filter(user => user.userID === id);
  let filteredDay = filteredUser.find(user => user.date === date);
  activityDashboard.innerHTML += `
  <div>
  <label>Today's Step Count:</label><p>${filteredDay.numSteps}</p>
  </div>`;
}

function displayMinutesActive() {
  activityDashboard.innerHTML += `
  <div>
  <label>Today's Minutes Active:</label><p>${activeData.returnUserMinutesActiveOnDay(currentDate, randomIdNum)}</p>
  </div>`;
}

function displayMilesWalked() {
  activityDashboard.innerHTML += `
  <div>
  <label>Miles Walked Today:</label><p>${activeData.calculateMilesWalked(currentDate, randomIdNum, userData)}</p>
  </div>`;
}

//num of numSteps
//minutes active
//flights of stairs

// function displayStepComparison(id, date) {
//   let filteredUser = activityData.filter(user => user.userID === id);
//   let filteredDay = filteredUser.find(user => user.date === date);
//   activityDashboard.innerHTML += `
//   <div>
//   <label>Your Steps:</label><p>${filteredDay.numSteps}</p>
//   <label>Community Steps:</label><p>${activeData.calculateOverallAverageStepsTakenOnDay(currentDate)}
//   </div>`;
// }
