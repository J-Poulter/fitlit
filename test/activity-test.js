const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user');
const Activity = require('../src/activity');
const UserRepository = require('../src/userRepository');

describe('Activity', function() {

  let activityData, userData;

  beforeEach(function() {
    userData = [{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    },
    {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    }]

    activityData = new Activity([{
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 6637,
        "minutesActive": 175,
        "flightsOfStairs": 36
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 14329,
        "minutesActive": 168,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 4419,
        "minutesActive": 165,
        "flightsOfStairs": 33
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numSteps": 4662,
        "minutesActive": 181,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 8429,
        "minutesActive": 275,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14478,
        "minutesActive": 140,
        "flightsOfStairs": 12
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 6760,
        "minutesActive": 135,
        "flightsOfStairs": 6
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numSteps": 10225,
        "minutesActive": 174,
        "flightsOfStairs": 26
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numSteps": 10289,
        "minutesActive": 119,
        "flightsOfStairs": 6
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numSteps": 13928,
        "minutesActive": 218,
        "flightsOfStairs": 21
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numSteps": 7186,
        "minutesActive": 25,
        "flightsOfStairs": 15
      },
      {
        "userID": 2,
        "date": "2019/06/24",
        "numSteps": 8568,
        "minutesActive": 81,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2019/06/25",
        "numSteps": 3093,
        "minutesActive": 185,
        "flightsOfStairs": 25
      },
      {
        "userID": 1,
        "date": "2019/06/26",
        "numSteps": 8105,
        "minutesActive": 219,
        "flightsOfStairs": 28
      },
      {
        "userID": 2,
        "date": "2019/06/26",
        "numSteps": 11522,
        "minutesActive": 88,
        "flightsOfStairs": 18
      },
    ])

    // user = new User(userData);
    // activity = new Activity(activityData);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', function() {
    expect(activityData).to.be.an.instanceof(Activity);
  });

  it('should be able to calculate miles walked', function() {
    expect(activityData.calculateMilesWalked("2019/06/25", 1)).to.deep.equal(0.59)
  })

  it('should be able to return minutes active', function() {
    expect(activityData.returnMinutesActive("2019/06/17", 1)).to.deep.equal(168)
  })

  // it('should be able to return weekly average minutes active', function() {
  //   expect(activityData.calculateWeeklyAverageMinutesActive(1)).to.deep.equal(168)
  // })

  it('should be able to return stairs climbed', function() {
    expect(activityData.calculateElevationClimbed("2019/06/17", 1)).to.deep.equal(18)
  })

  // it('should be able to return best stair day', function() {
  //   expect(activityData.returnBestStairDay(1)).to.deep.equal()
  // })

  it('should be able to evaluate if step goals were met', function() {
    expect(activityData.evaluateIfStepGoalMet("2019/06/17", 1)).to.deep.equal(true)
  })

  it('should be able to return days where step goal was met', function() {
    expect(activityData.returnDaysWhereStepGoalMet(1)).to.deep.equal([])
  })

});
