const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const User = require('../src/user');
const Sleep = require('../src/sleep');
const Activity = require('../src/activity');

describe('UserRepository', function() {

  let user1, user2, user3, user4, sleep1, sleep2, sleep3, sleep4, activity1, activity2, activity3, activity4, userRepository;

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
      "friends": [1, 2, 4]
    });
    user4 = new User({
      "id": 4,
      "name": "Mae Connelly",
      "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
      "email": "Marcos_Pollich@hotmail.com",
      "strideLength": 3.1,
      "dailyStepGoal": 4000,
      "friends": [1, 2, 3]
    });
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    });
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    });
    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    });
    sleep4 = new Sleep({
      "userID": 4,
      "date": "2019/06/15",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    });
    activity1 = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
    activity2 = new Activity({
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    });
    activity3 = new Activity({
      "userID": 3,
      "date": "2019/06/15",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    });
    activity4 = new Activity({
      "userID": 4,
      "date": "2019/06/15",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    });
    sleepData = [sleep1, sleep2, sleep3, sleep4];
    activityData = [activity1, activity2, activity3, activity4];
    userRepository = new UserRepository([user1, user2, user3, user4]);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  })

  it('should be an instance of UserRepository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should have a users property that contains all users', function() {
    expect(userRepository.users).to.deep.equal([user1, user2, user3, user4]);
  })

  it('should be able to return a users data from their userId', function() {
    expect(userRepository.returnUserData(1)).to.deep.equal(user1);
  })

  it('should be able to count the number of users it contains', function() {
    expect(userRepository.countUsers()).to.deep.equal(4);
  })

  it('should be able to calculate the overall average step goal among its users', function() {
    expect(userRepository.calculateAverageStepGoal()).to.deep.equal(6000);
  })

  it('should be able to calculate the average steps taken among its users', function() {
    expect(userRepository.calculateAverageStep()).to.deep.equal(4689.75);
  })

  it('should be able to calculate the average sleep quality value among its users', function() {
    expect(userRepository.calculateAverageSleepQuality()).to.deep.equal(3.65);
  })

  it('should be able to calculate the average flights of stairs climbed among its users', function() {
    expect(userRepository.calculateAverageNumStairsClimbed()).to.deep.equal(22.75);
  })

  it('should be able to calculate the overall average number of minutes active among its users', function() {
    expect(userRepository.calculateAverageActiveMinutes()).to.deep.equal(127);
  })
})
