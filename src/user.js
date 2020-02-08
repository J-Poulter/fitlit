class User {
  constructor(userData) {
    this.id = userData.id,
    this.name = userData.name,
    this.address = userData.address,
    this.email = userData.email,
    this.strideLength = userData.strideLength,
    this.dailyStepGoal = userData.dailyStepGoal,
    this.friends = userData.friends
  }

  returnFirstName() {
    //input = this.name
    //proto = .split
    //proto = .shift
    //ouput = string of the first name
    //test = should return string
    console.log(this.name.split(''));

  }

  evaluateIfStepGoalMet() {
    //evaluates if step goal was met for any given day
    //input = stepGoal comparing to activityData.numSteps
    //output = boolean
    //if true call returnDaysWhereStepGoalMet()
    //test should return boolean
  }

  returnDaysWhereStepGoalMet() {
    //input = activtyData.date
    //proto = .push//.filter
    //output = [array of dates]
    //test = []
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
