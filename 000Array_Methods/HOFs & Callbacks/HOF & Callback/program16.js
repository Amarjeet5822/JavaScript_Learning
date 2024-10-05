// PnC

// factorial

// N = 5
// N! -> 5 * 4 * 3 * 2 * 1 -> 120

// N = 10
// N! -> 10 * 9 * 8 * 7 * ... * 2 * 1 -> which I also don't know?

// let [fact, N] = [1, 10];

// while (N) {
//    fact *= N;
//    N--;
// }

// console.log(fact);

let N = 10;

let arr = new Array(10); // definite length of your array, that is, only 10 elements

arr.fill(1);

let x = arr.map((el, idx) => {
   return el + idx;
});

let fact = x.reduce(function (acc, el, idx, arr) {
   console.log(acc, el);
   return acc * el;
}, 1);

console.log(fact);
