// Animal

const Animal = function(name)
{
  this.name = name.toLowerCase();
  this.position = 0;

  this.getName = () => this.name;
  this.getPosition = () => this.position;

  this.goForward = () => {
    const animal = document.getElementById(this.name);
    if (this.position === 0) {
      document.getElementById('fish-section').removeChild(animal);
      document.getElementById('bridge-section').appendChild(animal);
    }
    else {
      document.getElementById('bridge-section').removeChild(animal);
      document.getElementById('igloo-section').appendChild(animal);
    }

    this.position++;
  };

  this.isSafe = () => this.position === 2;
};

const getIdByName = (name) => {
  if (name === 'bear') return 0;
  if (name === 'fox') return 1;
  if (name === 'penguin') return 2;
  if (name === 'rabbit') return 3;
};

// Dice management

const launchDice = () => Math.floor(Math.random() * Math.floor(6)) + 1;

const BRIDGE = 'BRIDGE';
const IGLOO = 'IGLOO';
const ICE = 'ICE';

const actions = { BRIDGE, IGLOO, ICE };

const getActionFromDiceScore = (score) => {
  if (score < 3) return actions.BRIDGE; // 1 & 2
  if (score >= 5) return actions.ICE;   // 5 & 6
  return actions.IGLOO;                 // 3 & 4
};


// Init game variables

const animals = [
  new Animal('bear'),
  new Animal('fox'),
  new Animal('penguin'),
  new Animal('rabbit'),
];

// GUI EVENTS

const bear = document.getElementById('bear');
const fox = document.getElementById('fox');
const penguin = document.getElementById('penguin');
const rabbit = document.getElementById('rabbit');

const selectedImage = document.getElementById('select-image');

const guiAnimals = [ bear, fox, penguin, rabbit ];

guiAnimals.map(animal => {
  animal.addEventListener('click', () => {
    selectedImage.setAttribute('src', 'assets/img/' + animal.getAttribute('id') + '.png');
    selectedImage.setAttribute('id', getIdByName(animal.getAttribute('id')));
  });
});

selectedImage.setAttribute('src', 'assets/img/bear.png');
selectedImage.setAttribute('id', 0)

const game = () => {
  let pillars = 6;

  selectedImage.getAttribute('id');
  const animal = animals[selectedImage.getAttribute('id')];
  const diceScore = launchDice();
  const action = getActionFromDiceScore(diceScore);
  console.log(action);

  if (action === actions.BRIDGE && animal.getPosition() === 0) {
    animal.goForward();
    console.log('Position', animal.getPosition());
  }

  if (action === actions.IGLOO && animal.getPosition() === 1) {
    animal.goForward();
    console.log('Is animal safe : ', animal.isSafe());
  }

  if (action === actions.ICE) {
    pillars--;
    console.log(pillars);
  }

  animals.map(animal => console.log(animal.getName(), animal.getPosition()));
};

document.getElementById('play-button').addEventListener('click', () => game());
