// map

let arr = [1, 2, 3, 4, 5, 6, 7];

// 1
// 4
// 9
// 16
// 25

let squareArr = arr.map(function (el, idx, arr) {
   // iteration 5
   // el = 5
   return el ** 2; // 25
});

// squareArr = [1, 4, 9, 16, 25, 36, 49]