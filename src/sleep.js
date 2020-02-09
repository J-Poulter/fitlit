class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calculateAverageHoursSlept(usersId) {
    let filteredInfo = this.sleepData.filter(user => user.userID === usersId);
    return Number((filteredInfo.reduce((acc, user) => {
      acc += user.hoursSlept;
      return acc;
    }, 0) / filteredInfo.length).toFixed(2));
  }

  calculateUsersAverageSleepQuality(usersId) {
    let filteredInfo = this.sleepData.filter(user => user.userID === usersId);
    return Number((filteredInfo.reduce((acc, user) => {
      acc += user.sleepQuality;
      return acc;
    }, 0) / filteredInfo.length).toFixed(2));
  }

  returnUsersHoursSleptOnDay(usersId, day) {
    let filteredUser = this.sleepData.filter(user => user.userID === usersId);
    let filteredDay = filteredUser.find(user => user.date === day);
    return filteredDay.hoursSlept;
  }

  returnSleepQuality(usersId, day) {
    let filteredUser = this.sleepData.filter(user => user.userID === usersId);
    let filteredDay = filteredUser.find(user => user.date === day);
    return filteredDay.sleepQuality;
  }

  returnUsersHoursSleptForWeek(usersId, week) {
    let filteredUser = this.sleepData.filter(user => user.userID === usersId);
    let weeksInfo = [];
    week.forEach(day => {
      weeksInfo.push(filteredUser.find(filtered => filtered.date === day).hoursSlept);
    });
    return weeksInfo;
  }


  returnUsersSleepQualityForWeek(usersId, week) {
    let filteredUser = this.sleepData.filter(user => user.userID === usersId);
    let weeksInfo = [];
    week.forEach(day => {
      weeksInfo.push(filteredUser.find(filtered => filtered.date === day).sleepQuality);
    });
    return weeksInfo;
  }

  findAllQualitySleepersForWeek(week) {
    // let test = [];
    // let testtwo = this.sleepData;
    // let filteredDays = week.forEach(day => {
    //   return testtwo.filter(data => testtwo.date === day)
    // });
    // console.log(filteredDays);
    // let newarr = test.concat(filteredDays);
    // console.log(newarr);
    // let test = new Set(this.sleepData.userID);
    // console.log(test);
  }

  findHighestSleepersOnDay(day) {
    let filteredDay = this.sleepData.filter(user => user.date === day);
    let highestHours = filteredDay.reduce((acc, user) => {
      return (acc.hoursSlept > user.hoursSlept) ? acc : user;
    }, {}).hoursSlept;
    return filteredDay.filter(user => user.hoursSlept === highestHours);
  }

  calculateWeeklyQualitySleepChange(week1, week2) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
