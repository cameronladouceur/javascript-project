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

const imageContainer = document.querySelector(".image-list");
items.forEach((item) => {
  const newItem = document.createElement("li");
  const nameParagraph = document.createElement("p");
  const priceParagraph = document.createElement("p");
  const productImage = document.createElement("img");
  newItem.classList.add("product", item.type);
  nameParagraph.textContent = item.name;
  priceParagraph.textContent = item.price;
  productImage.setAttribute("src", item.image);
  productImage.setAttribute("alt", item.alt);
  newItem.append(nameParagraph, priceParagraph, productImage);
  imageContainer.append(newItem);
});

// const img = document.createElement()
// MORE CODE NEEDED BTWN 84-92 TO ADD CLASSES, ECT
// ADD BUTTONS TO JS
