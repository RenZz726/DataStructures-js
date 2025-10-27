function deepClone(obj) {
  if(obj === null || obj !== "object") return obj;

  if(Array.isArray(obj)) obj.map(deepClone);
  const copy = {};
  for(key in obj) {
    if(obj.hasOwnProperty(key)) copy[key] = deepClone(obj[key])
  } 
  return result;
}

console.log(deepClone([{name: "john", age: 21, add : {mob1: 343, mob2: 222}}]));

