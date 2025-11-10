function findSubArray(nums, k) {
  let window = new Set();
  let currSum = 0;
  let maxSum = 0;
  let left = 0;
  //   let bestStart = 0;
  //   let bestEnd = 0;

  for (let right = 0; right < nums.length; right++) {
    while (window.size === k) {
      window.delete(nums[left]);
      currSum -= nums[left];
      left++;
    }

    currSum += nums[right];
    window.add(nums[right]);
    if (window.size === k) {
      // bestStart = left;
      // bestEnd = right;
      maxSum = Math.max(currSum, maxSum);
    }
  }
  //   nums.slice(bestStart, bestEnd + 1)
  return maxSum;
}
console.log(findSubArray([1, 5, 4, 2, 9, 9, 9], 3));