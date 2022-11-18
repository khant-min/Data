const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const miniSecondTag = document.getElementsByClassName("miniSecond")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let miniSeconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

const miniSecond = () => {
  miniSeconds += 1;
  if (miniSeconds === 300) {
    miniSeconds = 0;
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;

      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
    }
  }
  const miniSecondText =
    miniSeconds < 10
      ? "00" + miniSeconds.toString()
      : miniSeconds && miniSeconds < 100
      ? "0" + miniSeconds.toString()
      : miniSeconds;
  miniSecondTag.textContent = miniSecondText;

  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
};
let intervalId;
startButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(miniSecond, 1);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(miniSecond, 1);
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (miniSeconds = 0), (seconds = 0), (minutes = 0), (hours = 0);
  intervalId = setInterval(miniSecond, 1);
});
