// Fruit Catalog Project

const fruits = [
  { name: "Apple", color: "Red", calories: 52, pricePerKg: 3.5, origin: "USA" },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
  },
];

const trueOrFalse = [true, false];

//Create a container to hold all fruit cards

const container = document.createElement("div");
container.classList.add("fruit-catalog");
document.body.append(container);

console.log(document.body);

// Loop through the fruits array and create cards for each fruit object

// for (let i = 0; i < fruits.length; i++) {

// }

for (fruit of fruits) {
  const randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum);
  fruit.sale = trueOrFalse[randomNum];

  // const sale = document.createElement("p");
  // sale.textContent = `This fruit is ${fruit.sale ? "" : "not"} on sale`;

  const card = document.createElement("div");
  card.classList.add("fruit-card");

  const title = document.createElement("h2");
  title.textContent = fruit.name;
  title.classList.add("fruit-name");

  const image = document.createElement("img");
  image.src = `images/${fruit.name}.jpg`;
  image.alt = fruit.name;
  image.classList.add("fruit-image");

  const info = document.createElement("p");
  info.textContent = `Color: ${fruit.color}, Origin: ${fruit.origin}`;
  info.classList.add("fruit-info");

  const nutrition = document.createElement("p");
  nutrition.textContent = `Calories: ${fruit.calories} per 100g`;
  nutrition.classList.add("fruit-nutrition");

  const price = document.createElement("p");
  price.textContent = `Price: ${fruit.pricePerKg} kr/kg`;

  card.append(title, image, info, nutrition);

  if (fruit.sale) {
    const salePrice = document.createElement("p");
    salePrice.textContent = `This fruit is on sale for ${(
      fruit.pricePerKg / 1.1
    ).toFixed(1)} kr/kg`;

    salePrice.classList.add("sale-price");

    price.classList.add("strikethrough");

    card.append(price);
    card.append(salePrice);
  } else {
    price.classList.add("fruit-price");
    card.append(price);
  }

  container.append(card);
}
