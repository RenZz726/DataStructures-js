function perms(arr) {
  let result = [];
  let used = Array(arr.length).fill(false);

  let backtrack = (path) => {
    if (path.length === arr.length) result.push([...path]);
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(arr[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  };
  backtrack([]);
  return result;
}

console.log(perms([1, 2, 3]));

// function perms(arr) {
//   const used = Array(arr.length).fill(false);
//   const result = [];

//   function backtrack(path) {
//     if (path.length === arr.length) result.push([...path]);
//     for (let i = 0; i < arr.length; i++) {
//       if (used[i]) continue;
//       path.push(arr[i]);
//       used[i] = true;
//       backtrack(path);
//       path.pop();
//       used[i] = false;
//     }
//   }

//   backtrack([]);
//   return result;
// }
