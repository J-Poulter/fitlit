class Activity {
  constructor(activityData) {
    this.userID = activityData.userId,
    this.date = activityData.date,
    this.numSteps = activityData.numSteps,
    this.minutesActive = activityData.minutesActive,
    this.flightsOfStairs = activityData.flightsOfStairs
  }

  calculateMilesWalked() {

  }

  returnMinutesActive() {

  }

  calcWeeksActiveAverage() {

  }

  calculateElevationClimbed() {

  }

  returnBestStairDay() {
    //input = activityData.flightsOfStairs
    //proto = .push // .find or .sort and shift b-a and shift highest
    //return date associated with highest stair count
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
