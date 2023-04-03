const container = document.body;
const SIZE_LIMIT = 800;
const YELLOW_BG = "yellow-bg";
const PURPLE_BG = "purple-bg";
const BLUE_BG = "blue-bg";

function handleResize() {
  const windSize = window.innerWidth;
  container.classList.remove(YELLOW_BG, PURPLE_BG, BLUE_BG);
  if (windSize > SIZE_LIMIT) {
    container.classList.add(YELLOW_BG);
  } else if (windSize <= SIZE_LIMIT && windSize > SIZE_LIMIT / 2) {
    container.classList.add(PURPLE_BG);
  } else {
    container.classList.add(BLUE_BG);
  }
}

window.addEventListener("resize", handleResize);
