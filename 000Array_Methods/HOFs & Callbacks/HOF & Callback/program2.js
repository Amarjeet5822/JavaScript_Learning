function x() {
   console.log("x function executed");
   return 10;
}

function hof(f) {
   console.log("hof function executed");
   // this 'f' is a function
   return f(); // invoke or calling
}

console.log(hof(x)); // HOF because it is taking a function as an argument
