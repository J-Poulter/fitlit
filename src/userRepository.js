class UserRepository {
  constructor(data) {
    this.users = data;
  }

  returnUserData(usersId) {
    return this.users.find(user => {
      return user.id === usersId
    })
  }

  countUsers() {
    return this.users.length
  }

  calculateAverageStepGoal() {
    return Number((this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal
      return acc;
    }, 0) / this.users.length).toFixed(2));
  }

  calculateAverageStep() {
    return Number((activityData.reduce((acc, data) => {
      acc += data.numSteps;
      return acc;
    }, 0) / activityData.length).toFixed(2));
  }

  calculateAverageSleepQuality() {
    return Number((sleepData.reduce((acc, data) => {
      acc += data.sleepQuality;
      return acc;
    }, 0) / sleepData.length).toFixed(2));
  }

  calculateAverageNumStairsClimbed() {
    return Number((activityData.reduce((acc, data) => {
      acc += data.flightsOfStairs;
      return acc;
    }, 0) / activityData.length).toFixed(2));
  }

  calculateAverageActiveMinutes() {
    return Number((activityData.reduce((acc, data) => {
      acc += data.minutesActive;
      return acc;
    }, 0) / activityData.length).toFixed(2));
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
