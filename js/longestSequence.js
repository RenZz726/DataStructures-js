function longestIncreasingSubsequence(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 20, 15, 30, 22, 40]));
