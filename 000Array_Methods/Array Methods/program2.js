// pop => act like in python also

// let arr = ["Mango", "Papaya", "Grapes", "Apple"];

// let elemRemoved = arr.pop(); // Apple -> [ 'Mango', 'Papaya', 'Grapes' ]
// arr.pop(); // Grapes

// console.log(arr); // ['Mango', 'Papaya']
let arr = ['a','b','c','d'];
let x = arr.pop(); // x = d last deleted elements;
console.log(arr,x); // ['a','b','c'] d

// let arr1 = [1,2,3,4,5,6,7,8,9];
// arr1.pop();
// console.log(arr1);

// If array is empty than it return Undefined and array is not modified

let arr3 = [];
let op = arr3.pop();
console.log(arr3);
console.log(op); // return undefined;