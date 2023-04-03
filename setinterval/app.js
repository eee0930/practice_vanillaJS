const $clockTitle = document.querySelector("#jsClock");

const XMAS_MONTH = 11; // Date는 실제 month보다 1 작은 결과가 나오므로
const XMAS_DATE = 24;

function getDdayChristmas() {
  const date = new Date();
  let year = date.getFullYear();
  if (date.getMonth() === XMAS_MONTH && date.getDate() >= XMAS_DATE) {
    year = year + 1;
  }
  const CHRISTMAS = new Date(year, XMAS_MONTH, XMAS_DATE, 0, 0, 0, 0);
  const dDayTime = (CHRISTMAS.getTime() - date.getTime()) / 1000;

  const dDayDate = Math.floor(dDayTime / 86400); // 60 * 60 * 24 = 86400
  const dDayHours = Math.floor((dDayTime % 86400) / 3600);
  const dDayMinutes = Math.floor(((dDayTime % 86400) % 3600) / 60);
  const dDaySecond = Math.floor(((dDayTime % 86400) % 3600) % 60);

  $clockTitle.innerHTML = 
    `${dDayDate}d
    ${String(dDayHours).padStart(2, "0")}h 
    ${String(dDayMinutes).padStart(2, "0")}m 
    ${String(dDaySecond).padStart(2, "0")}s`;
}

getDdayChristmas(); // time setting
setInterval(getDdayChristmas, 1000);
