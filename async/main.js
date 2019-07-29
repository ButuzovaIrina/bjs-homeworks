function setAlarm(time, callback) {
  function sysTime() { 
    let now = new Date();
    let nowHours, nowMinutes;
    if (now.getHours() < 10) {
      nowHours = "0" + now.getHours();
    } else {
      nowHours = now.getHours();
    }
    if (now.getMinutes() < 10) {
      nowMinutes = "0" + now.getMinutes();
    } else {
      nowMinutes = now.getMinutes();
    }
    let nowString = nowHours + ":" + nowMinutes;
    return nowString;
  } 
    if (time == sysTime()) {
    return callback();
    } 
}

function setDailyRhythm(wakeUpTime, bedTime) {
  
  function goodMorning() {
    console.log("Доброе утро, Вася!");
  }

  function sweetDream() {
    console.log("Спокойной ночи, Вася!");
  }

  setInterval(setAlarm, 1000, wakeUpTime, goodMorning);
  setInterval(setAlarm, 1000, bedTime, sweetDream); 
}

setDailyRhythm("10:36", "10:36");


