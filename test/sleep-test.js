const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/sleep');

describe('Sleep', function() {

  let sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7, sleep8, sleep9, sleep10, sleep11, sleep12, sleep13, sleep14, sleep15, sleep16, sleep17, sleep18;

  beforeEach(function() {

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
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 4.1,
      "sleepQuality": 3.8
    });
    sleep4 = new Sleep({
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.8
    });
    sleep5 = new Sleep({
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 2.6
    });
    sleep6 = new Sleep({
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 3
    });
    sleep7 = new Sleep({
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 10.4,
      "sleepQuality": 3.1
    });
    sleep8 = new Sleep({
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    });
    sleep9 = new Sleep({
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 10.7,
      "sleepQuality": 1.2
    });
    sleep10 = new Sleep({
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 9.6,
      "sleepQuality": 2.5
    });
    sleep11 = new Sleep({
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.3,
      "sleepQuality": 1.2
    });
    sleep12 = new Sleep({
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 2.4
    });
    sleep13 = new Sleep({
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 7.8,
      "sleepQuality": 4.2
    });
    sleep14 = new Sleep({
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 4.3,
      "sleepQuality": 4.8
    });
    sleep15 = new Sleep({
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 7,
      "sleepQuality": 3
    });
    sleep16 = new Sleep({
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 4.8,
      "sleepQuality": 3.3
    });
    sleep17 = new Sleep({
      "userID": 1,
      "date": "2019/06/23",
      "hoursSlept": 7.8,
      "sleepQuality": 1.5
    });
    sleep18 = new Sleep({
      "userID": 2,
      "date": "2019/06/23",
      "hoursSlept": 8,
      "sleepQuality": 4.9
    });
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(Sleep).to.be.an.instanceof(Sleep);
  });

  it('should have a userId property', function() {
    expect(sleep1.userId).to.deep.equal(1);
  });

  it('should have a date property', function() {
    expect(sleep1.date).to.deep.equal('2019/06/15');
  });

  it('should have a hoursSlept property', function() {
    expect(sleep1.hoursSlept).to.deep.equal(6.1);
  });

  it('should have a sleepQuality property', function() {
    expect(sleep1.sleepQuality).to.deep.equal(2.2);
  });

  it('should be', function() {
    expect(sleep1.).to.deep.equal();
  });

  it('should be', function() {
    expect(sleep1.).to.deep.equal();
  });

  it('should be', function() {
    expect(Sleep).to.be.a('');
  });

  it('should be', function() {
    expect(Sleep).to.be.a('');
  });

  it('should be', function() {
    expect(Sleep).to.be.a('');
  });

})
