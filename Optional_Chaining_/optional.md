```js
let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

`=================================`

let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);
// =====================================

let user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)

```
- ``` As you can see, property names are still duplicated in the code. E.g. in the code above, user.address appears three times.```

- `That’s why the optional chaining ?. was added to the language. To solve this problem once and for all!`

# Optional chaining
##  ```The optional chaining **?.** stops the evaluation if the value before ?. is *undefined* or *null* and returns *undefined*.```

- `Here’s the safe way to access user.address.street using ?.:`
```js
let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)
```
## The code is short and clean, there’s no duplication at all.
## Here’s an example with document.querySelector:
```js
let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

`==================================`
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

`The optional chaining works only for declared variables.`

`==================================`

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

`=================================`
delete user?.name; // delete user.name if user exists

`===================================`

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
```
# `Summary`
## `The optional chaining ?. syntax has three forms:`

### `obj?.prop – returns obj.prop if obj exists, otherwise undefined.`

### `obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.`

### `obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined`


