class Hydration {
  constructor(hydrationData, userID) {
    this.userID = userID;
    this.hydrationData = hydrationData.filter(user =>user.userID === this.userID);
  }

  calculateTotalAverageConsumption() {
    return Math.floor(this.hydrationData.reduce((acc, cur) => {
      acc += cur.numOunces;
      return acc
    }, 0) / this.hydrationData.length)
  }



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
