function findSubsets(arr) {
  let result = [];
  let backtracking = (path, start) => {
    result.push([...path]);
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtracking(path, i + 1);
      path.pop();
    }
  };

  backtracking([], 0);
  return result;
}

// console.log(findSubsets([1, 2, 3]));

function findSubsetss(str) {
  let result = [];
  str = str.split("").sort();
  let backtracking = (path, start) => {
    result.push(path.join(""));
    for (let i = start; i < str.length; i++) {
      if (i > start && str[i] === str[i - 1]) continue;
      path.push(str[i]);
      backtracking(path, i + 1);
      path.pop();
    }
  };
  backtracking([], 0);
  return result;
}

console.log(findSubsetss("abca"));


// combinations with size k
function combine(n, k) {
  const res = [];
  const backtrack = (path, start) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 1);
  return res;
}

// combinations with sum 
function combinationSum(arr, target) {
  const res = [];
  const backtrack = (path, sum, start) => {
    if (sum === target) return res.push([...path]);
    if (sum > target) return;
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path, sum + arr[i], i); 
      path.pop();
    }
  };
  backtrack([], 0, 0);
  return res;
}

// palindrome partittioning 
function partition(s) {
  const res = [];
  const isPal = (str, l, r) => {
    while (l < r) if (str[l++] !== str[r--]) return false;
    return true;
  };
  const backtrack = (path, start) => {
    if (start === s.length) return res.push([...path]);
    for (let end = start; end < s.length; end++) {
      if (isPal(s, start, end)) {
        path.push(s.slice(start, end + 1));
        backtrack(path, end + 1);
        path.pop();
      }
    }
  };
  backtrack([], 0);
  return res;
}

// N-queen 
function solveNQueens(n) {
  const res = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const cols = new Set(), diag1 = new Set(), diag2 = new Set();

  const backtrack = (row) => {
    if (row === n) return res.push(board.map(r => r.join('')));
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
      board[row][col] = 'Q';
      cols.add(col); diag1.add(row - col); diag2.add(row + col);
      backtrack(row + 1);
      board[row][col] = '.';
      cols.delete(col); diag1.delete(row - col); diag2.delete(row + col);
    }
  };
  backtrack(0);
  return res;
}
