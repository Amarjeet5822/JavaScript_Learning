// Function 
// A function is a "reusable block of code" that performs a specific task.
// Types of Functions
// Named Function, Anonymous Function, Function Expression, Arrow Function, IIFE ( Imediately Invoke Function Expression ), Callback Function, Higher-Order Function .

// Named Function Expression
const add = function sum(a, b) {
  return a+b;
}
result = add(4,5);
console.log(result)

// Anonymous Function Expression 
const sum = function (a, b) {
  return a+b
}
console.log(add(3,4));

console.log(function (a, b) {
  return a * b
}(5,3))

// Q. What are CALL, APPLY, and BIND methods in JS?
//1.=> Call, apply, and bind are three methods in JavaScript that are used to work with functions and *control how they are invoked* and what context they operate in. 
// 2.=> These methods provide a way to manipulate the *this value* and pass arguments to functions.

// Defininga function that uses the "this" context and an argument
function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}
const person1 = { name: "Amarjeet"};
//1. call - Using the "call" method to invoke the function
// with a specific context and argument
sayHello.call(person1, "Hello"); // Output: "Hello, Amarjeet"

// 2. apply - Using the "apply" method to invoke the function 
// with a specific context and an array of arguments.
sayHello.apply(person1, ["Hi"]) // output: "Hi, Amarjeet" 
sayHello.apply(person1, ["Hi Developer"]) // output: "Hi Developer Amarjeet"

// 3. bind - Using the "bind" method to create a new function 
// with a specific context ( not invoking it immediately )
const greetPerson = sayHello.bind(person1);
greetPerson("Greetings"); // "Greetings, Amarjeet"

//  Arrow Functions 
// It is a simpler and shorter way for defining functions in JavaScript.

const addArrow = (x, y) => x + y;
console.log(addArrow(5,5));

// Higher-order Function
// A function that take one or more **functions as an argument** are called Higher-order Function.
// Return a function as a result.

// Callback Functions
// A callback function is a function that is "passed as an argument" to another function.

// Arguments
// Arguments are the actual values passed to a function when it is invoked or called.

// Parameters
// Parameters are the *placeholders* defined in the function declaration.

// Q. In how many ways can you pass arguments to a function?
// Positional Arguments
function add1(a, b) {
  console.log(a + b);
}
add1(3, 4);

// Named Arguments 
const person = {
  name: "Amarjeet",
  role: "Developer"
};
function greet(person) {
  console.log(person.name + " " + person.role);
}
greet(person);

sum2(1,3,5);
// Arguments Object
function sum2() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
};

// Q. How do you use default parameters in a functions?
// In Js, default parameters allow you to specify *default values* for function parameters.

// Function with default parameter value
function greetA( name= "Amarjeet") {
  console.log("Hello, " + name + "!");
}
greetA(); // Hello, Amarjeet!
greetA("Amit") // Hello, Amit!

// Q. What are First-Class functions in JS?
// A programming language is said to have First-class functions if functions in that language are treated like other variables.
// **Functions treated like Variables**

//Q. What are Pure and Impure functions in JS?
// PURE functions
//a. A pure function is a function that always produces the *same output for the same input.*
//b. Pure functions cannot modify the state.
//c. Pure functions cannot have side effects.
function addition(a, b) {
  return a + b;
}
console.log(addition(3, 4)); // output 7
console.log(addition(3, 4)); // output 7

// IMPURE Functions
//1. An impure function, can produce *different outputs for the same input.*
//2. Impure functions can modify the state.
//3. Impure functions can have side effects.
let total = 0;
function addToTotal(value) {
  total += value ;
  return total;
}
console.log(addToTotal(5)) // output 5
console.log(addToTotal(5)) // output 10.0