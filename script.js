const ball = document.querySelector(".ball");
const gravity = 0.5;

let positionY = 0;
let velocityY = 0;

function updateBall() {
  velocityY += gravity;
  positionY += velocityY;

  if (positionY + ball.clientHeight > window.innerHeight) {
    positionY = window.innerHeight - ball.clientHeight;
    velocityY *= -0.8;
  }

  ball.style.transform = `translateY(${positionY}px)`;

  requestAnimationFrame(updateBall);
}

updateBall();
