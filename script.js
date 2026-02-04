const gif = document.getElementById("mainGif");
const text = document.getElementById("mainText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cheatText = document.getElementById("cheatCounter");
const music = document.getElementById("bgMusic");

let cheatCount = 0;

// Start music on first interaction
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// NO button escape
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// NO button click = cheat
noBtn.addEventListener("click", () => {
  cheatCount++;
  cheatText.innerText = "CheatCNT Hardcore: " + cheatCount;

  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 300);

  if (cheatCount === 1) {
    text.innerHTML = "Hmm… think again.";
    gif.src = "assets/gifs/cry.gif";
  }

  if (cheatCount === 3) {
    text.innerHTML = "Tanya… now you’re just teasing me.";
    gif.src = "assets/gifs/angry.gif";
  }

  if (cheatCount === 5) {
    lockLove();
  }
});

// YES button
yesBtn.addEventListener("click", () => {
  gif.src = "assets/gifs/blush.gif";
  text.innerHTML =
    "I knew it.<br>" +
    "You choosing me feels natural.<br><br>" +
    "And I promise,<br>" +
    "I’ll choose you — every single day.";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
});

// Final hardcore lock
function lockLove() {
  document.body.innerHTML = `
    <div class="lockScreen">
      <img src="assets/gifs/hug.gif">
      <h1>Cheat Detected.</h1>
      <p>No more games.</p>
      <h2>You love me.</h2>
    </div>
  `;
}
