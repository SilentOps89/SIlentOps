
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in-on-scroll").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
    }
  });
  document.querySelectorAll(".blur-on-scroll").forEach(el => {
    el.style.filter = window.scrollY > 200 ? "blur(3px)" : "blur(0px)";
  });
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

const audio = document.getElementById("bg-audio");
const btn = document.getElementById("mute-btn");
btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.innerText = "🔊";
  } else {
    audio.pause();
    btn.innerText = "🔇";
  }
});
