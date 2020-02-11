class Hydration {
  constructor(hydrationData, userID) {
    this.userID = userID;
    this.hydrationData = hydrationData
  }

  calculateAverageTotalConsumption(id) {
    if(this.userID === id) {
      return Math.floor(this.hydrationData.reduce((acc, cur) => {
        acc += cur.numOunces;
        return acc;
      }, 0 )) / this.hydrationData.length
    }
  }

  returnDailyConsumption(date, id) {
  let dailyConsumption = this.hydrationData.find(consumption => {
     return consumption.date === date && consumption.userID === id;
    })
     return dailyConsumption.numOunces;
  }

  returnWeeklyConsumption(week, id) {
    let filteredUser = this.hydrationData.filter(user => user.userID === id);
    // console.log(filteredUser);
    let weeklyInfo = [];
    week.forEach(day => {
      weeklyInfo.push((filteredUser
        .find(filtered => filtered.date.includes(day)).numOunces));
    });
    return weeklyInfo;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
