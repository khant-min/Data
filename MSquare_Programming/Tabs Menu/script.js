const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "service", "about us", "contact us", "login"];

const handleTabChange = e => {
  const clickedTabId = e.target.id;
  const clickedLiTag = document.getElementById(clickedTabId);
  clickedLiTagWidth = clickedLiTag.offsetWidth;
  const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
  sliderTag.style.width = clickedLiTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;
};

for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  liTag.addEventListener("click", handleTabChange);
  ulTag.append(liTag);
  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}
