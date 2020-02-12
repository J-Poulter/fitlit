const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/activity');
const User = require('../src/user');
const UserRepository = require('../src/userRepository');

describe('Activity', function() {
  let activityData, user1, user2, user3, week, userData;

  beforeEach(function() {

    activityData = new Activity([
      {
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
        "userID": 2,
        "date": "2019/06/16",
        "numSteps": 4112,
        "minutesActive": 220,
        "flightsOfStairs": 37
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 14329,
        "minutesActive": 168,
        "flightsOfStairs": 18
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numSteps": 13750,
        "minutesActive": 65,
        "flightsOfStairs": 4
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
        "userID": 2,
        "date": "2019/06/19",
        "numSteps": 9858,
        "minutesActive": 243,
        "flightsOfStairs": 44
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14478,
        "minutesActive": 140,
        "flightsOfStairs": 12
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numSteps": 8153,
        "minutesActive": 74,
        "flightsOfStairs": 10
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
        "userID": 2,
        "date": "2019/06/22",
        "numSteps": 3605,
        "minutesActive": 124,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numSteps": 13928,
        "minutesActive": 218,
        "flightsOfStairs": 21
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "numSteps": 4148,
        "minutesActive": 142,
        "flightsOfStairs": 0
      },
    ]);


    user1 = new User({
          "id": 1,
          "name": "Luisa Hane",
          "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          "email": "Diana.Hayes1@hotmail.com",
          "strideLength": 4.3,
          "dailyStepGoal": 10000,
          "friends": [2, 3, 4]
      });
      user2 = new User({
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [1, 3, 4]
      });
      user3 = new User({
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [1, 2]
      });


      week = ['2019/06/16', '2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22']
      userData = [user1, user2, user3];
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activityData).to.be.an.instanceof(Activity);
  });

  it('should be able to calculate miles walked', function() {
    expect(activityData.calculateMilesWalked('2019/06/20', 1, userData)).to.deep.equal(5.90);
  });

  it('should be able to return the minutes a user was active on a particular day', function() {
    expect(activityData.returnUserMinutesActiveOnDay('2019/06/22', 2)).to.deep.equal(124);
  });

  it('should be able to calculate the average active minutes of a user for a given week', function() {
    expect(activityData.calculateUserWeeksActiveAverage(week, 2)).to.deep.equal(154.43);
  });

  it('should be able to find and return a users best stair day', function() {
    expect(activityData.returnBestStairDay(1)).to.deep.equal('2019/06/16');
  });

  it('should be able to evaluate if a user met their step goal on a given day', function() {
    expect(activityData.evaluateIfUserStepGoalMetOnDay('2019/06/21', 2, userData)).to.deep.equal(true);
  });

  it('should be able to evaluate if a user did not meet their step goal on a given day', function() {
    expect(activityData.evaluateIfUserStepGoalMetOnDay('2019/06/22', 2, userData)).to.deep.equal(false);
  });

  it('should be able to find all the days when a user met their step goal', function() {
    expect(activityData.returnUsersDaysWhereStepGoalMet(1, userData)).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/22', '2019/06/23']);
  });

  it('should be able to calculate the ascent of a user in feet on a given day', function() {
    expect(activityData.calculateUserElevationClimbedInFeetOnDay('2019/06/18', 1)).to.deep.equal(396);
  });

  it('should be able to calculate the overall average stairs climbed among all users on a given day', function() {
    expect(activityData.calculateOverallAverageStairsClimbedOnDay('2019/06/17')).to.deep.equal(11);
  });

  it('should be able to calculate the overall average steps taken among all users on a given day', function() {
    expect(activityData.calculateOverallAverageStepsTakenOnDay('2019/06/18')).to.deep.equal(4540.5);
  });

  it('should be able to calculate the overall average minutes active among all users on a given day', function() {
    expect(activityData.calculateOverallAverageMinutesActiveOnDay('2019/06/19')).to.deep.equal(259);
  });

  it('should be able to calculate an individuals total step count for the week', function() {
    expect(activityData.calculateTotalStepCountForWeek(week, 1)).to.deep.equal(65341);
  });

  it('should be able to return a users friends total steps counts for a given week', function() {
    expect(activityData.returnFriendsStepCounts(week, 3, userData)).to.deep.equal([{
      FriendsId: 1,
      FriendsName: 'Luisa Hane',
      FriendsTotalSteps: 65341
    },
    {
      FriendsId: 2,
      FriendsName: 'Jarvis Considine',
      FriendsTotalSteps: 54365
    }]);
  });

  it('should be able to find trends of a user where their step count increased across 3 or more days', function() {
    expect(activityData.findUsersStepTrends(week, 1)).to.deep.equal(['2019/06/18', '2019/06/19', '2019/06/20'])
  })
});
