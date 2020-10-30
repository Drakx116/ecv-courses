class GUI
{
  constructor(canvas) {
    this.canvas = canvas;
  }

  clear = () => {
    this.canvas.clearRect(0, 0, WIDTH, HEIGHT);
  };

  drawBall = ball => {
    this.canvas.beginPath();
    this.canvas.fillStyle = "#FFFFFF";
    this.canvas.arc(ball.pos.x, ball.pos.y, ball.radius, 0, LOOP);
    this.canvas.fill();
    this.canvas.save();
  };

  drawBar = bar => {
    this.canvas.fillStyle = "#FFFFFF";
    this.canvas.rect(WIDTH / 2 - bar.offset.x + bar.pos.x, HEIGHT / 2 - bar.offset.y / 2 + bar.pos.y, 2 * bar.offset.x, bar.offset.y);
    this.canvas.fill();
    this.canvas.save();
  }
}
