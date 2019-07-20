function compareArrays(arr1, arr2) {
   if (arr1.length === arr2.length) {
     return !arr1.some((item, i) => item != arr2[i]); 
   } else {
     return false;
   }
}

const sum = (a, b) => (a + b);
const mSum = memoize(sum, 10); 
console.log(sum(5, 8));

function memoize(fn, limit){
   let results = [];
   console.log(fn, limit);
     return function () {
    let arrArguments = Array.from(arguments).join(', ');
   console.log(arrArguments); 
   
    res = fn();
  console.log(results);
   console.log(res);
     results.push({arrArguments, res});
   console.log('2  ' + results);
     }
   /*   
   if (!results.includes(arrArguments)) {

     if (results.length < limit) {
      
      console.log("lll" + results);
        } else {
      results.shift();
      results.push({arrArguments, fn});
     }
   } */
   
}




console.log (mSum(3, 4)); // 7
console.log (mSum(53, 4)); // 7
console.log (mSum(34, 4)); // 7
console.log (mSum(3, 4)); // 7
/*console.log (memoize(sum(5, 4 ), 10)); // 7
console.log (memoize(sum(3, 14 ), 10)); // 7
console.log (memoize(sum(3, 4 ), 10)); // 7
console.log (memoize(sum(5, 4 ), 10)); // 7
console.log (memoize(sum(3, 14 ), 10)); // 7
console.log (memoize(sum(3, 4 ), 10)); // 7
console.log (memoize(sum(5, 4 ), 10)); // 7
console.log (memoize(sum(3, 14 ), 10)); // 7
console.log (memoize(sum(3, 4 ), 10)); // 7
console.log (memoize(sum(5, 4 ), 10)); // 7
console.log (memoize(sum(3, 14 ), 10)); // 7
*/

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true