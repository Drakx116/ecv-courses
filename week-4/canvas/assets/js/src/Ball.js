class Ball
{
  constructor() {
    this.pos = { x: WIDTH  / 2, y: HEIGHT / 2 };
    this.speed = { 'x': 2, 'y': 2 };
    this.radius = 20;
  };

  move = () => {
    if (this.pos.x >= WIDTH - this.radius || this.pos.x <= this.radius) {
      this.speed.x = -this.speed.x;
    }

    if (ball.pos.y >= HEIGHT - ball.radius || ball.pos.y <= ball.radius) {
      this.speed.y = -this.speed.y;
    }

    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  };
}
