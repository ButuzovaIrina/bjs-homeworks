function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]));
 }

const sum = (a, b) => (a + b);
const mSum = memoize(sum, 2); 


function memoize(fn, limit) {
  let results = []; 
  return function () {
    let arrArguments = Array.from(arguments);
    let valueFind = results.find(function (value, index) {
    return compareArrays(arrArguments, results[index].arrArguments);
    });   
    if (valueFind === undefined) {
      res = fn(...arrArguments);
      results.push({arrArguments, res}); 
      console.log("подсчитано");
    } else {
      console.log("нашли в массиве" );
      res = valueFind.res;
    }

    if (results.length > (limit)) {
       results.shift();
    }
      return res;
  }
}//memoize





console.log(mSum(3, 4)); // 7
console.log(mSum(3, 4));
console.log(mSum(13, 5)); // 18
console.log(mSum(13, 5)); // 18
console.log(mSum(53, 4)); // 57
console.log(mSum(53, 4)); // 57
console.log(mSum(5, 4)); // 9


console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true