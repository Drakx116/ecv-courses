const path = window.location.href + 'resources/fr_FR.txt';

// TODO : Rework get word from file logic (Promise issue)
const mysteryWord = 'Mystery';

const splitWord = mysteryWord.toLowerCase().split('');
const word = [];

splitWord.map((letter) => {
 word.push({ 'letter': letter, 'found': false });
});

let count = 0;
let remainingLives = 7;
let hasWon = false;
const givenLetters = [];

// GAME LOOP

while (remainingLives) {
 // Gets a valid letter from the user
 let userLetter = {};
 while (userLetter.length !== 1) {
  userLetter = window.prompt('Veuillez saisir une lettre : ');
 }

 console.log(userLetter);

 // Loose a live if the letter has already been played.
 if (givenLetters.includes(userLetter)) {
  console.log('This letter has already been played.');
  remainingLives--;
  console.log('Remaining lives : ' + remainingLives);
  continue;
 }

 if (!remainingLives) {
  break;
 }

 givenLetters.push(userLetter);

 // Searches for the letter in the word.
 let isLetterInWord = false;
 word.map((object, index) => {
  if(userLetter === object.letter && !object.found) {
   word[index].found = true;
   count++;
   isLetterInWord = true;
  }
 });

 // Loose a live if the letter is not in the word.
 if (!isLetterInWord) {
  console.log('NOPE');
  remainingLives--;
  console.log('Remaining lives : ' + remainingLives);
  continue;
 }

 // Victory if all letters have been found.
 if (count === 7) {
  hasWon = true;
  break;
 }

 // Logs the game board
 let response = '';
 word.map(object => {
  response += ' ' + ((object.found) ? object.letter.toUpperCase() : '_') + ' ';
 });
 console.log(response);
}

const message = (hasWon) ? 'Victory' : 'Defeat';
alert(message);

if(!hasWon) {
 let mysteryWord = '';
 word.map(object => {
  mysteryWord += object.letter.toUpperCase();
 });

 console.log(mysteryWord);
}

