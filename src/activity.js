class Activity {
  constructor(activityData) {
    this.activityData = activityData,
    this.milesWalked = 0,
    this.metStepGoal = null;
  }

  calculateMilesWalked(date, id) {
    // let filteredUser = this.activityData.filter(user => user.userID === id);
    // let getMiles = this.activityData.map(data => {
    //   if(data.userID === id && data.date === date) {
    //     let mile = data.numSteps * user.strideLength/5280;
    //     console.log(this.user);
    //     this.milesWalked += mile;
    //     // console.log(this.user.strideLength);
    //   }
    //   return this.milesWalked
    //   console.log(this.milesWalked)
    // })
  }



  returnMinutesActive(date, id) {
    let minutesActive = this.activityData.map(data => {
      if(data.userID === id && data.date === date) {
        console.log(data.minutesActive);
      }
      return data.minutesActive
  })
}
  calculateWeeklyAverageMinutesActive(id) {

  }

  calculateElevationClimbed(date, id) {

  }

  returnBestStairDay(id) {
    //input = activityData.flightsOfStairs
    //proto = .push // .find or .sort and shift b-a and shift highest
    //return date associated with highest stair count
  }

  evaluateIfStepGoalMet(date, id) {
    //evaluates if step goal was met for any given day
    //input = stepGoal comparing to activityData.numSteps
    //output = boolean
    //if true call returnDaysWhereStepGoalMet()
    // //test should return boolean
    // if(user.dailystepGoal <= activity.numSteps) {
    //   return false
    }


  returnDaysWhereStepGoalMet(id) {
    //input = activtyData.date
    //proto = .push//.filter
    //output = [array of dates]
    //test = []
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
