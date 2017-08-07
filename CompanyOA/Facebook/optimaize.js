function DigitallyMenu(menus) {
  this.menus = menus;
  this.currentDay = null;
  this.currentTime = null;
  this.init();
}

DigitallyMenu.prototype.init = function () {
  this.currentDay = Math.floor((Math.random() * 7) + 1);
  this.currentTime = Math.floor(Math.random() * 1441);
};

DigitallyMenu.prototype.getCurrentDay = function () {
  return this.currentDay;
};

DigitallyMenu.prototype.getCurrentTime = function () {
  return this.currentTime;
};

DigitallyMenu.prototype.setTimeAndDay = function (time, day) {
  this.currentTime = time;
  this.currentDay = day;
};

DigitallyMenu.prototype.getCurrentMenu = function () {
  var result = '';
  var startTime, endTime, daysOfWeekOpen;
  var isAfterStartTime = false;
  for (var i = 0; i < this.menus.length; i++) {
    startTime = this.menus[i].startTime;
    endTime = this.menus[i].endTime;
    daysOfWeekOpen = this.menus[i].daysOfWeekOpen;
    if (daysOfWeekOpen.indexOf(this.currentDay) == -1) {
      continue;
    }
    if (startTime <= this.currentTime) {
      isAfterStartTime = true;
    }

    if (this.currentTime <= endTime && isAfterStartTime) {
      result = this.menus[i].menu;
      return result;
    }
  }

  return result;

};


function main() {
  var menus = [
    {startTime: 0, endTime: 120, daysOfWeekOpen: [1, 2, 3, 4], menu: "Midnight menu"},
    {startTime: 660, endTime: 780, daysOfWeekOpen: [1, 2, 3, 4], menu: "Lunch menu"},
    {startTime: 1080, endTime: 1200, daysOfWeekOpen: [1, 2, 3, 4], menu: "Dinner menu"},
    {startTime: 0, endTime: 1440, daysOfWeekOpen: [7], menu: "Sunday menu"}
  ];

  var currentMenu = new DigitallyMenu(menus);
  console.log('current ' + currentMenu.getCurrentTime() + ' ' + currentMenu.getCurrentDay() + ' ' + currentMenu.getCurrentMenu());

  currentMenu.setTimeAndDay(100, 1);
  console.log('100, 1 ' + currentMenu.getCurrentMenu());

  currentMenu.setTimeAndDay(500, 1);
  console.log('500, 1 ' + currentMenu.getCurrentMenu());

  currentMenu.setTimeAndDay(1300, 1);
  console.log('1300, 1 ' + currentMenu.getCurrentMenu());

  currentMenu.setTimeAndDay(500, 5);
  console.log('500, 5 ' + currentMenu.getCurrentMenu());

  currentMenu.setTimeAndDay(1000, 4);
  console.log('1000, 4 ' + currentMenu.getCurrentMenu());


}

main();