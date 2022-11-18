// Document Object Model (DOM) CRUD

// c = create
const h1Element = document.createElement("h1");
const textNode = document.createTextNode("Welcome to Myanmar");
h1Element.appendChild(textNode);
const tagCollection = document.getElementsByTagName("body");
const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

// r = read
const readH1Element = document.getElementsByTagName("h1")[0];
console.log(
  "Text inside h1 element before update is ",
  readH1Element.textContent
);

// u = update
readH1Element.textContent = "Welcome to Mandalay";
console.log(
  "Text inside h1 element after update is ",
  readH1Element.textContent
);

// d = delete
readH1Element.remove();
