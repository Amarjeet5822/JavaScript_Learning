// This is not a PURE function!!!!

// This is an impure function

const sum = (a, b) => {
   // FYI: Math.random will give a random value from 0 to 1
   let x = Math.floor(Math.random() * 10) + 1;
   return x + a + b;
};

console.log(sum(10, 20)); // 36


console.log(sum(10, 20)); // 36