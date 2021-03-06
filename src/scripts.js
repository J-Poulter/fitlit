const userInfo = document.querySelector('#user-info');
const hydrationDashboard = document.querySelector('#hydration-dashboard');
const communityDashboard = document.querySelector('#community-dashboard');
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
  userInfo.innerHTML = '';
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
  displayStepComparison(randomIdNum, currentDate);
  displayMinutesActiveComparison();
  displayStairComparison(randomIdNum, currentDate);
  displayStepTrend();
}

function populateUsers(person) {
  var person1 = new User(person);
  userInfo.innerHTML += `
  <header>Hi, ${person1.returnFirstName()}!</header>
  <div id="userInfo">
    <label>Name: </label><p>${person.name}</p>
    <label>ID: </label><p>${randomIdNum}</p>
    <label>Address: </label><p>${person.address}</p>
    <label>Email: </label><p>${person.email}</p>
  </div>`;
}

//hydration

function displayWaterConsumedToday() {
    hydrationDashboard.innerHTML += `
    <div class="waterIntake">
    <label>Today's water intake:</label><p>${hydrateData.returnDailyConsumption(currentDate, randomIdNum)}</p>
    </div>`;
}

function displayWeeklyWaterIntake() {
  hydrationDashboard.innerHTML += `
  <div class="waterIntake">
  <label>Weekly Consumption:</label><p>${hydrateData.returnWeeklyConsumption(week1, randomIdNum)}</p>
  </div>`;
}

//sleep

function displayDailySleepData() {
  sleepDashboard.innerHTML += `
  <div id="dailySleep">
  <label>Last Night's Sleep Quality:</label><p>${sleepingData.returnSleepQuality(randomIdNum, currentDate)}</p>
  <label>Last Night's Hours Slept:</label><p>${sleepingData.returnUsersHoursSleptOnDay(randomIdNum, currentDate)}
  </div>`;
}


function displayWeeklySleepData() {
  sleepDashboard.innerHTML += `
  <div id="weeklySleep">
  <label>Weekly Sleep Quality:</label><p>${sleepingData.returnUsersSleepQualityForWeek(randomIdNum, lastWeek)}</p>
  <label>Weekly Hours Slept:</label><p>${sleepingData.returnUsersHoursSleptForWeek(randomIdNum, lastWeek)}
  </div>`;
}

function displayTotalAverageSleepData() {
  sleepDashboard.innerHTML += `
  <div id="averageSleep">
  <label>Average Sleep Quality:</label><p>${sleepingData.calculateUsersAverageSleepQuality(randomIdNum)}</p>
  <label>Average Hours Slept:</label><p>${sleepingData.calculateAverageHoursSlept(randomIdNum)}
  </div>`;
}

//activity

function displayTodaysSteps(id, date) {
  let filteredUser = activityData.filter(user => user.userID === id);
  let filteredDay = filteredUser.find(user => user.date === date);
  activityDashboard.innerHTML += `
  <div id="dailyStep">
  <label>Today's Step Count:</label><p>${filteredDay.numSteps}</p>
  </div>`;
}

function displayMinutesActive() {
  activityDashboard.innerHTML += `
  <div id="dailyMinutes">
  <label>Today's Minutes Active:</label><p>${activeData.returnUserMinutesActiveOnDay(currentDate, randomIdNum)}</p>
  </div>`;
}

function displayMilesWalked() {
  activityDashboard.innerHTML += `
  <div id="milesWalked">
  <label>Miles Walked Today:</label><p>${activeData.calculateMilesWalked(currentDate, randomIdNum, userData)}</p>
  </div>`;
}

function displayStepComparison(id, date) {
  let filteredUser = activityData.filter(user => user.userID === id);
  let filteredDay = filteredUser.find(user => user.date === date);
  communityDashboard.innerHTML += `
  <div id="stepComp">
  <label>Your Steps:</label><p>${filteredDay.numSteps}</p>
  <label>Community Steps:</label><p>${activeData.calculateOverallAverageStepsTakenOnDay(currentDate)}
  </div>`;
}

function displayMinutesActiveComparison() {
  communityDashboard.innerHTML += `
  <div id="activeComp">
  <label>Your Minutes Active:</label><p>${activeData.returnUserMinutesActiveOnDay(currentDate, randomIdNum)}</p>
  <label>Community Minutes Active:</label><p>${activeData.calculateOverallAverageMinutesActiveOnDay(currentDate)}
  </div>`;
}

function displayStairComparison(id, date) {
  let filteredUser = activityData.filter(user => user.userID === id);
  let filteredDay = filteredUser.find(user => user.date === date);
  communityDashboard.innerHTML += `
  <div id="stairComp">
  <label>Your Stairs:</label><p>${filteredDay.flightsOfStairs}</p>
  <label>Community Stairs:</label><p>${activeData.calculateOverallAverageStairsClimbedOnDay(currentDate)}
  </div>`;
}

function displayStepTrend() {
  communityDashboard.innerHTML += `
  <div id="stepTrend">
  <label>Your Stairs:</label><p>${activeData.findUsersStepTrends(week1, randomIdNum)}</p>
  </div>`;
}
