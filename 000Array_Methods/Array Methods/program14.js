let product = {
   name: "Iphone 15",
   price: 100000,
   brand: 'Apple',
   ram: "6 GB",
   rom: "128 GB"
};

// const { brand = 'Apple', ram: RAM } = product; // ram as RAM

// console.log(brand, RAM);
// const {name,rom,brand}=product;
// console.log(name,rom,brand);

// Function Declaration 

function name15(a,b){
   let c = a+b;
   return c;
}
let abc = name15(2,4);
console.log(abc);

// Function expression
// let abcd = function(){
//    console.log("My name is Amarjeet Gupta")
// }
// abcd(); // My name is Amarjeet Gupta
let abcd = function(){
   return ("My name is Amarjeet Gupta");
}
console.log(abcd()); // My name is Amarjeet Gupta

// Anonymous Function Expression: A function does'nt have name is called Anonymous Function;
const multiply = function (x,y){
   return x*y;
}
console.log(multiply(12,3));

