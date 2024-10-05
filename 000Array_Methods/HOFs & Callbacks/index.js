// Function Statement:
// function javascript(){
//     console.log("Welcome to JS");
// }
// javascript();
// Real-life example in our Indian cricket team there is 15 players but only 11 play are play;

// Function expression:
// var b = function(){
//     console.log("Welcome to JS");
// }
// b();
// A function without a name is called anonymous function;
// Anonymous functions are used as values.
// variable b is an anonymous function.

// Difference Between Parameters and Arguments :
function sum( a, b, c ){}; // a, b, and c are the parameters
sum( 1, 2, 3 ); // 1, 2, and 3 are the arguments

// var person = ['Chandra','Varun','Nrupul','Prateek','Aman'];
// function vaccinate(person){
//     return (person+' has been vaccinated.');
// }
// for(let i=0;i<person.length;i++){
//     vaccinate(person[i]);
// }
// let x = person.map(function(ele){
//     return (vaccinate(ele));
// })
// console.log("Value of x",x);

// function eatBreakfast(item,time){
//     console.log(`I will eat ${item} as my breakfast at ${time}PM`);
// }
// eatBreakfast("Bitter Gaurd and Chapati",7);

function eatBreakfast(item,time,doBrush){
    doBrush();
    console.log(`I will eat ${item} as my breakfast at ${time}PM`);
}
function doBrush(){
    console.log("First brush your teeth");
}
eatBreakfast("idly",9,doBrush);
// forEach : Here creating extra array is extra charge.
var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"];
var box = [];
sweets.forEach(function(ele,index,sweets){
    box.push(ele);
})

// Map : map is similar to forEach, only difference is map donsn't have any additional charges
var output = sweets.map(function(elem,index){
    return (elem);
})
console.log(output);

// filter: 
var ans1 = sweets.filter(function(elem,index){
    return elem=="kova";
})
console.log(ans1);

// reduce:
const array = [15,16,18,19];
let ts = array.reduce(function(tSum,currSum){
    return tSum+currSum;//=> without intial value
});
console.log(ts);
let addNums=function(acc,cv){
    return acc+cv;
}
console.log(array.reduce(addNums,10)); // with initial value;

// Sorting: sort()
let numbers = [4,2,5,6,8,9];
numbers.sort()
console.log(numbers); // It is working in one digit no.

let shapes = [
    {sides: 4, color: 'red'},
    {sides: 3, color: 'blue'},
    {sides: 4, color: 'blue'},
    {sides: 3, color: 'red'}
  ];
shapes.sort((a,b)=>b-a);
console.log(shapes);

// Student Activites
// Map Practice;
function doubleNumber(arr){
    return arr.map(num=>num*2);
}
console.log(doubleNumber(numbers));

const nm = [1,2,3,4,5];
function calculationSum(nm){
    return nm.reduce((acc,curr)=>acc+curr,0);
}
console.log(calculationSum(nm));

// Filter Practice:
const numb = [1,2,3,4,5,6,7,8,9];
function filterEvenNumber(numb){
    return numb.filter(numb=>numb%2===0);
}
console.log(filterEvenNumber(numb));

// Map & Filter Combination;
const words = ['apple','banana','pear','orange','grape'];
function filterShortWords(nm){
    return nm.filter(word=>word.length>=5).map(word=>word.toUpperCase());
}
console.log(filterShortWords(words));

