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


const array = [5,4,3,2,1];
// Reverse Array using Reduce and Map (HOP function)
const reverseArrayReduce = array.reduce((acc, ele) => [ ele ,...acc], []);
console.log(reverseArrayReduce);
const reverseArrayMap = array.map((ele, idx, arr) => arr[arr.length - idx -1 ]);
console.log(reverseArrayMap);

let num = 5;
console.log()