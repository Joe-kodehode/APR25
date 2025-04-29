// Lesson 4: Functions in JavaScript

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// It is possible to call regular functions before they are created. This is due to something called "Hoisting" which puts the function at the top of the code, behind the scenes.
// helloBtn();

// function helloBtn() {
//   console.log("hello");
// }

//---------------------------------------------------
// Section 2: Arrow Functions
//---------------------------------------------------

// Arrow function, cannot be called before it is created. (no hoisting)
// const arrowFunction = () => {
//   console.log("Hello from the arrow function");
// };

// arrowFunction();

//---------------------------------------------------
// Section 3: Return Statements and Scope
//---------------------------------------------------

// Variables created inside functions have a "local scope" and are only accessable within that function.

// If you want data within a function to be accessable outside of the function, you must use the return keyword

// function one() {
//   console.log("this function logs a message without returning a value");
// }

// one();

// function two() {
//   const myMessage = "This function returns a message";
//   return myMessage;
// }

// const returnedMessage = two();

// console.log(returnedMessage);

// console.log(two());

//---------------------------------------------------
// Section 4: Functions with Parameters
//---------------------------------------------------

// Hard coded
function add() {
  return 3 + 4;
}

// console.log(add());

// soft-coded - reusable and dynamic
function minus(num1, num2) {
  return num1 - num2;
}

// console.log(minus(10, 5));
// console.log(minus(20, 6));
// console.log(minus(16, 6));
// console.log(minus(5, 24));

const greeter = (name, time) => {
  return `Hello ${name}, good ${time}`;
};

// console.log(greeter("Joe", "Morning"));
// console.log(greeter("Tim", "Evening"));
// console.log(greeter("Tina", "Afternoon"));

const userData = {
  userName: "Tom",
  userEmail: "Tom@gmail.com",
  userTel: "00478473848",
  userBlocked: false,
};

// console.log(greeter(userData.userName, "Afternoon"));

// ---------------------------------------------------
// Section 5: Implicit Return in Arrow Functions
// ---------------------------------------------------

// If an arrow function's code can fit on one line, it is possible to remove the curly brackets and return keyword.

const adder = (num1, num2) => num1 + num2;
// console.log(adder(5, 10));

//---------------------------------------------------
// Section 6: Calculator Function Using Switch Statement
//---------------------------------------------------

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Invalid Operator";
  }
}

// console.log(calculator(5, 5, "&"));

// ---------------------------------------------------
// Section 7: Updating a Global Variable via a Function
// ---------------------------------------------------

let HP = 100;

const updateHP = (amount, direction) => {
  if (HP <= 0) {
    console.log("game over");
    HP = 100;
  } else if (direction === "down") {
    HP -= amount;
  } else if (direction === "up") {
    HP += amount;
  }
};

// updateHP(50, "up");
// console.log("Player HP is:", HP);
// updateHP(100, "down");
// console.log("Player HP is:", HP);
// updateHP(25, "down");
// console.log("Player HP is:", HP);
// updateHP(75, "up");
// console.log("Player HP is:", HP);
// updateHP(300, "down");
// console.log("Player HP is:", HP);

// ---------------------------------------------------
// Section 8: Using Template Literals and Ternary Operator in a Function
// ---------------------------------------------------

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

const checkItem = (item, array) =>
  `The array ${array.includes(item) ? "does" : "doesn't"} include ${item}`;

console.log(checkItem("Pear", fruits));
