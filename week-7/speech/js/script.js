// Init

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

// Global
const words = document.getElementById('words');

/// EVENTS

recognition.addEventListener('result', event => {
  let sentence = document.createElement('li');

  sentence.textContent = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  // End of the sentence
  if (event.results[0].isFinal) {
    words.appendChild(sentence);
  }
});

recognition.start();
recognition.addEventListener('end', recognition.start);
