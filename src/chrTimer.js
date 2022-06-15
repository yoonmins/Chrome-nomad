import "./styles.css";

const Clock = document.querySelector("#Clock");

function getClock() {
  const nowDate = new Date();
  const christmasDate = new Date("2022-12-25");
  const Timer = christmasDate - nowDate;

  const TimerDay = Math.floor(Timer / (1000 * 60 * 60 * 24));
  const TimerHour = Math.floor((Timer / (1000 * 60 * 60)) % 24);
  const TimerMin = Math.floor((Timer / (1000 * 60)) % 60);
  const TimerSec = Math.floor((Timer / 1000) % 60);

  Clock.innerText = `🎄 ${TimerDay}d ${TimerHour}h ${TimerMin}m ${TimerSec}s 🎄`;
}

getClock();
setInterval(getClock, 1000);
