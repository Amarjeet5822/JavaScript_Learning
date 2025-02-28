// What is a String ?
// A string is a "data type" used to "store and manipulate data."
// Single quotes (' ')
const str1 = "Hello";

// What are "template literals" and "string interpolation" in strings?
// A template literal, also known as a template string, is a feature introduced in ECMAScript 2015 (ES6) for "string interpolation" and "multiline strings" in JS.

// Backticks (`)
// Template literals with string interpolation
const myname = "Amarjeet";
const str3 = `Hello ${myname}`;
console.log(str3) // Hello Amarjeet

// Template literals for multiline strings
const multilineStr = `
This is a 
multiline string.
`
console.log(multilineStr);

//Q What are some important string operations in JS?
let str2 = "AmarG";
let str4 = "Hello";
// Add multiple string
let result = str2 + " " + str4;
console.log(result); // AmarG Hello

// Using concat() method
let result2  = str4.concat(" ", str2);
console.log(result2) // Hello AmarG;

// Extract a portion of a string
let subString = result2.substring(1,5); 
console.log(subString); // ello

// Retrieve the length of a string
console.log(result2.length) // 11

//Convert a string to uppercase or lowercase
console.log(result2.toUpperCase()); // HELLO AMARG
console.log(result2.toLowerCase()); // hello amarg

// Split a string into an array of substrings 
// base on a delimiter
let arr = result2.split(" ");
console.log(arr) // ["Hello", "AmarG"]

// Replace occurence of a substring within a string
console.log(result2.replace("AmarG", "JavaScript")); // Hello JavaScript

// Remove leading and trailling whitespace
let str = "  Hello World   "
let strimmedStr = str.trim();
console.log(strimmedStr); // Hello World

// Q. What is "String immutability"? 
// String in JavaScript are considered "immutable" because you "cannot modify" the contents of an exiting string directly.
let string = "Interview";
// Create a new string
string = string + " Amarjeet"; // stored at another memory address

// Q. In how many ways you can "concatenate strings" ?
// - + Operator
// - Concat() method
// - Template literals
// - Join() method