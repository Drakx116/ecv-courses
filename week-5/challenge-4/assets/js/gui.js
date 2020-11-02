class GUI {
  constructor(canvas) {
    this.canvas = canvas;
  }

  clear = () => {
    this.canvas.clearRect(0, 0, WIDTH, HEIGHT);
  };

  drawDots = dots => {
    dots.map(dot => {
      this.canvas.beginPath();
      this.canvas.fillStyle = dot.color;
      this.canvas.arc(dot.pos.x, dot.pos.y, dot.radius, 0, LOOP);
      this.canvas.fill();
      this.canvas.save();
    });
  }

  redraw = (dots) => {
    this.clear();
    this.drawDots(dots);
  }
}
