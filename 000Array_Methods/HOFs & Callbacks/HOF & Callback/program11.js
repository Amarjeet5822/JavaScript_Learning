// filter
// filter coffee
// filtercopy

// it is used to filter out (on the basis of return value) the elements in your array

let arr = [1, "mango", 4.5, "*", ")", 3, 4, 5];
// I need to create a new array having only numbers

let x = arr.filter(function (el, idx, arr) {
   if(typeof el === "string") {
    return true;
   } else {
    return false;
   }
});

console.log(x);
