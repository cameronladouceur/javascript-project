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
const paragraphCheckoutTotal = document.querySelector(
  ".credit-container-total"
);
const paragraphCheckoutSubtotal = document.querySelector(
  ".credit-container-subtotal"
);
const paragraphReceiptTotal = document.querySelector(".receipt-total");
const paragraphReceiptSubtotal = document.querySelector(".receipt-subtotal");
const finishedCheckOut = document.querySelector("main");
const creditContainer = document.querySelector(".credit-container");
const receiptPage = document.querySelector(".receipt-page");
const lineItems = document.querySelector(".lineitems-container");
const changeInput = document.querySelector(".change-input");
const paragraphChange = document.querySelector(".change-final");
let creditOrCash = "credit";

let subtotal = 0;
let total = 0;
let change = 0;

const displayItems = (array, container) => {
  array.forEach((item, index) => {
    const newItem = document.createElement("li");
    const nameParagraph = document.createElement("p");
    const priceParagraph = document.createElement("p");

    const productImage = document.createElement("img");
    newItem.classList.add("cart-product", item.type);
    newItem.dataset.index = index;
    nameParagraph.textContent = item.name;
    priceParagraph.textContent = `$${item.price.toFixed(2)}`;

    productImage.setAttribute("src", item.image);
    productImage.setAttribute("alt", item.alt);
    newItem.append(productImage, nameParagraph, priceParagraph);
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
    addToCart.style.display = "none";
    displayItems(cart, checkoutImages);
    cart.forEach((item) => {
      subtotal += item.price;
    });
    total = subtotal * 1.06;
    paragraphSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    paragraphTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
  console.log(`listener from line 138: ${total}`);
});

checkoutContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const creditCheckbox = document.querySelector("#credit").checked;
  const cashCheckbox = document.querySelector("#cash").checked;
  console.log(creditCheckbox);
  console.log(cashCheckbox);
  if (creditCheckbox) {
    creditOrCash = "credit";
    document.querySelector(".cash-input-container").style.display = "none";
  } else {
    creditOrCash = "cash";
    document.querySelector(".credit-input-container").style.display = "none";
  }
  if (e.target.classList.contains("checkout-popup")) {
    console.log(e.target);
    creditContainer.style.display = "block";
    paragraphCheckoutSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    paragraphCheckoutTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
  console.log(`listener from line 155: ${total}`);
});

creditContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const creditCheckbox = document.querySelector("#credit").checked;
  if (e.target.classList.contains("credit-popup")) {
    console.log(e.target);
    receiptPage.style.display = "block";
    change = parseFloat(changeInput.value) - total;
    console.log(changeInput.value);
    displayItems(cart, lineItems);
    paragraphReceiptSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    paragraphReceiptTotal.textContent = `Total: $${total.toFixed(2)}`;

    if (creditCheckbox) {
      paragraphChange.textContent = "";
    } else {
      paragraphChange.textContent = `Your change is $${change.toFixed(2)}`;
    }
  }
  console.log(`listener from line 181: ${total}`);

  // console.log(change);
});

document.querySelector(".finish-checkout").addEventListener("click", () => {
  location.reload();
});

// finishedCheckOut.addEventListener("click", (e) => {
//   if (e.target.classList.contains("finish-checkout")) {
//     console.log(e.target);
//     checkoutImages.innerHTML = "";
//     // receiptPage.setAttribute("hidden", item.alt);
//     // creditContainer.setAttribute("hidden", item.alt);
//     // checkoutContainer.setAttribute("hidden", item.alt);
//     receiptPage.style.display = "none";
//     creditContainer.style.display = "none";
//     checkoutContainer.style.display = "none";
//     displayItems(cart, checkoutImages);
//     cart.forEach((item) => {
//       subtotal += item.price;
//     });
//     total = subtotal * 1.06;
//     paragraphSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
//     paragraphTotal.textContent = `Total: $${total.toFixed(2)}`;
//   }
//   console.log(e.target);
// });

//when list item is clicked, find item and put it in your cart

// const img = document.createElement()
// MORE CODE NEEDED BTWN 84-92 TO ADD CLASSES, ECT
// ADD BUTTONS TO JS

// console.dir(e.target.parentNode);
// console.log(index);
