function generateParenthesis(n) {
  const res = [];
  const backtrack = (path, open, close) => {
    if (path.length === 2 * n) return res.push(path.join(""));
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
