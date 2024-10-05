let arr = [
   {
      firstName: "Huzaifa",
      lastName: "Sheikh",
      // fullName: "Huzaifa Sheikh"
   },
   {
      firstName: "Arpit",
      lastName: "Kesharwan",
   },
   {
      firstName: "Satyam",
      lastName: "Yadav",
   },
   {
      firstName: "Swadheen",
      lastName: "Prusty",
   },
   {
      firstName: "Amarjeet",
      lastName: "Gupta",
   },
];

let ans = arr.map(function (el, idx, arr) {
   return { ...el, fullName: `${el.firstName} ${el.lastName}` };
});

// let x = arr.map(({ firstName, lastName }) => ({
//    ...el,
//    fullName: `${firstName} ${lastName}`,
// }));

console.log(ans);

let sum = (a, b) => {
   return a + b;
};
