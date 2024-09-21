# ===== ~ Factory Function ~ ======  
## ```It creates an object and returns an object.``` 
```js
function iPhone1( color, display ) {
  let obj = {}; // Create an Empty Object

  obj.color = color; // add color property in our newly created obj.
  obj.display = display; // display property and it's value is added in obj object 

  obj.dial = function() { // this is a methods of factory function
    console.log("tring.. tring...")
  }
  obj.sendMessage = function() { // this is sendMessage method of factory function
    console.log("Sending message...")
  }
  return obj // At last we need to return our obj.
}
```
# ===== ~ Constructor Function ~ =====
## *this* `acts like an object it automatically creates an object and at last returns an object. `
```js
function animal(noOfLegs, vegetarian) {
  this.noOfLegs = noOfLegs;
  this.vegetarian = vegetarian;
 
  this.eat = function() {
    console.log("eating...")
  }
  this.greet = function() {
    console.log(`Hi, I have ${this.noOfLegs} legs.`)
  }

}
let tiger = new animal(4,"Yes")
tiger.eat(); // "eating..."
tiger.greet(); // "Hi, I have 4 legs."
```

# ===== ~ ES6 Classes ~ ===== 
```js
class CreateCat {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  displayPower() {
    return   `${this.name} : ${this.power}`
  }
}

class CreateMouse {
  constructor(name) {
    this.name = name;
  }
  kick(catObject) {
    catObject.power -= 10;
  }
}

let tomy = new CreateCat("BilliMeri",110);
let mikki = new CreateMouse("mikki");

// console.log(tomy.displayPower()); //110
// mikki.kick(tomy) // 100
// console.log(tomy.displayPower()); // 100
```
# ===== ~  Linking Object to Object with Prototype chain ~ =====

