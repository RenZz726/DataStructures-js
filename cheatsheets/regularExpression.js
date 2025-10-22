let pattern = /abc/;
console.log(pattern.test("abce"));

console.log(/c.t/.test("cat"));
console.log(/\d/.test(234)); // digit
console.log(/\d/.test("ab3"));
console.log(/\D/.test("234d34")); // non digit
console.log(/\w/.test("a")); // any word character (letter, digit, number) ("a", 9, '_')
console.log(/\W/.test("*")); // any non word (' ', '@')
console.log(/\s/.test("Hello Everyone")); // white space
console.log(/\S/.test("a")); // non whitespace
console.log(/^A/.test("Arrow")); // start of a string with 'A'
console.log(/z$/.test("endz")); // end of a string
console.log(/a+/.test("aaadfsaa")); // one or more
console.log(/go*/.test("regl")); // zero or more
console.log(/colou?r/.test("colour")); // zero or one
console.log(/\d{3}/.test("re434")); // exactly n times continuously
console.log(/\d{3,}/.test("1234sd")); // n or more times
console.log(/\d{2,3}/.test("123ren")); // n to m times
console.log(/[abc]/.test("abc")); // any of a, b, c
console.log(/[^abc]/.test("abcd")); // not a, b, c
console.log(/(abc)+/.test("abcabc")); // grouping
// `	`	OR	`/cat

// /.../.test() - return true if the pattern exists
// a.match(/.../) - returns matches
// /.../.exec(str) -
console.log("Testing ....");
let text = "I am here 1rens077";
console.log(/here/.test(text));
console.log(/\d+/.test(text)); // true
console.log(text.match(/\d+/g)); // g - global, otherwise returns only the first one

// 🧩 JavaScript RegEx Flags
// Flag	Name	Meaning	Example
// g	global	Find all matches, not just the first	/\d+/g
// i	ignore case	Match case-insensitively (a = A)	/hello/i.test("HELLO") → true
// m	multiline	Treat ^ and $ as start/end of each line, not just string	/^hi/m matches "hi" at line start
// s	dotall	. now matches newline characters too	/./s.test("\n") → true
// u	unicode	Enables full Unicode support, including emojis	/\u{1F600}/u.test("😀") → true
// y	sticky	Match exactly at current position in string	/\d/y.exec("123") starts matching at last index
// d	indices	Returns match positions in array of .indices (new in ES2022)	/a/d
