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

  returnUsersAverageSleepQualityForWeek(usersId, week) {
    let weeksInfo = this.returnUsersSleepQualityForWeek(usersId, week);
    return Number((weeksInfo.reduce((acc, cur) => {
      acc += cur;
      return acc ;
    }, 0) / weeksInfo.length).toFixed(2));
  }

  findAllQualitySleepersForWeek(week) {
    let allUsersInWeek = [];
    week.forEach(day => this.sleepData.filter(user => user.date === day).forEach(user => allUsersInWeek.push(user)));
    let userIds = allUsersInWeek.map(user => user.userID);
    let uniqueIds = [...new Set(userIds)];
    let qualitySleepers = [];
    uniqueIds.forEach(id => {
      if (this.returnUsersAverageSleepQualityForWeek(id, week) > 3) {qualitySleepers.push(`userID ${id} has SQ of ${this.returnUsersAverageSleepQualityForWeek(id, week)}!`)}
    });
  }

  findHighestSleepersOnDay(day) {
    let filteredDay = this.sleepData.filter(user => user.date === day);
    let highestHours = filteredDay.reduce((acc, user) => {
      return (acc.hoursSlept > user.hoursSlept) ? acc : user;
    }, {}).hoursSlept;
    return filteredDay.filter(user => user.hoursSlept === highestHours);
  }

  calculateWeeklyQualitySleepChange(usersId, week1, week2) {
    let week2Average = this.returnUsersAverageSleepQualityForWeek(usersId, week2);
    let week1Average = this.returnUsersAverageSleepQualityForWeek(usersId, week1);
    let qualityChange = week2Average - week1Average;
    if (qualityChange > 0) {
      return `Congratulations! Your average sleep quality rating for the week has increased by ${qualityChange}!!`
    }
    else {
      return `Unfortunately your average sleep quality rating for the week has decreased by ${qualityChange}..`
    };
    // ************** Write Happy/Sad Tests for this and findqualitysleepers ****************
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
