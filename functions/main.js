function getSolutions( a, b, c ) {
  let D = Math.pow( b, 2) - 4 * a * c;
  if (D < 0) {
    return { D: D };
  } else  if (D === 0) {
    let x1 =  - b  / ( 2 * a );
    return { roots: x1, D: D };
  } else {
    let x1 = (-b + Math.sqrt (D)) / ( 2* a );
    let x2 = (-b - Math.sqrt (D)) / ( 2* a );
    return { roots:[ x1, x2 ], D: D };
  }
}

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions ( a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней.`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

//showSolutionsMessage( 1, 2, 3 );
showSolutionsMessage( 7, 20, - 3 );
//showSolutionsMessage( 2, 4, 2 );

//2
function getAverageScore( data ) {
  let average = 0,
  i =0;
  dataRes = {};
  //5.Предусмотрите работу программы для случая, когда предметов в объекте data будет менее 10.
if ( Object.keys(data).length < 10) {  
  for (let prop in data) {
    dataRes[prop] = averageCount(data[prop]);
    average += averageCount(data[prop]);
    i++;
  }
  dataRes.average = Math.round(average/i);
  return dataRes;
  } else {
    return "Слишком много предметов";
  }
}

function averageCount( count ) {
  let averageSub = 0;
    for ( let i = 0; i < count.length; i++) {
      averageSub += count [ i ];
    }
  return Math.round(averageSub/count.length);
}
  console.log(getAverageScore({ 
    algebra: [2, 5, 4, 5, 1,1],
    english: [3, 4, 5],
    fisica: [1,1,1,1,1],
    poems: [2, 5, 5,5,5]
  }))

//3
function getPersonData( secretData ) {
  return {
    firstName: getPirateName(secretData.aaa),
    lastName: getPirateName(secretData.bbb)
  }
}

function getPirateName ( codeName) {
  let pirateName;
  if (codeName === 0) {
    pirateName = "Родриго";
  } else {
    pirateName = "Эмильо";
  }
  return pirateName;
}
console.log( getPersonData ({
  aaa: 0,
  bbb: 0
}));

console.log( getPersonData ({
  aaa: 0,
  bbb: 1
}));

console.log( getPersonData ({
  aaa: 1,
  bbb: 0
}));

console.log( getPersonData ({
  aaa: 1,
  bbb: 1
}));

