let fruites = ["mango", "grapes", "oranges", "papaya"];

let isPresent = false;
let index = null;

function checker(el, idx, array) {
   if (el === "chiku") {
      isPresent = true;
      index = idx
   }
}

// for(let i=0; i<fruites.length; i++) {
//     if(fruites[i] === "some ") {
//         // check
//     }
// }

fruites.forEach(checker);

console.log(isPresent, index);
