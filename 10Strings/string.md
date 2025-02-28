# 📚 JavaScript Strings

## 🔥 What is a String?
A **string** is a **data type** used to store and manipulate text data in JavaScript. Strings can be enclosed in:
- **Single quotes** (`' '`)  
- **Double quotes** (`" "`)

```javascript
const str1 = "Hello";
```

---

## ✨ What are Template Literals and String Interpolation?
**Template literals** (introduced in ES6) allow:
- **String interpolation** (embedding variables/expressions inside strings)
- **Multiline strings**

Template literals use **backticks** (`` ` ``):

```javascript
const myname = "Amarjeet";

// String interpolation
const str3 = `Hello ${myname}`;
console.log(str3); // Hello Amarjeet

// Multiline strings
const multilineStr = `
This is a
multiline string.
`;
console.log(multilineStr);
```

---

## 🚀 Important String Operations in JavaScript

### ✅ Concatenation (Combining Strings)

1. **Using `+` Operator:**
```javascript
let str2 = "AmarG";
let str4 = "Hello";

let result = str2 + " " + str4;
console.log(result); // AmarG Hello
```

2. **Using `concat()` Method:**
```javascript
let result2 = str4.concat(" ", str2);
console.log(result2); // Hello AmarG
```

3. **Using Template Literals:**
```javascript
let combined = `${str2} ${str4}`;
console.log(combined); // AmarG Hello
```

4. **Using `join()` Method:**
```javascript
let words = ["Hello", "AmarG"];
console.log(words.join(" ")); // Hello AmarG
```

---

### 📏 Extracting Substrings

- **`substring(start, end)`** extracts characters from `start` to `end` (not including `end`):
```javascript
let subString = result2.substring(1, 5);
console.log(subString); // ello
```

---

### 📐 String Length

- **`.length`** returns the number of characters:
```javascript
console.log(result2.length); // 11
```

---

### 🔡 Changing Case

- **Uppercase:**
```javascript
console.log(result2.toUpperCase()); // HELLO AMARG
```

- **Lowercase:**
```javascript
console.log(result2.toLowerCase()); // hello amarg
```

---

### 🧩 Splitting Strings

- **`split(delimiter)`** converts a string into an array of substrings:
```javascript
let arr = result2.split(" ");
console.log(arr); // ["Hello", "AmarG"]
```

---

### 🔄 Replacing Substrings

- **`replace(old, new)`** swaps out a substring:
```javascript
console.log(result2.replace("AmarG", "JavaScript")); // Hello JavaScript
```

---

### ✂️ Trimming Whitespace

- **`trim()`** removes leading and trailing whitespace:
```javascript
let str = "  Hello World   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Hello World
```

---

## 🔒 String Immutability
JavaScript strings are **immutable** — meaning **you can't modify** an existing string directly. Any operation creates a **new string**:

```javascript
let string = "Interview";
string = string + " Amarjeet"; // new memory allocation
```

---

## 🌟 String Concatenation Methods
- **`+` Operator**
- **`concat()` Method**
- **Template Literals**
- **`join()` Method**

---


