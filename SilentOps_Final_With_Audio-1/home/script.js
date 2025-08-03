
const impact = document.getElementById('impact');
const ambient = document.getElementById('ambient');
const enterBtn = document.getElementById('enter');

enterBtn.addEventListener('click', () => {
  impact.volume = 0.8;
  ambient.volume = 0.2;
  ambient.play();
  impact.play();
  enterBtn.disabled = true;
});
