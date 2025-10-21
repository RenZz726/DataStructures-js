String Conversions

Convert anything to a string:

String(123);           // "123"
String(true);          // "true"
String(null);          // "null"
String(undefined);     // "undefined"
String([1,2,3]);       // "1,2,3"
String({a:1});         // "[object Object]"
(123).toString();      // "123"
(255).toString(16);    // "ff"  (hex)
(255).toString(2);     // "11111111"  (binary)

Number Conversions
Number("42");          // 42
Number("42px");        // NaN
Number("");            // 0
Number(null);          // 0
Number(undefined);     // NaN
Number(true);          // 1
Number(false);         // 0
parseInt("42px");      // 42
parseFloat("42.5px");  // 42.5
+ "123";               // 123  (unary plus)

Boolean Conversions

Truthy → true, Falsy → false

Boolean(1);        // true
Boolean(0);        // false
Boolean("");       // false
Boolean("Hello");  // true
Boolean([]);       // true
Boolean({});       // true
Boolean(null);     // false
!!"Hi";            // true  (double negation)

Other Useful Conversions
// To Object
Object(123); // Number object
Object("Hi"); // String object

// To Primitive
let obj = { valueOf() { return 10 } };
console.log(+obj); // 10

⚙️ Implicit Conversions (Coercion)

JavaScript will auto-convert types in expressions:

'5' + 2       // "52" (string concatenation)
'5' - 2       // 3   (string → number)
true + false  // 1
10 + []       // "10"
10 + [1,2]    // "101,2"
[1] + [2]     // "12"
{} + 1        // "[object Object]1"
'5' * '3'     // 15

🧩 2️⃣ CHECKING TYPES AND VALUES
Type Checking
typeof 123          // "number"
typeof "Hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (quirk)
typeof []           // "object"
typeof {}           // "object"
typeof Symbol()     // "symbol"
typeof function(){} // "function"

Array and Object Checks
Array.isArray([]); // true
Array.isArray({}); // false
Object.keys(obj);  // returns array of property names
Object.values(obj);
Object.entries(obj);

Number Validation
Number.isNaN(NaN);          // true
Number.isFinite(10);        // true
Number.isFinite(Infinity);  // false
isNaN("Hello");             // true (converts to number first)
Number.isInteger(10.5);     // false

Falsy Values

These evaluate to false:

false, 0, "", null, undefined, NaN

Equality
==  // loose equality (type conversion allowed)
=== // strict equality (no conversion)
NaN === NaN; // false
Object.is(NaN, NaN); // true (recommended)

🧮 3️⃣ STRING METHODS
let str = "  Hello, World!  ";

str.trim();             // "Hello, World!"
str.toLowerCase();      // "hello, world!"
str.toUpperCase();      // "HELLO, WORLD!"
str.includes("Hello");  // true
str.startsWith("He");   // true
str.endsWith("!");      // true
str.indexOf("World");   // 7
str.slice(0, 5);        // "Hello"
str.substring(0, 5);    // "Hello"
str.replace("World", "JS"); // "Hello, JS!"
str.split(",");         // ["  Hello", " World!  "]
str.repeat(2);          // "  Hello, World!   Hello, World!  "
str.charAt(1);          // " "
"abc".charCodeAt(0);    // 97
String.fromCharCode(97) // "a"

🔢 4️⃣ NUMBER METHODS AND FORMATTING
let n = 123.4567;

n.toFixed(2);        // "123.46"
n.toPrecision(4);    // "123.5"
n.toExponential(2);  // "1.23e+2"

Number.parseInt("42px");   // 42
Number.parseFloat("3.14m"); // 3.14
isFinite(10);              // true
isNaN("abc");              // true

