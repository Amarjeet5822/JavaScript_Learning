// push => like append in python;

let arr = [1, 2, 3];

// console.log(x);  x= arr.length;
//console.log(arr); 

arr.push(11,12);
// console.log(arr); [ 1,2, 3,11,12]
let len = arr.length;
// console.log(len);

arr.pop(2); // it always pop ele from last position.
arr.pop(1);
// console.log(arr); // [ 1,2, 3]
arr.shift(); // deleted 1st ele from array.
arr.unshift(1) // added ele at index - 0
// console.log(arr);

// concat
const arr1 = ['a','b','c'];
const arr2 = ['d','e','f'];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1.concat(arr2,arr)); // ['a', 'b','c', 'd','e', 'f', 1,2,3]

//slice in js
// slice(),slice(start),slice(start,end);
let x = arr.slice(1,2);
console.log(x);