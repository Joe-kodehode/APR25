// Lesson 2: Conditionals and Related Operators in JavaScript

// --------------------------------------
// Section 1: The typeof Operator
// --------------------------------------

// typeof returns a string indicating the type of a variable.
let myVariable = "Hello, World!";

// console.log(typeof myVariable);

myVariable = 100;
console.log(typeof myVariable);

// --------------------------------------
// Section 2: Comparison Operators
// --------------------------------------

// These operators compare values and return a boolean (true or false).

console.log(15 > 20); // Greater than (>) operator
console.log(15 < 20); // Less than (<) operator
console.log(15 >= 20); // Greater than or equal to (>=) operator
console.log(15 >= 15);
console.log(15 <= 20); // Less than or equal to (<=) operator
console.log(15 <= 15);

// The equality (==) operator checks if values are equal (with type conversion):
console.log(15 == "15"); // true due to type coercion

// Strict equality (===) operator checks for both value and type:
console.log(15 === "15"); // false, because the types differ (number vs string)

console.log(15 != 20); // Not equal (!=) operator
console.log(15 != "15");

console.log(15 !== "15"); // Strict not equal (!==) operator:

// --------------------------------------
// Section 2: Conditionals with if, if...else, if...else if...else
// --------------------------------------

// Basic "if, else if, else" statement

let temperature = 25;

if (temperature > 25) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a warm day");
} else {
  console.log("It's a cold day");
}

// --------------------------------------
// Section 4: Logical Operators: AND (&&) and OR (||)
// --------------------------------------

let age = 20;
let hasLicence = true;
let disqualified = true;

if (age >= 18 && hasLicence === true && disqualified === false) {
  console.log("You can drive!");
} else {
  console.log("You aren't allowed to drive, sorry!");
}

let day = "Thursday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday!");
} else {
  console.log("An error has occoured");
}

// --------------------------------------
// Section 5: Ternary Operator
// --------------------------------------

// The ternary operator is a shortcut for simple if...else statements.

let medlem = false;
let fee = medlem ? "50nok" : "100nok";

console.log(fee);

// --------------------------------------
// Section 6: Switch Statement
// --------------------------------------

// A switch statement checks a value against multiple cases.

let fruit = "kiwi";

switch (fruit) {
  case "apple":
    console.log("Apples are delicious!");
    break;
  case "banana":
    console.log("Bananas are a great source of energy!");
    break;
  case "orange":
    console.log("Oranges are full of vitamin C");
    break;
  default:
    console.log("Unknown fruit detected");
}

// --------------------------------------
// Section 7: Truthy and Falsey Values
// --------------------------------------

// In JavaScript, some values are automatically considered "truthy" (true) or "falsey" (false) when used in conditions.

let emptyString = ""; //falsey
let regularString = "flajsdflja"; //truthy
let zero = 0; //falsey
let number = 1; //truthy
let negative = -1; //truthy

if (negative) {
  console.log("truthy");
} else {
  console.log("falsey");
}

// --------------------------------------
// Section 7: Template literal // Template string
// --------------------------------------

const firstName = "Ola";
const lastName = "Nordmann";

// Without template literal
const fullNameA = "Welcome" + " " + firstName + " " + lastName;

// With template literal
const fullNameB = `Welcome, ${firstName} ${lastName}`;

console.log(fullNameB);
