class Hydration {
  constructor(hydrationData, userID) {
    this.userID = userID;
    this.hydrationData = hydrationData
  }

  calculateAverageTotalConsumption() {
    return Math.floor(this.hydrationData.reduce((acc, cur) => {
      console.log(cur.numOunces);
      acc += cur.numOunces;
      return acc;
    }, 0 )) / this.hydrationData.length
  }

  returnDailyConsumption(date, id) {
  let dailyConsumption = this.hydrationData.find(consumption => {
     return consumption.date === date && consumption.userID === id;
    })
     return dailyConsumption.numOunces;
  }

  returnWeeklyConsumption(id) {
    let week = this.hydrationData.filter(user => user.userID === id)
    let sevenDays = week.slice((week.length, -7), week.length)
    return sevenDays.map(user => user.numOunces)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
