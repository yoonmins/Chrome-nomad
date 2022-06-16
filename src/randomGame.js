import "./styles.css";

const FormExample = document.querySelector("#form-example");
const GuessInput = document.querySelector("#Game-chose input");
const YourChose = document.querySelector("#Game-output span:first-child");
const MachineChose = document.querySelector("#Game-output span:last-child");
const result = document.querySelector("#Game-result strong");

function GenrateRandom(min, max) {
  const ranNum = Math.floor(Math.random() * (max - min + 1) + min);
  return ranNum;
}

function buttonClick(event) {
  event.preventDefault();

  let max = document.getElementById("Game-input").value;
  const GuessInputNumber = Number(GuessInput.value);
  const RandomNumber = GenrateRandom(0, max);

  YourChose.innerText = `You chose:${GuessInputNumber}`;
  MachineChose.innerText = `, machine chose: ${RandomNumber}`;

  if (GuessInputNumber === RandomNumber) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

FormExample.addEventListener("submit", buttonClick);

// another
// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");
// const maxNumber = document.getElementById("maxNumber");

// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "" && maxNumber === "") {
//     return;
//   }
//   const max = maxNumber.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);
