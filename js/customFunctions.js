function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) result.push(callback(arr[i]));
  return result;
}

function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++)
    if (callback(arr[i])) result.push(arr[i]);
  return result;
}

function myReduce(arr, callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : arr[0];
  const start = initialValue !== undefined ? 0 : 1;
  for (let i = start; i < arr.length; i++) acc = callback(arr[i], acc);
  return acc;
}
const numbers = [1, 2, 3, 4];
const result = myMap(numbers, (n) => n * 2);
const evenNums = myFilter(numbers, (n) => n % 2 === 0);
const sum = myReduce(numbers, function (acc, cur) {
  return acc + cur;
});
console.log(result);
console.log(evenNums);
console.log(sum);
