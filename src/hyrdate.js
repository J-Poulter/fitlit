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
  }g



  returnDailyConsumption(date, id) {
  let dailyConsumption = this.hydrationData.find(consumption => {
       return consumption.date === date;
    })
     return dailyConsumption.numOunces;
  }

  returnWeeklyConsumption() {
    return this.hydrationData.slice(-7).map(day => day.numOunces);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
