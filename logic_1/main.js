let allNumbers= [1, 2, 4, 5, 6, 7, 8],
someNumbers = ['1', 2, 'Hello', 4, 5, 'world', 6, 7, 8],
noNumbers = ['здесь', '',  'чисел'];

function isNumber(val) {
  return typeof val === 'number';
}

function isSomeTrue(arr, func) {
  const arr1 = arr;
  if(func(arr1[0])) {
    return true
  } else {
      arr1.splice(0, 1);
      if(arr1.length > 0) {
        return isSomeTrue(arr1,func)
      } else return false
  }
}

console.log(isSomeTrue(allNumbers, isNumber)); 
console.log(isSomeTrue(someNumbers, isNumber));
console.log(isSomeTrue(noNumbers, isNumber)); 
