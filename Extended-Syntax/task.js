"use strict";
 let x;
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    x = ['', ''];
    let discriminant = Math.pow(b, 2) - 4 * (a * c);
    if (discriminant === 0) {
      x[0] = - b / (2 * a);
    } else if (discriminant > 0) {
      x[0] = (( - b) + Math.sqrt(discriminant)) / (2 * a); 
      x[1] = (( - b) - Math.sqrt(discriminant)) / (2 * a); 
    } else {
      console.log("уравнение не имеет решения.");
    }
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь  
  let result;
  let dateToDay = new Date();
  if ((dateToDay.getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  console.log(result);
  return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    let marksCut;
    if (marks.length > 5) {
        marksCut =  marks.slice((marks.length - 5));
        console.log("Оценок больше пяти. Для расчета используется пять последних оценок.");
    } else {
        marksCut = marks;
    }
    let sumMarcs = 0;
    for (let i = 0; i < marksCut.length; i++) {
      sumMarcs = sumMarcs + marksCut[i];
    }
    let averageMark = (sumMarcs / marksCut.length);
    return averageMark;
}
