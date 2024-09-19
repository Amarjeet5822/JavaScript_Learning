
// ================ ~ Factory Function ~ ================  

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

// let i1 = iPhone1("Gray","90mm",) // Created new object of i1
// i1.dial() // "tring... tring..."
// i1.sendMessage() // "Sending message..."

// Factory Function animalCreation ( n no. of animals we can create using factory function )

function animalCreation(noOfLegs, vegetarian) {
  let a1 = {};
  a1.noOfLegs = noOfLegs; // noOfLegs property and it's value is added in a1 object 
  a1.vegetarian = vegetarian; //property and it's value is added in a1 object
  a1.greet = function() { // methods we need to write obj.function_name = function() { .. do something...}
    console.log(`Hi, I have ${a1.noOfLegs} legs.`)
  }
  a1.eat = function() { // methods we need to write obj.function_name = function() { .. do something...}
    console.log("eating....")
    console.log(`Are you vegetarian : ${a1.vegetarian}`)
  }
  return a1
}

// let obj1 = animalCreation(4,"Yes"); obj1 new Object is created

// obj1.greet(); // "Hi, I have 4 legs."
// obj1.eat(); // "eating...." and another line "Are you vegetarian Yes."


// =============== Object Normal like dictionary in Python ===================================
// Object to access its property and values.
tomi = {
  name: 'Tom',
  health: 100,
  displayPower:()=> {
    return (89)
  }
}
// console.log(tomi.name); // "Tom"
// console.log(tomi.displayPower());  // 89

jerry = {
  name: 'Jerry',
  kick() {
    return tomi.health - 10 
  }
}

// console.log(jerry.kick()) // 90

// ======================= This is also a factory function ==========================

function createCat(name, power) {
  let obj = {};
  obj.name = name
  obj.power = power;

  obj.displayPower = function(){
    return `${obj.name}: ${obj.power}`
  }
  return obj;
}

function createMouse(name) {
  let obj = {};

  obj.name = name;
  obj.kick = function(catObject){
    catObject.power -= 10;
  }
  return obj;

}

let newTom = createCat("Tom",100);
// console.log(newTom.displayPower()); //  "Tom : 100"

let newJerry = createMouse("Jerry") 
// console.log(newJerry.name); // "Jerry"
// newJerry.kick(newTom); // 90
// console.log(newTom.displayPower()); // 90 

// ================ ~ ES6 Classes ~ ================ 

// Instructor Activity - ES6 Classes (iPhone example)
class IPhone1 {
  constructor(ASIN, color, display, camera) {
    this.color = color;
    this.display = display;
    this.camera = camera;
  }

  dial() {
    console.log("tring... tring...");
  }
  sendMessage() {
    console.log("Sending message....");
  }
}

let I1 = new IPhone1("Gray", "90mm");
// I1.dial()  // "tring... tring..."
// I1.sendMessage(); // "Sending message...."
// console.log(I1); 

// ================ ~ Constructor Function ~ ================ 

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

// ================ ~ ES6 Classes ~ ================ 

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