// Init
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

// Global
const words = document.getElementById('words');
let sentence = document.createElement('li');
words.appendChild(sentence);
