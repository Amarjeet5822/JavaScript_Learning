# ***** Rule #1 *****
## By default, the `this` keyword points at the `global` object. if we “simply execute” a regular function (without explicitly, implicity or hard binding the `this` to any object) then `this` points to the `global` object, which in the browser is the `*window*` object.
```js
function sayGoodbye() {
  console.log("Good bye! ",this); // Window
}

function sayHello() {
  console.log("Hello! ", this); // Window
  sayGoodbye();
}
sayHello();

```
# ** Rule #2 ** The implicit binding of `this`
## When a method is called as a property of an object, then the `this` implicity refers to the present object. If a function attached to an object is called by `objectname.methodname()` syntax, the `this` points to the object to which the function is attached.

```js
function sayHello() {
  console.log("Hello! from ", this.name);
}
var john = {
  name: "Amar",
  age: 30,
  sayName: function() {
    // this.age = 35;
    console.log("My name is ", this.name);
  },
  sayHello: sayHello
};
var james = {
  name: "James Bond",
  age: 27,
  sayName: function () {
    console.log("My name is ", this.name);
  },
  sayHello: sayHello
};
john.sayName();
john.sayHello();

james.sayName();
james.sayHello();
```
## When a function/ class is called with the `new` operator, it gives us a brand new `object` & the `this` refers to the newly created `object`.
```js
function Person (name) {
  this.name = name;

  this.sayHello = function() {
    console.log("Hello! ", this, this.name);
  };
}
var james = new Person("James Bond");
var john = new Person("John Doe");

john.sayHello();
james.sayHello();

```
# Rule #3 - The explicit binding of `this` using call/ apply
## When a function is called using the `call` or `apply` methods, then `this` refers to the value passed as the first argument of the `call` or `apply` function.

```js
function sayHello01() {
  console.log("Hello! ", this);
};
var john01 = {
  name: "John Doe",
  age: 30
};

var james01 = {
  name: "James Bond",
  age: 30
};

sayHello01.call(james);
sayHello01.call(john);

```
# Rule #4 - The hard binding of `this` using `bind`
## bind creates a new function hard bound to the object that we have specified.
```js
function sayHello01() {
  console.log("Hello! ", this, this.name);
}

var John01 = {
  name: "John Doe",
  age: 30
};

var johnSayHello01 = sayHello01.bind(John01);
johnSayHello01();

```
---
# Rule #5 - Arrow Functions `does not bind this` at all
---
## 1. In an arrow function, the `this` keyword behaves like any other variable, the `this` gets lexically resolved from one of its parent's scope (Just like any other variable).

## 2. It its a regular function, how the function is invoked matters to determine `this`!! - If it's an arrow function, where the function sits (lexically) matters to determine `this`, no matter how it was invoked!!

## 3. When you want the `this` keyword to resolve lexically from one of its parent's scope, use the arrow function - When you want the `this` keyword to resolve dynamically at the call site, use the regular functions.

```js
var john01 = { name: "John Doe", age: 25 };

var sayArrowHello01 = () => {
  console.log("Arrow Hello ", this);
};
function sayRegularHello01() {
  console.log("Regular Hello ", this);
}

function sayRegularName01() {
  console.log("My Regular name is ", this.name, this);
  sayRegularHello01();
  sayArrowHello01();
  var sayArrowGoodBye01 =() => {
    console.log("Arrow GoodBye ", this);
  }
  ssayArrowGoodBye01();
}
sayRegularName01.call(john01);

```
