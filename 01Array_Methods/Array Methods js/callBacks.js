// HOF; How do you know that this is a HOF?
function calculate(a, b, operation) {
    return operation(a,b);
}

// Task : make the usage work! write logic for add, substract, and multiply

// HOF - usage
const add = (a,b)=> a+b;
const substract = (a, b) => a-b;
const multiply = (a,b)=>a*b;

console.log(calculate(5, 2, add));
console.log(calculate(10, 4, substract));
console.log(calculate(3, 7, multiply));