Math.round(3.49);          // 3
Math.floor(3.49);          // 3
Math.ceil(3.49);           // 4
Math.trunc(3.49);          // 3
Math.abs(-5);              // 5
Math.max(1, 5, 9);         // 9
Math.min(1, 5, 9);         // 1
Math.pow(2, 3);            // 8
Math.sqrt(9);              // 3
Math.random();             // 0–1
Math.floor(Math.random() * 100); // random 0–99

📅 5️⃣ DATE & TIME FUNCTIONS
Creating Dates
new Date();                     // current
new Date("2025-01-01");         // specific date
new Date(2025, 0, 1, 10, 30);   // year, month (0-based), day, time
Date.now();                     // timestamp (ms)

Date Methods
let d = new Date();

d.getFullYear();   // 2025
d.getMonth();      // 0-11
d.getDate();       // 1-31
d.getDay();        // 0 (Sun) – 6 (Sat)
d.getHours();      // 0-23
d.getMinutes();
d.getSeconds();
d.getMilliseconds();

d.toDateString();  // "Tue Oct 21 2025"
d.toTimeString();  // "12:34:56 GMT+0530"
d.toISOString();   // "2025-10-21T07:04:32.123Z"
d.toUTCString();   // "Tue, 21 Oct 2025 07:04:32 GMT"
d.toLocaleString(); // locale-based

Formatting
// Basic formats
d.toLocaleDateString("en-US"); // MM/DD/YYYY
d.toLocaleDateString("en-GB"); // DD/MM/YYYY

// Using Intl API
new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Asia/Kolkata"
}).format(new Date());

⚡ 6️⃣ OBJECT FUNCTIONS
Object.keys(obj);          // ["a","b"]
Object.values(obj);        // [1,2]
Object.entries(obj);       // [["a",1],["b",2]]
Object.assign({}, obj);    // clone
{...obj};                  // spread clone
Object.freeze(obj);        // prevent modifications
Object.seal(obj);          // modify yes, add/delete no
Object.hasOwn(obj, "key"); // true if property exists

🧩 7️⃣ ARRAY FUNCTIONS
Creation & Checking
Array.isArray([1,2,3]);  // true
new Array(3).fill(0);    // [0,0,0]
Array.from("abc");       // ["a","b","c"]

Manipulation
let arr = [1,2,3];
arr.push(4);     // [1,2,3,4]
arr.pop();       // removes last
arr.shift();     // removes first
arr.unshift(0);  // adds at start
arr.concat([5,6]); // merge arrays
arr.slice(1,3);  // copy subset
arr.splice(1,2); // remove/replace
[...arr];        // spread copy

Iteration
arr.forEach(x => console.log(x));
arr.map(x => x * 2);
arr.filter(x => x > 2);
arr.reduce((a,b) => a+b, 0);
arr.find(x => x === 2);
arr.findIndex(x => x === 2);
arr.some(x => x > 2);
arr.every(x => x > 0);
arr.sort((a,b)=>a-b);
arr.reverse();

🧰 8️⃣ FUNCTION UTILITIES
Function Declaration vs Expression
function add(a,b){ return a+b; }
const add2 = (a,b)=>a+b;

Rest & Spread
function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }
sum(1,2,3);

let arr1 = [1,2];
let arr2 = [...arr1,3,4];

Default Parameters
function greet(name="Guest"){ console.log("Hello", name); }

🧩 9️⃣ JSON CONVERSION
let obj = {name: "John", age: 25};
let json = JSON.stringify(obj); // object → string
let parsed = JSON.parse(json);  // string → object

🧮 10️⃣ MISCELLANEOUS USEFUL BUILT-INS
// Type casting helpers
parseInt("1010", 2);     // binary → decimal
parseInt("ff", 16);      // hex → decimal
Number.toString(16);     // decimal → hex

// Math constants
Math.PI;
Math.E;
Math.SQRT2;

// Check undefined/null
value == null;  // true for both null and undefined
value ?? "default"; // nullish coalescing

// Optional chaining
user?.profile?.name;

// Template literals
let name = "Sky";
console.log(`Hello ${name}!`);