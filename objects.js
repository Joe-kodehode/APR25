// Lesson 8: JavaScript Objects

// --------------------------------------
// Section 1: What is an Object?
// --------------------------------------

// An object stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

// console.log(person); // logs the entire object
// console.log(person.job); // access with dot notation
// console.log(person["age"]); // access with bracket notation

// --------------------------------------
// Section 2: Creating and Modifying Objects
// --------------------------------------

// person.country = "Norway";
// person.age = 29;

// console.log(person);

// --------------------------------------
// Section 3: Looping Through an Object using 'for in' loop
// --------------------------------------

// for (let key in person) {
//   console.log(`${key.toUpperCase()}: ${person[key]}`); // uses dynamic key access
// }

// --------------------------------------
// Section 4: Nested Objects and Arrays
// --------------------------------------

// const userData = {
//   firstName: "Olav",
//   lastName: "Hansen",
//   age: 31,
//   male: true,
//   hobbies: ["Golf", "Hiking", "Cinema"],
//   address: {
//     streetName: "Solskinnsgaten",
//     streetNumber: 38,
//     postCode: 4050,
//   },
//   position: "Manager",
// };

// console.log(userData.address.streetNumber);

// --------------------------------------
// Section 5: Arrays of Objects  /  Object array
// --------------------------------------

// const products = [
//   { productName: "Shirt", productId: 746352, stock: 32 },
//   { productName: "Pants", productId: 745642, stock: 50 },
//   { productName: "Socks", productId: 7498652, stock: 73 },
// ];

// for (let product of products) {
//   console.log(
//     `${product.productName}, ID Number:${product.productId}, has ${product.stock} in stock`
//   );
// }

// What should show in the console:
// Shirt, ID number: 746352 has 32 in stock
// Pants, ID number: 745642 has 50 in stock
// Socks, ID number: 7498652 has 73 in stock

// --------------------------------------
// Section 6: Descriptive Sentences with Objects
// --------------------------------------

// const people = [
//   {
//     name: "Thomas",
//     male: true,
//     age: 23,
//     hobbies: ["cycling", "football", "pool"],
//   },
//   {
//     name: "Susan",
//     male: false,
//     age: 26,
//     hobbies: ["jogging", "travelling", "dancing"],
//   },
//   {
//     name: "Monica",
//     male: false,
//     age: 21,
//     hobbies: ["skateboarding", "guitar", "concerts"],
//   },
//   {
//     name: "Avery",
//     male: true,
//     age: 28,
//     hobbies: ["coding", "games", "memes"],
//   },
//   {
//     name: "Phillip",
//     male: true,
//     age: 24,
//     hobbies: ["boxing", "wrestling", "mma"],
//   },
//   {
//     name: "Otto",
//     male: true,
//     age: 36,
//     hobbies: ["movies", "cinema", "music"],
//   },
//   {
//     name: "Annabelle",
//     male: false,
//     age: 30,
//     hobbies: ["makeup", "fashion"],
//   },
//   {
//     name: "Cathy",
//     male: false,
//     age: 18,
//     hobbies: ["design", "drawing", "css", "cycling"],
//   },
// ];

//Let's write a 'for of' loop which console logs the persons name, age, if they are a man or woman, a random hobby.
// For example: "Cathy is a 18-year-old woman who enjoys drawing"

// for (let person of people) {
//   const randomNumber = Math.floor(Math.random() * person.hobbies.length);

//   console.log(
//     `${person.name}, is a ${person.age}-year-old ${
//       person.male ? "man" : "woman"
//     } who enjoys ${person.hobbies[randomNumber]}`
//   );
// }

// --------------------------------------
// Section 7: Working with Object Data
// --------------------------------------

// Calculate total age of all people

// let totalAge = 0;

// for (let person of people) {
//   totalAge += person.age;
//   console.log(totalAge);
// }

// --------------------------------------
// Section 8: Combining Hobbies with Spread Syntax
// --------------------------------------

// const allHobbies = [];

// for (let person of people) {
//   allHobbies.push(...person.hobbies);
// }

// console.log(allHobbies);

// --------------------------------------
// Summary
// --------------------------------------

// ✅ Objects use key-value pairs to store data.
// ✅ Dot and bracket notation let you access or update values.
// ✅ Objects can contain arrays, other objects, or even functions.
// ✅ You can loop through objects with for...in.
// ✅ Arrays can contain objects and be used with loops.
// ✅ Spread syntax can flatten nested arrays.
// ✅ You can dynamically add or modify object properties.
