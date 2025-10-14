let arr = ["a", "b", "c"];
for(let value of arr) {
    console.log(value);
}
// of for elements

for(let value in arr) {
    console.log(value);
}
// we can use set() to avoid duplicates
// let map = new Map();
// let set = new set();

const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let num of range) {
  console.log(num);
}

nums = [1, 2, 4, 5];
for(let i = 1;i < nums.length;i++) {
    if((nums[i] - nums[i - 1]) !== 1)
        console.log(nums[i -1] + 1);
}

const fruits = {fruit1: "apple", fruit2: "orange", fruit3: "grape"};
console.log(Object.keys(fruits));
console.log(Object.values(fruits));


// Array destructuring
// let [firstName, surname] = arr;
// let [firstName, surname] = "John Smith".split(' ');

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul


let user = {
  name: "John",
  age: 30
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// swapping varibles
let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// Object destructuring

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

// let {height, width, title} = { title: "Menu", height: 200, width: 100 }

// { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;