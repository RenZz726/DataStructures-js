function findUnique(arr) {
  let unique = 0;
  for (let num of arr) {
    unique ^= num;
  }
  return unique;
}

console.log(findUnique([2, 3, 3, 2, 4])); 

function findMissingNumber(arr) {
  let xorArray = 0;
  let xorFull = 0;

  for (let num of arr) {
    xorArray ^= num;
  }

  for (let num = arr[0]; num <= arr[arr.length - 1]; num++) {
    xorFull ^= num;
  }

  return xorArray - xorFull; 
}

// console.log(findMissingNumber([1, 3, 4, 5])); 
