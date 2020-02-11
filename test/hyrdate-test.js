const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user');
const Hydration = require('../src/hyrdate');

describe('Hydration', function() {

  let hydration, hydrationData;

  beforeEach(function() {
    hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 37
        },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 69
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 32
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 61
      },
        {
          "userID": 1,
          "date": "2019/06/19",
          "numOunces": 76
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "numOunces": 25
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "numOunces": 14
        },
        {
          "userID": 2,
          "date": "2019/06/21",
          "numOunces": 34
        },
        {
          "userID": 1,
          "date": "2019/06/22",
          "numOunces": 20
        },
        {
          "userID": 1,
          "date": "2019/06/23",
          "numOunces": 15
        },
    ];

      hydration = new Hydration(hydrationData);
      week1 = ['2019/06/16', '2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22'];
      week2 = ['2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22', '2019/06/23'];

    });


  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to calculate average total consumption', function() {
    expect(hydration.calculateAverageTotalConsumption(2)).to.deep.equal(51.5);
  })

  it('should be able to return users daily consumption', function() {
    expect(hydration.returnDailyConsumption("2019/06/21", 2)).to.deep.equal(34);
  })

  it('should be able to return users weekly consumption', function() {
    expect(hydration.returnWeeklyConsumption(week1, 1)).to.deep.equal([37, 32, 61, 76, 25, 14, 20]);
  })
})
