// Variables and basic Operators

// --------------------------------------
// Section 1: Commenting our code
// --------------------------------------

// hotkey to comment ctrl + *
// multi-line-comment shift + alt + A

// Single line comment

/* Multi
line
comment */

// --------------------------------------
// Section 2: console log
// --------------------------------------

console.log("hello world");

// --------------------------------------
// Section 3: Variables and Data Types
// --------------------------------------

// Variables store data values. Here we'll see different types of data.

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters of words in upper case. it's used for naming variables in JavaScript.

// String (text)
const exampleText = "this is my text";
// console.log(exampleText);

// Integer (number)
let cartTotal = 5;

// Boolean (True or False)
thisIsTrue = true;
thisIsFalse = false;

// Array (list of values)
// Array indexes always start from 0
exampleArray = [5, "hello", 6, false];

// console log entire array
console.log(exampleArray);
// console log specific index in array
console.log(exampleArray[0]);

// Object (hold key value pairs)

let person = {
  name: "Simen",
  age: 37,
  location: "Oslo",
  newsletter: true,
};

// console.log(person);

// Undefined (lack of data)
let undefinedExample;
console.log(undefinedExample);

// Null (specific absence of data)
exampleOfNull = null;
console.log(exampleOfNull);

// --------------------------------------
// Section 4: Declaring variables - Let and Const
// --------------------------------------

// Using let (value can be redeclared):
let changeableMessage = "I can change!";
changeableMessage = "I've changed!";
console.log(changeableMessage);

let healthPoints = 100;
healthPoints = 50;
console.log(healthPoints);

// Using const (value can not be redeclared):
const fixedValue = "I cannot be redeclared!";
console.log(fixedValue);
// Trying to reassign fixedValue will cause an error

// Note: When you declare a variable with const, you can't reassign or redeclare it in the same scope. However, if the constant holds a mutable object (like an array or an object), the properties or elements of that object can be changed.

const array = [5, 10, 15];

array[1] = 100;
console.log(array);

// --------------------------------------
// Section 5: Basic Operators
// --------------------------------------

// Operators perform calculations or comparisons.

let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (remainder): 0

// Using the + operator with strings to concatenate them:
let firstName = "Jane";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

// console.log(fullName);

let counter = 0;

counter = counter + 5;

counter += 5;

// ++ increments by 1
counter++;

// -- decrements by 1
counter--;
counter--;
counter--;
counter--;
counter--;

//DRY - Don't Repeat Yourself

// console.log(counter);

let score = 0;

// Subtraction assignment (-=):
score -= 3; // Equivalent to score = score - 3;
console.log("After subtracting 3:", score); // 12

// Multiplication assignment (*=):
score *= 2; // Equivalent to score = score * 2;
console.log("After multiplying by 2:", score); // 24

// Division assignment (/=):
score /= 4; // Equivalent to score = score / 4;
console.log("After dividing by 4:", score); // 6

// Remainder assignment (%=):
score %= 5; // Equivalent to score = score % 5;
console.log("After modulus 5:", score); // 6 mod 5 equals 1
