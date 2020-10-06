// Animal

const Animal = function(name)
{
  this.name = name.toLowerCase();
  this.position = 0;
  this.safe = false;

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


  this.setSafe = () => this.safe = true;
  this.isSafe = () => this.position === 2;
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
    selectedImage.setAttribute('src', 'assets/img/' + animal.getAttribute('id') + '.png')
  });
});

const game = () => {
  let pilars = 6;

  const animal = animals[3];
  const diceScore = launchDice();
  const action = getActionFromDiceScore(diceScore);
  console.log(action);

  if (action === actions.BRIDGE && animal.getPosition() === 0) {
    animal.goForward();
    console.log('Position', animal.getPosition());
  }

  if (action === actions.IGLOO && animal.getPosition() === 1) {
    animal.setSafe();
    console.log('Is animal safe : ', animal.isSafe());
  }

  if (action === actions.ICE) {
    pilars--;
    console.log(pilars);
  }

  animals.map(animal => console.log(animal.getName(), animal.getPosition()));
};

document.getElementById('play-button').addEventListener('click', () => game());
