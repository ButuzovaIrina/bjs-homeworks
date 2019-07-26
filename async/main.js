function setAlarm(time, callback) {
 
  return setInterval((() => { 
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
    if (time == nowString) {
    return callback();
    }
  }), 1000);
 
}

function setDailyRhythm(wakeUpTime, bedTime) {
  
  function goodMorning() {
    console.log("Доброе утро, Вася!");
  }

  function sweetDream() {
    console.log("Спокойной ночи, Вася!");
  }
  setAlarm(wakeUpTime, goodMorning);
  setAlarm(bedTime, sweetDream);
}

setDailyRhythm("07:26", "13:38");


