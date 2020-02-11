class Activity {
  constructor(activityData) {
    this.activityData = activityData,
    this.goalMet = []

  }

  calculateMilesWalked(date, id) {

  }



  returnMinutesActive(date, id) {
    if(this.date === date && this.userID === id) {
      return this.activityData.minutesActive
    }
  }

  calculateWeeklyAverageMinutesActive(id) {

  }

  calculateElevationClimbed(date) {
  return this.activityData.find(data => data.date === date).flightsOfStairs
  }

  returnBestStairDay(id) {
    //input = activityData.flightsOfStairs
    //.sort and shift b-a and shift highest
    //return date associated with highest stair count
  }

  evaluateIfStepGoalMet(date, id) {
      let stepGoalAchieved = this.activityData.filter(data => {
        if(data.userID === id && data.numSteps >= user.stepGoal) {
          return true
        } else {
          return false
          }
        })
      }
    //evaluates if step goal was met for any given day
    //input = stepGoal comparing to activityData.numSteps
    //output = boolean
    //if true call returnDaysWhereStepGoalMet()
    // //test should return boolean
    // if(user.dailystepGoal <= activity.numSteps) {
    //   return false



  returnDaysWhereStepGoalMet(id) {
    let stepGoalMet = this.activityData.filter(data => {
      if(data.userID === id && data.numSteps >= user.stepGoal) {
        this.goalMet.push(this.activityData.date)
        }
      return this.goalMet;
      })
    }
  }

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
