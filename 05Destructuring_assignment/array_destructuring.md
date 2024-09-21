# Array destructuring 
```js
let arr = ["John","Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName,surname] = arr;

console.log(firstName); // John
console.log(surname); // Smith

let [firstName, surname] = "John Smith".split(" ");
console.log(firstName); // John
console.log(surname); // Smith
```
## `Ignore elements using commas`

```js
// second element is not needed
let [firstName, ,title] = ["Ram","Raja","Raj"] ;
console.log(title);
```
## Works with any iterable on the right-side
```js
let [a,b,c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]) 

```
## Assign to anything at the left-side
```js
let user = {};
[user.name, user.surname] = "Amrjeet Gupta".split(" ");
console.log(user.name) // Amarjeet
console.log(user.surname); // Gupta

```
## Looping with .entries()
```js
let user = {
  name: "Amarjeet",
  age: 34
};

// loop over the key-and-values
for (let [key, value] of Object.entries(user)){
  console.log(`${key}: ${value}`);

}

```
## Swap variables trick
```js
let guest = "Jane";
let admin = "Pete";
 
// Let's swap the values: make  guest=Pete, admin=Jane;
[guest,admin] = [admin,guest]
console.log(guest)
console.log(admin)

```
## The rest `...`
```js
let [name1, name2] = ["ram","shyam","Mohan","sohan"]
console.log(name1) // ram
console.log(name2) // shyam 
// Rest is just ignored; Further items aren't assigned anywhere

`“the rest” using three dots "..."`
let [one,two,...rest] = [1,2,3,4,5,6,7];
console.log(one) // 1
console.log(two) // 2
console.log(rest) // [3,4,5,6,7]
```
## Default values
```js
let [firstName, surname] = [];
console.log(firstName) // undefined
console.log(surname) // undefined

// default values
let [name="Guest", surname = "Anonymous"] = ["Amarjeet"]
console.log(name) // Amarjeet (from array)
console.log(surname) // Anonymous (default used)

// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius (from array)
alert(surname); // whatever prompt gets

```
## Object destructuring
```js
//  The Basic syntax is: 
let {var1, var2} = { var1:..., var2:...}

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
console.log(`title: ${title}, width : ${width}, Height: ${height} `)

`The order does not matter. This works too:`
// changed the order in let {...}
let { height, width, title} = { title:"Menu", height: 200, width: 100 }

`If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:`

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty : targetVariable }
let { width: w, height: h, title} = options;
// width => w
// height -> h
// title => title

console.log( title, w, h ) // Menu 100 200

```
## For potentially missing properties we can set default values using "=", like this:
```js
let options = {
  title: "Menu"
};

let { width = 100, height = 200, title} = options;

console.log(`${title}, width: ${width}, and height: ${height}.`)
 
`In the code below prompt asks for width, but not for title:`
let options = {
  title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title);  // Menu
alert(width);  // (whatever the result of prompt is)

```
## If we have a complex object with many properties, we can extract only what we need:
```js
let options = {
  title : "Menu",
  width: 100,
  height: 200
};
// Only extract title as a variable
let { title } = options;
console.log(title); // Menu

```
## The rest pattern “…”
```js
let options = {
  title: "Menu",
  height: 200,
  width: 100
};
// title = property named title
// rest = object with the rest of properties
let { title, ...rest} = options;

// now title = "Menu", rest = { height:200, width: 100}
console.log(title.height) // 200
console.log(rest.width) // 100
```
## To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):
```js

let title, width, height;
// okay now
({title, width, height} = { title: "Menu", width: 200, height: 100})

console.log(title) ; // Menu

```
# `Nested destructuring`
```js
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};
// destructuring assignment split in multiple line for clarity
let {
  size:{width,height},
  items: [item1,item2],
  title = "Menu" // not present in the object (default value is used )
} = options;
console.log(title, width, height, item1, item2); // Menu 100 200 Cake Donut
`🔥Finally, we have width, height, item1, item2 and title from the default value.`

`Note that there are no variables for size and items, as we take their content instead.`

```
## Smart function parameters
```js
// Here’s a bad way to write such a function:
function showMenu(title = "Untitled", width = 200, height = 100, item = [] ) {
  // ... 
}

// we pass object to function 
let options = {
  title: "My menu",
  items: ["Item1","Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items - taken from options,
  // width, height - defaults used
  console.log(`${title} ${width} ${height}` );// My Menu 200 100
  console.log( items ); // Item1, Item2
}
showMenu(options);
```
## We can also use more complex destructuring with nested objects and colon mappings:
```js
let options = {
  title: "My menu",
  items: ["Item1","Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100, // width goes to w
  height:h = 200; // height goes to h
  items: [item1,item2] // items first element goes to item1, second to item2
}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1, item2 ); // Item1, Item2
}

showMenu(options);

```
## The full syntax is the same as for a destructuring assignment:
```js
function({
  incomingProperty: varName = defaultValue
  ...
})

showMenu({}) // ok, all values are default
showMenu(); // this would give an error

// We can fix this by making {} the default value for the whole object of parameters:
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log(title,width,height) 
}
showMenu(); // Menu 100 200

```
## Summary

### The full object syntax:
```js
let {prop : varName = defaultValue, ...rest} = object

// This means that property prop should go into the variable varName and, if no such property exists, then the default value should be used.

// Object properties that have no mapping are copied to the rest object.
```
## The full array syntax:
```js
let [item1 = defaultValue, item2, ...rest] = array

// The first item goes to item1; the second goes into item2, and all the rest makes the array rest.
```
