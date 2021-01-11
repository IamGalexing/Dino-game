const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const cloud = document.querySelector(".cloud");
const buttonStart = document.querySelector(".start");

function start() {
  cactus.classList.add("run");
  cloud.classList.add("cloudGo");
}

function jump() {
  if (!dino.classList.contains("jump")) dino.classList.add("jump");
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

buttonStart.addEventListener("click", () => {
  start();
});

document.addEventListener("keydown", () => {
  jump();
});

let isActive = setInterval(function () {
  let dinoTop = parseFloat(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 29 && dinoTop >= 170) {
    cactus.classList.remove("run");
    cloud.classList.remove("cloudGo");
    alert("GAME OVER!");
  }
}, 10);
