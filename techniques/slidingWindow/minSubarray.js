function minSubArray(nums, target) {
  let minLen = Number.MAX_VALUE;
  let curSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    curSum += nums[right];
    while (curSum >= target) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
      }
      curSum -= nums[left];
      left++;
    }
  }
  return minLen;
}
console.log(minSubArray([2, 3, 1, 2, 4, 3], 4));
