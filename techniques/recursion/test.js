function findCombinations(digits) {
  if (!digits.length) return [];

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current.join(""));
      return;
    }

    let letters = map[digits[index]];
    for (let ch of letters) {
      current.push(ch);
      backtrack(index + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// console.log(findCombinations("23"));

function combinationsWithSum(arr, k) {
  const result = [];

  function backtrack(path, sum, start) {
    if(sum === k && path.length === 3) {
      console.log("sd");
      return result.push([...path]);
    }
    for(let i = start; i < arr.length;i++) {
      path.push(arr[i]);
      backtrack(path, sum + arr[i], i + 1);
      path.pop();
    }
  }

  backtrack([], 0, 0);
  return result;
}
console.log(combinationsWithSum([2, 3, 4, 10, 5, 3], 10))

