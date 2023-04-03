const playBtn = document.querySelector("#playBtn");
const genNum = document.querySelector("#genNum");
const playNum = document.querySelector("#playNum");
const processArea = document.querySelector("#resultContainer div:first-child");
const resultArea = document.querySelector("#resultContainer div:last-child");

/**
 * 입력한 숫자의 유효성 체크
 */
function checkPlusNumber(gnValue, pnValue) {
  genNum.classList.remove("warning");
  playNum.classList.remove("warning");
  if (gnValue < 1 || genNum.value.length === 0) {
    genNum.classList.add("warning");
    processArea.innerHTML = "Please enter a positive number.";
    return false;
  } else if (pnValue > gnValue || pnValue < 1 || playNum.value.length === 0) {
    playNum.classList.add("warning");
    processArea.innerHTML = `Please enter a number between 0 to ${gnValue}`;
    return false;
  } else {
    return true;
  }
}

function playRandomNumber(gnValue, pnValue) {
  let randomNum = Math.floor(gnValue * Math.random());
  processArea.innerHTML = `You chose : ${pnValue}, the machine chose : ${randomNum}`;
  resultArea.innerHTML = randomNum === pnValue ? "You won!" : "You lost!";
}

function handlePlayBtn(event) {
  event.preventDefault();
  const gnValue = parseInt(genNum.value);
  const pnValue = parseInt(playNum.value);
  if (checkPlusNumber(gnValue, pnValue)) {
    playRandomNumber(gnValue, pnValue);
  }
}

playBtn.addEventListener("click", handlePlayBtn);
