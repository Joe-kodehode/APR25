// Lesson 7: JavaScript Loops

// A loop is a way to repeat code without writing it multiple times.

// --------------------------------------
// Section 1: Why We Use Loops
// --------------------------------------

// const names = ["Tom", "Eric", "Jessica"];

// Without a loop (repeating yourself)

// console.log(`Hei ${names[0]}`);
// console.log(`Hei ${names[1]}`);
// console.log(`Hei ${names[2]}`);

// Where to start - Where does the loop end - How does the loop incrament
// for (let i = 0; i <= 50; i++) {
//   console.log(`Hei ${names[i]}`);
// }

// DRY - Don't repeat yourself!

// --------------------------------------
// Section 2: The for Loop
// --------------------------------------

// const fruits = ["Apple", "Banana", "Cherry", "Kiwi"];

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// --------------------------------------
// Section 3: Combining Loops with Functions and Methods
// --------------------------------------

// Creating a function with a loop to greet names in an array
// function greetEveryone(nameArray) {
//   for (let i = 0; i < nameArray.length; i++) {
//     const name =
//       nameArray[0].trim().charAt(0).toUpperCase() +
//       nameArray[0].trim().slice(1).toLowerCase();

//     console.log(name);
//   }
// }

// const people = ["alice", " BOB ", "charlie", "dEbBy"];
// const people2 = ["     JoE   ", " BiLL      "];

// greetEveryone(people2);

// Creating a function with a loop to combine elements in an array to a string

// function makeSentenceWithLoop(wordsArray) {
//   let sentence = "";

//   for (let i = 0; i < wordsArray.length; i++) {
//     sentence += wordsArray[i];

//     if (i < wordsArray.length - 1) {
//       sentence += " ";
//     }
//   }

//   return sentence + ".";
// }

// console.log(makeSentenceWithLoop(["Loops", "are", "really", "useful"]));

// Some methods have an inbuilt loop!
// function makeSentence(wordsArray) {
//   return wordsArray.join(" ") + ".";
// }

// console.log(makeSentence(["Loops", "are", "really", "useful"]));

// --------------------------------------
// Section 4: The for...of Loop
// --------------------------------------

// const colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color);
// }

// --------------------------------------
// Section 5: The while Loop
// --------------------------------------

// let count = 1;

// while (count <= 5) {
//   console.log(`The current count is: ${count}`);
//   count++;
// }

// Math.random() gives a number between 0.000000000000 - 0.999999999999
// Math.floor() rounds down any number inside it's parentheses

// We want a random number between 0-10
// let randomNumber = Math.floor(Math.random() * 11);

// console.log(randomNumber);

// Guessing game with while loop

// const secretNumber = Math.floor(Math.random() * 10) + 1;

// let guess = 0;

// while (guess !== secretNumber) {
//   guess++;
//   console.log(`Guessing ${guess}`);
//   if (guess === secretNumber) {
//     console.log(`Correct! The secret number was: ${guess}`);
//   }
// }

// --------------------------------------
// Section 6: Creating Arrays with Loops
// --------------------------------------

// function makeRandomArray(length, max) {
//   const result = [];

//   for (i = 0; i < length; i++) {
//     const randomNumber = Math.floor(Math.random() * max) + 1;
//     result.push(randomNumber);
//   }

//   return result;
// }

// console.log(makeRandomArray(10, 50));
// console.log(makeRandomArray(20, 100));
// console.log(makeRandomArray(5, 5));

// --------------------------------------
// Section 7: Finding the Biggest Number
// --------------------------------------

// function findMax(numbers) {
//   let biggestNum = 0;
//   for (let number of numbers) {
//     if (number > biggestNum) {
//       biggestNum = number;
//     }
//   }
//   return biggestNum;
// }

// const numberArray = [5, 10, 45, 1, 42, 100, 50];

// console.log(findMax(numberArray));

// --------------------------------------
// Section 8: Using break and continue
// --------------------------------------

// const moreNames = [
//   "Tom",
//   "Eric",
//   "Jessica",
//   "Scott",
//   "Anna",
//   "Carl",
//   "Elisabeth",
//   "Benny",
//   "Oliver",
//   "Andy",
//   "Jenny",
//   "Ashley",
//   "Erin",
//   "Patrick",
// ];

// for (let name of moreNames) {
//   if (name === "Andy") {
//     continue;
//   }
//   console.log(name);
// }

// for (let name of moreNames) {
//   if (name === "Ashley") {
//     break;
//   }
//   console.log(name);
// }

// --------------------------------------
// Section 9: Loop Practice Challenges
// --------------------------------------

// Challenge 1: Log even numbers from 1 to 100

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

// Challenge 2: Reverse an array using a loop

const reverseArray = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray(["a", "b", "c", "d"]));
console.log(reverseArray([1, 2, 3]));

// --------------------------------------
// Summary
// --------------------------------------

// for        → best when using an index or counting (most versatile)
// for...of   → great for looping through array values
// while      → useful when you don’t know how many times to repeat
// break      → stops the loop early
// continue   → skips to the next loop cycle
