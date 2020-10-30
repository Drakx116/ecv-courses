// DOM CONTENT

const box = document.getElementById('box');

const widthSelect = document.getElementById('width-select');
const heightSelect = document.getElementById('height-select');

// Initial inputs value
widthSelect.value = getComputedStyle(box).width.replace('px', '');
heightSelect.value = getComputedStyle(box).width.replace('px', '');

// SHOW INPUT TYPE RANGE VALUES


// EVENT LISTENERS

widthSelect.addEventListener('input', () => {
  box.style.width = widthSelect.value + 'px';
});

heightSelect.addEventListener('input',() => {
  box.style.height = heightSelect.value + 'px';
});
