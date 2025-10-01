str = "Hello";
str.length;

str[0], str.charAt(0);

// strings are immutable,
str[0] = "J"; // not work

const str = "Hello World";
str.toUpperCase();
str.toLowerCase();
str.indexOf('l');
str.lastIndexOf('l');
str.slice(1);
str.includes("He");
str.startsWith("He");
str.endsWith("lo");
str.substring(1, 3);
str.trim();
str.repeat(2);
str.replace("World", "JS");
console.log();

let num = 123;
str = num.toString();
console.log("a" > "Z"); // true;