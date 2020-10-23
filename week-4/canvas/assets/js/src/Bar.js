class Bar
{
  constructor() {
    this.pos = {
      x: 0,
      y: 250
    };
    this.offset = {
      x: 75,
      y: 10
    };
  }

  handleMovements = gui => {
    window.onkeypress = ({ key }) => {
      if (key === 'd') {
        this.pos.x += 6;
        gui.drawBall(this);
      }

      if (key === 'q') {
        this.pos.x -= 6;
        gui.drawBall(this);
      }
    };
  }
}
