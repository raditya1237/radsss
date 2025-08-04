function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = rand(0, 98) + "vw";
  heart.style.fontSize = rand(1.5, 3.5) + "vw";
  heart.style.animationDuration = rand(2, 3.5) + "s";
  // Random glitter color
  const colors = ["#ff4da6", "#fff", "#ffd6ec", "#ff8ecb", "#ffe6f4"];
  heart.style.color = colors[Math.floor(rand(0, colors.length))];
  heart.innerHTML = "💖";
  // Optionally: add glow
  heart.style.textShadow = `0 0 10px #fff, 0 0 20px #ff4da6`;

  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

let raining = false;
const btn = document.getElementById("love-btn");
btn.addEventListener("click", function () {
  if (raining) return;
  raining = true;
  btn.disabled = true;
  btn.innerText = "Enjoy the Love Rain!";
  const interval = setInterval(() => {
    for (let i = 0; i < 8; i++) createHeart();
  }, 300);

  setTimeout(() => {
    clearInterval(interval);
    raining = false;
    btn.innerText = "Love Button";
    btn.disabled = false;
  }, 10000);
});
