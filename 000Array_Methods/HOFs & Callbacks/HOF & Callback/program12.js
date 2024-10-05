let arr = [
   {
      name: "Raj",
      age: 25,
   },
   {
      name: "Rani",
      age: 17,
   },
   {
      name: "Yoda",
      age: 5,
   },
   {
      name: "Tony Stark",
      age: 45,
   },
   {
      name: "Kaleen Bhaiya",
      age: 50,
   },
];

let eligibleForVote = arr.filter(function (el, idx, arr) {
   if (el.age >= 18) {
      return true;
   } else {
      return false;
   }
});

let x = eligibleForVote.map((el) => {
   return el.name;
});

console.log(x.join(', '));