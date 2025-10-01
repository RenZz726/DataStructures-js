Method of primitives

// let str = "hello";
// console.log(str.toString()); // "hello"
// When you call a method (.toString()), JS automatically creates a temporary wrapper object:
The method (toString) is called on that object.
The temporary object is destroyed immediately after.

// let zero = new Number(0);

// if (zero) { // zero is true, because it's an object
//   alert( "zero is truthy!?!" );
// }

// 1e7 = 1*7zeros
// 1.3e7 = 13000000
// 1e-4 = 0.0001

// Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
// Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

Rounding to specific limits
1. divide and mulitply
    num = 1.2343535 for getting 2 digits after decimal point
    num = (Math.round(num * 100) / 100); // 1.23
2. use toFixed()
    num.toFixed(2);// 1.23
    num = 1.35;
    num = num.toFixed(4); // 1.400000

    alert( isNaN(NaN) ); // true
    alert( isNaN("str") ); // true
    alert( NaN === NaN ); // false

    alert( isFinite("15") ); // true
    alert( isFinite("str") ); // false, because a special value: NaN
    alert( isFinite(Infinity) ); // false, because a special value: Infinity

    Number.isNaN(value) returns true if the argument belongs to the number type and it is NaN. In any other case, it returns false.
    // alert( Number.isNaN(NaN) ); // true
    // alert( Number.isNaN("str" / 2) ); // true

    // // Note the difference:
    // alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
    // alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

    Number.isFinite(value) returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity. In any other case, it returns false.
    // alert( Number.isFinite(123) ); // true
    // alert( Number.isFinite(Infinity) ); // false
    // alert( Number.isFinite(2 / 0) ); // false

    // // Note the difference:
    // alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
    // alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123. 

    Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
    // alert( +"100px" ); // NaN

    // alert( parseInt('100px') ); // 100
    // alert( parseFloat('12.5em') ); // 12.5

    // alert( parseInt('12.3') ); // 12, only the integer part is returned
    // alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

    OTHER MATH FUNCTIONS

    Returns a random number from 0 to 1 (not including 1)
    // alert( Math.random() ); // 0.1234567894322

    