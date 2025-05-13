// Lesson 5: JavaScript Methods (Strings, Arrays, and Numbers)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// --------------------------------------
// Section 1: String Methods
// --------------------------------------

const text = "      Hello, JavaScript World! World   ";

console.log(text.trim()); // removes whitespace from both ends of the string
console.log(text.toUpperCase()); // converts the string to uppercase
console.log(text.toLowerCase()); // converts the string to lowercase
console.log(text.indexOf("JavaScript")); // returns the starting index of "JavaScript" in the string
console.log(text.slice(6, 11)); // extracts characters from index 6 to 10. Does not alter the original string.
console.log(text.replace("World", "Universe")); // replaces the first occurrence of "World" with "Universe"
console.log(text.replaceAll("World", "Universe")); // replaces all occurrences
console.log(text.trim().charCodeAt(3)); // returns the Unicode value of the character at index 3
console.log(text.length); // returns the length of the string
console.log(text.split(" ")); // splits the string into an array of substrings by spaces
console.log(text.repeat(3)); // repeats the string 3 times

// --------------------------------------
// Section 1.2: Converting a String to a Number
// --------------------------------------

let numericString = "123.45xyz";

console.log(Number(numericString)); // converts entire string to a number; returns NaN if any part is invalid
console.log(parseInt(numericString)); // parses as an integer until an invalid character; returns 123
console.log(parseFloat(numericString)); // parses as a float until an invalid character; returns 123.45

// --------------------------------------
// Section 2: Array Methods
// --------------------------------------

const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array

colors.push("Yellow");
console.log(colors); // adds "Yellow" to the end and logs the updated array

const lastColor = colors.pop();
console.log(lastColor); // removes and returns the last element ("Yellow")
console.log(colors); // logs the array after pop

console.log(colors.join(" ")); // joins array elements into a string separated by " "

console.log(colors.includes("Green")); // checks if "Green" is in the array; returns true or false

const firstColor = colors.shift();
console.log(firstColor); // removes and returns the first element ("Red")
console.log(colors); // logs the array after shift

colors.unshift("Purple");
console.log(colors); // adds "Purple" at the beginning and logs the updated array

// toSpliced(): Returns a new array with elements spliced in without modifying the original array
console.log(colors);
const newColors = colors.toSpliced(0, 1, "Orange", "Pink");
console.log(newColors); // logs the new array with the spliced changes
console.log(colors); // logs the original array (unchanged)

let unsortedArray = [3, 1, 4, 1, 5, 9];

let sortedArray = unsortedArray.toSorted(); // returns a new sorted array without modifying the original
console.log(unsortedArray); // logs the original unsorted array
console.log(sortedArray); // logs the new sorted array

console.log(sortedArray.at(0)); // accesses the first element using a positive index
console.log(sortedArray.at(-2)); // accesses the last element using a negative index

const reversedArray = sortedArray.toReversed(); // returns a new array with elements in reverse order
console.log(reversedArray); // logs the reversed array

// --------------------------------------
// Section 3: Number Methods
// --------------------------------------
const myNum = 3.1415926;

console.log(myNum.toFixed(2)); // returns a string representing myNum rounded to 2 decimal places
console.log(myNum.toString()); // converts myNum to a string
console.log(myNum.toExponential()); // returns a string with myNum in exponential notation

// --------------------------------------
// Section 4: Chaining Methods Together
// --------------------------------------

// Example 1: Chaining String Methods
const rawString = "   JavaScript is fun!   ";
const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();
console.log(processedString); // "JAVASCRIPT IS AWESOME!"

// Example 2: Chaining Array Methods
const words = ["hello", "world"];
const messageFromArray = words.join(" ").toUpperCase();
console.log(messageFromArray); // "HELLO WORLD"

// Example 3: Chaining with a Number (after converting to string)
// Take a number, round it to 2 decimals, convert to a string, and repeat it twice
const chainedNumber = myNum.toFixed(2).toString().repeat(2);
console.log(chainedNumber); // e.g., "3.143.14"
