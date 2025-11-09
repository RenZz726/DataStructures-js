function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

const newObj = deepClone(obj);


console.log(deepClone([{name: "john", age: 21, add : {mob1: 343, mob2: 222}}]));

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const input = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(flattenObject(input));
