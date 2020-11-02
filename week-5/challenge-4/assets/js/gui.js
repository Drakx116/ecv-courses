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

  updateScore = (dot) => {
    let scoreHTML = document.getElementById('score').innerText;
    document.getElementById('score').innerText = parseInt(scoreHTML) + dot.points;
  };

  handleClick = dots => {
    document.addEventListener('click', event => {
      const x = event.clientX;
      const y = event.clientY;

      dots.map((dot, key) => {
        // Checks if the pointer is in the dot
        const exists = Math.sqrt((dot.pos.x - x)**2 + (dot.pos.y - y)**2) < dot.radius;
        if (exists) {
          dots.splice(key, 1);
          this.updateScore(dot);
        }

        this.redraw(dots)
      });
    });
  };
}
