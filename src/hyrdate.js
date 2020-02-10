class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
  }

  calculateTotalConsumption(id) {
    let totalConsumption = this.hydrationData.reduce((acc, total) => {
      if(total.userID === id) {
        acc += total.numOunces;
      }
      return acc
    }, 0)
    return totalConsumption;
      }



  returnDailyConsumption(date) {
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
