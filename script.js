const items = [
  {
    name: "acorn",
    price: 1,
    type: "nut",
    image: "assets/acorn.jpg",
    alt: "Acorn",
  },
  {
    name: "almond",
    price: 1.5,
    type: "nut",
    image: "assets/almond.jpg",
    alt: "Almond",
  },
  {
    name: "attic",
    price: 2,
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
    price: 3,
    type: "living",
    image: "assets/birdfeeder.jpg",
    alt: "Birdfeeder",
  },
  {
    name: "branch",
    price: 3.5,
    type: "living",
    image: "assets/branch.jpg",
    alt: "Branch",
  },
  {
    name: "cherries",
    price: 4,
    type: "berries",
    image: "assets/cherries.jpg",
    alt: "Cherries",
  },
  {
    name: "garbage",
    price: 4.5,
    type: "living",
    image: "assets/garbage.jpg",
    alt: "Garbage",
  },
  {
    name: "hazelnut",
    price: 5,
    type: "nut",
    image: "assets/hazelnut.jpg",
    alt: "Hazelnut",
  },
  {
    name: "hibernation",
    price: 5.5,
    type: "living",
    image: "assets/hibernation.jpg",
    alt: "Hibernation",
  },
  {
    name: "pecan",
    price: 6,
    type: "nut",
    image: "assets/pecan.jpg",
    alt: "Pecan",
  },
  {
    name: "sunflowers",
    price: 6.5,
    type: "nut",
    image: "assets/sunflowers.jpg",
    alt: "Sunflowers",
  },
];
const cart = [];
const imageContainer = document.querySelector(".image-list");
const checkoutImages = document.querySelector(".checkout-images");
const checkoutContainer = document.querySelector(".checkout-container");
const addToCart = document.querySelector("header");
const cartIcon = document.querySelector(".cart.icon");
const paragraphSubtotal = document.querySelector(".subtotal");
const paragraphTotal = document.querySelector(".total");
let subtotal = 0;
let total = 0;

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
  // const checkoutPage = document.querySelector(".checkout-container");
  // checkoutPage.setAttribute("class", "hide");
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
    checkoutContainer.style.display = "block";
    displayItems(cart, checkoutImages);
    cart.forEach((item) => {
      subtotal += item.price;
    });
    console.log(subtotal);
  }
});

//when list item is clicked, find item and put it in your cart

// const img = document.createElement()
// MORE CODE NEEDED BTWN 84-92 TO ADD CLASSES, ECT
// ADD BUTTONS TO JS

// console.dir(e.target.parentNode);
// console.log(index);
