import "./styles.css";

function handleResize() {
  let resizeWidth = document.body.offsetWidth;
  let resizeColor = document.body.style.backgroundColor;
  // let resizeGreenColor = (document.body.style.backgroundColor = "green");
  // let resizeSkyblueColor = (document.body.style.backgroundColor = "skyblue");
  // let resizeRedColor = (document.body.style.backgroundColor = "red");

  // if (document.body.classList.contains(resizeGreenColor)) {
  //   document.body.classList.remove(resizeRedColor);
  // } else {
  //   document.body.classList.add(resizeSkyblueColor);
  // }
  if (resizeWidth < 300) {
    resizeColor = "green";
  } else {
    resizeColor = "blue";
  }
}

window.addEventListener("resize", handleResize);
