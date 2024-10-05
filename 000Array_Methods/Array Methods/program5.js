let arr = [1, 2, 3];

let main = [4, 5, 6];
let newMain = [7,8,9];

newMain.unshift(...arr,...main);

console.log(newMain);

