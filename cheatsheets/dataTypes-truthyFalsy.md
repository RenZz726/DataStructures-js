<!-- Datatypes -->
1. Number: Floating point numbers
2. string: sequence of character
3. Boolean: Logical type that can be true or false
4. Undefined: the value taken by a variable that is not defined yet.
5. Null: Empty value
6. Symbol: value that is unique and cannot be changed
7. BigInt: Larger integers that the Number type can hold

" JavaScript has dynamic typing"

        typeof: for finding the type
        eg: let firstName = "RenZz";
            console.log(typeof firstName);
<!-- Operators -->
1. power: 2 ** 3;                  
2. x++; x--;

<!-- operator preceedence -->             

<!-- type conversion -->
Number
String

<!-- NaN -->
NaN is a number but an invalid number
 
<!-- type coercion -->

Type coercion in JavaScript refers to the automatic or implicit conversion of 
values from one data type to another during operations or comparisons.
eg: console.log('I am ' + 22 + ' year old') /* I am 22 year old */
    console.log('23' - '10' - 3) /* 10 */
    console.log('23' * '2')

<!-- Truthy and falsy values -->

Falsy Values:
    These are values that are considered false when coerced to a Boolean. There is a specific, finite list of falsy values in JavaScript:
            falsy values: 0, '', undefined, null, NaN

        false       : The Boolean primitive false.
        0, -0, 0n   : The number zero (including negative zero and BigInt zero).
        "", ''      : Empty strings.
        null        : Represents the intentional absence of any object value.
        undefined   : Indicates a variable that has been declared but not assigned a value.
        NaN         : "Not a Number," a result of an invalid or undefined mathematical operation.
        document.all: (In non-strict mode) A legacy object, also considered falsy.

Truthy Values:
            truthy values: 
    All values that are not included in the list of falsy values are considered truthy. When coerced to a Boolean, they evaluate to true. Examples of truthy values include:
        true: The Boolean primitive true.
        Any non-zero number (e.g., 1, -42, 3.14).
        Any non-empty string (e.g., "hello", "false", "0").
        Any object (e.g., {}, [], new Date(), function(){}).
        Symbols.       

<!-- Assignment(=) and comparision(==, ===) -->

=== strict, won't allow type coercion
== loose
!=, !==

!= (Not Equal):

Compares two values for inequality after type conversion.
If the values are of different types, JavaScript will attempt to convert them to the same type before comparing.

!== (Strict Not Equal):

Compares two values for inequality without type conversion.
The values must be of the same type and value to be considered equal.