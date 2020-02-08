const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user');
const Activity = require('../src/activity');

describe('User', function() {

  let user1, activity1;

  beforeEach(function() {
    user1 = new User({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [2, 3, 4]
    });

    activity1 = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });


    activityData = [activity1];
  });


  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  })

  it('should be an instance a User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a property that contains user ID', function() {
    expect(user.id).to.deep.equal(1);
  })

  it('should have a property that contains user name' , function() {
    expect(user.name).to.deep.equal('Luisa Hane');
  })

  it('should have a property that contains user address', function() {
    expect(user.address).to.deep.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  })

  it('should have a property that contains user email', function() {
    expect(user.email).to.deep.equal("Diana.Hayes1@hotmail.com");
  })

  it('should have a property that contains users average stride length', function() {
    expect(user.strideLength).to.deep.equal(4.3);
  })

  it('should have a property that contains users daily step goal', function() {
    expect(user.dailyStepGoal).to.deep.equal(10000);
  })

  it('should have a property that contains users friends', function() {
    expect(user.friends).to.deep.equal([16, 4, 8]);
  })

  it('should be able to return users first name', function() {
    expect(user.returnFirstName()).to.deep.equal("Luisa");
  })

  it('should evaluate if step goal has been met', function() {
    expect(user.evaluateIfStepGoalMet()).to.deep.equal(false);
  })
})
