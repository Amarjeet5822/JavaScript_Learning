// concat => It merge two array and make new array, original array is not modified;
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// let arr3 = [6, 7, 8];

// let merged = arr1.concat(arr2, arr3);

// console.log(merged);
let arr = ['a','z','y'];
let arr15 = [1,2,3,4];
console.log(arr.concat(...arr15))
let c = ['aa','bb'];
let d = ['dd','ee'];
let e = ['ab','bc'];
let f = ['ff','gg'];
let newCombination = c.concat(d,e,f);
console.log(newCombination.length);