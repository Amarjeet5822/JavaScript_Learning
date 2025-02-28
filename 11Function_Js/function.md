# JavaScript Functions

## What is a Function?
A **function** is a reusable block of code that performs a specific task.

## Types of Functions in JavaScript
- **Named Function**
- **Anonymous Function**
- **Function Expression**
- **Arrow Function**
- **IIFE (Immediately Invoked Function Expression)**
- **Callback Function**
- **Higher-Order Function**

---

## Function Expressions

### Named Function Expression
```javascript
const add = function sum(a, b) {
  return a + b;
}
const result = add(4, 5);
console.log(result); // Output: 9
```

### Anonymous Function Expression
```javascript
const sum = function (a, b) {
  return a + b;
}
console.log(sum(3, 4)); // Output: 7
```

### Immediately Invoked Function Expression (IIFE)
```javascript
console.log((function (a, b) {
  return a * b;
})(5, 3)); // Output: 15
```

---

## Call, Apply, and Bind Methods

- These methods are used to control how functions are invoked and what context (`this` value) they operate in.

### Example:
```javascript
function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}
const person1 = { name: "Amarjeet" };
```

### 1. `call()`
Invokes the function with a specified `this` value and arguments passed individually.
```javascript
sayHello.call(person1, "Hello"); // Output: "Hello, Amarjeet"
```

### 2. `apply()`
Similar to `call()`, but arguments are passed as an array.
```javascript
sayHello.apply(person1, ["Hi"]); // Output: "Hi, Amarjeet"
sayHello.apply(person1, ["Hi Developer"]); // Output: "Hi Developer, Amarjeet"
```

### 3. `bind()`
Returns a new function with a specified `this` value without invoking the function immediately.
```javascript
const greetPerson = sayHello.bind(person1);
greetPerson("Greetings"); // Output: "Greetings, Amarjeet"
```

---

## Arrow Functions
A simpler and shorter way to define functions in JavaScript.
```javascript
const addArrow = (x, y) => x + y;
console.log(addArrow(5, 5)); // Output: 10
```

---

## Higher-Order Functions
A **higher-order function** takes one or more functions as arguments or returns a function.

---

## Callback Functions
A **callback function** is a function passed as an argument to another function.

---

## Arguments and Parameters

- **Arguments**: Actual values passed to a function when it is invoked.
- **Parameters**: Placeholders defined in the function declaration.

### Ways to Pass Arguments to Functions

#### 1. Positional Arguments
```javascript
function add1(a, b) {
  console.log(a + b);
}
add1(3, 4); // Output: 7
```

#### 2. Named Arguments (using objects)
```javascript
const person = {
  name: "Amarjeet",
  role: "Developer"
};
function greet(person) {
  console.log(`${person.name} ${person.role}`);
}
greet(person); // Output: "Amarjeet Developer"
```

#### 3. Arguments Object
The `arguments` object contains all arguments passed to a function.
```javascript
function sum2() {
  console.log(arguments[0]); // Output: 1
  console.log(arguments[1]); // Output: 3
  console.log(arguments[2]); // Output: 5
}
sum2(1, 3, 5);
```

---

## Default Parameters
You can set default values for function parameters.
```javascript
function greetA(name = "Amarjeet") {
  console.log("Hello, " + name + "!");
}
greetA(); // Output: "Hello, Amarjeet!"
greetA("Amit"); // Output: "Hello, Amit!"
```

---

## First-Class Functions
JavaScript treats **functions as first-class citizens**, meaning they can be:
- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions

---

## Pure vs Impure Functions

### Pure Functions
- Always produce the same output for the same input.
- Cannot modify the state or have side effects.
```javascript
function addition(a, b) {
  return a + b;
}
console.log(addition(3, 4)); // Output: 7
console.log(addition(3, 4)); // Output: 7
```

### Impure Functions
- Can produce different outputs for the same input.
- Can modify the state or have side effects.
```javascript
let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}
console.log(addToTotal(5)); // Output: 5
console.log(addToTotal(5)); // Output: 10
```

---

This covers the fundamentals of JavaScript functions with examples for easy reference!

