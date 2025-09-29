OBJECTS - objects are used to store keyed collections of various data and more complex entities.

<!-- let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax -->

<!-- user.isAdmin = true;
delete user.age; -->

"likes birds": true  // multiword property name must be quoted

The last property in the list may end with a comma:

<!-- let user = {
  name: "John",
  age: 30,
} -->

For multiword properties, the dot access doesn’t work:

// this would give a syntax error
<!-- user.likes birds = true -->
<!-- user["likes birds"] = true; --> this works

<!-- let key = "likes birds"; -->
// same as user["likes birds"] = true;
<!-- user[key] = true; -->


<!-- let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name"); -->

// access by variable
<!-- alert( user[key] ); -->

we can use square brackets in an object literal, when creating an object. (COMPUTED PROPERTIES)
        <!-- let fruit = prompt("What do you want", "name");
        let bag = {
            [fruit] : 5,
        }
        console.log(bag.apple); -->

<!-- let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
}; -->


<!-- function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
} -->

<!-- let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property) -->

in operator - to check wheather the property exists.
"key" in object (the left side of in there must be a property name)
<!-- 
let obj = {
  test: undefined
};
alert( obj.test ); // it's undefined, so - no such property?
alert( "test" in obj ); // true, the property does exist! -->


<!-- let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
} -->

Here the integers are sorted in the ascending order (ordered)
<!-- let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
} -->

<!-- let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
} -->


<!-- let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
} -->

