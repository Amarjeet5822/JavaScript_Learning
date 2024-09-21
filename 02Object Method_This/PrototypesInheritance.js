
// ====== Prototypal inheritance =======

// Prototypal inheritance is a language feature 

// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either  *null* or *references* another *object*. That object is called “a prototype”:

// The property **[[Prototype]]** is *internal* and *hidden*, but there are many ways to set it.


// ====== __proto__ ======
let animal1 = {
  eats: true
};
let rabbit1 = {
  jumps: true
};

rabbit1.__proto__ = animal1; // sets rabbit.[[Prototype]]
// Now if we read a property from *rabbit*, and it’s missing, JavaScript will automatically take it from *animal*.

// ===== For instance ======
// line no. 11 ( animal1 ) and 14 ( rabbit1 )
rabbit1.__proto__ = animal1; // (*) 1st way to inherit the animal2 property
// we can find both properties in rabbit now: 
// console.log(rabbit1.eats) // true (**)
// console.log(rabbit1.jumps ); // true

// ======== Example 2. ============== 

// let animal2 = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   }
// };

// let rabbit2 = {
//   jumps: true,
//   __proto__: animal2 // 2nd way to inherit the animal2 property
// };

// walk is taken from the prototype
// rabbit2.walk(); // Animal walk

// ======== Example 3. ==============
// The prototype chain can be longer:

let animal3 = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit3 = {
  jumps: true,
  __proto__: animal3
};

let longEar = {
  earLength: 10,
  __proto__: rabbit3
};

// walk is taken from the prototype chain 
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

// ======== Example 4. ==============

// ====== Writing doesn’t use prototype =======
// The prototype is only used for reading properties.
// Write/delete operations work directly with the object.

let animal4 = {
  eats: true,
  walk() {
    // this method won't be used by rabbit
  }
};

let rabbit4 = {
  __proto__: animal4
};

rabbit4.walk = funciton() {
  console.log("Rabbit! Bounce-bounce!");
};

rabbit4.walk(); // Rabbit! Bounce-bounce!
// Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.

// ======== Example 5. ==============

let user = {
  name: "John",
  surname: "Smith",
  
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected


// ======== The value of “this” =============
// No matter where the method is found: in an object or its prototype. In a method call, **this** is always the object before the dot.

// That is actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.

// ======== Example 6. ==============
// animal has methods
let animal6 = {
  walk() {
    if (!this.isSleeping) {
      console.log("I walk");
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit6 = {
  name: "White Rabbit",
  __proto__: animal6
};

// modifies rabbit.isSleeping
rabbit6.sleep();

console.log(rabbit6.isSleeping); // true
console.log(animal6.isSleeping); // undefined (no such property in the prototype)

// If we had other objects, like bird, snake, etc., inheriting from animal, they would also gain access to methods of animal. But this in each method call would be the corresponding object, evaluated at the call-time (before dot), not animal. So when we write data into this, it is stored into these objects.

// As a result, methods are shared, but the object state is not.


// ========== for…in loop =============
// The for..in loop iterates over inherited properties too.
 

// ======== Example 7. ==============
// For instance:

let animal7 = {
  eats: true
};

let rabbit7 = {
  jumps: true,
  __proto__: animal7
}; 

// Object.keys only returns own keys
console.log(Object.keys(rabbit7)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit7) console.log(prop); // jumps, then eats

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

// *** We can store own keys of specific Object (using for..in loop) and exclude the inherit property or method using (Object.keys(ObjectName)) ***

// ======== Example 8. ==============
// So we can filter out inherited properties (or do something else with them):

let animal8 = {
  eats: true
};

let rabbit8 = {
  jumps: true,
  __proto__: animal8
};

for (let prop in rabbit8 ) {
  let isOwn = rabbit8.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}
// …But why does *hasOwnProperty* not appear in the *for..in* loop like *eats* and *jumps* do, *if for..in* lists inherited properties?

// The answer is simple: it’s not enumerable. Just like all other properties of *Object.prototype*, it has *enumerable:false* flag. And *for..in* only lists enumerable properties. That’s why it and the rest of the *Object.prototype* properties are not listed.

// Tasks Practice to Understand Inheritance









