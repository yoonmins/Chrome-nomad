import "./styles.css";

let app = document.getElementById("app");

function handleMoseover() {
  app.style.color = "purple";
  app.innerHTML = "The Mouse is here!";
}

function handleMoseleave() {
  app.style.color = "skyblue";
  app.innerHTML = "The Mouse is over!";
}

function handleWindowContextmenu() {
  app.style.color = "red";
  app.innerHTML = "That was a right click";
}

function handleWindowResize() {
  app.style.color = "green";
  app.innerHTML = "You just resized";
}

app.addEventListener("mouseover", handleMoseover);
app.addEventListener("mouseleave", handleMoseleave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleWindowContextmenu);
