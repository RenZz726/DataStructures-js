function maxContainer(arr) {
  let maxArea = -1;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let minHeight = Math.min(arr[left], arr[right]);
    maxArea = Math.max(minHeight * (right - left), maxArea);
    if (arr[left] > arr[right]) right--;
    else left++;
  }
  return maxArea;
}
console.log(maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
              