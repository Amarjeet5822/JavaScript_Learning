// working with prototype
// importance: 5
// Here's the code that creates a pair of objects, then modifies them. 

// =========Example 1.============

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps:true
};

// console.log( rabbit.jumps ); // true

delete rabbit.jumps;

// console.log(rabbit.jumps ); // null

// delete animal.jumps; // undefined

console.log( rabbit.jumps ); // undefined, there's no such property any more.

// Searching algorithm
// importance: 5

// =========Example 2.============
let head = {
  glasses: 1
};
let table = {
  __proto__:head,
  pen: 3
};
let bed = {
  __proto__:table,
  sheet: 1,
  pillow: 2
};
let pockets = {
  __proto__:bed,
  money: 2000
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined


// Where does it write?
// We have rabbit inheriting from animal/ 

// =========Example 3.============
let animalOne = {
  eat() {
    this.full = true;
  }
};

let rabbit1 = {
  __proto__: animalOne
};

rabbit1.eat(); // rabbit

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
// Ans: rabbit
// That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.
// Property lookup and execution are two different things.
// The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

// ---------------------------------------------

// Why are both hamsters full?
// We have two hamsters: speedy and lazy inheriting from the general hamster object. 

// =========Example 4.============
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

