let names = ["Rani", "Raja", "Ram", "Rahul", "Rohan"];

let bag = names.reduce(function (acc, el, idx, arr) {
   return acc + el + " ";
}, "");

console.log(bag);

// Can we do the same using the reduce method? Can we....

// let bag = "";
// for (let i = 0; i < names.length; i++) {
//    bag += names[i] + " ";
// }

// console.log(bag);

/*
https://pythontutor.com/render.html#code=let%20names%20%3D%20%5B%22Rani%22,%20%22Raja%22,%20%22Ram%22,%20%22Rahul%22,%20%22Rohan%22%5D%3B%0A%0Alet%20bag%20%3D%20names.reduce%28function%20%28acc,%20el,%20idx,%20arr%29%20%7B%0A%20%20%20return%20acc%20%2B%20el%20%2B%20%22%20%22%3B%0A%7D,%20%22%22%29%3B%0A%0Aconsole.log%28bag%29%3B&cumulative=false&curInstr=12&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/