function findDuplicates(arr) {
  let j = 1;
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[j - 1]) {
        arr[j] = arr[i];
        j++;
    }
  }
  return j;
}
console.log(findDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
