// shift
// Time -> O(1) or O(n)?

let arr = ["Apple", "Mango", "Papaya", "Grapes"];

let x = arr.shift() // Apple
console.log(x);
arr.shift(); // Mango

// console.log(arr);

let a = [1,2,3,4,5,6,7];
let y = a.shift(); // op => 1; 
console.log(a,y); // op => [2,3,4,5,6,7]

// If the array is empty.
let b = [];
let z = b.shift();
console.log(b,z);// b=>[] and z => undefined;