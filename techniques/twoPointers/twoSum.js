// function twoSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let sum = 0;

//   while (left < right) {
//     sum = arr[left] + arr[right];
//     if (sum === target) return [left, right];
//     else if (sum < target) left++;
//     else right--;
//   }
// }
console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 5, 7], 8));
// console.log(twoSum([2, 3, 5, 7, 1], 6));

function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];
    if (map.has(compliment)) return [i, map.get(compliment)];
    map.set(arr[i], i);
  }
  return false;
}
