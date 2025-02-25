// Create an Object Constructor
var obj = new Object();
// console.log(obj) // {}

// Static methods of an Object // We will learn in same file.
// Method 1: => Object.assign()
// Method 2: => Object.create()
// Method 3: => Object.defineProperties()
// Method 4: => Object.entries()
// Method 5: => Object.freeze()

// Method 1: => Object.assign()
const obj1 = {a: 1, b: 2 };
const sourse = { b: 4, c: 3};
const target = Object.assign(obj1, sourse);
console.log(target); // {a:1, b:4, c:3}
console.log(target === obj1); // true 

// const newTarget = Object.assign(obj1, sourse1,..., sourseN) 
// Return with new obj1 with merged ( sourse1 to sourseN)

// Deep Clone ( we use "structuredClone")
const obj11 = { a: 0, b: { c: 0 } };
const obj12 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj12); // { a: 0, b: { c: 0 } }

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj13 = Object.assign(o1, o2, o3);
console.log(obj13); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

// Method 2: => Object.create()
// Method 3: => Object.defineProperties()
// Method 4: => Object.entries()
// Method 5: => Object.freeze()
