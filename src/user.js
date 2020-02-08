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
    return this.name.split(' ').shift();

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
