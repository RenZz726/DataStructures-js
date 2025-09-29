CONSTRUCTOR FUNCTIONS
<!-- function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false -->

When a function is executed with new, it does the following steps:
    A new empty object is created and assigned to this.
    The function body executes. Usually it modifies this, adds new properties to it.
    The value of this is returned.

// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null
Once again, if the element doesn’t exist, we’ll get an error accessing .innerHTML property of null. And in some cases, when the absence of the element is normal, we’d like to avoid the error and just accept html = null as the result.

<!-- let user = {};
alert(user.address ? user.address.street : undefined); -->
Go back to js.info


SYMBOLS
A “symbol” represents a unique identifier.
A value of this type can be created using Symbol():
<!-- let id = Symbol(); -->

Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.
