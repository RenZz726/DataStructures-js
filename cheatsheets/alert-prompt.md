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