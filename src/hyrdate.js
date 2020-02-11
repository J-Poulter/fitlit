class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData
  }

  calculateAverageTotalConsumption(id) {
    let filteredUser = this.hydrationData.filter(user => user.userID === id);
      return Math.floor(filteredUser.reduce((acc, cur) => {
        acc += cur.numOunces;
        return acc;
      }, 0 )) / filteredUser.length
  }

  returnDailyConsumption(date, id) {
  let dailyConsumption = this.hydrationData.find(consumption => {
     return consumption.date === date && consumption.userID === id;
    })
     return dailyConsumption.numOunces;
  }

  returnWeeklyConsumption(week, id) {
    let filteredUser = this.hydrationData.filter(user => user.userID === id);
    let weeklyInfo = [];
    week.forEach(day => {
      weeklyInfo.push((filteredUser.find(filtered => filtered.date.includes(day)).numOunces));
    });
    return weeklyInfo;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
