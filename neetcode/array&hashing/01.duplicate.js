class Solution {
  hasDuplicate(nums) {
    return new Set(nums).size !== nums.length;
  }
}

const test = new Solution();
console.log(test.hasDuplicate([1, 3, 5, 6, 6]));


// class Solution {
//   /**
//    * @param {number[]} nums
//    * @return {boolean}
//    */
//   hasDuplicate(nums) {
//     let seen = [];
//     for (let num of nums) {
//       if (seen.includes(num)) {
//         return true;
//       }
//       seen.push(num);
//     }
//     return false;
//   }
// }
