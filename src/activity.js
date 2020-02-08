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

  evaluateIfStepGoalMet() {
    //evaluates if step goal was met for any given day
    //input = stepGoal comparing to activityData.numSteps
    //output = boolean
    //if true call returnDaysWhereStepGoalMet()
    //test should return boolean
    if(user.dailystepGoal <= activity.numSteps) {
      return false
    }
  }

  returnDaysWhereStepGoalMet() {
    //input = activtyData.date
    //proto = .push//.filter
    //output = [array of dates]
    //test = []
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
