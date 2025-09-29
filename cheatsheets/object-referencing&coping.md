objects versus primitives is that objects are stored and copied “by reference” 
An important side effect of storing objects as references is that an object declared as const can be modified.

<!-- const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete -->

CLONING 
<!-- let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object -->

MERGING Object.assign(dest, src);
<!-- let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true -->

<!-- 
let clone = Object.assign({}, user);
-->

NESTED CLONING
Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

<!-- let clone = Object.assign({}, user);
alert( user.sizes === clone.sizes );  // true, same object-->

STRUCTURED CLONE
<!-- let clone = structuredClone(user);
alert( user.sizes === clone.sizes ); // false, different objects -->

// let's create a circular reference:
// user.me references the user itself
<!-- user.me = user; -->

A function that is a property of an object is called its method.
<!-- user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
}; -->

THIS
<!-- let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter) -->