function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
  let now = Date.now();
  birthday = Date.parse(birthday);
  let diff = now - birthday;
  let age = Math.round(diff/(365.242 * 24 * 60 * 60 *1000));
  return (age >= 18) ? true :  false;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
  if (animal === undefined) {
    return null;
  } else {
    let sound = animal.sound;
    return sound;
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
  let average = 0;
  let i;
  for (i = 0; i < marks.length; i++ ) {
    average = average + parseInt(marks[i]); 
  }  
  let roundedAverage = Math.round(average/i);
  return roundedAverage;
}