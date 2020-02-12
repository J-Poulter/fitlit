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
    week.forEach(day => {
      weeksActiveValues.push(this.activityData
        .find(user => user.userID === id && user.date === day).minutesActive);
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

  calculateTotalStepCountForWeek(week, id) {
    let weeksStepCounts = [];
    week.forEach(day => weeksStepCounts.push((this.activityData.find(user => user.userID === id && user.date === day)).numSteps));
    let totalSteps = weeksStepCounts.reduce((acc, cur) => {
      acc += cur
      return acc;
    })
    return totalSteps;
  }

  returnFriendsStepCounts(week, id, userData) {
    let friendsSteps = [];
    let filteredUser = userData.find(user => user.id === id);
    friendsSteps = filteredUser.friends.map(friend => {
      return {
        FriendsId: friend,
        FriendsName: userData.find(user => user.id === friend).name,
        FriendsTotalSteps: this.calculateTotalStepCountForWeek(week, friend)
      }
    })
    return friendsSteps;
  }

  findUsersStepTrends(week, id) {
    let filteredUser = [];
    var currentTrend = [];
    var largestTrend = [];
    var currentSteps = 0
    week.forEach(day => filteredUser.push(this.activityData.find(user => user.userID === id && user.date === day)));
    filteredUser.forEach(user => {
      if (user.numSteps > currentSteps) {
        currentTrend.push(user.date)
        if (currentTrend.length > 2) {
          largestTrend = currentTrend
        }
      }
      else {
        currentTrend = [user.date];
      }
      currentSteps = user.numSteps
    })
    if (largestTrend.length > 0) {
      return largestTrend;
    }
    else {
      return 'Sorry, looks like you do not have a three day increasing trend for this week!'
    }
  }

  findUsersActiveTrends(week, id) {
    let filteredUser = [];
    var currentTrend = [];
    var largestTrend = [];
    var currentMinutes = 0
    week.forEach(day => filteredUser.push(this.activityData.find(user => user.userID === id && user.date === day)));
    filteredUser.forEach(user => {
      if (user.minutesActive > currentMinutes) {
        currentTrend.push(user.date)
        if (currentTrend.length > 2) {
          largestTrend = currentTrend
        }
      }
      else {
        currentTrend = [user.date];
      }
      currentMinutes = user.minutesActive
    })
    if (largestTrend.length > 0) {
      return largestTrend;
    }
    else {
      return 'Sorry, looks like you do not have three consective days with increasing minutesActive for this week!'
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
