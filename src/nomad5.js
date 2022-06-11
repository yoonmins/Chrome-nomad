import "./styles.css";

// function handleResize() {
//   let resizeWidth = document.body.offsetWidth;

//   if (resizeWidth < 500) {
//     document.body.style.backgroundColor = "green";
//   } else if (resizeWidth < 800) {
//     document.body.style.backgroundColor = "blue";
//   } else if (resizeWidth < 1000) {
//     document.body.style.backgroundColor = "skyblue";
//   }
// }

// window.addEventListener("resize", handleResize);

// other way

function handleResized() {
  const BIG_SCREEN = "bigScreen";
  const MEDIUM_SCREEN = "mediumScreen";
  const SMALL_SCREEN = "smallScreen";

  const width = window.innerWidth;
  if (width > 1000) {
    document.body.classList.add(BIG_SCREEN);
    document.body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    document.body.classList.add(MEDIUM_SCREEN);
    document.body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    document.body.classList.remove(MEDIUM_SCREEN);
    document.body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResized);
