arr1 = ["a", 1, "b", 2];
arr2 = ["b", 2, "a", 1];

for (let i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])) console.log("Invalid");
}

function deepClone(obj, parentKey = "", result = {}) {
    if(typeof obj === null || typeof obj !== "object") return obj;
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof obj[key] !== null &&
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key])
    )
      deepClone(obj[key], newKey, result);
    else result[newKey] = obj[key];
  }
  return result;
}

console.log(deepClone({ a: 1, b: { c: 2, d: [ 'e' , 3]  } }));
