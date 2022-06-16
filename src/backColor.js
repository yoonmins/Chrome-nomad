import "./styles.css";

const backGround = document.querySelector("#backGround");
const btn = document.querySelector("#btn");

const Color = [
  "linear-gradient(0.25turn, #3f87a6, #f69d3c)",
  "linear-gradient(0.25turn, #88ff22, #c29fa7)",
  "linear-gradient(0.25turn, #8f8dff, #640202)",
  "linear-gradient(0.25turn, #ffd700, #20124d)",
  "linear-gradient(0.25turn, #424242, #eeeee)",
  "linear-gradient(0.25turn, #8fb4d5, #749645)",
  "linear-gradient(0.25turn, #008080, #ff6e4a)"
];

btn.addEventListener("click", function innerHTMLStyle() {
  let RandomColor = Color[Math.floor(Math.random() * Color.length)];
  backGround.style.background = RandomColor;
});
