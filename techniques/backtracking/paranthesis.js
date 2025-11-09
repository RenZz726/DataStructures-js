function generateParenthesis(n) {
  const res = [];
  const backtrack = (path, open, close) => {
    if (path.length === 2 * n) {
      res.push(path.join(""));
      return;
    }
    if (open < n) {
      path.push("(");
      backtrack(path, open + 1, close);
      path.pop();
    }
    if (close < open) {
      path.push(")");
      backtrack(path, open, close + 1);
      path.pop();
    }
  };
  backtrack([], 0, 0);
  return res;
}

console.log(generateParenthesis(2));
