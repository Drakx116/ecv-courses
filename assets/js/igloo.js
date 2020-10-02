// Animals

const Animal = function(name)
{
  this.name = name.toLowerCase();
  this.position = 0;
  this.safe = false;

  this.getName = () => this.name;
  this.getPosition = () => this.position;

  this.goForward = () => this.position++;
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
  new Animal('Lapin'),
  new Animal('Renard'),
  new Animal('Ours'),
  new Animal('Pinguin'),
];

const game = () => {
  let pilars = 6;
  // TODO : Update with GUI select
  const animal = animals[3];
  const diceScore = launchDice();
  let action = getActionFromDiceScore(diceScore);
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

game();

