<!-- 'use strict'; -->
JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change. That had the benefit of never breaking existing code.

        modal window
        <!-- alert("hello");
        result = prompt("age", 100); -->

typeof();
Number();
Boolean();

An operator is unary if it has a single operand.
An operator is binary if it has two operands.
        alert( '1' + 2 ); // "12"
        alert( 2 + '1' ); // "21"
        alert(2 + 2 + '1' ); // "41" and not "221"
        alert('1' + 2 + 2); // "122" and not "14"
        alert( 6 - '2' ); // 4, converts '2' to a number
        alert( '6' / '2' ); // 3, converts both operands to numbers

If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

<!-- let counter = 0;
alert( ++counter ); // 1 -->
If we’d like to increment a value but use its previous value, we need the postfix form:

<!-- let counter = 0;
alert( counter++ ); // 0 -->

<!-- for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
} -->

<!-- alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1 -->

<!-- alert( null == undefined ); // true -->

<!-- let result = condition ? value1 : value2; -->
<!-- let accessAllowed = (age > 18) ? true : false; -->

Nullish coaleascing operator '??'
result = a ?? b if a is not null and not defined then b.
result = (a !== null && a !== undefined) ? a : b;
let user;
alert(user ?? "Anonymous"); 

<!-- outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
} -->

alert('Done!');
The ordinary break and continue will stop the inner loop only. 

Grouping cases in swith
<!-- let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
} -->

FUNCTIONS
here default value is passed if text is not sent.
<!-- function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
Now if the text parameter is not passed, it will get the value "no text given". -->

PRIME OR NOT
<!-- function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
} -->

<!-- function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
} -->

function declarations and function expression 
<!-- let sayHi = function() {
  alert( "Hello" );
}; -->

If we want to use a function that is defined inside a function, we must use function expression
and can define inside the function.
console.log([] + {});

👉 Answer: "[object Object]".

[] → "", {} → "[object Object]". Concatenation gives that string.

console.log({} + []);

👉 Trick: If {} is at the beginning of a line, JS thinks it’s a block, not an object.

So this becomes +[] → 0.
Result: 0.

console.log(true + false);

👉 Answer: 1.

true → 1, false → 0.