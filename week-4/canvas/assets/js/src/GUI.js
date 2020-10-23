class GUI
{
  constructor(canvas) {
    this.canvas = canvas;
  }

  clear = () => {
    canvas.clearRect(0, 0, WIDTH, HEIGHT);
  };

  drawBall = (ball) => {
    canvas.beginPath();
    canvas.fillStyle = "#FFFFFF";
    canvas.arc(ball.pos.x, ball.pos.y, ball.radius, 0, LOOP);
    canvas.fill();
    canvas.save();
  };
}
