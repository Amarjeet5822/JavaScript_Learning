// =============Reduce Functions ==========
//  UniqueString
function UniqueString(strings) {
  return strings.reduce((acc, string) => {
    acc[string] = (acc[string] || 0) + 1;
    return acc;
  }, {});
}

const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];

//  =========ProductOfMultipleOfThreeOrFive =======

function ProductOfMultipleOfThreeOrFive(numbers) {
  return numbers.reduce(
    (acc, num) => (num % 3 === 0 || num % 5 === 0 ? acc + num : acc),
    0
  );
}

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
console.log(ProductOfMultipleOfThreeOrFive(numbers)); // Output: 1817

//  ========= palindromesString =======

function palindromesString(words) {
  return words.filter((word) => word === word.split("").reverse().join(""));
}

const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];
console.log(palindromesString(words)); // Output: ["racecar", "deified", "level", "radar", "civic"]

//  ========= findImage =======

function findImage(filePaths) {
  return filePaths.filter(
    (filePath) => filePath.endsWith(".png") || filePath.endsWith(".jpg")
  );
}

const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];
console.log(findImage(filePaths)); // Output: ["/images/pic1.jpg", "/images/pic2.png", "/assets/img/background.jpg", "/assets/img/logo.png", "/downloads/image.png", "/downloads/image.jpg"]

//  ========= swapStrings =======

function swapStrings(strings) {
  return strings.map((string) =>
    string.length > 1
      ? string[string.length - 1] + string.slice(1, -1) + string[0]
      : string
  );
}

const stringsSwap = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];
console.log(swapStrings(stringsSwap)); // Output: ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"]


function countWords(sentences) {
  sentences.forEach((sentence, index) => {
    const words = sentence.split(" ").filter((word) => word !== ""); // Split the sentence into words and remove empty strings
    console.log(`Sentence ${index + 1} contains ${words.length} words.`);
  });
}

