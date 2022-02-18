const items = [
  {
    name: "acorn",
    price: 2.5,
    type: "nut",
    image: "assets/acorn.jpg",
    alt: "Acorn",
  },
  {
    name: "almond",
    price: 2.5,
    type: "nut",
    image: "assets/almond.jpg",
    alt: "Almond",
  },
  {
    name: "attic",
    price: 2.5,
    type: "living",
    image: "assets/attic.jpg",
    alt: "Attic",
  },
  {
    name: "berries",
    price: 2.5,
    type: "berries",
    image: "assets/berries.jpg",
    alt: "Berries",
  },
  {
    name: "birdfeeder",
    price: 2.5,
    type: "living",
    image: "assets/birdfeeder.jpg",
    alt: "Birdfeeder",
  },
  {
    name: "branch",
    price: 2.5,
    type: "living",
    image: "assets/branch.jpg",
    alt: "Branch",
  },
  {
    name: "cherries",
    price: 2.5,
    type: "berries",
    image: "assets/cherries.jpg",
    alt: "Cherries",
  },
  {
    name: "garbage",
    price: 2.5,
    type: "living",
    image: "assets/garbage.jpg",
    alt: "Garbage",
  },
  {
    name: "hazelnut",
    price: 2.5,
    type: "nut",
    image: "assets/hazelnut.jpg",
    alt: "Hazelnut",
  },
  {
    name: "hibernation",
    price: 2.5,
    type: "living",
    image: "assets/hibernation.jpg",
    alt: "Hibernation",
  },
  {
    name: "pecan",
    price: 2.5,
    type: "nut",
    image: "assets/pecan.jpg",
    alt: "Pecan",
  },
  {
    name: "sunflowers",
    price: 2.5,
    type: "nut",
    image: "assets/sunflowers.jpg",
    alt: "Sunflowers",
  },
];
const cart = [];
const imageContainer = document.querySelector(".image-list");
const checkoutImages = document.querySelector(".checkout-images");
const addToCart = document.querySelector("header");

const displayItems = (array, container) => {
  array.forEach((item, index) => {
    const newItem = document.createElement("li");
    const nameParagraph = document.createElement("p");
    const priceParagraph = document.createElement("p");

    const productImage = document.createElement("img");
    newItem.classList.add("cart-product", item.type);
    newItem.dataset.index = index;
    nameParagraph.textContent = item.name;
    priceParagraph.textContent = item.price;

    productImage.setAttribute("src", item.image);
    productImage.setAttribute("alt", item.alt);
    newItem.append(nameParagraph, priceParagraph, productImage);
    container.append(newItem);
  });
};

displayItems(items, imageContainer);

imageContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.localName === "li") {
    const index = e.target.parentNode.dataset.index;
    cart.push(items[index]);
    console.log(cart);
  }
});

addToCart.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-icon") || e.target.tagName === "path") {
    checkoutImages.innerHTML = "";
    displayItems(cart, checkoutImages);
  }
  console.dir(e.target);
});
//when list item is clicked, find item and put it in your cart

// const img = document.createElement()
// MORE CODE NEEDED BTWN 84-92 TO ADD CLASSES, ECT
// ADD BUTTONS TO JS

// console.dir(e.target.parentNode);
// console.log(index);

// cart.forEach((item) => {
//   const newItem2 = document.createElement("li");
//   const nameParagraph2 = document.createElement("p");
//   const priceParagraph2 = document.createElement("p");
//   // const removalIcon = document.createElement("p")
//   const productImage2 = document.createElement("img");
//   newItem2.classList.add("cart-product", item.type);
//   newItem2.dataset.index = index;
//   nameParagraph2.textContent = item.name;
//   priceParagraph2.textContent = item.price;

//   productImage2.setAttribute("src", item.image);
//   productImage2.setAttribute("alt", item.alt);

// const removalIcon = document.createElement("p")
