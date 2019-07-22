function compareArrays(arr1, arr2) {
   if (arr1.length === arr2.length) {
     return arr1.every((item, i) => item === arr2[i]); 
   } else {
     return false;
   }
}

const sum = (a, b) => (a + b);
const mSum = memoize(sum, 2); 

function memoize(fn, limit){
  let results = []; 
  return function () {
    let arrArguments = Array.from(arguments);
    let index = 0; 
    if (results.length > (limit - 1)) {
      results.shift();
    }

    if (results.length === 0) {
      res = fn(...arrArguments);
      results.push({arrArguments, res});
      resPrint = results[0];
      return resPrint;
    } else {
      results.forEach(function (item, index) {
        if (compareArrays(item.arrArguments, arrArguments)) {
          resPrint = item;
        } else {
          res = fn(...arrArguments);
          results.push({arrArguments, res});       
          resPrint = results[results.length - 1];
        }
      })
    return resPrint;
    }
     
  }
}




console.log(mSum(3, 4));
console.log(mSum(3, 4)); // 7
console.log(mSum(13, 5)); // 18
console.log(mSum(53, 4)); // 57
console.log(mSum(5, 4)); // 9


console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true