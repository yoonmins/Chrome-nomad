import "./styles.css";

// const GmaeChose = document.querySelector(".Game-chose");
const GameOutput = document.querySelector(".Game-output");
const ChoseNumber = document.querySelector("#Game-input-number").value;
const GuessNumber = document.querySelector("#Game-guess").value;

const GameResult = document.querySelector(".Game-result");

// const RandomNumberOutput = Math.floor(Math.random() * ChoseNumber);

function RandomNumberOutput() {
  document.querySelector("#chose-number").innerText = ChoseNumber;
}

function ChoseGuessNumber() {
  document.querySelector("#random-number").innerText = GuessNumber;
}

document
  .querySelector(".Game-guess-button")
  .addEventListener("click", function OutputNumber(event) {
    document.querySelector(".random-number").innerHTML =
      "You chose : " +
      ChoseGuessNumber +
      ",the machine chose : " +
      RandomNumberOutput +
      ".";
  });

function Result() {
  if (ChoseNumber === GuessNumber) {
    ("You won!");
  } else {
    ("You lost!");
  }
}
GameResult.innerHTML = Result();
