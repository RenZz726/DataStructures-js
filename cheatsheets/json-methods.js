const user = { name: "Alice", age: 22, active: true };
const json = JSON.stringify(user);
console.log(json);
const toString = JSON.parse(json);
console.log(toString);
console.log(typeof json);

const users = { name: "Bob", age: 25, city: "Paris" };
console.log(JSON.stringify(users, ["name", "city"]));


// Prototypal Inheritance
//  objects have a special hidden property [[Prototype]] (as named in the specification), 
// that is either null or references another object. That object is called “a prototype”:

// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. 
// In programming, this is called “prototypal inheritance”.

let animal = {
    eat: true,
    walk() {
        console.log("Yes, I walks");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
// rabbit.__proto__ = animal;
console.log(rabbit.jumps);
console.log(rabbit.eat);
rabbit.walk();
// sets rabbit.[[Prototype]] = animal
// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.
// Here we can say that “animal is the prototype of rabbit” or “rabbit prototypically inherits from animal”.

// prototype chain

let animals = {
    eat: true,
    walk() {
        console.log("walks")
    }
}
let rabbits = {
    jumps: true,
    __proto__: animals
}
let longEars = {
    ears: true,
    __proto__: rabbits
}
longEars.walk();
console.log(longEars.jumps);

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats

