// HOF & Callback

// HOF
// Higher Order Function
// A function that takes another function as an argument
// A function that takes a callback function

// callback
// The function which is passed as an argument.

function cb() {
   console.log("cb function executed");
}

function hof(f) {
   console.log("hof function executed");
   // this 'f' is a function
   f(); // invoke or calling
}

hof(cb); // HOF because it is taking a function as an argument
