/* ==================================================
 Title: Two Sum (Easy)
 File: dsa/easy/01-two-sum.js
 Concept: Hash map for O(n) lookup
 Summary: Given array nums and target, return indices of two numbers that add to target.
 Time: O(n)
 Space: O(n)
 Usage: node dsa/easy/01-two-sum.js
 Approach:
   - Use a hashmap to store values and indices.
   - For each number, check if target - num exists.
================================================== */

// function twoSum(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
// }

// Test
// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
for (let i = 1; i < 10000; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
