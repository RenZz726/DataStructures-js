// print upto n
function print(n = 1) {
  if (n >= 10) return;
  console.log(n);
  print(n + 1);
}
// print();

// sum of n numbers
function sumOfN(n) {
  if (n === 0) return 0;
  return n + sumOfN(n - 1);
}
// console.log(sumOfN(10));

// sum of numbers in array.
const arr = [5, 3, 2, 0, 1];
function sumOfArr(n) {
  if (n === 0) return arr[0];
  return arr[n] + sumOfArr(n - 1);
}
// console.log(sumOfArr(arr.length - 1));

// sum of all odd numbers
function findOdds(n) {
  if (n === 0) {
    if (arr[n] % 2 !== 0) return arr[n];
    else return 0;
  }
  if (arr[n] % 2 !== 0)  return arr[n] + findOdds(n - 1);
  else return 0 + findOdds(n - 1);
}

console.log(findOdds(arr.length - 1));
