// MISCELLANEOUS
const canvas = document.getElementById('canvas').getContext('2d');
const gui = new GUI(canvas);
const ball = new Ball();

const animation = () => {
  gui.clear();
  ball.move();
  gui.drawBall(ball);
};

setInterval(animation, 1000 / MAX_IPS);
