const choose = document.querySelector(".choose");
const compete = document.querySelector(".compete");
let score = document.querySelector(".score");

const paper = document.querySelector("#pa-c");
const scissors = document.querySelector("#sci-c");
const rock = document.querySelector("#rock-c");
const paperImg = document.querySelector("#paper");
const scissorsImg = document.querySelector("#scissors");
const rockImg = document.querySelector("#rock");

const randomNum = () => {
  return Math.floor(Math.random() * 3);
};

const conArr = [paper, scissors, rock];
const imgArr = [paperImg, scissorsImg, rockImg];

let userScore = 0;
imgArr.forEach(curImg => {
  curImg.addEventListener("click", () => {
    let curNum;
    if (randomNum() === 0) {
      curNum = 0; // paper
    } else if (randomNum() === 1) {
      curNum = 1; // scissors
    } else {
      curNum = 2; // rock
    }

    curImg.classList.add("chosen");
    switch (curImg) {
      case paperImg:
        paper.classList.add("chosenCon");
        break;
      case scissorsImg:
        scissors.classList.add("chosenCon");
        break;
      case rockImg:
        rock.classList.add("chosenCon");
        break;
    }

    choose.style.display = "none";
    compete.style.display = "block";
    const chosenCir = document.querySelector(".chosenCon");
    const chosenImg = document.querySelector(".chosen");
    compete.innerHTML = `
    <div id='${chosenCir.id}'>
      <img id='${chosenImg.id}' src='${chosenImg.src}'>
    </div>
    <div id='${conArr[curNum].id}'>
      <img id='${imgArr[curNum].id}' src='${imgArr[curNum].src}'>
    </div>
    <h3 class='you'>You Picked</h3>
    <h3 class='house'>The House Picked</h3>
    <div class='chance'>Play Again</div>
    <div class='win-or-lose'></div>
    
  `;
    const winOrLose = document.querySelector(".win-or-lose");
    /// paper > rock > scissors ^

    if (
      (curImg === scissorsImg && curNum === 0) ||
      (curImg === rockImg && curNum === 1) ||
      (curImg === paperImg && curNum === 2)
    ) {
      winOrLose.innerHTML = "YOU WIN";
      userScore += 1;
    } else if (
      (curImg === scissorsImg && curNum === 1) ||
      (curImg === rockImg && curNum === 2) ||
      (curImg === paperImg && curNum === 0)
    ) {
      winOrLose.innerHTML = "DRAW";
    } else {
      winOrLose.innerHTML = "YOU LOSE";
      userScore -= 1;
    }
    score.innerHTML = userScore;
    compete.childNodes[1].style.left = "20px";
    compete.childNodes[1].style.top = "20px";

    compete.childNodes[3].style.position = "absolute";
    compete.childNodes[3].style.left = "80%";
    compete.childNodes[3].style.top = "20px";

    const playAgain = document.querySelector(".chance");
    playAgain.addEventListener("click", () => {
      choose.style.display = "block";
      compete.style.display = "none";
      conArr.forEach(curArr => {
        curArr.classList.remove("chosenCon");
        imgArr.forEach(curImg => {
          curImg.classList.remove("chosen");
        });
      });
    });
  });
});
