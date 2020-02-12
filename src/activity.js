class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  calculateMilesWalked(day, id, userData) {
    let usersStride = userData.find(user => user.id === id).strideLength;
    let filteredUser = this.activityData.find(user => user.userID === id && user.date === day);
    let miles = (filteredUser.numSteps * usersStride) / 5280 / 2;
    let milesRounded = Number(miles.toFixed(2));
    return milesRounded;
  }

  returnUserMinutesActiveOnDay(day, id) {
    let filteredUser = this.activityData.find(user => user.userID === id && user.date ===day);
    return filteredUser.minutesActive;
  }


  calculateUserWeeksActiveAverage(week, id) {
    let weeksActiveValues = [];
    let filteredUser = this.activityData.filter(user => user.userID === id);
    week.forEach(day => {
      weeksActiveValues.push(filteredUser
        .find(user => user.date === day).minutesActive);
      });
    let weeksTotal = weeksActiveValues.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    return Number((weeksTotal / weeksActiveValues.length).toFixed(2));
  }


  returnBestStairDay(id) {
    let filteredUser = this.activityData.filter(user => user.userID === id);
    return filteredUser.reduce((acc,cur) => {
      return (acc.flightsOfStairs > cur.flightsOfStairs) ? acc : cur;
    }, {}).date
  }

  evaluateIfUserStepGoalMetOnDay(day, id, userData) {
    let targetUser = this.activityData.find(user => user.userID === id && user.date === day);
    let usersGoal = userData.find(user => user.id === id).dailyStepGoal;
    return (targetUser.numSteps > usersGoal) ? true : false;
  }

  returnUsersDaysWhereStepGoalMet(id, userData) {
    let goalMetDays = [];
    let targetUser = this.activityData.filter(user => user.userID === id);
    let usersGoal = userData.find(user => user.id === id).dailyStepGoal;
    targetUser.forEach(user => {
      if (user.numSteps > usersGoal) {
        goalMetDays.push(user.date)
      };
    });
    return goalMetDays;
  }

  calculateUserElevationClimbedInFeetOnDay(day, id) {
    let targetUser = this.activityData.find(user => user.userID === id && user.date === day);
    return targetUser.flightsOfStairs * 12;
  }

  calculateOverallAverageStairsClimbedOnDay(day) {
    let filteredUsers = this.activityData.filter(user => user.date === day);
    let totalStairs = filteredUsers.reduce((acc, cur) => {
      acc += cur.flightsOfStairs;
      return acc;
    }, 0);
    return Number((totalStairs / filteredUsers.length).toFixed(2));
  }

  calculateOverallAverageStepsTakenOnDay(day) {
    let filteredUsers = this.activityData.filter(user => user.date === day);
    let totalSteps = filteredUsers.reduce((acc, cur) => {
      acc += cur.numSteps;
      return acc;
    }, 0);
    return Number((totalSteps / filteredUsers.length).toFixed(2));
  }

  calculateOverallAverageMinutesActiveOnDay(day) {
    let filteredUsers = this.activityData.filter(user => user.date === day);
    let totalActiveMinutes = filteredUsers.reduce((acc, cur) => {
      acc += cur.minutesActive;
      return acc;
    }, 0);
    return Number((totalActiveMinutes / filteredUsers.length).toFixed(2));
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
