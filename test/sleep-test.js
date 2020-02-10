const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/sleep');

describe('Sleep', function() {

  let sleepData, week;

  beforeEach(function() {
    sleepData = new Sleep([
    {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 4.1,
      "sleepQuality": 3.8
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.8
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 2.6
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 3
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 10.4,
      "sleepQuality": 3.1
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 10.7,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 9.6,
      "sleepQuality": 2.5
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.3,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 2.4
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 7.8,
      "sleepQuality": 4.2
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 4.3,
      "sleepQuality": 4.8
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 7,
      "sleepQuality": 3
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 4.8,
      "sleepQuality": 3.3
    },
    {
      "userID": 1,
      "date": "2019/06/23",
      "hoursSlept": 7.8,
      "sleepQuality": 1.5
    },
    {
      "userID": 2,
      "date": "2019/06/23",
      "hoursSlept": 8,
      "sleepQuality": 4.9
    }
  ]);

  week = ['2019/06/16', '2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22'];
  });

  week2 = ['2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22', '2019/06/23'];

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleepData).to.be.an.instanceof(Sleep);
  });

  it('should have a sleepData property', function() {
    expect(sleepData.sleepData).to.deep.equal(sleepData.sleepData);
  });

  it('should be able to calculate a users overall average hours slept', function() {
    expect(sleepData.calculateAverageHoursSlept(1)).to.deep.equal(7.91);
  });

  it('should be able to calculate a users overall sleep quality', function() {
    expect(sleepData.calculateUsersAverageSleepQuality(1)).to.deep.equal(2.53);
  });

  it('should be able to return a users hours slept on a given day', function() {
    expect(sleepData.returnUsersHoursSleptOnDay(1, '2019/06/16')).to.deep.equal(4.1);
  });

  it('should be able to return a users sleep quality on a given day', function() {
    expect(sleepData.returnSleepQuality(1, '2019/06/16')).to.deep.equal(3.8);
  });

  it('should be able to return how many hours a user slept each day over a given week', function() {
    expect(sleepData.returnUsersHoursSleptForWeek(1, week)).to.deep.equal([4.1, 8, 10.4, 10.7, 9.3, 7.8, 7]);
  });

  it('should be able to return a users sleep quality for each day over a given week', function() {
    expect(sleepData.returnUsersSleepQualityForWeek(1, week)).to.deep.equal([3.8, 2.6, 3.1, 1.2, 1.2, 4.2, 3]);
  });

  it('should be able to return the users average sleep quality for a given week', function() {
    expect(sleepData.returnUsersAverageSleepQualityForWeek(1, week)).to.deep.equal(2.73)
  })

  it('should be able to find all users whose sleep quality averaged over 3 for a given week', function() {
    expect(sleepData.findAllQualitySleepersForWeek(week)).to.deep.equal(['userID 2 has a SQ of 3.29!']);
  });

  it('should be able to find the users with the highest number of hours slept', function() {
    expect(sleepData.findHighestSleepersOnDay('2019/06/18')).to.deep.equal([{
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    }]);
  });

  it('should be able to calculate the change of a users average sleep quality from one week to another and return a positive message if it improved', function() {
    expect(sleepData.calculateWeeklyQualitySleepChange(1, week2, week)).to.deep.equal('Congratulations! Your average sleep quality rating for the week has increased by 0.33!!');
  });

  it('should be able to return a different message if there has been a decrease in the users sleep quality from one week to another', function() {
    expect(sleepData.calculateWeeklyQualitySleepChange(1, week, week2)).to.deep.equal('Unfortunately your average sleep quality rating for the week has decreased by -0.33..');
  });
});
