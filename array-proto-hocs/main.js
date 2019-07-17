function compareArrays(arr1, arr2) {
   return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const sum = (a, b) => a + b;
//console.log(fn(5, 7));


let results = [];
function memoize(fn, limit){
   
   let arrArguments = Array.from(arguments).join(', ');
   if (!results.includes(arrArguments)) {
     if (results.length < limit) {
      results.push({arrArguments, fn});
      console.log(results);
      return fn;
     } else {
      results.shift();
      results.push({arrArguments, fn});
     }  
   }
}

//const mSum = memoize(fn, 10) ; 
console.log (memoize(sum(3, 4 ), 10)); // 7
console.log (memoize(sum(5, 4 ), 10)); // 7
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


console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true