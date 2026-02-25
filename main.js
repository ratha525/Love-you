const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;

// Move NO button
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  scale += 0.2;
  yesBtn.style.transform = "scale(" + scale + ")";
}
// 🌸 Create falling flowers
const flowersContainer = document.querySelector(".flowers");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // អ្នកអាចប្ដូរ emoji ផ្កា
  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
  flower.style.fontSize = (Math.random() * 15 + 15) + "px";

  flowersContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 6000);
}

setInterval(createFlower, 300);

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", function(e) {
  e.preventDefault();
  moveNoButton();
});

// Falling flowers
const flowers = document.querySelector(".flowers");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
  flowers.appendChild(flower);

  setTimeout(() => flower.remove(), 5000);
}
setInterval(createFlower, 300);

// Floating hearts
const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💕";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);

// YES CLICK
yesBtn.addEventListener("click", function () {

  // Explosion
  for (let i = 0; i < 30; i++) {
    const boom = document.createElement("div");
    boom.innerHTML = "💖";
    boom.style.position = "fixed";
    boom.style.left = window.innerWidth / 2 + "px";
    boom.style.top = window.innerHeight / 2 + "px";
    boom.style.fontSize = "30px";
    boom.style.transition = "1s";
    document.body.appendChild(boom);

    setTimeout(() => {
      boom.style.left = Math.random() * window.innerWidth + "px";
      boom.style.top = Math.random() * window.innerHeight + "px";
      boom.style.opacity = "0";
    }, 10);

    setTimeout(() => boom.remove(), 1000);
  }

  // Go to YouTube after 2 seconds
  setTimeout(() => {
    window.location.href = "https://youtu.be/-__W6u7gjGg?si=kfodmrOXBKawKCmk"
  }, 2000);

});