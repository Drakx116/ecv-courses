const canvas = document.getElementById('game').getContext('2d');
const gui = new GUI(canvas);

let dots = [];

const generateNewDot = () => {
  const dot = new Dot();

  dot.pos.x = Math.floor(Math.random() * (WIDTH - RADIUS - RADIUS) + RADIUS);
  dot.pos.y = Math.floor(Math.random() * (HEIGHT - RADIUS - RADIUS) + RADIUS);

  return dot;
};

const animation = (dots) => {
  dots.push(generateNewDot());

  gui.redraw(dots);
}

animation(dots);
setInterval(() => { animation(dots); }, 1000);
