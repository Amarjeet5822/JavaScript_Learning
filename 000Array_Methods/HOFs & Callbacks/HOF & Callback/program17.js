// Sum of cubes- HOF

let arr = [1, 2, 3, 4, 6];

// filter out the elements which are divisible by 3

// filter
let x = arr.filter((el) => {
    return el % 3 === 0;
})

let s = x.reduce((acc, el) => {
    console.log(acc, el);
    return acc + el**3;
}, 0)

console.log(s);