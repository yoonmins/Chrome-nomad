const imges = [
  "https://i.pinimg.com/564x/e1/bc/59/e1bc59d81816ece69a9e8eb636403a74.jpg"
  // "wave2.jpg",
  // "wave.jpg",
  // "space.jpeg"
];

const BG = "background";

const backgroundImg = imges[Math.floor(Math.random() * imges.length)];

const bgImges = document.createElement("img");

bgImges.className = BG;
bgImges.src = `src=${backgroundImg}`;

document.body.appendChild(bgImges);
