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
