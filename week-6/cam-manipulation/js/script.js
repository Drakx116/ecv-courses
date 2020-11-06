const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const image = document.getElementById('my-img');

const TYPES = {
  DEFAULT: 'DEFAULT',
  FULL: {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
  },
  DOUBLE: {
    HOT_AND_COLD: 'HOT_AND_COLD'
  }
}

const filter = (pixels, type) => {
  const total = pixels.data.length;

  for (let i = 0; i < total; i+=4) {
    switch (type) {
      case TYPES.DEFAULT: pixels.data[i] *= 1; break;

      case TYPES.FULL.RED:
        pixels.data[i] *= 2; break;
      case TYPES.FULL.GREEN:
        pixels.data[i+1] *= 2; break;
      case TYPES.FULL.BLUE:
        pixels.data[i+2] *= 2; break;

      case TYPES.DOUBLE.HOT_AND_COLD:
        pixels.data[i] *= (i > total / 2) ? 1/2 : 2; break;
    }
  }

  return pixels;
};

const draw = type => {
  const width = image.width;
  const height = image.height;

  canvas.width = width;
  canvas.height = height;

  context.drawImage(image, 0, 0, width, height);

  let pixels = context.getImageData(0, 0, width, height);

  pixels = filter(pixels, type);

  context.putImageData(pixels, 0, 0);
};

const getFilterType = id => {
  switch (id){
    case 'red': return TYPES.FULL.RED;
    case 'green': return TYPES.FULL.GREEN;
    case 'blue': return TYPES.FULL.BLUE;
    case 'hot-and-cold': return TYPES.DOUBLE.HOT_AND_COLD;

    default: return TYPES.DEFAULT;
  }
};

const filters = document.querySelectorAll("input[name=filter]");
filters.forEach(filter => {
  filter.addEventListener('change', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log(filter.getAttribute('id'));
    const type = getFilterType(filter.id);

    draw(type);
  });
})


draw(TYPES.DEFAULT);
