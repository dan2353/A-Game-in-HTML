let bug = document.getElementById("bug");
let gameArea = document.getElementById("gameArea");
let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");

let score = 0;
function moveBug() {
  let maxX = gameArea.clientWidth - bug.clientWidth;
  let maxY = gameArea.clientHeight - bug.clientHeight;

  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  bug.style.left = randomX + "px";
  bug.style.top = randomY + "px";
}
bug.addEventListener("click", function() {
  score = score + 1;
  scoreDisplay.textContent = "Score: " + score;
  moveBug();
});
let timeLeft = 30;
let timer;
function startGame() {
  score = 0;
  timeLeft = 30;

  scoreDisplay.textContent = "Score: " + score;
  timeDisplay.textContent = "Time: " + timeLeft;
  moveBug();
 timer = setInterval(function() {
    timeLeft = timeLeft - 1;
    timeDisplay.textContent = "Time: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      alert("Game over! Your score is " + score);
    }
  }, 1000);
}
