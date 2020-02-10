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
          "date": "2019/06/15",
          "numOunces": 37
        },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 69
      },
        {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 96
      }
    ];

      hydration = new Hydration(hydrationData);
  });


  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to calculate total consumption', function() {
    expect(hydration.calculateTotalConsumption(1)).to.deep.equal(106);
  })

  it('should be able to return users daily consumption', function() {
    expect(hydration.returnDailyConsumption("2019/06/15")).to.deep.equal(37);
  })
})
