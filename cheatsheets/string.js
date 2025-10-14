str = "Hello";
str.length;

str[0], str.charAt(0);

// strings are immutable,
str[0] = "J"; // not work

const str = "Hello World";
str.toUpperCase();
str.toLowerCase();
str.indexOf('l');
str.lastIndexOf('l');
str.slice(1); console.log(str.slice(1)); // "ello"
str.includes("He");
str.startsWith("He");
str.endsWith("lo");
str.substring(1, 3);
str.trim();
str.repeat(2);
str.replace("World", "JS");
console.log();

let num = 123;
str = num.toString();
console.log("a" > "Z"); // true;


// Array

let mixed = [1, "Hi", true, { name: "John" }, [2, 3]];
let arr1 = [10, 20, 30];        // ✅ literal syntax (preferred)
let arr2 = new Array(10, 20, 30); // also works, but rarely used
let arr3 = new Array(5);         // creates empty array with length 5



let colors = ["red", "green", "blue"];
colors[0] = "grey";
console.log(colors[0]);
colors.push("yellow");
colors.pop();
colors.shift();
colors.unshift("pink");
colors.splice(0, 2, "new");

console.log(colors);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 4)); // [2, 3, 4]
// console.log(arr.concat([6, 7])); // [1, 2, 3, 4, 5, 6, 7]

let users = [{id:1}, {id:2}, {id:3}];
let user = users.find(u => u.id === 2);
console.log(user); // {id:2}

// Method	Description
// indexOf(value)	returns index or -1
// includes(value)	checks existence
// find(fn)	returns first element that matches
// findIndex(fn)	returns index of first match

let nums = [1, 2, 3, 4];
console.log(nums.map(n => n * 2)); // [2, 4, 6, 8]
console.log(nums.filter(n => n > 2)); // [3, 4]
console.log(nums.reduce((sum, n) => sum + n, 0)); // 10
nums.forEach(n => console.log(n)); // prints each

let arra = [3, 1, 5, 2];
arra.sort(); // sorts as strings by default! [1,2,3,5]
arra.sort((a,b)=>a-b); // numeric sort
arra.reverse(); // reverse order

let arr = [1, 2, 3, 4];
console.log(arr.join("-")); // "1-2-3-4"
console.log(Array.isArray(arr)); // true

// copying
let array = [1, 2, 3];
let copy = array.slice();
let copy2 = [...array];
console.log(copy2);

// destructing
let [first, second] = ["apple", "banana", "cherry"];
console.log(first); // apple
console.log(second); // banana


// Write a function that doubles all numbers in an array using map.
// Filter out even numbers using filter.
// Sum all numbers using reduce.
// Create a new array that contains only unique elements.
// Given an array of users, return an array of their names.

numbers = [1, 2, 3, 4, 5];
const doubles = (numbers.map(n => 2 * n));
console.log(doubles);
console.log(numbers.filter(n => n % 2 === 0));
console.log(numbers.reduce((sum, n) => sum + n, 0));
const unique = [];
number.forEach(n => {
    if(unique.includes(!n))
        unique.push(n);
})
users = ["ab", "abc", "cde"];
console.log(users.forEach(n => n));
