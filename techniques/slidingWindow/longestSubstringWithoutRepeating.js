function longestSubString(str) {
  let window = new Set();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    while (window.has(str.charAt(right))) {
      window.delete(str[left]);
      left++;
    }
    window.add(str.charAt(right));
    maxLen = Math.max(maxLen, right - left + 1);
    // to get the string update the bestStart and end, when the window(right - left + 1) is greater than maxLen
    // update maxLen, bestStart, bestEnd
  }
  return maxLen;
}
console.log(longestSubString("abcaabcbb"));
