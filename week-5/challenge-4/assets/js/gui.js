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

  handleClick = dots => {
    document.addEventListener('click', event => {
      const x = event.clientX;
      const y = event.clientY;

      dots.map((dot, key) => {
        const dotX = dot.pos.x;
        const dotY = dot.pos.y;

        // Checks if the pointer is in the dot
        const exists = Math.sqrt((dotX - x)**2 + (dotY - y)**2) < RADIUS;
        if (exists) {
          dots.splice(key, 1);
        }

        this.redraw(dots)
      });
    });
  };
}
