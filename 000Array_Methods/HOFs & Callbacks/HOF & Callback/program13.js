// reduce

let arr = [1, 2, 3, 4, 5];


let s = arr.reduce(function (acc, el, idx, arr) {
    // iteration 1
    // acc -> 0
    // el -> 1

    // iteration 2
    // acc -> 1
    // el -> 2

    // iteration 3
    // acc -> 3
    // el -> 3

    // iteration 4
    // acc -> 6
    // el -> 4

    // iteration 5
    // acc -> 10
    // el -> 5

    // iteration 6; don't have

   return acc + el; // 10 + 5 -> 15
}, 10);

console.log(s);