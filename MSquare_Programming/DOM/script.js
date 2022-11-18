/* Useful DOM methods and properties*/
/*
const bodyElelment = document.getElementsByTagName("body")[0]; //HTMLCollection
console.log(bodyElelment);

const parentDiv = document.getElementsByClassName("parent")[0];
parentDiv.innerHTML = ""; //This (.innerHTML = "") property will deleted all elements in parentDiv
 */

/* <div class="parent">
      <div class="child">Child one</div>
      <div class="child">Child two</div>
    </div>
 */
const bodyElelment = document.getElementsByTagName("body")[0];

const parentDiv = document.createElement("div");
parentDiv.classList.add("parent", "textClass");
parentDiv.classList.remove("textClass");

const childDivOne = document.createElement("div");
childDivOne.append("Child div one");
childDivOne.classList.add("child");

const childDivTwo = document.createElement("div");
childDivTwo.append("Child div two");
childDivTwo.classList.add("child");

parentDiv.append(childDivOne, childDivTwo);
bodyElelment.appendChild(parentDiv);

const styleTestDiv = document.getElementsByClassName("styleTest")[0];
console.log("style test div width", getComputedStyle(styleTestDiv).width);
console.log("style test div height", getComputedStyle(styleTestDiv).height);
console.log(
  "style test div backgroundColor",
  getComputedStyle(styleTestDiv).backgroundColor
);
