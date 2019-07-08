"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function checkInput (stringInput, nameParametr) {
  let value;
  if (typeof stringInput === "string") {
    return value = parseFloat(stringInput);
  } else if (typeof stringInput === "number") {  
    return value = stringInput;   
  } else { 
    return  console.log(`Параметр "${nameParametr}" содержит неправильное значение "${stringInput}".`);
  }
} 


function monthDiff(dateToDay, date) {
  let months;
  months = (date.getFullYear() - dateToDay.getFullYear()) * 12;
  months -= dateToDay.getMonth() + 1;
  months += date.getMonth();
  return months <= 0 ? 0 : months;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь 

  percent = checkInput(percent, "Процентная ставка");
  contribution = checkInput(contribution, "Начальный взнос");
  amount = checkInput(amount, "Общая стоимость");
  let sumDebt = amount - contribution;
  //console.log(sumDebt);
  let dateToDay = new Date();
  let dateEnd = new Date(date);
  let numberOfMonth = monthDiff(dateToDay, dateEnd);   
  let percInMonth = percent / 12 / 100; 
  let payInMonth = sumDebt * ( percInMonth + percInMonth / (Math.pow( 1 + percInMonth, numberOfMonth )-1 ));
 // console.log(payInMonth);
  let totalAmount = payInMonth * numberOfMonth;
 // console.log(totalAmount);
  return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
  let greeting;
  /*switch (name) {
    case "":
    case "null":
    case "undefined":
      greeting = `Привет, мир! Меня зовут Аноним.`;
    default:
      greeting = `Привет, мир! Меня зовут ${name}.`;
  } не работает (*/

  if (name === "" || name === "null" || name === "undefined") {
    greeting = `Привет, мир! Меня зовут Аноним.`;
  } else {
    greeting = `Привет, мир! Меня зовут ${name}.`;
  }
  console.log(greeting);
  return greeting;
}