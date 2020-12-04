// Init

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

// Global
const chat = document.getElementById('chat');

/// EVENTS

recognition.addEventListener('result', event => {
  const prompt = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  // End of the sentence
  if (event.results[0].isFinal) {
    const message = new Message();
    message.create(prompt);
  }
});

recognition.start();
recognition.addEventListener('end', recognition.start);
