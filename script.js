// DOM (Document Object Model) Manipulation with JavaScript

// --------------------------------------
// Section 1: What is the DOM?
// --------------------------------------

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// --------------------------------------
// Section 2: Targeting existing HTML Elements in JavaScript
// --------------------------------------

const button = document.getElementById("my-button"); // targets element with id="my-button"

const heading = document.querySelector("#my-heading");

const li = document.querySelector("li");

const allLi = document.querySelectorAll("li");

// console.log(allLi);

// --------------------------------------
// Section 3: Changing Text or HTML Content
// --------------------------------------

// textContent sets or gets the plain text inside an element (no HTML tags)
heading.textContent = "Welcome to the DOM lesson!";

// innerHTML sets or gets the HTML inside an element (can include tags)
// heading.innerHTML = "<span style='color: red'>DOM Manipulation</span>";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// --------------------------------------
// Section 4: Changing Styles
// --------------------------------------

heading.style.fontSize = "36px";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";

// --------------------------------------
// Section 5: Creating and Adding Elements
// --------------------------------------

const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a paragraph created in JS!";

newParagraph.classList.add("blue-text");

newParagraph.id = "bold-p";

// document.body.append(newParagraph);

// console.log(newParagraph);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

const newImage = document.createElement("img");

newImage.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg"
);

newImage.setAttribute("alt", "A red apple");

// newImage.setAttribute("class", "small-img");
newImage.classList.add("small-img");

document.body.append(newParagraph, newImage);

// 📌 setAttribute vs classList.add:
// setAttribute("class", "one two") → sets or replaces all classes
// classList.add("extra") → adds a class without removing others

const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added to the top!";
document.body.prepend(firstParagraph);

const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";

const target = document.querySelector("p:nth-of-type(2)");

document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to an existing list

const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "I was added with JS!";
newItem.classList.add("list-item");

list.append(newItem);

// --------------------------------------
// Section 6: Removing Elements
// --------------------------------------

const firstListItem = document.querySelector("li");

list.removeChild(firstListItem);

// --------------------------------------
// Section 7: Parent and Child Relationships
// --------------------------------------

// You can move between elements in the DOM using parent/child/sibling relationships

console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// --------------------------------------
// Section 8: classList Methods
// --------------------------------------

const box = document.querySelector(".box");

box.classList.add("active");

box.classList.remove("hidden");

box.classList.toggle("darkmode");

console.log(box.classList.contains("hidden"));

// --------------------------------------
// Section 9: Creating a List in a Loop
// --------------------------------------

// Let's create a list of favorite movies and display them on the page

const favoriteMovies = [
  "Inception",
  "The Matrix",
  "The Lord of the Rings",
  "Spirited Away",
  "Interstellar",
];

// Create a heading
const movieHeading = document.createElement("h2");
movieHeading.textContent = "My favorite movies";
movieHeading.classList.add("section-heading");
document.body.append(movieHeading);

// Create the <ul> element
const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

// Loop through the array and create, add text content and append <li> elements
for (let i = 0; i < favoriteMovies.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = favoriteMovies[i];
  listItem.classList.add("movie-item");
  movieList.append(listItem);
}

function logHello() {
  console.log("The hello button was clicked");
}

// Sneak peek at addEventListener
const helloBtn = document.querySelector(".helloBtn");
helloBtn.addEventListener("click", logHello);

// --------------------------------------
// Summary
// --------------------------------------

// ✅ The DOM is how JavaScript connects to HTML
// ✅ Use querySelector, getElementById, etc. to select elements
// ✅ Use .textContent, .innerHTML, and .style to change content and appearance
// ✅ Use createElement + appendChild to add elements
// ✅ Use removeChild to delete elements
// ✅ DOM has a parent/child/sibling structure you can navigate
// ✅ classList helps manage CSS classes
// ✅ You can attach event listeners like click or mouseover
