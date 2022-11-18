const humburgerMenuContainerTag = document.querySelector(
  ".humburgerMenuContainer"
);
const overLayMenuTag = document.querySelector(".overLayMenu");
const humburgerLine1Tag = document.querySelector(".line1");
const humburgerLine2Tag = document.querySelector(".line2");
const humburgerLine3Tag = document.querySelector(".line3");
const liTags = document.getElementsByTagName("li");

humburgerMenuContainerTag.addEventListener("click", () => {
  if (humburgerMenuContainerTag.classList.contains("isOpened")) {
    overLayMenuTag.classList.remove("showOverLayMenu");
    humburgerLine2Tag.classList.remove("hideLine2");
    humburgerLine1Tag.classList.remove("rotatePlus45Deg");
    humburgerLine3Tag.classList.remove("rotateMinus45Deg");
    humburgerMenuContainerTag.classList.remove("isOpened");
    for (let i = 0; i < liTags.length; i++) {
      liTags[i].classList.remove("moveLiTagUp");
    }
  } else {
    overLayMenuTag.classList.add("showOverLayMenu");
    humburgerLine2Tag.classList.add("hideLine2");
    humburgerLine1Tag.classList.add("rotatePlus45Deg");
    humburgerLine3Tag.classList.add("rotateMinus45Deg");
    humburgerMenuContainerTag.classList.add("isOpened");
    for (let i = 0; i < liTags.length; i++) {
      liTags[i].classList.add("moveLiTagUp");
    }
  }
});
