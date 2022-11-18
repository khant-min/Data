/* Events */
// emitter, listener or handler

const myButton = document.getElementById("myButton");
const catImage = document.getElementsByClassName("cat")[0];
const originalImageSrc = catImage.src;
const imageArray = [
  "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];
let counter = 0;
const myFunction = () => {
  if (counter === 4) {
    catImage.src = originalImageSrc;
    counter = 0;
    console.log("Image number is", counter);
    return;
  }
  const imageLink = imageArray[counter];
  catImage.src = imageLink;
  counter += 1;
  console.log("Image number is", counter);
};
myButton.addEventListener("click", myFunction);
