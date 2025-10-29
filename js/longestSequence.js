// Greedy approach
function longestChain(arr) {
  const chain = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > chain[chain.length - 1]) chain.push(arr[i]);
    else {
      for (let j = 0; j < chain.length; j++) {
        if (arr[i] < chain[j]) {
          chain[j] = arr[i];
          break;
        }
      }
    }
  }
  return chain;
}

console.log(longestChain([10, 20, 15, 30, 22, 40]));
