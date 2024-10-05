     
      // Arrow functions, the basics

```
let func = (arg1, arg2, ..., argN) => expression;

let func1 = function(arg1, arg2, ..., argN) {
     return expression;
};
```
```
let sum = (a,b) => a + b;

/*This arrow function is a shorter form of:

let sum = function(a, b) {
     return a + b;
}
*/
alert( sum(1, 2) ); //3
```
```
        // If we have only one argument, 

let double = n => n*2;
// roughly the same as: let double = function(n) { return n * 2 }
alert( double(3) ); //6
```
```
//      If there are no arguments,

let sayHi = () => alert("Hello!");

sayHi();
```
```
// Arrow functions can be used in the same way as Function Expressions.

// For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert("Hello!") : 
    () => alert("Greetings!");

welcome();
```
```
//                 Multiline arrow functions

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
```

```
//       Rewrite with arrow functions

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```


ask('Do you agree?',
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
 );
