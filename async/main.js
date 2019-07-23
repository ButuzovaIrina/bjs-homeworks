function goodMorning() {
    console.log("Доброе утро, Вася!");
}

function sweetDream() {
    console.log("Спокойной ночи, Вася!");
}

function setAlarm(time, callback) {
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
}



function setDailyRhythm(wakeUpTime, bedTime) {
  
   setAlarm(wakeUpTime, goodMorning);
   setAlarm(bedTime, sweetDream)
}

setInterval(setDailyRhythm, 1000, "07:39", "23:11");


