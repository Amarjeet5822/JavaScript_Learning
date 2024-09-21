// Master the "this" keyword
// These questions are commonly asked in tech interviews

// Job Interview Challenge #1

function sayGoodbye() {
  console.log("Good bye!", this);
}

function sayHello() {
  console.log("Helloo! ", this);
  sayGoodbye();
}

// sayHello();


// Job Interview Challenge #2

function sayHello() {
  console.log("Hello! from ", this.name);
}

var john3 = {
  name: "John Doe",
  age: 30,
  sayName: function(){
    console.log("My name is ", this.name);
  },
  sayHello: sayHello
}

var james3 = {
  name: "James Bond",
  age: 28,
  sayName: function() {
    console.log("My name is ", this.name);
  },
  sayHello: sayHello
};

// john3.sayName(); 
// john3.sayHello(); 

// james3.sayName(); 
// james3.sayHello();

// Job Interview Challenge #3

function sayHello () {
  console.log("Hello! ",this);
}

var John1 = {
  name: "John Doe",
  age: 30
};

var james1 = {
  name: "James Bond",
  age: 29
};

// sayHello.call(james1);
// sayHello.call(John1);

// Job Interview Challenge #4

var sayArrowHello2 = () => {
  console.log("Arrow Hello ", this);
};

// sayArrowHello2();

function sayRegularHello2() {
  console.log("Regular Hello ", this);
}

// sayRegularHello2();

// Job Interview Challenge #5


var john = {name: "John Doe", age: 35};

var sayArrowHello = () => {
  console.log("Arrow Hello ", this)
}

function sayRegularHello() {
  console.log("Regular Hello ",this);
}
function sayRegularName() {
  console.log("My Regular name is ", this.name, this);

  sayRegularHello();
  sayArrowHello();
  var sayArrowGoodBye = () => {
    console.log("Arrow GoodBye ", this);
  };
  sayArrowGoodBye();

}

sayRegularName.call(john);