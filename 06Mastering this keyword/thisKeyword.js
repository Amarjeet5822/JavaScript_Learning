// Mastering "this" keyword
//  * Regular vs Arrow functions
//  * Mastering the "this" keyword

// Static Methods
// Static methods are methods that are called on the class itself, rather than on an instance of the class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static greet() {
      console.log("Hello!");
    }
  }
//   Person.greet(); // "Hello!"

// Getters and Setters 
// Getters and setters are special methods that allow you to access or modify the values of class properties.

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 50000;
    }
    // getter
    get fullName() {
        return `${this.name} Doe`;
    }
    // setter
    set fullName(name) {
        this.name = name.split(" ")[0];
    }
}

const john = new Person1("John", 30);
// are we trying to get a value or set a value
// console.log(john.fullName); // get

// are we trying to get a value or set a value
john.fullName = "Jane Smith"; // set

// get a value or are we trying to get a value
// console.log(john.name) // Jane

// Private Fields 
// Private fields are class properties that are not accessible from outside the class.

class Person3 {
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    get age() {
        return this.#age;
    }
}
const john1 = new Person("John",30);
// console.log(john1.age);// 30
// console.log(john1.#age); // SyntaxError: Private field "#age" must be declared in an enclosing class
// In the example above, we define a private field called #age using the # symbol. We can only access the #age field through the age getter method.

// ++++++++++++ Question on Private Fields ++++++++++++++++

// private property called balance
// public method called deposit(amount)
// public method called withdraw(amount)
// public method called displayBalance()
// on every deposit a private method called depositCharge() should be invoded which reduces the balance by 10

class Account {
    #balance;
    constructor(openingBalance) {
        this.#balance = openingBalance;
    }
    #depositCharge() {
        this.#balance -= 10;
    }
    deposit(amount) {
        this.#balance += amount;
        this.#depositCharge();
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    displayBalance() {
        console.log(this.#balance);
    }
}

let p1 = new Account(1000);
p1.deposit(9000);
// p1.displayBalance();

// Getters and Setters with private fields
// Getters and setters are special methods that allow us to access and modify class properties.

class Person5 {
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    set age(value) {
        if (value<0) {
            throw new Error("Age must be a positive number");
        }
        this.#age = value;
    }
    get age() {
        return this.#age;
    }
};

// const john5 = new Person5("John", 30);
// console.log(john5.age); // 30 
// john5.age = 40;
// console.log(john5.age);
// john5.age = -10;// Error: Age must be a positive numbers.


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Understand Regular Function vs Arrow function

//              Regular Functions:
// Function declaration
function myDeclaredFunction1(number) {
    return number *2;
}
// function expression
var myExpressionFunction1 = function (number) {
    return number * 2
}

// console.log(myDeclaredFunction1(2));
// console.log(myExpressionFunction1(5));

//              Arrow Functions:
var myArrowFunction1 = (number) => number * 2;
// console.log(myArrowFunction1(10));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Understand "Call", "Apply" VS "Bind"

// call, apply, & bind

// .call & .apply are used to invoke a function & set the value of the "this" keyword inside of the function.

// .bind is used to create a function & set the value of the "this" keyword inside of the newly created function.

function greet(greeting, year, reciever) {
    return `${greeting} ${year} to ${reciever} from ${this.name}.`
}
// while invoking greet() we need to set the value of this keyword inside of the greet function

// .call() 
// takes in the value of "this" keyword as the first argument.
// rest of the arguments to the function can be sent as comma separated values 
// let g = greet.call({name: "Amar"}, "Happy new year","2023", "JS201 Batch")

// .apply()
// takes in the value of "this" keyword as the first argument.
// rest of the arguments to the function can be sent is an array of values 
// let args = [];
// args.push("Happy new year");
// args.push("2023");
// args.push("JS201 Batch");

// let g = greet.apply({name:'Vivek'},args)

// .bind()
// bind gives you a new function
// in which the "this" keyword is pre-set for you
// let greetFromVivek = greet.bind({name:"Vivek"});

// console.log(g);
