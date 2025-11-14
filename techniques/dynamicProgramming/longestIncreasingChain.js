function longestIncreasingChain(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);
  const prev = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    if (dp[i] > dp[maxIndex]) maxIndex = i;
  }

  const chain = [];
  while (maxIndex !== -1) {
    chain.push(arr[maxIndex]);
    maxIndex = prev[maxIndex];
  }

  return chain.toReversed();
}

// console.log(longestIncreasingChain([10, 20, 15, 30, 22, 40]));
// Possible: [10, 20, 30, 40] or [10, 15, 22, 40]

console.log(longestIncreasingChain([6, 9, 2, 0, 5, 7, 8, 2, 8]));
// Possible: [0, 5, 7, 8] or [2, 5, 7, 8]
