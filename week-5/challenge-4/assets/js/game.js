const canvas = document.getElementById('game').getContext('2d');
const gui = new GUI(canvas);
const seeder = new Seeder();

let dots = [];

const animation = (dots) => {
  dots.push(seeder.generateNewDot());

  gui.redraw(dots);
}

gui.handleClick(dots);

animation(dots);
setInterval(() => { animation(dots); }, 1000);
