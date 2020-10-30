// Global

const score = {
  'a': 1,
  'b': 3,
  'c': 3,
  'd': 2,
  'e': 1,
  'f': 4,
  'g': 2,
  'h': 4,
  'i': 1,
  'j': 8,
  'k': 10,
  'l': 1,
  'm': 2,
  'n': 1,
  'o': 1,
  'p': 3,
  'q': 8,
  'r': 1,
  's': 1,
  't': 1,
  'u': 1,
  'v': 4,
  'w': 10,
  'x': 10,
  'y': 10,
  'z': 10,
  '*': 0
};



// Main

document.addEventListener("DOMContentLoaded", () => {
  // Trigger event onSubmit
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const word = getWord();
    const multiplier = getMultiplier();
    const total = getTotalScore(word, multiplier);

    document.getElementById('total').innerText = total;
  });
});




// DOM Accessors

const getWord = () => document.getElementById('word').value.toLowerCase();

const getMultiplier = () => document.getElementById('multiplierSlider').value;




// Score Management

const getLetterScore = (letter, multiplier) => score[letter] * multiplier;

const getTotalScore = (word, multiplier) => {
  let score = 0;

  word.split('').forEach(letter => score += getLetterScore(letter, multiplier));

  return score;
}
