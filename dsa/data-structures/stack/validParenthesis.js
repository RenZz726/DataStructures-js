function isValid(str) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(str[i]);
    } else {
      let top = stack.pop();
      if (!top || str[i] !== map[top]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isValid("(())(()())(())()()"));
// console.log(isValid("(()()())"));

function longestValid(str) {
  let stack = [-1];
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
   if(str[i] === '(') {
    stack.push(i);
   }
   else {
    stack.pop();
    if(stack.length === 0) {
        stack.push(i);
    } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
    }
   }
  }
  return maxLen;
}

// console.log(longestValid(")(()()))()("));
// console.log(longestValid("())(())"));
