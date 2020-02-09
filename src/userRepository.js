class UserRepository {
  constructor(data) {
    this.users = data;
    //this.users should be an array[3]
  }

  returnUserData(usersId) {
 //input = data.userData.id
 //expected output = user data
 //should be user
    return this.users.find(user => {
      return user.id === usersId
    })
  }

  countUsers() {
    //should return the length of this.users
    return this.users.length
  }

  calculateAverageStepGoal() {
    //should return overall average step goal
    //should be a number
    //.reduce
    return (this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal
      return acc;
    }, 0) / this.users.length);
  }

  calculateAverageStep() {
    //should return overall average step taken
    //should be a number
    return (activityData.reduce((acc, data) => {
      acc += data.numSteps;
      return acc;
    }, 0) / activityData.length);
  }

  calculateAverageSleepQuality() {
    return Number((sleepData.reduce((acc, data) => {
      acc += data.sleepQuality;
      return acc;
    }, 0) / sleepData.length).toFixed(2));
  }

  calculateAverageNumStairsClimbed() {
    //should return overall average stairs climbed
    //should be a number
    return (activityData.reduce((acc, data) => {
      acc += data.flightsOfStairs;
      return acc;
    }, 0) / activityData.length);
  }

  calculateAverageActiveMinutes() {
    //should return overall average minutes active
    //should be a number
    return (activityData.reduce((acc, data) => {
      acc += data.minutesActive;
      return acc;
    }, 0) / activityData.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
