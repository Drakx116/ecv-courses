const canvas = document.getElementById('game').getContext('2d');
const gui = new GUI(canvas);

const dots = [];

const animation = () => {
  generateNewDot(dots);
  gui.clear();
  gui.drawDots(dots);
}

animation();

const generateNewDot = (dots) => {
  // Déclarer un nouveau point

  // Affecter ses dimensios

  // Ajouter le point au tableau dots

  // BONUS : Position dans le Canavs
  // constants.js : WIDTH 1000, HEIGHT 800
};
