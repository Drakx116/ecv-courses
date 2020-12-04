class Message
{
  constructor() {}

  create = prompt => {
    const sentence = document.createElement('div');
    const text = document.createElement('span');

    text.textContent = prompt;

    sentence.setAttribute('class', 'sentence');
    sentence.appendChild(text);

    document.getElementById('chat').appendChild(sentence);
  }

  delete = () => {

  }
}