## The `Object.setPrototypeOf(obj2,obj1)` method sets the prototype (i.e., the internal `__proto__` property) of a specified object to another object
```js
let user = {
  name: "Amarjeet",
  sayHello: function() {
    console.log("Hello");
  },
};

let workInfo = {
  salary: 100000,
  work: function() {
    console.log("Working");
  },
  // __proto__:user, // internal way to make chain with user
};
Ojbect.setPrototypeOf(workInfo, user);
workInfo.work() // "Working"
workInfo.sayHello(); // "Hello"
```
## The same task can also be performed using `Object.create()`. The `Object.create()` method creates a new object, using an existing object as the prototype of the newly created object.
```js
let user = {
  name: "Amarjeet",
  sayHello: function() {
    console.log("Hello");
  },
};
// Create another empty object for workInfo. user is set as the prototype of workInfo
let workInfo = Object.create(user);

// Add properties and methods to the workInfo object
workInfo.salary = 100000;
workInfo.work = function() {
  console.log("Working");
};

workInfo.work(); // "Working"
workInfo.name; // "Amarjeet"
```
# ===== ~Create function prototype chains~ =====
- Add method to a function's prototype object
- Create prototype chain between a function's prototype and an object
- Create prototype chain between two function's prototypes
```js
function person() {}
// you can add properties and methods to prototype 
person.prototype.greet = function () {
  console.log(`Greeting!`);
};

// you can chain prototype of one function to another
fucntion engineer () {}
engineer.prototype.code = function() {
  console.log("Coding");
};

Object.setPrototypeOf(engineer.prototype, person.prototype);

engineer.prototype.code(); // "Coding"
engineer.prototype.greet(); // "Greeting!"

// you can chain it with any other object
let worker = {
  job: "Engineer",
  work: function() {
    console.log("Working as an Engineer");
  },
};

Object.setPrototypeOf(worker, person.prototype);

worker.work() // Working as an Engineer
worker.greet(); // Greeting!

```
# Copying perperties from one *factory function* to another
```js
function personCreator(firstName, lastName, age) {
  let obj = {}
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;
  return obj;
};

function employeeCreator(firstName, lastName, age, department,salary ) {
  let obj = personCreator(firstname, lastName, age)
  obj.department = department;
  obj.salary = salary;
  return obj;
};

let emp1 = employeeCreator("Amar","Gupta",35,"sales",100000);
console.log(emp1);
```
# ===== ~New way of calling function using `.call`~ =====
## `.call()`, we call an object and arg1,arg2 as argument.
```js
function Introduce( greeting ) {
  let greet = greeting;
  let name = this.name;
  let age = this.age;

  console.log(`${greet}! I am ${name} & I am ${age} years old.`);
}

Introduce.call({name:"John", age:40 }, "Hello");
// Hello! I am John & I am 40 years old.
```
# Copying properties from one constructor function to another
```js
function IPhone1(ID, color, display, weight) {
  this.id = ID;
  this.color = color;
  this.display = display;
  this.weight = weight;
}

function IPhone2(ID, color, display, weight, blueTooth, internet, camera) {
  IPhone1.call(ID, color, display, weight);
  this.blueTooth = blueTooth;
  this.internet = internet;
  this.camera = camera;
}
let ip2Obj = new IPhone2(1, "black", "128GB", 1000, "1.0","2g", "1.0 MP");
```
# Inheritance - Factory functions
```js
createIPhone1.prototype.dial = function () {
  console.log("tring.. tring..");
};
createIPhone1.prototype.sendMessage = function() {
  console.log("Sending message..." );
};

function createIPhone1(ID, color, display, weight) {
  let obj = {};
  Object.setPrototypeOf(obj, createIPhone1.prototype);

  obj.id = ID;
  obj.color = color;
  obj.display = display;
  obj.weight = weight;
  
  return obj;
}
// ============= Another ==============

createIPhone2.prototype.dial = function() {
  console.log("tring.. tring..");
};
createIPhone2.prototype.sendMessage = function() {
  console.log("Sending message...");
};
createIPhone2.prototype.connectToBluetooth = function() {
  console.log("Connecting to bluetooth...");
};
createIPhone2.prototype.connectToInternet = function() {
  console.log("Connecting to internet...");
};

function createIPhone2(ID, color, display, weight, blueTooth, internet) {
  let obj = {};
  Object.setPrototypeOf(obj,createIPhone2.prototype);

  obj.id = ID;
  obj.color = color;
  obj.display = display;
  obj.weight = weight;
  obj.blueTooth = blueTooth;
  obj.internet = internet;
  
  return obj;
}

let iphone2Object = new createIphone2(
  1,
  "black",
  "128GB",
  1000,
  "1.0",
  "2g",
  "1.0 MP"
);
console.log(iphone2Object);
iphone2Object.dial();
iphone2Object.sendMessage();
iphone2Object.connectToBluetooth();
iphone2Object.connectToInternet();

```
# Inheritance - Factory functions to Constructor functons
```js
createPerson.prototype.increaseAge = function () {
  this.age++;
  console.log("increasing age...");
};

createPerson.prototype.eat = function () {
  console.log("eating...");
};

function createPerson(firstName, lastName, age) {
  let obj = {};
  Object.setPrototypeOf(obj, createPerson.prototype);

  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;

  return obj;
}

Object.setPrototypeOf(createEmployee.prototype, createPerson.prototype);

createEmployee.prototype.work = function () {
  console.log("working");
};

createEmployee.prototype.increaseSalary = function (amt) {
  this.salary += amt;
  console.log("increasing salary...");
};

function createEmployee(firstName, lastName, age, salary) {
  let obj = createPerson(firstName, lastName, age);
  Object.setPrototypeOf(obj, createEmployee.prototype);
  obj.salary = salary;
  return obj;
}

let e1 = createEmployee("Vivek", "Agarwal", 40, 100);
e1.eat();
e1.increaseAge();
e1.work();
e1.increaseSalary(50);
console.log(e1);
```
# Inheritance - Constructor Functions to ES6 Classes 
```js
IPhone1.prototype.dial = function() {
  console.log("tring.. tring...");
};
IPhone1.prototype.sendMessage = function() {
  console.log("Sending message...");
};

function IPhone1(ID, color, display, weight) {
  this.id = ID;
  this.color = color;
  this.display = color;
  this.weight = weight;
}

Object.setPrototypeOf(IPhone2.prototype, IPhone1.prototype);

IPhone2.prototype.connectToBluetooth = function () {
  console.log("Connecting to bluetooth...");
};
IPhone2.prototype.connectToInternet = function () {
  console.log("Connecting to internet...");
};

function IPhone2(ID, color, diplay, weight, blueTooth, internet) {
  IPhone1.call(this, ID, color, display, weight);
  this.blueTooth = blueTooth;
  this.internet = internet;
}
let iphone2Object = new IPhone2(
  1,
  "black",
  "128GB",
  1000,
  "1.0",
  "2g",
  "1.0 MP"
);

console.log(iphone2Object);
iphone2Object.dial();
iphone2Object.sendMessage();
iphone2Object.connectToBluetooth();
iphone2Object.connectToInternet();
```