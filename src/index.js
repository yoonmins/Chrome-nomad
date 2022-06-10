import "./styles.css";

function handleResize() {
  let resizeWidth = document.body.offsetWidth;

  if (resizeWidth < 500) {
    document.body.style.backgroundColor = "green";
  } else if (resizeWidth < 800) {
    document.body.style.backgroundColor = "blue";
  } else if (resizeWidth < 1000) {
    document.body.style.backgroundColor = "skyblue";
  }
}

window.addEventListener("resize", handleResize);
